export type FormState<S extends object> =
  | {
      data: S;
      errors: null;
    }
  | {
      data: null;
      errors: Partial<Record<keyof S, string>>;
    };

export type FormAction<S extends object> = (prev: FormState<S>, formData: FormData) => Promise<FormState<S>>;

export type Option<T> = { label: string; value: T };

export type Options<T> = Option<T>[];
