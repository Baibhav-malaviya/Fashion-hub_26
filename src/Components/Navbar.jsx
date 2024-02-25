import { NavLink } from "react-router-dom";

function Navbar() {
	return (
		<nav className="flex items-center justify-center space-x-5 font-semibold">
			<NavLink to={"/store"} className="hover:text-black hover:scale-105">
				Store
			</NavLink>
			<NavLink to={"/"} className="hover:text-black hover:scale-105">
				Home
			</NavLink>
			<NavLink to={"blog"} className="hover:text-black hover:scale-105">
				Blog
			</NavLink>
			<NavLink to={"about"} className="hover:text-black hover:scale-105">
				About Us
			</NavLink>
		</nav>
	);
}

export default Navbar;
