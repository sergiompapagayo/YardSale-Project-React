import React, { useContext } from 'react';
import AppContext from '@context/AppContext';
import '@styles/ProductItem.scss';

const ProductItem = ({ product }) => {
	const { addToCart } = useContext(AppContext);

	const handleClick = item => {
		addToCart(item);
	}

	return (
		<div className="ProductItem">
			<div className="ProductItem-info">
				<img src={product.images[0]} alt={product.title} className="ProductItem-info__img"/>
				<p className="ProductItem-info__price">${product.price}</p>
				<p className="ProductItem-info__name">{product.title}</p>
				<div className="add-to-cart" onClick={() => handleClick(product)}>
				</div>
			</div>
		</div>
	);
}

export default ProductItem;
