import { useEffect, useState } from 'react';
import { ref, onValue } from 'firebase/database';
import { db } from '../../firebase';

export const useRequestGetData = () => {
	const [products, setProducts] = useState({});
	const [isloading, setIsloading] = useState(true);

	useEffect(() => {
		const productsDbRef = ref(db, 'products');
		return onValue(productsDbRef, (snapshot) => {
			const loadedProducts = snapshot.val() || {};
			console.log(loadedProducts);
			setProducts(loadedProducts);
			setIsloading(false);
		});
	}, []);

	return {
		isloading,
		products,
	};
};
