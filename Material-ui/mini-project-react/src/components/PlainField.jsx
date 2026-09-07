import FormHelperText from "@mui/material/FormHelperText";

export default function PlainField({
  name,
  placeholder,
  value,
  error,
  onChange,
}) {
  return (
    <div className="setting-input-wrapper">
      <div className={`setting-input-box plain ${error ? "has-error" : ""}`}>
        <input
          className="setting-input f-16 f-medium typography-base"
          name={name}
          placeholder={placeholder}
          value={value ?? ""}
          onChange={onChange}
        />
      </div>
      {error && (
        <FormHelperText className="setting-error">{error}</FormHelperText>
      )}
    </div>
  );
}
