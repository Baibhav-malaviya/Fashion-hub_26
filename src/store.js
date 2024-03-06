import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Features/user/userSlice";
import cartReducer from "./Features/cart/cartSlice";
import wishlistReducer from "./Features/wishlist/wishlistSlice";

const store = configureStore({
	reducer: {
		user: userReducer,
		cart: cartReducer,
		wishlist: wishlistReducer,
	},
});

export default store;
