import logo from './logo.svg';
import React from 'react';
import './App.css';

export const App = () => (
	//Создание функции наверное единственное место с императивным стилем далее все носит декларативный характер
	<div className="App">
		<header className="App-header">
			<img src={logo} className="App-logo" alt="logo" />
			<p>
				Edit <code>src/App.js</code> and save to reloaded.
			</p>
			<a
				className="App-link"
				href="https://reactjs.org"
				target="_blank"
				rel="noopener noreferrer"
			>
				Learn React
			</a>
			<p>{new Date().getFullYear()}</p>
		</header>
	</div>
);

export const NoJSXApp = () => {
	//Вариант без JSX
	return React.createElement(
		'div',
		{ className: 'App' },
		React.createElement(
			'header',
			{ className: 'App-header' },
			React.createElement('img', { src: logo, className: 'App-logo', alt: 'logo' }),
			React.createElement(
				'p',
				null,
				'Edit ',
				React.createElement('code', null, 'src/App.js'),
				' and save to reload.',
			),
			React.createElement(
				'a',
				{
					className: 'App-link',
					href: 'https://reactjs.org',
					target: '_blank',
					rel: 'noopener noreferrer',
				},
				'Learn React',
			),
			React.createElement('p', null, new Date().getFullYear()),
		),
	);
};
