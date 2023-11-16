import { PhoneInputFC } from './types';
import PatternInput from '../PatternInput';

const PhoneInput: PhoneInputFC = (props) => <PatternInput format="+380 (##) ###-##-##" {...props} />;

export default PhoneInput;
