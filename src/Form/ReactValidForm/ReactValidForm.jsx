import React, { useState } from 'react';
import style from '../Form.module.css';

const sendFormData = (formData) => {
	console.log(formData);
};
function ReactValidForm() {
	const [login, setLogin] = useState('');
	const [loginErr, setLoginErr] = useState('');

	const onLoginChange = ({ target }) => {
		setLogin(target.value);

		let newErr = null;

		if (!/^[\w_]*$/.test(target.value)) {
			newErr =
				'Неверный логин. Допустимые символы: буквы, цифры и нижнее подчёркивание';
		} else if (target.value.length > 20) {
			newErr = 'Неверный логин. Должно быть не больше 20 символов';
		}

		setLoginErr(newErr);
	};

	const onLoginBlur = ({ target }) => {
		if (target.value.length < 3) {
			setLoginErr('Неверный логин. Должно быть не меньше 3 символов');
		}
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

export default ReactValidForm;
