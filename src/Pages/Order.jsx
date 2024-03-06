import { useEffect, useState } from "react";
import { getAllOrders, getCurrentOrder } from "../Service/apiOrders";
import { History, RefreshCcw } from "lucide-react";

function Order() {
	const [refresh, setRefresh] = useState(false);
	const [refreshing, setRefreshing] = useState(false);
	const [currOrders, setCurrOrders] = useState([]);
	console.log(currOrders);
	useEffect(() => {
		(async () => {
			setRefreshing(true);
			setCurrOrders(await getCurrentOrder());
			setRefreshing(false);
		})();
	}, [refresh]);

	const handleHistory = async () => {
		setCurrOrders(await getAllOrders());
	};

	console.log("REFRESH TOGGLE: ", refresh);

	return (
		<div className="relative">
			<div className="flex items-center justify-end space-x-2 ">
				{" "}
				<button
					className="flex items-center justify-center p-2 py-[3px] rounded space-x-2 text-xs font-semibold bg-gray-200 ring-1 ring-gray-400"
					onClick={() => handleHistory()}
				>
					<History size={16} strokeWidth={2} />
					<span>History</span>
				</button>
				<button
					className="  flex items-center justify-center p-2 py-[3px] rounded space-x-2 text-xs font-semibold bg-gray-200 ring-1 ring-gray-400"
					onClick={() => setRefresh(!refresh)}
				>
					<RefreshCcw
						size={16}
						strokeWidth={2}
						className={`${refreshing ? "animate-spin" : ""}`}
					/>
					<span>Refresh</span>
				</button>
			</div>
		</div>
	);
}

export default Order;
