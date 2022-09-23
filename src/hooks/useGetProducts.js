import { useEffect, useState } from "react";
import axios from "axios";

const api = axios.create({
  baseURL: 'http://api.escuelajs.co/api/v1/products',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  }
});

const useGetProducts = () => {
  const [products, setProducts] = useState([]);

	useEffect(() => {
		getProducts();
	}, []);

	const getProducts = async () => {
		try {
			const response = await api.get();
			setProducts(response.data);
		} catch(error) {
			alert(error);
		}
	};
  products.forEach(product => {
    const url = product.images[0];
    if(url === '' || !url.includes('https://')) {
      product.images[0] = 'https://images.pexels.com/photos/5420864/pexels-photo-5420864.jpeg?auto=compress&cs=tinysrgb&w=1200';
    }
  });
  return products;
};

export default useGetProducts;
