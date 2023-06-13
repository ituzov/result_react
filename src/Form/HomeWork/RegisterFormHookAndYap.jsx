import React, { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
	email: yup.string().email('Email is not valid').required('Email is required'),
	password: yup
		.string()
		.min(8, 'Password must be at least 8 characters')
		.required('Password is required'),
	repeatPassword: yup
		.string()
		.oneOf([yup.ref('password'), null], 'Passwords do not match')
		.required('Repeat Password is required'),
});

function RegisterForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
	} = useForm({
		resolver: yupResolver(schema),
	});

	const password = useRef({});
	password.current = watch('password', '');

	const onSubmit = (data) => {
		console.log(data);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<input placeholder="Email" {...register('email')} />
			<p>{errors.email?.message}</p>

			<input type="password" placeholder="Password" {...register('password')} />
			<p>{errors.password?.message}</p>

			<input
				type="password"
				placeholder="Repeat Password"
				{...register('repeatPassword')}
			/>
			<p>{errors.repeatPassword?.message}</p>

			<input type="submit" />
		</form>
	);
}

export default RegisterForm;
