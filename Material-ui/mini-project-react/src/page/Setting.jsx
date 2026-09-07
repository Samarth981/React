import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Snackbar from "@mui/material/Snackbar";
import Stack from "@mui/material/Stack";

import PageHeading from "../components/common/PageHeading";
import ProfileAvatar from "../components/Setting/ProfileAvatar";
import LabeledField from "../components/Setting/LabeledField";

import Profile from "../assets/icon/user/Profile.svg?react";
import Calling from "../assets/icon/user/Calling.svg?react";
import Location from "../assets/icon/user/Location.svg?react";

import { getAccount, updateAccount } from "../redux/actions/setting";
import {
  resetMessage,
  setAccountField,
  toggleSendEmails,
} from "../redux/reducer/settingsReducer";
import { validateAccount } from "../utils/validation";

export default function Setting() {
   const [fieldErrors, setFieldErrors] = useState({});

   const dispatch = useDispatch();

   const { account, saving, message, messageType } = useSelector(
     (state) => state.settings,
   );

   useEffect(() => {
     dispatch(getAccount());
   }, [dispatch]);

   const handleChange = (name) => (event) => {
     const value = event.target.value;

     const updatedAccount = {
       ...account,
       [name]: value,
     };

     dispatch(setAccountField({ name, value }));

     const { errors: validationErrors } = validateAccount(updatedAccount);

     setFieldErrors((previous) => ({
       ...previous,
       [name]: validationErrors[name] || "",
     }));
   };

   const handleSubmit = (event) => {
     event.preventDefault();

     const { isValid, errors: validationErrors } =
       validateAccount(account);

     setFieldErrors(validationErrors);

     if (!isValid) {
       return;
     }

     dispatch(updateAccount(account));
   };

   const handleCloseMessage = (_, reason) => {
     if (reason === "clickaway") {
       return;
     }

     dispatch(resetMessage());
   };

  return (
    <>
      <PageHeading title="Account information" />

      <Stack
        component="form"
        noValidate
         onSubmit={handleSubmit}
        direction={{ xs: "column", md: "row" }}
        spacing={{ xs: 4, md: 6 }}
      >
        <ProfileAvatar
          src={account.avatar}
           onChange={(url) =>
             dispatch(setAccountField({ name: "avatar", value: url }))
           }
        />

        <Stack spacing={3} sx={{ flex: 1 }}>
          <LabeledField
            icon={<Profile />}
            label="Name"
            name="name"
            placeholder="Name"
             value={account.name}
             error={fieldErrors.name}
             onChange={handleChange("name")}
          />

          <LabeledField
            icon={<Calling />}
            label="Phone number"
            name="phone"
            placeholder="Phone number"
             value={account.phone}
             error={fieldErrors.phone}
             onChange={handleChange("phone")}
          />

          <Box>
            <LabeledField
              icon={<Location />}
              label="Address"
              name="address"
              placeholder="Address"
               value={account.address}
               error={fieldErrors.address}
               onChange={handleChange("address")}
            />

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  sm: "repeat(2, 1fr)",
                },
                gap: 2,
                mt: 2,
              }}
            >
             <LabeledField
              label="Country"
              name="country"
              placeholder="Country"
              value={account.country}
              error={fieldErrors.country}
              onChange={handleChange("country")}
            />

            <LabeledField
              label="City"
              name="city"
              placeholder="City"
              value={account.city}
              error={fieldErrors.city}
              onChange={handleChange("city")}
            />

            <LabeledField
              label="State"
              name="state"
              placeholder="State"
              value={account.state}
              error={fieldErrors.state}
              onChange={handleChange("state")}
            />

            <LabeledField
              label="Postal Code"
              name="postalCode"
              placeholder="Postal Code"
              value={account.postalCode}
              error={fieldErrors.postalCode}
              onChange={handleChange("postalCode")}
            />
            </Box>
          </Box>

          <FormControlLabel
            control={
              <Checkbox
                disableRipple
                 checked={account.sendEmails}
                 onChange={() => dispatch(toggleSendEmails())}
              />
            }
            label="Send Emails"
          />

          <Button
            type="submit"
            disableRipple
             disabled={saving}
          > 
            {saving ? "Updating..." : "Update account"}
          </Button>
        </Stack>
      </Stack>

      <Snackbar
         open={Boolean(message)}
        autoHideDuration={3000}
         onClose={handleCloseMessage}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Alert
           onClose={handleCloseMessage}
          severity={messageType || "success"}
          variant="filled"
        > 
          {message}
        </Alert>
      </Snackbar>
    </>
  );
}
