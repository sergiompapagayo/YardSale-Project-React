import React from 'react';
import ProductInfo from '../components/ProductInfo';
import '../styles/ProductDetail.scss';

const ProductDetail = () => {
	return (
		<aside className="ProductDetail">
			<div className="ProductDetail-info">
				<ProductInfo />
				<button className="primary-button" id="add-to-cart-button">
					<svg xmlns="http://www.w3.org/2000/svg" widht="25" height="25" viewBox="0 0 30 30" fill="white">
						<path d="M29.93,5.32c-.83,3.23-1.66,6.45-2.49,9.67-.22,.83-.79,1.28-1.65,1.28-4.62,0-9.24,0-13.86,0h-.01c-.55,0-1.01-.4-1.12-.94-.01-.04-.02-.08-.02-.13-.5-2.89-1-5.77-1.49-8.66-.12-.67-.23-1.35-.34-2.03-.01-.04-.02-.08-.02-.13,0-.04,0-.08,0-.12,0-.65,.52-1.19,1.15-1.19H28.31c.84,0,1.4,.43,1.63,1.27,.09,.32,.08,.65,0,.98Z"/>
						<path d="M29.11,21.11c0,.76-.56,1.32-1.37,1.39-.11,0-.23,0-.34,0H9.4c-1.13,0-1.54-.37-1.75-1.5-1.09-5.96-2.18-11.92-3.27-17.89-.04-.23-.13-.31-.37-.3-.86,.02-1.72,.02-2.58,0-.58-.01-1.05-.24-1.31-.82C-.11,1.45,0,.98,.31,.53,.59,.14,1.01,.02,1.45,.01,2.76,0,4.08,0,5.39,.01c.8,0,1.28,.45,1.44,1.26,.04,.2,.09,.4,.14,.6,.23,1.31,.46,2.63,.7,3.94,.68,3.73,1.36,7.47,2.04,11.2,0,.04,.04,.07,.05,.1,.14,.78,.29,1.56,.41,2.34,.05,.3,.25,.23,.42,.23,5.41,0,10.81,0,16.22,0,.3,0,.61-.02,.91,0,.82,.05,1.38,.64,1.38,1.41Z"/>
						<path d="M12.73,27.18c0,1.52-1.23,2.81-2.71,2.82-1.47,.02-2.73-1.27-2.74-2.79-.01-1.52,1.23-2.81,2.71-2.82,1.47-.02,2.73,1.27,2.74,2.8Z"/>
						<path d="M29.11,27.2c0,1.52-1.26,2.81-2.73,2.8-1.48,0-2.73-1.3-2.72-2.81,0-1.52,1.26-2.81,2.73-2.8,1.48,0,2.73,1.3,2.72,2.82Z"/>
					</svg> Add to cart
				</button>
			</div>
		</aside>
		);
}

export default ProductDetail;