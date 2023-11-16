import { PatternFormat } from 'react-number-format';
import Input from '../Input';
import { PatternInputFC } from './types';

const PatternInput: PatternInputFC = ({ mask = '_', allowEmptyFormatting = true, ...props }) => (
  <PatternFormat customInput={Input as any} mask={mask} allowEmptyFormatting={allowEmptyFormatting} {...props} />
);

export default PatternInput;
