import React from 'react';
import ProductItem from '@components/ProductItem';
import useGetProducts from '@hooks/useGetProducts';
import '@styles/ProductList.scss';


const ProductList = () => {
	const products = useGetProducts();
	return (
    <main className="main-container">
      <section className="ProductList">
				{products.map(product => (
					<ProductItem product={product} key={product.id} />
				))}
			</section>
		</main>
	);
}

export default ProductList;
