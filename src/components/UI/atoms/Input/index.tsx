'use client';

import { IconButton, InputAdornment, TextField } from '@mui/material';
import { useCallback, useMemo, useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { InputFC } from './types';
import { cls } from '@/utils';

const Input: InputFC = ({ errorText, helperText, permanentHelperText = true, type, className, ...props }) => {
  const [showPassword, setShowPassword] = useState(type !== 'password');

  const handleShowPassword = useCallback(() => setShowPassword((prev) => !prev), []);

  const updatedType = useMemo(() => {
    if (type === 'password') {
      return showPassword ? 'text' : 'password';
    }

    return type;
  }, [showPassword, type]);

  return (
    <TextField
      error={!!errorText}
      helperText={errorText || helperText || (permanentHelperText && ' ')}
      type={updatedType}
      className={cls(type === 'hidden' && 'hidden', className)}
      InputProps={{
        endAdornment: type === 'password' && (
          <InputAdornment position="end">
            <IconButton onClick={handleShowPassword} edge="end">
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
      {...props}
    />
  );
};

export default Input;
