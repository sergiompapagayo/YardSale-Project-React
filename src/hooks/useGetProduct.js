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

  return products;
};
