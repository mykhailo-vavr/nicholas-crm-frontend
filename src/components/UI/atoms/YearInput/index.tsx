import { YearInputFC } from './types';
import PatternInput from '../PatternInput';

const YearInput: YearInputFC = (props) => <PatternInput format="20##" {...props} />;

export default YearInput;
