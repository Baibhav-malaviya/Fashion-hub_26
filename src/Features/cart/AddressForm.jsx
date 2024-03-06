import { useState } from "react";
import PropTypes from "prop-types";

function AddressForm({ onSubmit }) {
	const [address, setAddress] = useState("");
	const [city, setCity] = useState("");
	const [state, setState] = useState("");
	const [zip, setZip] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		const deliveryAddress = `${address}, ${city}, ${state}, ${zip}`;
		onSubmit(deliveryAddress);
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="max-w-md px-8 pt-6 pb-8 mx-auto mb-4 bg-white rounded shadow-md"
		>
			<div className="mb-4">
				<label
					className="block mb-2 text-sm font-bold text-gray-700"
					htmlFor="address"
				>
					Address
				</label>
				<input
					className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
					id="address"
					type="text"
					value={address}
					onChange={(e) => setAddress(e.target.value)}
					placeholder="Enter address "
				/>
			</div>
			<div className="mb-4">
				<label
					className="block mb-2 text-sm font-bold text-gray-700"
					htmlFor="city"
				>
					City
				</label>
				<input
					className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
					id="city"
					type="text"
					value={city}
					onChange={(e) => setCity(e.target.value)}
					placeholder="Enter city"
				/>
			</div>
			<div className="mb-4">
				<label
					className="block mb-2 text-sm font-bold text-gray-700"
					htmlFor="state"
				>
					State
				</label>
				<input
					className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
					id="state"
					type="text"
					value={state}
					onChange={(e) => setState(e.target.value)}
					placeholder="Enter state"
				/>
			</div>
			<div className="mb-4">
				<label
					className="block mb-2 text-sm font-bold text-gray-700"
					htmlFor="zip"
				>
					Zip Code
				</label>
				<input
					className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
					id="zip"
					type="text"
					value={zip}
					onChange={(e) => setZip(e.target.value)}
					placeholder="Enter zip code"
				/>
			</div>
			<button
				className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
				type="submit"
			>
				Save
			</button>
		</form>
	);
}

AddressForm.propTypes = {
	onSubmit: PropTypes.func,
};

export default AddressForm;
