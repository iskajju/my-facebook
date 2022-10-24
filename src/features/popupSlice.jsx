import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  Value: 0,
  status: 'idle',

};


export const popupSlice = createSlice({
  name: 'Popup',
  initialState,

  postisOpen: false,
  signUp: false,
  profile: false,
  postId:null,

  reducers: {
    postId: (state, action) => {
        state.postId = action.payload;
    },
    openpost: (state) => {
      state.postisOpen = true;
    },
    opensignup: state => {
      state.signUp = true;
    },
    openProfile: state => {
      state.profile = true;
    },

    // close popupss
    closepost: (state) => {
      state.postisOpen = false;
    },
    closesignup: state => {
      state.signUp = false;
    },
    closeprofile: state => {
      state.profile = false
    }

  },

});

export const { openpost, closepost, opensignup, closesignup, openProfile, closeprofile } = popupSlice.actions; // open & close dispatch


export const selectPost = (state) => state.popup.postisOpen; // selcteor
export const selectSignUp = (state) => state.popup.signUp;
export const selectprofile = state => state.popup.profile;


export default popupSlice.reducer;
