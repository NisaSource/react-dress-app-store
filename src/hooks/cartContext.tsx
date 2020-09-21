import React, { useReducer, useEffect, useContext } from 'react';
import cartReducer from './cartReducer';

const CartContext = React.createContext(null);

let initCart: any;
try {
	initCart = JSON.parse(localStorage.getItem('cart') as string) ?? [];
} catch {
	console.error('The cart could not be parsed into JSON.');
	initCart = [];
}

export function CartProvider(props: any) {
	const [cart, dispatch] = useReducer(cartReducer, initCart);
	useEffect(() => localStorage.setItem('cart', JSON.stringify(cart)), [cart]);

	return (
		<CartContext.Provider value={{ cart, dispatch } as any}>
			{props.children}
		</CartContext.Provider>
	);
}

export function useCart() {
	const context = useContext(CartContext);
	if (!context) {
		throw new Error(
			'useCart must be used within a CartProvider. Wrap a parent component in <CartProvider> to fix this error.'
		);
	}
	return context;
}
