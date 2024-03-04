import { signInSchema } from './schemas';
import { FormAction, FormState, SchemaType } from '@/types';

export type SignInSchema = SchemaType<typeof signInSchema>;

export type SignInFormState = FormState<SignInSchema>;

export type SignInAction = FormAction<SignInSchema>;
