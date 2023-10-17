import { object, string } from 'zod';

const phoneRegEx = /^\+380 \(\d{2}\) \d{3}-\d{2}-\d{2}$/;

export const createAdminSchema = object({
  firstName: string().trim().min(1),
  lastName: string().trim().min(1),
  email: string().email(),
  password: string().min(1),
  phone: string().refine((value) => phoneRegEx.test(value)),
});
