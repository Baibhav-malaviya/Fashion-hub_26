/* eslint-disable react-refresh/only-export-components */
import { useLoaderData } from "react-router-dom";
import { fetchAllProducts } from "../Service/apiProducts";
import Card from "../Features/product/Card";

function Store() {
	const products = useLoaderData();

	console.log("Products in the store page: ", products);
	return (
		<div>
			<p>This is store page</p>
			{products.map((product) => (
				<Card product={product} key={product._id} />
			))}
		</div>
	);
}

export default Store;

export const loader = async () => {
	if (!localStorage.getItem("isLoggedIn")) return null;
	const products = await fetchAllProducts();
	return products;
};
