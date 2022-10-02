import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { AxiosError } from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { LoginFormSchema, LoginFormSchemaType } from '../../utils/formSchema';

import { login } from '../../lib/api/auth';
import { Input, Error } from '../../components/Input/Input';
import { QueryKeys } from '../../lib/types';
import Auth from './Auth';
import './Auth.css';

const LoginForm = () => {
	const navigate = useNavigate();
	const state = useLocation();
	const queryClient = useQueryClient();

	const mutation = useMutation<string, AxiosError, Parameters<typeof login>['0']>(login, {
		onSuccess: () => {
			navigate(state.state || '/', { replace: true });
			queryClient.invalidateQueries([QueryKeys.ME]);
		}
	});

	const {
		register: loginForm,
		handleSubmit,
		formState: { errors, isSubmitting }
	} = useForm<LoginFormSchemaType>({
		resolver: zodResolver(LoginFormSchema)
	});

	const onSubmit: SubmitHandler<LoginFormSchemaType> = async (data) => {
		mutation.mutate(data);
	};
	return (
		<form className='info-form auth-form info-auth' onSubmit={handleSubmit(onSubmit)}>
			<h1>Login</h1>
			{(mutation?.error?.response?.data as string) ? (
				<Error error={mutation?.error?.response?.data as string} />
			) : null}
			<div className='form-item'>
				<Input required type='text' placeholder='Email' {...loginForm('email')} error={errors.email} />
			</div>
			<div className='form-item'>
				<Input
					required
					type='password'
					placeholder='Password'
					{...loginForm('password')}
					error={errors.password}
				/>
			</div>
			<div className='check-auth'>
				<Link to='/register'>
					<span>New user?</span>
				</Link>
			</div>
			<button className='button info-button' type='submit' disabled={isSubmitting}>
				{isSubmitting ? 'submitting...' : 'Login'}
			</button>
		</form>
	);
};

const Login = () => {
	return (
		<Auth>
			<LoginForm />
		</Auth>
	);
};

export default Login;
