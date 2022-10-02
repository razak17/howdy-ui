import { zodResolver } from '@hookform/resolvers/zod';
import { AxiosError } from 'axios';
import { Dispatch, SetStateAction } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';

import { Input } from '../../components/Input/Input';
import { register } from '../../lib/api/auth';
import { QueryKeys } from '../../lib/types';
import { RegisterFormSchema, RegisterFormSchemaType } from '../../utils/formSchema';

const Register = ({ setIsSignUp }: { setIsSignUp: Dispatch<SetStateAction<boolean>> }) => {
	const navigate = useNavigate();
	const queryClient = useQueryClient();

	const mutation = useMutation<string, AxiosError, Parameters<typeof register>['0']>(register, {
		onSuccess: () => {
			navigate('/login', { replace: true });
			queryClient.invalidateQueries([QueryKeys.ME]);
		}
	});

	const {
		register: registerForm,
		handleSubmit,
		formState: { errors, isSubmitting }
	} = useForm<RegisterFormSchemaType>({
		resolver: zodResolver(RegisterFormSchema)
	});

	const onSubmit: SubmitHandler<RegisterFormSchemaType> = async (data) => {
		console.log(data);
		mutation.mutate(data);
	};

	return (
		<form className='info-form auth-form' onSubmit={handleSubmit(onSubmit)}>
			<h1>Register</h1>
			<div className='form-item'>
				<Input
					required
					type='text'
					placeholder='First Name'
					{...registerForm('firstName')}
					error={errors.firstName}
				/>
				<Input
					required
					type='text'
					placeholder='Last Name'
					{...registerForm('lastName')}
					error={errors.lastName}
				/>
			</div>
			<div className='form-item'>
				<Input
					required
					type='text'
					placeholder='Username'
					{...registerForm('username')}
					error={errors.username}
				/>
			</div>
			<div className='form-item'>
				<Input
					required
					type='email'
					placeholder='Email'
					{...registerForm('email')}
					error={errors.email}
				/>
			</div>
			<div className='form-item'>
				<Input
					required
					type='password'
					placeholder='Password'
					{...registerForm('password')}
					error={errors.password}
				/>
				<Input
					required
					type='password'
					placeholder='Confirm Password'
					{...registerForm('confirmPassword')}
					error={errors.confirmPassword}
				/>
			</div>
			<div>
				<span
					className='check-auth'
					onClick={() => {
						setIsSignUp((prev) => !prev);
					}}
				>
					Already have an account?
				</span>
				<button className='button info-button' type='submit' disabled={isSubmitting}>
					{isSubmitting ? 'submitting...' : 'Register'}
				</button>
			</div>
		</form>
	);
};

export default Register;
