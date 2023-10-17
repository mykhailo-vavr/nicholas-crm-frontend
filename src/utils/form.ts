import { FormState } from '@/types';

export const getFormInitialState = <D extends object>(data: D): FormState<D> => ({
  data,
  errors: null,
});
