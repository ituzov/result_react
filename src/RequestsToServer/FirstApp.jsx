import React from 'react';
import { useState, useEffect } from 'react';
import {
	useRequestAddPilSos,
	useRequestDelete,
	useRequestGetData,
	useRequestUpdateSome,
} from './hooks';
import styles from './FirstApp.module.css';

function FirstApp() {
	const [refreshProdFlag, setRefreshProdFlag] = useState(false);
	const refreshProd = () => setRefreshProdFlag(!refreshProdFlag);

	const { isloading, products } = useRequestGetData();
	const { isCreate, requestAddPilSos } = useRequestAddPilSos();
	const { isUpdating, updateProductSmartphone } = useRequestUpdateSome();
	const { isDelete, deleteSomething } = useRequestDelete();

	return (
		<div>
			{isloading ? (
				<div className={styles.loader}></div>
			) : (
				Object.entries(products).map(([id, { name, price }]) => (
					<div className={styles.position} key={id}>
						Name: {name} Price: {price}
					</div>
				))
			)}
			<button disabled={isCreate} onClick={() => requestAddPilSos('test')}>
				Добавить пылькосос
			</button>
			<button disabled={isUpdating} onClick={() => updateProductSmartphone('001')}>
				Что то сломать
			</button>
			<button disabled={isDelete} onClick={() => deleteSomething('002')}>
				Что то удалить
			</button>
		</div>
	);
}

export default FirstApp;
