import { useState } from 'react';
import { db } from '../../firebase';
import { ref, set } from 'firebase/database';

export const useRequestUpdateSome = () => {
	const [isUpdating, setIsUpdating] = useState(false);
	const updateProductSmartphone = (id) => {
		setIsUpdating(true);

		const updateProducts = ref(db, `products/${id}`);
		set(updateProducts, {
			name: 'Обновленный продукт',
			price: 18889,
		})
			.then((response) => {
				console.log(`Позиция обновлена` + response);
			})
			.finally(() => setIsUpdating(false));
	};

	return {
		isUpdating,
		updateProductSmartphone,
	};
};
