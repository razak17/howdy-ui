import { z } from 'zod';

export const RegisterFormSchema = z
	.object({
		firstName: z.string().min(2, 'firstName must be atleast 2 characters long'),
		lastName: z.string().min(2, 'lastName must be atleast 2 characters long'),
		username: z.string().min(2, 'Username must be atleast 2 characters long'),
		email: z.string().email('Please enter a valid email address.'),
		password: z
			.string()
			.min(6, 'Please choose a longer password')
			.max(42, 'Consider using a short password'),
		confirmPassword: z
			.string()
			.min(6, 'Please choose a longer password')
			.max(42, 'Consider using a short password')
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: 'passwords do not match',
		path: ['confirmPassword']
	});

export const LoginFormSchema = z.object({
	email: z.string().email('Please enter a valid email address.'),
	password: z.string().min(6, 'Password has to be at least 6 characters long.')
});

export type RegisterFormSchemaType = z.infer<typeof RegisterFormSchema>;
export type LoginFormSchemaType = z.infer<typeof LoginFormSchema>;
