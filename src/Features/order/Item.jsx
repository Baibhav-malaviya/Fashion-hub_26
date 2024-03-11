import PropTypes from "prop-types";
import { formatDate, formatName } from "../../Utils/helper";
function Item({ item = { name: "Baibhav" } }) {
	/**
    
    __v: 0
_id: "65bb6833d4228728df2f431a"
createdAt: "2024-02-01T09:45:23.464Z"
orderStatus: "pending"
price: 689
product: Object { _id: "65b61ab2f41e8d3ce0764f9e", name: "t-shirt", description: "this is a half sleeve t-shirt for professional, just for testing", … }
quantity: 3
shippingAddress: "Chitkara University, Rajpura, Punjab"
updatedAt: "2024-02-01T09:45:23.464Z"
user: "65b541bb07b469957a43fe6c"


     */

	return (
		<li className="flex-shrink pb-2 space-y-2 list-none bg-gray-100/50">
			<div className="flex h-24">
				<img className="h-full" src={item.product.productImage} alt="" />
				<div className="flex flex-col justify-between p-2 px-4 font-sans grow">
					<span className="font-semibold">{formatName(item.product.name)}</span>
					<span className="text-sm italic">{item.product.description}</span>
					<span className="text-xs text-gray-400">
						<i className="font-semibold text-black">Id# </i>
						{item._id}
					</span>
				</div>
				<div className="flex flex-col items-start justify-between px-2 py-2 font-cutive-mono">
					<span className="flex flex-col space-y-3 text-xs ">
						<span>Ordered created:{formatDate(item.createdAt)}</span>
						{item.orderStatus === "delivered" ? (
							<span>Delivered Date: {formatDate(item.updatedAt)}</span>
						) : (
							<span>Last Update: {formatDate(item.updatedAt)}</span>
						)}
					</span>
					<span>
						Status:{" "}
						<span
							className={`${
								item.orderStatus === "pending"
									? "bg-yellow-300"
									: "bg-green-300"
							} p-[2px] font-cutive-mono font-bold`}
						>
							{item.orderStatus}
						</span>
					</span>
				</div>
			</div>
		</li>
	);
}

Item.propTypes = {
	item: PropTypes.object,
};

export default Item;
