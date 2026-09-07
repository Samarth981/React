import { useRef } from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";

import Camera from "../../assets/icon/user/camera.svg?react";

export default function ProfileAvatar({ src, onChange }) {
  const inputRef = useRef(null);

  const handleFile = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      onChange(reader.result);
    };
    reader.readAsDataURL(file);
    event.target.value = "";
  };

  const handleChangePhoto = () => {
    inputRef.current?.click();
  };

  return (
    <Box sx={{ position: "relative", width: "96px", mx: "auto" }}>
      <Avatar src={src} alt="Profile" sx={{ width: 96, height: 96 }} />

      <IconButton
        type="button"
        aria-label="Change profile photo"
        onClick={handleChangePhoto}
        size="small"
        sx={{
          position: "absolute",
          bottom: 0,
          right: 0,
          backgroundColor: "background.default",
          border: "1px solid",
          borderColor: "divider",
          "&:hover": { backgroundColor: "background.subtle" },
        }}>
        <Camera />
      </IconButton>

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={handleFile}
        hidden
      />
    </Box>
  );
}