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
import { useState } from "react";
import { ArrowDownNarrowWide, ArrowUpNarrowWide } from "lucide-react";
import Poster from "../Features/product/Poster";

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
	const products = useLoaderData();
	const navigation = useNavigation();
	const [sortOption, setSortOption] = useState("");
	const [sortOrder, setSortOrder] = useState("asc");
	const sortedProducts = () => {
		switch (sortOption) {
			case "name":
				return products.slice().sort((a, b) => {
					if (sortOrder === "asc") {
						return a.name.localeCompare(b.name);
					} else {
						return b.name.localeCompare(a.name);
					}
				});
			case "price":
				return products.slice().sort((a, b) => {
					if (sortOrder === "asc") {
						return a.price - b.price;
					} else {
						return b.price - a.price;
					}
				});
			case "new":
				return products.slice().sort((a, b) => {
					if (sortOrder === "asc") {
						return new Date(a.updatedAt) - new Date(b.updatedAt);
					} else {
						return new Date(b.updatedAt) - new Date(a.updatedAt);
					}
				});
			default:
				return products;
		}
	};

	console.log("Sorted Products: ", sortedProducts());
	if (navigation.state === "loading") return <Loader />;

	// console.log("Products in the store page: ", products);
	return (
		<div>
			{/* <div className="w-screen text-white rounded-lg "> */}
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
			<section className="flex flex-wrap gap-6">
				{sortedProducts().map((product) => (
					<Card product={product} key={product._id} />
				))}
			</section>
		</div>
	);
}

export default Store;

export const loader = async () => {
	if (!localStorage.getItem("isLoggedIn")) return null;
	const products = await fetchAllProducts();
	return products;
};
