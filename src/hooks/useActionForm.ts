'use client';

import { useFormState } from 'react-dom';
import { useMemo } from 'react';
import { FormAction, FormState, Schema, SchemaShape, SchemaShapeType } from '@/types';
import { getFormInitialState, getSchemaInitialValues } from '@/utils';

export const useServerActionForm = <S extends SchemaShape>(
  action: FormAction<SchemaShapeType<S>>,
  schema: Schema<S>,
): [FormState<SchemaShapeType<S>>, (payload: FormData) => void, boolean] => {
  const formInitialState = useMemo(() => {
    const schemaInitialValues = getSchemaInitialValues(schema);
    return getFormInitialState(schemaInitialValues);
  }, [schema]);

  return useFormState(action, formInitialState);
};
