import React, { useState, useEffect } from 'react';

const validateEmail = (email) => {
	var re = /\S+@\S+\.\S+/;
	return re.test(email);
};

const RegisterForm = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [repeatPassword, setRepeatPassword] = useState('');
	const [errors, setErrors] = useState({});
	const [isSubmit, setIsSubmit] = useState(false);

	const validateForm = () => {
		let errors = {};

		if (!validateEmail(email)) {
			errors.email = 'Email is not valid';
		}

		if (password.length < 8) {
			errors.password = 'Password must be at least 8 characters';
		}

		if (password !== repeatPassword) {
			errors.repeatPassword = 'Passwords do not match';
		}

		return errors;
	};

	useEffect(() => {
		setErrors(validateForm());
	}, [email, password, repeatPassword, validateForm]);

	const handleSubmit = (e) => {
		e.preventDefault();

		if (Object.keys(errors).length === 0) {
			console.log({
				email,
				password,
			});
			setIsSubmit(true);
		} else {
			setIsSubmit(false);
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="email"
				placeholder="Email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>
			{errors.email && <div>{errors.email}</div>}
			<input
				type="password"
				placeholder="Password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
			{errors.password && <div>{errors.password}</div>}
			<input
				type="password"
				placeholder="Repeat Password"
				value={repeatPassword}
				onChange={(e) => setRepeatPassword(e.target.value)}
			/>
			{errors.repeatPassword && <div>{errors.repeatPassword}</div>}
			<button type="submit" disabled={Object.keys(errors).length > 0}>
				Register
			</button>
			{isSubmit && <div>Registration successful</div>}
		</form>
	);
};

export default RegisterForm;
