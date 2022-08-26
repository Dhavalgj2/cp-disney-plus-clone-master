import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  photo: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserLoginDetails: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.photo = action.payload.photo;
      console.log(state.email);
    },

    setSignOutState: (state) => {
      state.name = null;
      state.email = null;
      state.photo = null;
    },
  },
});

export const userActions = userSlice.actions;

// export const selectUserName = (state) => state.user.name;
// console.log(selectUserName);
// export const selectUserEmail = (state) => state.user.email;
// export const selectUserPhoto = (state) => state.user.photo;

export default userSlice.reducer;
