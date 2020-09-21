import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useFetch from '../services/useFetch';
import Spinner from '../common/Spinner';
import NotFound from '../common/NotFound';
import { useCart } from '../hooks/cartContext';

export default function Detail() {
	const { dispatch } = useCart();
	const { id } = useParams();
	const navigate = useNavigate();
	const [sku, setSku] = useState('');
	const { data: product, error, loading } = useFetch(`products/${id}`);

	if (loading) return <Spinner />;
	if (!product) return <NotFound />;
	if (error) throw error;

	return (
		<div id="detail">
			<h1>{product.name}</h1>
			<p>{product.description}</p>
			<p id="price">${product.price}</p>
			<select id="size" value={sku} onChange={(e) => setSku(e.target.value)}>
				<option value="">Size available</option>
				{product.skus.map((s) => (
					<option key={s.sku} value={s.sku}>
						{s.size}
					</option>
				))}
			</select>
			<p className="pt-4">
				<button
					disabled={!sku}
					className="btn btn-dark bg-mag-col"
					onClick={() => {
						dispatch({ type: 'addToCart', id, sku });
						navigate('/cart');
					}}
				>
					Add to cart
				</button>
			</p>
			<img src={`/images/${product.image}`} alt={product.category} />
		</div>
	);
}
