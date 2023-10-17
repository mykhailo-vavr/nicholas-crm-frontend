'use client';

// @ts-ignore
import { experimental_useFormState as useFormState } from 'react-dom';
import { useCallback, useMemo } from 'react';
import { getFormInitialState, getSchemaInitialValues, parseFormData } from '@/utils';
import { FormState, Schema, SchemaShape, SchemaShapeType } from '@/types';

export const useClientActionForm = <S extends SchemaShape>(
  callback: (data: FormState<SchemaShapeType<S>>) => Promise<void>,
  schema: Schema<S>,
): [FormState<SchemaShapeType<S>>, (payload: FormData) => void] => {
  const action = useCallback(
    async (prevState: FormState<SchemaShapeType<S>>, formData: FormData) => {
      const parsed = await parseFormData(schema, formData);

      await callback(parsed);

      return parsed;
    },
    [callback, schema],
  );

  const formInitialState = useMemo(() => {
    const schemaInitialValues = getSchemaInitialValues(schema);

    return getFormInitialState(schemaInitialValues);
  }, [schema]);

  return useFormState(action, formInitialState);
};
