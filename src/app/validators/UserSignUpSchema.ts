import { z } from 'zod';

const passwordSchema = z
  .string()
  .min(1, 'Password is required')
  .min(8, 'Password must be at least 8 characters long')
  .regex(/[A-Za-z]/, 'Password must contain at least 1 letter')
  .regex(/[0-9]/, 'Password must contain at least 1 number')
  .regex(
    /[$&+,:;=?@#|'<>.^*()%!-]/,
    'Password must contain at least 1 special character',
  );

export const userSignUpSchema = z
  .object({
    email: z
      .string()
      .min(1, 'Email is required')
      .email('Invalid email address'),
    password: passwordSchema,
    confirmPassword: z.string().min(1, 'Please confirm your password'),
    petName: z.string().min(1, 'Pet name is required'),
    petWeight: z
      .string()
      .min(1, 'Pet weight is required')
      .refine(val => {
        const num = Number(val);
        return !isNaN(num) && num >= 3 && num <= 180;
      }, 'Pet weight must be between 3 and 180 pounds'),
    idealPetWeight: z
      .string()
      .optional()
      .refine(val => !val || (Number(val) >= 3 && Number(val) <= 180), {
        message: 'Ideal pet weight must be between 3 and 180 pounds',
      }),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });
