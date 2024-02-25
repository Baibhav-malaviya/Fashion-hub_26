import { Outlet } from "react-router-dom";

function Main() {
	return (
		<div className="px-2 py-3 sm:py-10 min-h-[800px]">
			<Outlet />
		</div>
	);
}

export default Main;
