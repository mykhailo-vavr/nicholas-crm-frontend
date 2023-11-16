'use client';

import { Dialog as MUIDialog, DialogTitle, DialogContent } from '@mui/material';
import { DialogFC } from './types';

const Dialog: DialogFC = ({ open, onClose, title, children, ...props }) => (
  <MUIDialog open={open} onClose={onClose} {...props}>
    <DialogTitle>{title}</DialogTitle>
    <DialogContent className="!pt-2">{children}</DialogContent>
  </MUIDialog>
);

export default Dialog;
