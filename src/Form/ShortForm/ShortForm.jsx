import styles from '../Form.module.css';
import { useStore } from './useStore';

const sendFormData = (formData) => {
	console.log(formData);
};

export const ShortForm = () => {
	const { getState, updateState } = useStore();
	const { email, login, password } = getState();

	const onChange = ({ target }) => {
		updateState(target.name, target.value);
	};

	const onSubmit = (event) => {
		event.preventDefault();
		sendFormData(getState());
	};

	return (
		<div className={styles.app}>
			<form onSubmit={onSubmit}>
				<input
					name="email"
					type="email"
					placeholder="Почта"
					value={email}
					onChange={onChange}
				/>
				<input
					name="login"
					type="text"
					placeholder="Логин"
					value={login}
					onChange={onChange}
				/>
				<input
					name="password"
					type="password"
					placeholder="Пароль"
					value={password}
					onChange={onChange}
				/>
				<button type="submit">Отправить</button>
			</form>
		</div>
	);
};
