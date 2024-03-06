import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getWishList } from "../../Service/apiWishlist";
// import { getWishList } from "../../Service/apiWishlist";

export const fetchWishlistData = createAsyncThunk(
	"wishlist/fetchWishlistData",
	async () => {
		const response = await getWishList();
		//   console.log("This is the response from the wishlist_SLICE:", response[0]);
		return response[0].items;
	}
);

const initialState = {
	wishlist: [],
	status: "idle",
	error: "",
};
const wishlistSlice = createSlice({
	name: "wishlist",
	initialState,
	reducers: {
		add(state, action) {
			//! action.payload = newItem
			state.wishlist.push(action.payload);
		},
		remove(state, action) {
			//! action.payload = id
			state.wishlist = state.wishlist.filter(
				(item) => item._id !== action.payload
			);
		},
		clearWishlist(state) {
			state.wishlist = [];
		},
	},
	extraReducers: (builder) =>
		builder
			.addCase(fetchWishlistData.pending, (state) => {
				state.status = "loading";
			})
			.addCase(fetchWishlistData.fulfilled, (state, action) => {
				state.status = "idle";
				state.wishlist = action.payload;
			})
			.addCase(fetchWishlistData.rejected, (state, action) => {
				(state.status = "error"),
					(state.error =
						action.error.message + " PROBLEM IN FETCHING THE PRODUCTS.");
			}),
});

export const { add, remove, clearWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
