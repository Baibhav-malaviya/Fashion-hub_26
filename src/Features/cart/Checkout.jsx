import PropTypes from "prop-types";

function Checkout({ deliveryAddress }) {
	const addressLines = deliveryAddress.split(", ");
	console.log("Checkout: ", deliveryAddress);

	return (
		<div className="w-1/2">
			{deliveryAddress !== "" && (
				<div className="p-4 bg-gray-100 rounded-md shadow-md">
					<p className="text-xs bg-yellow-100 opacity-75">
						**Your name and mobile is taken from your Account
					</p>
					<h2 className="mb-2 text-lg font-semibold">Shipping Address</h2>
					<div className="flex p-2 space-x-2 text-gray-500 bg-white rounded">
						{addressLines.map((line, index) => (
							<p key={index} className="mb-1">
								{line}
							</p>
						))}
					</div>
				</div>
			)}
		</div>
	);
}

Checkout.propTypes = {
	deliveryAddress: PropTypes.string,
};

export default Checkout;
