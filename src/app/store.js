import { configureStore } from '@reduxjs/toolkit';
import userslice from "../features/userSlice"
import popupslice from "../features/popupSlice"
export const store = configureStore({
  reducer: {
    user: userslice,
    popup : popupslice,
  },
});
