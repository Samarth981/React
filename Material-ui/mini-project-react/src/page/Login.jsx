import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";

import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import CircularProgress from "@mui/material/CircularProgress";
import FormControlLabel from "@mui/material/FormControlLabel";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import AuthLayout from "../../components/Auth/AuthLayout";
import AuthField from "../../components/auth/AuthField";

import { login } from "../../redux/actions/auth";
import { clearAuthErrors } from "../../redux/reducer/authReducer";
import { validateLogin } from "../../utils/validation";

import MailIcon from "../../assets/icon/shareFundraiserIcon/mail.svg?react";
import LockIcon from "../../assets/icon/orderIcon/fileIcon.svg?react";

const initialValues = {
  email: "",
  password: "",
};

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { user, loading, errors, message } = useSelector((state) => state.auth);

  const [values, setValues] = useState(initialValues);
  const [fieldErrors, setFieldErrors] = useState({});
  const [remember, setRemember] = useState(true);

  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, navigate, from]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    const updatedValues = {
      ...values,
      [name]: value,
    };

    setValues(updatedValues);

    const { errors: validationErrors } = validateLogin(updatedValues);

    setFieldErrors((previous) => ({
      ...previous,
      [name]: validationErrors[name] || "",
    }));

    dispatch(clearAuthErrors());
  };

  const handleBlur = (event) => {
    const { name } = event.target;

    const { errors: validationErrors } = validateLogin(values);

    setFieldErrors((previous) => ({
      ...previous,
      [name]: validationErrors[name] || "",
    }));
  };

  const handleRememberChange = (event) => {
    setRemember(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { isValid, errors: validationErrors } = validateLogin(values);

    setFieldErrors(validationErrors);

    if (!isValid) {
      return;
    }

    dispatch(
      login({
        ...values,
        remember,
      }),
    );
  };

  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Sign in to continue to your dashboard"
      footer={
        <Typography component="p" sx={{ textAlign: "center" }}>
          Don&apos;t have an account?{" "}
          <Link to="/register">Register</Link>
        </Typography>
      }>
      <form onSubmit={handleSubmit} noValidate>
        <Stack spacing={{ xs: 2, sm: 2.5 }} className="auth-form">
          {message && (
            <Alert severity="error" className="auth-alert">
              {message}
            </Alert>
          )}

          <AuthField
            icon={<MailIcon />}
            label="Email"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={fieldErrors.email || errors.email}
            autoComplete="email"
          />

          <AuthField
            icon={<LockIcon />}
            label="Password"
            name="password"
            type="password"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            error={fieldErrors.password || errors.password}
            autoComplete="current-password"
          />

          <div className="auth-meta-row">
            <FormControlLabel
              className="auth-remember"
              control={
                <Checkbox
                  className="setting-checkbox"
                  checked={remember}
                  onChange={handleRememberChange}
                />
              }
              label="Remember me"
            />

            <Link className="auth-link f-16" to="/forgot-password">
              Forgot password?
            </Link>
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="setting-submit-btn auth-submit-btn">
            {loading ? (
              <CircularProgress
                size={24}
                className="auth-spinner"
                aria-label="Logging in"
              />
            ) : (
              "Login"
            )}
          </Button>
        </Stack>
      </form>
    </AuthLayout>
  );
};

export default Login;