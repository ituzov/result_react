import { useState } from 'react';

export const SelectForm = () => {
	const [selectedProduct, setSelectedProduct] = useState('tv');
	const [selectedColors, setSelectedColors] = useState(['black', 'silver']);

	const onSelectedProductChange = ({ target }) => {
		setSelectedProduct(target.value);
	};

	const onSelectedColorChange = ({ target }) => {
		const newSelectorColors = [...target.selectedOptions].map(
			(selectedOption) => selectedOption.value,
		);
		setSelectedColors(newSelectorColors);
		console.log(newSelectorColors);
	};

	return (
		<div>
			<select onChange={onSelectedColorChange}>
				<option value="tv">Телевизор</option>
				<option value="smartphone">Смартфон</option>
				<option value="laptop">Ноутбук</option>
			</select>
			<select multiple={true} onChange={onSelectedColorChange}>
				<option value="black">Серый</option>
				<option value="white">Белый</option>
				<option value="silver">Серебристый</option>
			</select>
		</div>
	);
};
