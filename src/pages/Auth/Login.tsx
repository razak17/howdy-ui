import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginFormSchema, LoginFormSchemaType } from '../../utils/formSchema';
import { Dispatch, SetStateAction } from 'react';
import { Input } from '../../components/Input/Input';
import './Auth.css';
import { QueryKeys } from '../../lib/types';
import { login } from '../../lib/api/auth';
import { AxiosError } from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = ({ setIsSignUp }: { setIsSignUp: Dispatch<SetStateAction<boolean>> }) => {
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
		console.log(data);
		mutation.mutate(data);
	};

	return (
		<form className='info-form auth-form info-auth' onSubmit={handleSubmit(onSubmit)}>
			<h1>Login</h1>
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
			<div>
				<span
					className='check-auth'
					onClick={() => {
						setIsSignUp((prev) => !prev);
					}}
				>
					New user? Register here
				</span>
				<button className='button info-button' type='submit' disabled={isSubmitting}>
					{isSubmitting ? 'submitting...' : 'Login'}
				</button>
			</div>
		</form>
	);
};

export default Login;
