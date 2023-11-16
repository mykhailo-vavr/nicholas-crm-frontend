import Input from '../Input';
import { TextAreaFC } from './types';

const TextArea: TextAreaFC = (props) => <Input multiline rows={2} {...props} />;

export default TextArea;
