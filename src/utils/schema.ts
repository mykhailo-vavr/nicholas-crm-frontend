import { ZodBoolean, ZodNull, ZodNumber, ZodObject, ZodString, coerce, object, string as zodString } from 'zod';
import { Schema, SchemaEffect, SchemaShape, SchemaShapeType } from '@/types';

export const getSchemaShape = <S extends SchemaShape>(schema: Schema<S> | SchemaEffect<S>) =>
  // @ts-ignore
  (schema.shape || schema.innerType().shape) as S;

export const getSchemaInitialValues = <S extends SchemaShape>(schema: Schema<S> | SchemaEffect<S>) =>
  Object.fromEntries(
    Object.entries(getSchemaShape(schema)).map(([key, value]) => {
      if (value instanceof ZodNumber) return [key, 0];
      if (value instanceof ZodString) return [key, ''];
      if (value instanceof ZodBoolean) return [key, false];
      if (value instanceof ZodObject) return [key, {}];
      if (value instanceof ZodNull) return [key, null];
      return [key, undefined];
    }),
  ) as SchemaShapeType<S>;

export const notEmptyString = () => zodString().trim().min(1);

export const idSchema = () => coerce.number().int().positive();

export const addressSchema = () =>
  object({
    city: notEmptyString().max(30),
    street: notEmptyString().max(50),
    streetNumber: notEmptyString().max(10),
  });

const phoneRegEx = /^\+380 \(\d{2}\) \d{3}-\d{2}-\d{2}$/;
export const phone = () => zodString().refine((value) => phoneRegEx.test(value));

export const email = () => zodString().email();
