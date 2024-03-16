function WaveLoader({ message = "", bgColor = "bg-transparent" }) {
	return (
		<span className={`p-[3px] font-semibold  rounded-lg opacity-70 ${bgColor}`}>
			<span>{message} </span>
			<span className="loading-dots">
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
			</span>
		</span>
	);
}

export default WaveLoader;
