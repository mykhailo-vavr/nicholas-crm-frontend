import { ZodTypeAny } from 'zod';
import { Dispatch, SetStateAction } from 'react';
import { SchemaType } from './schema';

export type FormState<S extends object> =
  | {
      data: S;
      errors: null;
    }
  | {
      data: null;
      errors: Partial<Record<keyof S, string>>;
    };

export type OnSubmitCallback<S extends ZodTypeAny> = (
  data: SchemaType<S>,
  setErrors: Dispatch<SetStateAction<Partial<Record<keyof SchemaType<S>, string>> | null>>,
  clear: () => void,
) => Promise<void>;

export type FormAction<S extends object> = (prev: FormState<S>, formData: FormData) => Promise<FormState<S>>;

export type Option<T> = { label: string; value: T };

export type Options<T> = Option<T>[];
