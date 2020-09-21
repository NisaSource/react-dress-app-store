import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from './common/Footer';
import Header from './common/Header';
import Products from './elements/Products';
import Detail from './elements/Detail';
import Cart from './elements/Cart';
import Checkout from './elements/Checkout';
import Home from './common/Home';

import './App.css';

export default function App() {
	return (
		<>
			<div className="container content">
				<Header />
				<main>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/:category" element={<Products />} />
						<Route path="/:category/:id" element={<Detail />} />
						<Route path="/cart" element={<Cart />} />
						<Route path="/checkout" element={<Checkout />} />
					</Routes>
				</main>
			</div>
			<Footer />
		</>
	);
}
