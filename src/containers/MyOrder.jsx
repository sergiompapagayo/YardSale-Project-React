import React, { useContext } from 'react';
import OrderItem from '@components/OrderItem';
import AppContext from '@context/AppContext';
import '@styles/MyOrder.scss';
import arrow from '@assets/flechita.svg';

const MyOrder = () => {
	const { state } = useContext(AppContext);

  const sumTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
    const sum = state.cart.reduce(reducer, 0);
    return sum;
  }
	return (
		<aside className="MyOrder">
      <div className="MyOrder-container">
        <div className="MyOrder-title">
          <img src={arrow} alt="arrow" />
          <p>My order</p>
        </div>
        <div className="MyOrder-content">
          {state.cart.map(product => (
            <OrderItem product={product} key={`orderItem-${product.id}`} />
          ))}
          <div className="MyOrder-total">
            <p>
              <span>Total</span>
            </p>
            <p>${sumTotal()}</p>
          </div>
          <button className="primary-button" id="checkout-button">
            Checkout
          </button>
        </div>
      </div>
		</aside>
	);
}

export default MyOrder;
