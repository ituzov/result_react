import styles from '../Form.module.css';
import { useState } from 'react';

function sendFormData(formData) {
	console.log(formData);
}

export const Form = () => {
	const [email, setEmail] = useState('');
	const [login, setLogin] = useState('');
	const [password, setPassword] = useState('');

	const onSubmit = (event) => {
		event.preventDefault();
		sendFormData({ email, login, password });
	};

	return (
		<div>
			<form className={styles.app}>
				<input
					className={styles.inputPoint}
					name="email"
					type="email"
					placeholder="Почта"
					value={email}
					onChange={({ target }) => {
						setEmail(target.value);
					}}
				/>
				<input
					className={styles.inputPoint}
					name="login"
					type="text"
					placeholder="Логин"
					value={login}
					onChange={({ target }) => {
						setLogin(target.value);
					}}
				/>
				<input
					className={styles.inputPoint}
					name="password"
					type="password"
					placeholder="Пароль"
					value={password}
					onChange={({ target }) => {
						setPassword(target.value);
					}}
				/>
				<button className={styles.inputPoint} type="submit" onClick={onSubmit}>
					Отправить
				</button>
			</form>
		</div>
	);
};
