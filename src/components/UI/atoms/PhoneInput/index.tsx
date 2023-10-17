'use client';

import { PatternFormat, PatternFormatProps } from 'react-number-format';
import { forwardRef } from 'react';
import Input from '../Input';
import { PhoneInputFC } from './types';

const PatternInput = forwardRef<PatternFormatProps>((props, ref) => (
  <PatternFormat format="+380 (##) ###-##-##" allowEmptyFormatting mask="_" getInputRef={ref} {...props} />
));

const PhoneInput: PhoneInputFC = (props) => (
  <Input
    InputProps={{
      inputComponent: PatternInput as any,
    }}
    {...props}
  />
);

export default PhoneInput;
