import React from 'react';
import { TextField } from '@mui/material';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface DateInputProps {
  id: string;
  label: string;
  value: Date | null;
  onClick: () => void;
  onChange: (date: Date | null) => void;
  open: boolean;
}

const DateInput: React.FC<DateInputProps> = ({
  id,
  label,
  value,
  onClick,
  onChange,
  open,
}) => {
  return (
    <>
      <TextField
        variant="filled"
        margin="normal"
        fullWidth
        id={id}
        label={label}
        name={id}
        value={value ? value.toDateString() : ''}
        onClick={onClick}
        InputProps={{
          readOnly: true,
        }}
      />
      <DatePicker
        selected={value}
        onChange={(date: Date | null) => onChange(date)}
        open={open}
        popperPlacement="bottom-end"
        locale="es"
      />
    </>
  );
};

export default DateInput;
