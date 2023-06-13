import React from 'react';
import styles from '../Form.module.css';
import { useForm } from 'react-hook-form';

function ReactHookForm(props) {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		mode: 'onChange',
		defaultValues: {
			login: '',
		},
	});

	const loginProps = {
		minLength: { value: 3, message: 'Должно быть больше трех символов' },
		maxLength: { value: 20, message: 'Должно быть меньше 20 символов' },
		pattern: {
			value: /^[\w_]*$/,
			message: 'Должны использоваться буквы цифры или нижнее подчеркивание',
		},
	};

	const onSubmit = (formData) => {
		console.log(formData);
	};

	const loginErr = errors.login?.message;

	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)}>
				{loginErr && <div className={styles.labelErr}>{loginErr}</div>}
				<input name="login" type="text" {...register('login', loginProps)} />
				<button type={'submit'} disabled={!!loginErr}>
					Отправить
				</button>
			</form>
		</div>
	);
}

export default ReactHookForm;
