import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import Store from "./Pages/Store";
import About from "./Pages/About";
import Wishlist from "./Pages/Wishlist";
import Cart from "./Pages/Cart";

import { loader as headerLoader } from "./Components/Header";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Features/user/Login";
import Layout from "./Components/Layout";
import PageNotFound from "./Components/PageNotFound";
import Error from "./Components/Error";

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
			},
			{
				path: "/about",
				element: <About />,
			},
			{
				path: "/wishlist",
				element: <Wishlist />,
			},
			{
				path: "/cart",
				element: <Cart />,
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
