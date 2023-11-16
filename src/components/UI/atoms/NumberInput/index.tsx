import { useCallback } from 'react';
import { NumberFormatValues, NumericFormat } from 'react-number-format';
import Input from '../Input';
import { NumberInputFC } from './types';

// TODO: separate this function
export const isNullable = (value: any) => value === null || value === undefined;

const NumberInput: NumberInputFC = ({ min, max, defaultValue, ...props }) => {
  const isAllowed = useCallback(
    ({ floatValue }: NumberFormatValues) => {
      if (isNullable(floatValue)) {
        return true;
      }

      if (!isNullable(min) && !isNullable(max)) {
        return min! <= floatValue! && floatValue! <= max!;
      }

      if (!isNullable(min)) {
        return min! <= floatValue!;
      }

      if (!isNullable(max)) {
        return floatValue! <= max!;
      }

      return true;
    },
    [max, min],
  );

  return (
    <NumericFormat
      defaultValue={defaultValue || min}
      isAllowed={isAllowed}
      allowNegative={(min || 0) < 0}
      customInput={Input as any}
      {...props}
    />
  );
};

export default NumberInput;
