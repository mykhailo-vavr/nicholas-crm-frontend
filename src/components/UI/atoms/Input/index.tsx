import { TextField } from '@mui/material';
import { InputFC } from './types';
import { cls } from '@/utils';

const Input: InputFC = ({ errorText, error, helperText, permanentHelperText = true, type, className, ...props }) => (
  <TextField
    error={!!errorText || error}
    helperText={errorText || helperText || (permanentHelperText && ' ')}
    type={type}
    className={cls(type === 'hidden' && 'hidden', className)}
    {...props}
  />
);

export default Input;
