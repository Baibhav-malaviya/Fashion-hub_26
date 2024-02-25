import { Bug } from "lucide-react";
import Logo from "./Logo";

function PageNotFound() {
	return (
		<div className="h-full w-full flex items-center justify-center space-x-3 text-red-600 text-3xl ">
			<span>This page is not found</span> <Bug />
			<Logo />
		</div>
	);
}

export default PageNotFound;
