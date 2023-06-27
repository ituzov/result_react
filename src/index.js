import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Newelement from './ReactDom/newelement';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Newelement />
		</BrowserRouter>
	</React.StrictMode>,
);
