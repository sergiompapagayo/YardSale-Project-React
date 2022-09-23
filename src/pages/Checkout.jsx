import React from 'react';
import OrderItem from '@components/OrderItem';
import '@styles/Checkout.scss';

const Checkout = () => {
	return (
		<div className="Checkout">
			<div className="Checkout-container">
				<h1 className="title">My order</h1>
				<div className="Checkout-content">
					<div className="order">
						<p>
							<span>03.25.21</span>
							<span>6 articles</span>
						</p>
						<p>$560.00</p>
						<div>
							<svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M5.99864 5.94724C5.99234 5.84603 5.95236 5.74983 5.88506 5.67396L1.79607 1.13112C1.68716 1.00945 1.52152 0.955277 1.36175 0.989076C1.20199 1.02287 1.07248 1.13949 1.02218 1.29484C0.971889 1.45018 1.00848 1.62056 1.11813 1.74157L4.9338 5.97919L1.11813 10.2168C1.00848 10.3378 0.971887 10.5082 1.02218 10.6635C1.07248 10.8189 1.20199 10.9355 1.36175 10.9693C1.52152 11.0031 1.68716 10.9489 1.79607 10.8273L5.88506 6.28441C5.96718 6.19213 6.00819 6.0704 5.99864 5.94724Z" fill="#BFBFBF" stroke="#BFBFBF" stroke-width="1.2"/>
							</svg>
						</div>
					</div>
				</div>
				<OrderItem />
			</div>
		</div>
	);
}

export default Checkout;
