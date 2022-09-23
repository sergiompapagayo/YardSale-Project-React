import React from 'react';
import '@styles/ProductInfo.scss';

const ProductInfo = () => {
	return (
		<aside className="ProductInfo">
  		<div className="ProductInfo__img">
  			<img alt="" id="ProductInfo__image" src="https://images.pexels.com/photos/7796453/pexels-photo-7796453.jpeg?auto=compress&cs=tinysrgb&w=800"/>
  			<div className="ProductInfo_close">
  				<svg xmlns="http://www.w3.org/2000/svg" viewBox='0 0 24 24' width='32' height='32'><path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path></svg>
  				</div>
  			</div>
  			<p className="ProductInfo__price">$20</p>
  			<p className="ProductInfo__name">Aceite de Palo Santo</p>
  			<p className="ProductInfo__description">
          Description
        </p>
      </div>
		</aside>
	);
}

export default ProductInfo;
