'use client';

import { FormEvent, useCallback, useMemo, useState } from 'react';
import { getSchemaInitialValues, parseFormData } from '@/utils';
import { FormState, InputOnChangeEvent, OnSubmitCallback, Schema, SchemaEffect, SchemaShape } from '@/types';

export const useForm = <S extends SchemaShape>(
  schema: Schema<S> | SchemaEffect<S>,
  callback: OnSubmitCallback<Schema<S> | SchemaEffect<S>>,
) => {
  const [values, setValues] = useState(getSchemaInitialValues(schema));
  const [errors, setErrors] = useState<FormState<S>['errors']>(null);
  const [loading, setLoading] = useState(false);

  const onChange = useCallback(
    (key: keyof S) => (e: InputOnChangeEvent) => {
      setValues((prev) => ({
        ...prev,
        [key]: e.target.value,
      }));
    },
    [],
  );

  const clear = useCallback(() => {
    setValues(getSchemaInitialValues(schema));
    setErrors(null);
    setLoading(false);
  }, [schema]);

  const onSubmit = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();

      try {
        setLoading(true);

        const formData = new FormData(event.target as HTMLFormElement);
        const parsed = await parseFormData(schema, formData);

        if (!parsed.errors && parsed.data) {
          await callback(parsed.data, setErrors, clear);
        } else {
          setErrors(parsed.errors);
        }
      } finally {
        setLoading(false);
      }
    },
    [callback, clear, schema],
  );

  return useMemo(
    () => ({ values, onChange, errors, setErrors, loading, onSubmit, clear }),
    [clear, errors, loading, onChange, onSubmit, values],
  );
};
