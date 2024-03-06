import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUser } from "../../Service/apiUser";
// import { getAddress } from "../../services/apiGeocoding";
// function getPosition() {
// 	return new Promise(function (resolve, reject) {
// 		navigator.geolocation.getCurrentPosition(resolve, reject);
// 	});
// }

// export const fetchAddress = createAsyncThunk(
// 	"user/fetchAddress",
// 	async function () {
// 		// 1) We get the user's geolocation position
// 		const positionObj = await getPosition();
// 		const position = {
// 			latitude: positionObj.coords.latitude,
// 			longitude: positionObj.coords.longitude,
// 		};

// 		// 2) Then we use a reverse geocoding API to get a description of the user's address, so we can display it the order form, so that the user can correct it if wrong
// 		const addressObj = await getAddress(position);
// 		const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;

// 		// 3) Then we return an object with the data that we are interested in
// 		// It will go in action.payload
// 		return { position, address };
// 	}
// );

const fetchDetail = createAsyncThunk("user/getUserDetail", async function () {
	return await getUser();
});

const initialState = {
	username: " ",
	profileImage: "",
	status: "idle",
	error: "",
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {},
	extraReducers: (builder) =>
		builder
			.addCase(fetchDetail.pending, (state) => {
				state.status = "loading";
			})
			.addCase(fetchDetail.fulfilled, (state, action) => {
				state.status = "idle";
				state.username = action.payload.userName;
				state.profileImage = action.payload.profileImage;
			})
			.addCase(fetchDetail.rejected, (state, action) => {
				state.status = "error";
				state.error = action.error.message + " Fill up this field yourself";
			}),
});

export const { getUserDetail } = userSlice.actions;

export default userSlice.reducer;
