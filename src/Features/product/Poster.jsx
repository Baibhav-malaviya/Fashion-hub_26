import PropTypes from "prop-types";
function Poster({ from = "from-gray-600", to = "to-gray-200", poster }) {
	// const {} = poster;
	return (
		<div
			className={`relative overflow-hidden   h-36 md:h-56 w-full md:w-[500px] bg-gradient-to-r ${from} ${to}`}
		>
			<div className="inline-block absolute left-0 top-[50%] -translate-y-[50%] -translate-x-[50%] bg-white rounded-full h-1/2 aspect-square"></div>
			<div className="flex items-center justify-between h-full mx-16 space-x-2">
				{/* <img src="public/Poster1.png" className="h-full " alt="" /> */}
				<div className="flex-grow h-full pt-6 ">
					<div className="mb-6 text-4xl font-extrabold text-transparent bg-gradient-to-r from-stone-200 via-slate-400 to-stone-600 bg-clip-text -rotate-12">
						{/* "text-transparent bg-gradient-to-r from-red-500 to-blue-500" */}
						Special <br />
						Offer
					</div>
					<div className="flex items-center justify-center h-20 p-2 font-semibold bg-white rounded-full aspect-square">
						{" "}
						Upto {poster.offer}% Off
					</div>
				</div>
				<img
					src="public/product-5.png"
					className="h-full p-2 scale-[2.5] -rotate-45 mr-5 mt-4"
					alt=""
				/>
			</div>
			<div className="inline-block absolute right-0 top-[50%] -translate-y-[50%] translate-x-[50%] bg-white rounded-full h-1/2 aspect-square"></div>
		</div>
	);
}
Poster.propTypes = {
	from: PropTypes.string,
	to: PropTypes.string,
	poster: PropTypes.object,
};

export default Poster;
