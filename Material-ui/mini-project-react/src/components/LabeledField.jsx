  import FormControl from "@mui/material/FormControl";
  import FormHelperText from "@mui/material/FormHelperText";
  import InputAdornment from "@mui/material/InputAdornment";
  import InputLabel from "@mui/material/InputLabel";
  import OutlinedInput from "@mui/material/OutlinedInput";

  export default function LabeledField({
    icon,
    label,
    name,
    placeholder,
    value,
    error,
    onChange,
    type = "text",
  }) {
    const errorId = `${name}-error`;

    return (
      <FormControl fullWidth error={Boolean(error)} variant="outlined">
        <InputLabel htmlFor={name}>{label}</InputLabel>

        <OutlinedInput
          id={name}
          name={name}
          type={type}
          value={value ?? ""}
          onChange={onChange}
          placeholder={placeholder}
          label={label}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          startAdornment={
            icon ? (
              <InputAdornment position="start">
                {icon}
              </InputAdornment>
            ) : undefined
          }
        />

        {error && <FormHelperText id={errorId}>{error}</FormHelperText>}
      </FormControl>
    );
  }