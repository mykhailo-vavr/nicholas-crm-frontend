'use client';

// @ts-ignore
import { experimental_useFormState as useFormState } from 'react-dom';
import { useCallback, useMemo } from 'react';
import { FormServerAction, FormState, Schema, SchemaShape, SchemaShapeType } from '@/types';
import { getFormInitialState, getSchemaInitialValues } from '@/utils';

export const useServerActionForm = <S extends SchemaShape>(
  callback: FormServerAction<SchemaShapeType<S>>,
  schema: Schema<S>,
  onSuccess?: () => void,
): [FormState<SchemaShapeType<S>>, (payload: FormData) => void] => {
  const action = useCallback(
    async (prevState: FormState<SchemaShapeType<S>>, formData: FormData) => {
      const result = await callback(formData);

      if (onSuccess && !result.errors) {
        onSuccess();
      }

      return result;
    },
    [callback, onSuccess],
  );

  const formInitialState = useMemo(() => {
    const schemaInitialValues = getSchemaInitialValues(schema);

    return getFormInitialState(schemaInitialValues);
  }, [schema]);

  return useFormState(action, formInitialState);
};
