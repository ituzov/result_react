import { useState } from 'react';
import { db } from '../../firebase';
import { ref, remove } from 'firebase/database';

export const useRequestDelete = () => {
	const [isDelete, setIsDelete] = useState(false);
	const deleteSomething = (id) => {
		setIsDelete(true);

		const deleteProductRef = ref(db, `products/${id}`);
		remove(deleteProductRef)
			.then((response) => {
				console.log(`Что то удалено ${JSON.stringify(response)}`);
			})
			.finally(() => setIsDelete(false));
	};

	return {
		isDelete,
		deleteSomething,
	};
};
