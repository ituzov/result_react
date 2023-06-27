import React from 'react';
import { Routes, Route, Outlet, useParams, NavLink } from 'react-router-dom';

const fetchProductsList = () => [
	{ id: 1, name: 'Телевизор' },
	{ id: 2, name: 'Смартфон' },
	{ id: 3, name: 'Планшет' },
];

const fetchProduct = (id) =>
	({
		1: { id: 1, name: 'Телевизор', price: 29900, amount: 15 },
		2: { id: 2, name: 'Смартфон', price: 13900, amount: 48 },
		3: { id: 3, name: 'Планшет', price: 18400, amount: 23 },
	}[id]);

const MainPage = () => <div>Главная страница</div>;

const NotFound = () => <div>Такая страница не существует</div>;

const Contacts = () => <div>А тут контактики</div>;
const ProductNotFound = () => <div>Такой товар не существует</div>;

const Product = () => {
	const params = useParams();

	const products = fetchProduct(params.id);

	if (!products) {
		return <ProductNotFound />;
	}

	const { name, price, amount } = products;

	return (
		<div>
			<h3>Товар - {name}</h3>
			<div>Цена: {price} руб.</div>
			<div>На складе: {amount} шт.</div>
		</div>
	);
};

const Catalog = () => (
	<div>
		<h3>Каталог товаров</h3>
		<ul>
			{fetchProductsList().map(({ id, name }) => (
				<li key={id}>
					<NavLink to={`product/${id}`}>{name}</NavLink>
				</li>
			))}
		</ul>
		<Outlet />
	</div>
);

function Newelement() {
	return (
		<div>
			<div>
				<h3>Меню</h3>
				<ul>
					<li>
						<NavLink to="/">Главная</NavLink>
					</li>
					<li>
						<NavLink to="/catalog">Каталог</NavLink>
					</li>
					<li>
						<NavLink to="/contacts">Контакты</NavLink>
					</li>
					<li>
						<NavLink to="/catolog">Продукты</NavLink>
					</li>
				</ul>
			</div>
			<Routes>
				<Route path="/" element={<MainPage />}></Route>
				<Route path="/catalog" element={<Catalog />}></Route>
				<Route path="/contacts" element={<Contacts />}></Route>
				<Route path="/catolog" element={<Catalog />}>
					<Route path="product/:id" element={<Product />} />
				</Route>
				<Route path="*" element={<NotFound />}></Route>
			</Routes>
		</div>
	);
}

export default Newelement;
