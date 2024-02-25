function Button({ children, size = "lg", type = "fill", className = "" }) {
	if (size === "sm") {
		return (
			<button
				className={`px-3 py-2  rounded-md  font-semibold hover:scale-105 transition-all ${className} ${
					type === "fill"
						? "bg-black text-white"
						: "bg-transparent border-2 border-black text-black"
				}`}
			>
				{children}
			</button>
		);
	}

	return (
		<button
			className={`px-4 py-3  rounded-md  font-bold hover:scale-105 transition-all ${className} ${
				type === "fill"
					? "bg-black text-white"
					: "bg-transparent border-2 border-black text-black"
			}`}
		>
			{children}
		</button>
	);
}

export default Button;
