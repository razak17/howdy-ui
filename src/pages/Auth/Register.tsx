import { zodResolver } from '@hookform/resolvers/zod';
import { Dispatch, SetStateAction } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Input } from '../../components/Input/Input';
import { RegisterFormSchema, RegisterFormSchemaType } from '../../utils/formSchema';

const Register = ({ setIsSignUp }: { setIsSignUp: Dispatch<SetStateAction<boolean>> }) => {
	const {
		register: registerForm,
		handleSubmit,
		formState: { errors, isSubmitting }
	} = useForm<RegisterFormSchemaType>({
		resolver: zodResolver(RegisterFormSchema)
	});

	const onSubmit: SubmitHandler<RegisterFormSchemaType> = async (data) => {
		console.log(data);
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
