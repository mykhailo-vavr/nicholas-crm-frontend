import { twMerge, ClassNameValue } from 'tailwind-merge';

export const cls = (...classes: ClassNameValue[]) => twMerge(...classes);
