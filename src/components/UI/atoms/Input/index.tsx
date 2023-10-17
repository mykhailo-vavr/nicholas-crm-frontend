import { TextField } from '@mui/material';
import { InputFC } from './types';

const Input: InputFC = ({ error, errorText, helperText, permanentHelperText = true, ...props }) => (
  <TextField
    error={!!errorText || error}
    helperText={errorText || helperText || (permanentHelperText && ' ')}
    {...props}
  />
);

export default Input;
