import { Link } from "react-router-dom";
import Button from "../Components/Button";

function Home() {
	return (
		<div className="relative flex flex-col w-full space-y-10 text-green-400 sm:flex-row">
			<div className="w-full h-full px-10 sm:w-1/2">
				<p className="flex flex-col">
					<span className="mt-10 text-lg font-semibold text-stone-600">
						welcome to VougeLine
					</span>{" "}
					<span className="text-4xl sm:text-6xl font-cutive-mono mt-10 p font-extrabold bg-gradient-to-r from-stone-300 via-[#FFD95A]  to-gray-400 text-transparent bg-clip-text">
						Discover the Essence of Fashion
					</span>
				</p>
				<p className="mt-10 text-sm font-semibold text-black">
					Experience the allure of luxury and the thrill of discovery as you
					navigate through our virtual showroom.{" "}
				</p>
				<div className="mt-10 sm:space-x-4 group">
					<Link to={"/store"}>
						<Button className="scale-75 sm:scale-100">Start shopping</Button>
					</Link>
					<Link to={"/cart"}>
						<Button type="border" className="scale-75 sm:scale-100">
							Order Now
						</Button>
					</Link>
				</div>
			</div>
			<div className="w-full h-full sm:w-1/2">
				<img className="w-full h-full" src="/Fashion_01.jpg" alt="" />
			</div>
			<img
				className="absolute scale-75 opacity-75 right-10 sm:right-16 -bottom-32 sm:-bottom-28 w-52 sm:scale-100"
				src="/Fashion_02.jpg"
				alt=""
			/>
		</div>
	);
}

export default Home;
