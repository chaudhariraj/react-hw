import React from 'react';
import { Typography } from '@mui/material';

interface ErrorProps {
  error: string;
}

const ErrorComponent: React.FC<ErrorProps> = ({ error }) => {
  return error ? <Typography color="error">{error}</Typography> : null;
};

export default ErrorComponent;
