import { Bug } from "lucide-react";
import Logo from "./Logo";

function PageNotFound() {
	return (
		<div className="flex items-center justify-center w-full h-full space-x-3 text-3xl text-red-600 ">
			<span>
				This page is not found <span className="mx-2 text-gray-600">|</span>{" "}
				Under development
			</span>{" "}
			<Bug />
			<Logo />
		</div>
	);
}

export default PageNotFound;
