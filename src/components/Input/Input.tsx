import { forwardRef } from 'react';
import { FieldError } from 'react-hook-form';

interface InputProps {
	label?: string;
	placeholder: string;
	type: string;
	error?: FieldError;
}

export const Error = ({ error }: { error?: string }) => {
	if (!error) return null;

	return <p className='error'>{error as string}</p>;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
	{ type = 'text', error, ...props },
	ref
) {
	return (
		<div className='form-input'>
			<input className='info-input' type={type} ref={ref} {...props} />
			<Error error={error?.message} />
		</div>
	);
});
