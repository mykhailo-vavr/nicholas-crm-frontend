import { MenuItem } from '@mui/material';
import Input from '../Input';
import { SelectFC } from './types';

const Select: SelectFC = ({ options, ...props }) => (
  <Input select SelectProps={{ defaultValue: options[0].value }} {...props}>
    {options.map((option) => (
      <MenuItem key={option.value} value={option.value}>
        {option.label}
      </MenuItem>
    ))}
  </Input>
);

export default Select;
