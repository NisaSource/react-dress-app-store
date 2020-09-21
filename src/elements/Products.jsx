import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Spinner from '../common/Spinner';
import useFetch from '../services/useFetch';
import NotFound from '../common/NotFound';

export default function Products() {
	const [size, setSize] = useState('');
	const { category } = useParams();

	const { data: products, error, loading } = useFetch(
		'products?category=' + category
	);

	function renderProduct(p) {
		return (
			<div key={p.id} className="product">
				<Link to={`/${category}/${p.id}`} className="mag-col">
					<img src={`/images/${p.image}`} alt={p.name} className="pl-3" />
					<h3>{p.name}</h3>
					<p>${p.price}</p>
				</Link>
			</div>
		);
	}

	const filteredProduct = size
		? products.filter((p) => p.skus.find((s) => s.size === size))
		: products;

	if (error) throw error;
	if (loading) return <Spinner />;
	if (products.length === 0) return <NotFound />;

	return (
		<>
			<section id="filters">
				<label htmlFor="size" className="pb-5 pt-3 ">
					Filter by Size:
				</label>{' '}
				<select
					id="size"
					className="bg-mag-col"
					value={size}
					onChange={(e) => {
						console.log(e.target.value);
						setSize(e.target.value);
					}}
				>
					<option value="">All sizes</option>
					<option value="S">S</option>
					<option value="M">M</option>
					<option value="L">L</option>
					<option value="XL">XL</option>
				</select>
				{size && <h3>Found {filteredProduct.length} items.</h3>}
			</section>
			<section id="products">{filteredProduct.map(renderProduct)}</section>
		</>
	);
}
