import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import Store from "./Pages/Store";
import { loader as storeLoader } from "./Pages/Store";
import About from "./Pages/About";
import Wishlist from "./Pages/Wishlist";
import Cart from "./Pages/Cart";
import { loader as headerLoader } from "./Components/Header";
import Login from "./Features/user/Login";
import Layout from "./Components/Layout";
import PageNotFound from "./Components/PageNotFound";
import Error from "./Components/Error";
import ProtectedRoute from "./Components/ProtectedRoute";
import Order from "./Pages/Order";

const router = createBrowserRouter([
	{
		element: <Layout />,
		loader: headerLoader,
		errorElement: <Error />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/signin",
				element: <Login />,
			},
			{
				path: "/blog",
				element: <Blog />,
			},
			{
				path: "/store",
				element: <Store />,
				loader: storeLoader,
			},
			{
				path: "/order",
				element: <ProtectedRoute Component={Order} />,
			},
			{
				path: "/about",
				element: <About />,
			},
			{
				path: "/wishlist",
				element: <ProtectedRoute Component={Wishlist} />,
			},
			{
				path: "/cart",
				element: <ProtectedRoute Component={Cart} />,
			},
			{
				path: "*",
				element: <PageNotFound />,
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
