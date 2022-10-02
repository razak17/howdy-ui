import { zodResolver } from '@hookform/resolvers/zod';
import { AxiosError } from 'axios';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';

import { Input, Error } from '../../components/Input/Input';
import { register } from '../../lib/api/auth';
import { QueryKeys } from '../../lib/types';
import { RegisterFormSchema, RegisterFormSchemaType } from '../../utils/formSchema';
import Auth from './Auth';

const RegisterForm = () => {
	const navigate = useNavigate();
	const queryClient = useQueryClient();

	const {
		register: registerForm,
		handleSubmit,
		formState: { errors, isSubmitting }
	} = useForm<RegisterFormSchemaType>({
		resolver: zodResolver(RegisterFormSchema)
	});

	const mutation = useMutation<string, AxiosError, Parameters<typeof register>['0']>(register, {
		onSuccess: () => {
      navigate('/login', { replace: true });
			queryClient.invalidateQueries([QueryKeys.ME]);
		}
	});

	const onSubmit: SubmitHandler<RegisterFormSchemaType> = async (data) => {
		mutation.mutate(data);
	};

	return (
		<form className='info-form auth-form info-auth' onSubmit={handleSubmit(onSubmit)}>
			<h1>Register</h1>
			{(mutation?.error?.response?.data as string) ? (
				<Error error={mutation?.error?.response?.data as string} />
			) : null}
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
			<div className='check-auth'>
				<Link to='/login'>
					<span>Already have an account?</span>
				</Link>
			</div>
			<button className='button info-button' type='submit' disabled={isSubmitting}>
				{isSubmitting ? 'submitting...' : 'Register'}
			</button>
		</form>
	);
};

const Register = () => {
	return (
		<Auth>
			<RegisterForm />
		</Auth>
	);
};

export default Register;
