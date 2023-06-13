import * as yup from 'yup';
import React, { useState } from 'react';
import style from '../Form.module.css';

const loginChangeScheme = yup
	.string()
	.matches(
		/^[\w_]*$/,
		'Неверный логин. Допустимые символы - буквы, цифры и нижнее подчеркивание',
	)
	.max(20, 'Должно быть не больше 20 символов');

const loginBlurScheme = yup
	.string()
	.min(3, 'Неверный логин, должно быть не меньше 3-х символов');

const validateAndGetErrMessage = (schema, value) => {
	let errMessage = null;

	try {
		schema.validateSync(value, { abortEarly: false });
	} catch ({ errors }) {
		errMessage = errors.join('\n');
	}

	return errMessage;
};

const sendFormData = (data) => console.log(data);

function ReactYapForm() {
	const [login, setLogin] = useState('');
	const [loginErr, setLoginErr] = useState('');

	const onLoginChange = ({ target }) => {
		setLogin(target.value);

		const newErr = validateAndGetErrMessage(loginChangeScheme, target.value);

		setLoginErr(newErr);
	};

	const onLoginBlur = ({ target }) => {
		validateAndGetErrMessage(loginBlurScheme, login);
	};

	const onSubmit = (event) => {
		event.preventDefault();
		sendFormData({ login });
	};

	return (
		<div>
			<form onSubmit={onSubmit}>
				{loginErr && <div className={style.labelErr}>{loginErr}</div>}
				<input
					name="login"
					type="text"
					value={login}
					placeholder="login"
					onChange={onLoginChange}
					onBlur={onLoginBlur}
				/>

				<button type="submit" disabled={!!loginErr}>
					Отправить
				</button>
			</form>
		</div>
	);
}

export default ReactYapForm;
