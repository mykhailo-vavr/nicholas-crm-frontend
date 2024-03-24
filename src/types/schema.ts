import { TypeOf, ZodEffects, ZodIssue, ZodObject, ZodRawShape, ZodType, ZodTypeAny } from 'zod';

export type SchemaIssue = ZodIssue;

export type SchemaShape = ZodRawShape;

export type Schema<S extends SchemaShape> = ZodObject<S>;

export type SchemaEffect<S extends SchemaShape> = ZodEffects<Schema<S>>;

export type SchemaType<S extends ZodTypeAny> = TypeOf<S>;

export type SchemaShapeType<S extends SchemaShape> = SchemaType<ZodObject<S>>;

export type SchemaAsType<T> = ZodType<T>;
