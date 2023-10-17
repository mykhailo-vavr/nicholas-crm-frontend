'use client';

// @ts-ignore
import { experimental_useFormState as useFormState } from 'react-dom';
import { useCallback, useMemo } from 'react';
import { FormServerAction, FormState, Schema, SchemaShape, SchemaShapeType } from '@/types';
import { getFormInitialState, getSchemaInitialValues } from '@/utils';

export const useServerActionForm = <S extends SchemaShape>(
  callback: FormServerAction<SchemaShapeType<S>>,
  schema: Schema<S>,
): [FormState<SchemaShapeType<S>>, (payload: FormData) => void] => {
  const action = useCallback(
    async (prevState: FormState<SchemaShapeType<S>>, formData: FormData) => callback(formData),
    [callback],
  );

  const formInitialState = useMemo(() => {
    const schemaInitialValues = getSchemaInitialValues(schema);

    return getFormInitialState(schemaInitialValues);
  }, [schema]);

  return useFormState(action, formInitialState);
};
