import { Link } from "react-router-dom";

function Logo() {
	return (
		<Link
			to={"/"}
			className="flex items-center justify-center space-x-2 text-black sm:static hover:-rotate-2 hover:scale-105"
		>
			<img className="w-8 h-8 rounded-xl" src="/Logo.jpg" alt="" />
			<p className="text-2xl hidden sm:block font-bold bg-gradient-to-r from-stone-900 via-[#FFD95A]  to-stone-500 text-transparent bg-clip-text">
				VogueLane
			</p>
		</Link>
	);
}

export default Logo;
