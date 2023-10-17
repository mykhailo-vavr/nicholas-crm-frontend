import { Alert as MUIAlert } from '@mui/material';
import { AlertFC } from './types';

const Alert: AlertFC = (props) => <MUIAlert {...props} />;

export default Alert;
