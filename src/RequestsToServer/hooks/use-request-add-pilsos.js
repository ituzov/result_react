import { useState } from 'react';
import { ref, push } from 'firebase/database';
import { db } from '../../firebase';

export const useRequestAddPilSos = () => {
	const [isCreate, setIsCreate] = useState(false);
	const requestAddPilSos = (name) => {
		setIsCreate(true);

		const productDbRef = ref(db, 'products');
		push(productDbRef, {
			name: `${name}`,
			price: 5990,
		})
			.then((response) => {
				console.log(`${name} Добавлен, ответ сервера`, response);
			})
			.finally(() => setIsCreate(false));
	};
	return {
		isCreate,
		requestAddPilSos,
	};
};
