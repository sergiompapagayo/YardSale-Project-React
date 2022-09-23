import React, { useContext } from 'react';
import AppContext from '@context/AppContext';
import '@styles/OrderItem.scss';
import close from '@assets/icon_close.svg';

const OrderItem = ({ product }) => {
	const { removeFromCart } = useContext(AppContext);

	const handleRemove = item => {
		removeFromCart(item);
	}

	return (
		<div className="OrderItem">
			<figure>
				<img src={product.images[0]} alt="Esencia"/>
			</figure>
			<p>{product.title}</p>
			<p>${product.price}</p>
			<img src={close} alt="close" onClick={() => handleRemove(product)}/>
		</div>
	);
}


export default OrderItem;
