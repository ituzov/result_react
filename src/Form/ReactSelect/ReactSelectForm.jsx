import React from 'react';
import Select from 'react-select';
import Data from './data';

function ReactSelectForm() {
	const { productOptions, colorOptions } = Data;
	return (
		<div>
			<Select options={productOptions} defaultValue={productOptions[0]} />
			<Select
				isMulti
				options={colorOptions}
				defaultValue={[colorOptions[0], colorOptions[2]]}
			></Select>
		</div>
	);
}

export default ReactSelectForm;
