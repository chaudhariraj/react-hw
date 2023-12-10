// import React from 'react';
// import { TextField } from '@mui/material';

// interface InputFieldProps {
//   value: string;
//   onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
//   error: boolean;
//   helperText: string;
// }

// const InputField: React.FC<InputFieldProps> = ({
//   value,
//   onChange,
//   error,
//   helperText,
// }) => {
//   return (
//     <TextField
//       variant="filled"
//       margin="normal"
//       required
//       fullWidth
//       id="firstName"
//       label="First Name"
//       name="firstName"
//       value={value}
//       onChange={onChange}
//       error={error}
//       helperText={helperText}
//     />
//   );
// };

// export default InputField;


import React from 'react';
import { TextField } from '@mui/material';

interface InputFieldProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error: boolean;
  helperText: string;
  label: string;
  name: string;
  id: string;
  multiline?: boolean;
  rows?: number;
}

const InputField: React.FC<InputFieldProps> = ({
  value,
  onChange,
  error,
  helperText,
  label,
  name,
  id,
  multiline = false,
  rows = 1,
}) => {
  return (
    <TextField
      variant="filled"
      margin="normal"
      required
      fullWidth
      id={id}
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      error={error}
      helperText={helperText}
      multiline={multiline}
      rows={rows}
    />
  );
};

export default InputField;
