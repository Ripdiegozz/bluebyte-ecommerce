import { useState } from "react";

const initialState = {
	cart: []
}

const useInitialState = () => {
	
	const [state, setState] = useState(initialState);

	const addToCart = (payload) => {
		const productsList = JSON.parse(localStorage.getItem('products')) || [];
		productsList.push(payload)
		localStorage.setItem("products", JSON.stringify(productsList))

		setState({
			...state,
			cart: [...state.cart, payload]
		});
	};

	const removeFromCart = (payload) => {
		const products = JSON.parse(localStorage.getItem("products"));
		const index = products.findIndex((item) => item.id == payload.id);
		products.splice(index, 1);
		localStorage.setItem("products", JSON.stringify(products))

		setState({
			...state,
			cart: state.cart.filter(item => item.id != payload.id)
		})
	}

	return {
		state,
		addToCart,
		removeFromCart
	}
}

export default useInitialState;