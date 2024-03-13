import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import { lazy } from "react";

// import Home from "./Pages/Home";
const Home = lazy(() => import("./Pages/Home"));
// import Blog from "./Pages/Blog";
const Blog = lazy(() => import("./Pages/Blog"));
// import Store from "./Pages/Store";
const Store = lazy(() => import("./Pages/Store"));
import { loader as storeLoader } from "./Pages/Store";
// const { loader: storeLoader } = lazy(() => import("./Pages/Store"));
// import About from "./Pages/About";
const About = lazy(() => import("./Pages/About"));
// import Wishlist from "./Pages/Wishlist";
const Wishlist = lazy(() => import("./Pages/Wishlist"));
// import Cart from "./Pages/Cart";
const Cart = lazy(() => import("./Pages/Cart"));
import { loader as headerLoader } from "./Components/Header";
// const { loader: headerLoader } = lazy(() => import("./Components/Header"));
// import Login from "./Features/user/Login";
const Login = lazy(() => import("./Features/user/Login"));
// import Layout from "./Components/Layout";
const Layout = lazy(() => import("./Components/Layout"));
// import PageNotFound from "./Components/PageNotFound";
const PageNotFound = lazy(() => import("./Components/PageNotFound"));
// import Error from "./Components/Error";
const Error = lazy(() => import("./Components/Error"));
// import ProtectedRoute from "./Components/ProtectedRoute";
const ProtectedRoute = lazy(() => import("./Components/ProtectedRoute"));
// import Order from "./Pages/Order";
const Order = lazy(() => import("./Pages/Order"));
// import Checkout from "./Features/cart/Checkout";
const Checkout = lazy(() => import("./Features/cart/Checkout"));
// import Loader from "./Components/Loader";
const Loader = lazy(() => import("./Components/Loader"));

const router = createBrowserRouter([
	{
		element: (
			<Suspense fallback={<Loader />}>
				{" "}
				<Layout />
			</Suspense>
		),
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
				path: "/checkout",
				element: <ProtectedRoute Component={Checkout} />,
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
