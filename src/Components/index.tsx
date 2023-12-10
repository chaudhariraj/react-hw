import React from 'react';
import { TextField, MenuItem } from '@mui/material';

interface SelectFieldProps {
  value: string;
  onChange: (event: React.ChangeEvent<{ value: unknown }>) => void;
  options: string[];
  label: string;
  name: string;
  error?: boolean;
  helperText?: string;
}

const SelectField: React.FC<SelectFieldProps> = ({
  value,
  onChange,
  options,
  label,
  name,
  error = false,
  helperText = '',
}) => {
  const handleFieldChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    onChange(event);
  };

  return (
    <TextField
      variant="filled"
      margin="normal"
      fullWidth
      select
      id={name}
      label={label}
      name={name}
      value={value}
      onChange={handleFieldChange}
      error={error}
      helperText={helperText}
    >
      {options.map((option, index) => (
        <MenuItem key={index} value={option}>
          {option}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default SelectField;
