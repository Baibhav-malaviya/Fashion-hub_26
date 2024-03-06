import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCart } from "../../Service/apiCart";

export const fetchCartData = createAsyncThunk(
	"cart/fetchCartData",
	async () => {
		const response = await getCart();
		//   console.log("This is the response from the CART_SLICE:", response[0]);
		return response[0].items;
	}
);

const initialState = {
	cart: [],
	status: "idle",
	error: "",
};
const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		add(state, action) {
			//! action.payload = newItem
			state.cart.push(action.payload);
		},
		remove(state, action) {
			//! action.payload = id
			state.cart = state.cart.filter((item) => item._id !== action.payload);
		},
		increaseItemQuantity(state, action) {
			//! action.payload = id
			console.log("Inside the increaseItemQuantity ");
			const currentItem = state.cart.find(
				(item) => item._id === action.payload
			);
			currentItem.quantity += 1;
		},
		decreaseItemQuantity(state, action) {
			//! action.payload = id
			const currentItem = state.cart.find(
				(item) => item._id === action.payload
			);
			if (currentItem.quantity === 1) {
				cartSlice.caseReducers.remove(state, action);
			}
			currentItem.quantity -= 1;
		},
		clearCart(state) {
			state.cart = [];
		},
	},
	extraReducers: (builder) =>
		builder
			.addCase(fetchCartData.pending, (state) => {
				state.status = "loading";
			})
			.addCase(fetchCartData.fulfilled, (state, action) => {
				state.status = "idle";
				state.cart = action.payload;
			})
			.addCase(fetchCartData.rejected, (state, action) => {
				(state.status = "error"),
					(state.error =
						action.error.message + " PROBLEM IN FETCHING THE PRODUCTS.");
			}),
});

export const {
	add,
	remove,
	increaseItemQuantity,
	decreaseItemQuantity,
	clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
