import { useNavigate, useRouteError } from "react-router-dom";

function Error() {
	const navigate = useNavigate();
	const error = useRouteError();

	return (
		<div className="fixed inset-0 flex items-center justify-center ">
			<h1>
				Something went wrong 😢 :) <br />
			</h1>
			<p>{error.data || error.message}</p>
			<button
				className="block px-3 py-2 ml-3 rounded ring-1 ring-yellow-500 hover:bg-yellow-200 hover:underline"
				onClick={() => navigate(-1)}
			>
				&larr; Go back
			</button>
		</div>
	);
}

export default Error;
