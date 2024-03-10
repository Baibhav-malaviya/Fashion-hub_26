/* eslint-disable react-refresh/only-export-components */
import { Swiper, SwiperSlide } from "swiper/react";
import {
	Navigation,
	Pagination,
	Scrollbar,
	A11y,
	Autoplay,
} from "swiper/modules";
import "swiper/css";

import "swiper/css/bundle";

import { useLoaderData, useNavigation } from "react-router-dom";
import { fetchAllProducts } from "../Service/apiProducts";
import Card from "../Features/product/Card";
import Loader from "../Components/Loader";
import { useEffect, useState } from "react";
import {
	ArrowDownNarrowWide,
	ArrowUpNarrowWide,
	MoveLeft,
	MoveRight,
} from "lucide-react";
import Poster from "../Features/product/Poster";
import { getProductByCategory } from "../Service/apiProducts";

function Store() {
	const posters = [
		{
			name: "watches",
			offer: 50,
			imgUri:
				"C:Users\baibhDownloadsWhatsApp Image 2024-03-07 at 15.20.43_79379d84.jpg",
		},
		{
			name: "t-shirt",
			offer: 90,
			imgUri: "",
		},
		{
			name: "jacket",
			offer: 30,
			imgUri: "",
		},
	];
	// let products = useLoaderData() || [];
	const [products, setProducts] = useState(useLoaderData() || []);
	// const result = products;
	const {
		hasNextPage,
		hasPrevPage,
		limit,
		nextPage,
		page: currPage,
		pagingCounter,
		prevPage,
		totalDocs,
		totalPages,
		docs,
	} = products;

	console.log("PRODUCTS: ", products);
	const navigation = useNavigation();
	const [page, setPage] = useState(1);
	const [sortOption, setSortOption] = useState("");
	const [sortOrder, setSortOrder] = useState("asc");
	const [isLoading, setIsLoading] = useState(false);
	const [title, setTitle] = useState("");

	useEffect(() => {
		(async () => {
			console.log("Current PAGE: ", page);
			setIsLoading(true);
			setProducts(await fetchAllProducts(page));
			setIsLoading(false);
		})();
	}, [page]);

	const handleCategoryProduct = async (query) => {
		setIsLoading(true);
		setTitle(query);
		const docs = await getProductByCategory(query);
		setProducts({ docs });
		setIsLoading(false);
	};

	const sortedProducts = () => {
		switch (sortOption) {
			case "name":
				return products.docs.slice().sort((a, b) => {
					if (sortOrder === "asc") {
						return a.name.localeCompare(b.name);
					} else {
						return b.name.localeCompare(a.name);
					}
				});
			case "price":
				return products.docs.slice().sort((a, b) => {
					if (sortOrder === "asc") {
						return a.price - b.price;
					} else {
						return b.price - a.price;
					}
				});
			case "new":
				return products.docs.slice().sort((a, b) => {
					if (sortOrder === "asc") {
						return new Date(a.updatedAt) - new Date(b.updatedAt);
					} else {
						return new Date(b.updatedAt) - new Date(a.updatedAt);
					}
				});
			default:
				return products.docs;
		}
	};

	if (navigation.state === "loading" || isLoading) return <Loader />;

	// console.log("Products in the store page: ", products);
	return (
		<div>
			<Swiper
				modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
				spaceBetween={10}
				slidesPerView={2}
				autoplay={{ delay: 1500 }}
				loop={true}
				grabCursor={true}
				speed={1500}
				navigation
				className="relative"
				pagination={{ clickable: true }}
				scrollbar={{ draggable: true }}
			>
				{posters.map((poster) => (
					<SwiperSlide key={poster.id}>
						<Poster poster={poster} />
					</SwiperSlide>
				))}
			</Swiper>
			{/* //! HANDLING THE CATEGORY CARD */}
			<div className="flex w-full my-3 space-x-4 overflow-x-scroll h-aut0">
				<div
					className="relative inline-block w-full overflow-hidden shadow-md cursor-pointer group rounded-xl h-60 sm:w-96"
					onClick={() => handleCategoryProduct("sport")}
				>
					<img
						className="absolute inset-0 transition-all duration-500 -z-10 group-hover:scale-105"
						src="sport_category.jpeg"
						alt=""
					/>
					<p className="w-full h-full text-4xl font-bold text-orange-400 group-hover:bg-orange-50/0 bg-orange-200/30 font-caveat">
						<span className="pt-6 pl-6 -rotate-12">
							Sport <br /> <span className="ml-4">Related</span>{" "}
						</span>
					</p>
				</div>

				<div
					className="relative inline-block w-full overflow-hidden shadow-md cursor-pointer group rounded-xl h-60 sm:w-96"
					onClick={() => handleCategoryProduct("shoes")}
				>
					<img
						className="absolute inset-0 transition-all duration-300 -z-10 group-hover:scale-105"
						src="public/poster_product_01.avif"
						alt=""
					/>
					<p className="w-full h-full text-4xl font-bold text-orange-400 group-hover:bg-orange-50/0 bg-orange-200/30 font-caveat">
						<span className="pt-6 pl-6 rotate-12">
							Trending <br /> <span className="ml-4">Shoes</span>{" "}
						</span>
					</p>
				</div>

				<div
					className="relative inline-block w-full overflow-hidden shadow-md cursor-pointer group rounded-xl h-60 sm:w-96"
					onClick={() => handleCategoryProduct("women")}
				>
					<img
						className="absolute inset-0 transition-all duration-300 -z-10 group-hover:scale-105"
						src="/Fashion_01.jpg"
						alt=""
					/>
					<p className="w-full h-full text-4xl font-bold text-orange-400 group-hover:bg-orange-50/0 bg-orange-200/30 font-caveat">
						<span className="pt-6 pl-6 rotate-12">
							For <br /> <span className="ml-4">Women</span>{" "}
						</span>
					</p>
				</div>

				<div
					className="relative inline-block w-full overflow-hidden shadow-md cursor-pointer group rounded-xl h-60 sm:w-96"
					onClick={() => handleCategoryProduct("Cosmetic")}
				>
					<img
						className="absolute inset-0 transition-all duration-300 -z-10 group-hover:scale-105"
						src="cosmetic_category.jpg"
						alt=""
					/>
					<p className="w-full h-full text-4xl font-bold text-orange-400 group-hover:bg-orange-50/0 bg-orange-200/30 font-caveat">
						<span className="pt-6 pl-6 rotate-12">
							Cosmetic <br /> <span className="ml-4">Product</span>{" "}
						</span>
					</p>
				</div>
			</div>

			<div className="flex items-center justify-end px-4 my-3 space-x-3">
				<button
					onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
					className="flex items-center justify-center p-2 py-[3px] rounded space-x-2 text-lg cursor-pointer bg-gray-200 ring-1 ring-gray-400"
				>
					{sortOrder === "asc" ? (
						<ArrowDownNarrowWide />
					) : (
						<ArrowUpNarrowWide />
					)}
				</button>{" "}
				<select
					value={sortOption}
					onChange={(e) => setSortOption(e.target.value)}
					className="flex items-center justify-center p-2 py-[3px] rounded space-x-2 text-lg cursor-pointer bg-gray-200 ring-1 ring-gray-400"
				>
					<option value="">SortBy</option>
					<option value="name">Name</option>
					<option value="price">Price</option>
					<option value="new">New</option>

					{/* Add more sorting options as needed */}
				</select>
			</div>
			<section>
				<div className="my-4 font-bold text-center text-orange-500 pb-2 [text-shadow:_0_3px_0_rgb(0_0_0_/_40%)] text-7xl font-caveat ">
					<span>{title}</span>
				</div>
				<div className="flex flex-wrap justify-center gap-6 sm:justify-between sm:px-12 md:px-20">
					{sortedProducts().map((product) => (
						<Card product={product} key={product._id} />
					))}
				</div>

				<div className="flex justify-between px-10 mt-5">
					<MoveLeft
						size={40}
						className={`p-2 rounded-full shadow-md hover:cursor-pointer ${
							!hasPrevPage && "invisible"
						}`}
						onClick={() => {
							setPage((page) => page - 1);
							// setPage(prevPage);
						}}
					/>
					<MoveRight
						size={40}
						className={`p-2 rounded-full shadow-md hover:cursor-pointer ${
							!hasNextPage && "invisible"
						}`}
						onClick={() => {
							setPage((page) => page + 1);
							// setPage(nextPage);
						}}
					/>
				</div>
			</section>
		</div>
	);
}

export default Store;

export const loader = async () => {
	if (!localStorage.getItem("isLoggedIn")) return null;
	const products = await fetchAllProducts(1);
	return products;
};
