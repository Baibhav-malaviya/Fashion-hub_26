function Spinner() {
	return (
		<div className="relative z-50 w-10 h-10 bg-black rounded-full animate-spin ">
			<Dot className="top-2 left-2" />
			<Dot className="top-2 right-2" />
			<Dot className="bottom-2 right-2" />
			<Dot className="bottom-2 left-2" />
		</div>
	);
}

function Dot({ className = "" }) {
	return (
		<div
			className={`w-2 h-2 absolute bg-gray-300 rounded-full ${className}`}
		></div>
	);
}

export default Spinner;
