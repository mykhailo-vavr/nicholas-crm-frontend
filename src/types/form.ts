import { ServerAction } from './actions';

export type FormState<S extends object> =
  | {
      data: S;
      errors: null;
    }
  | {
      data: null;
      errors: Partial<Record<keyof S, string>>;
    };

export type FormServerAction<S extends object> = ServerAction<FormState<S>>;

export type Option<T> = { label: string; value: T };

export type Options<T> = Option<T>[];
