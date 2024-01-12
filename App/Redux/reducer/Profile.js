import { createSlice } from '@reduxjs/toolkit';
import { getProfile, putProfile, updateProfile } from '../Thunk/Profile';

export const ProfileSlice = createSlice({
    name: 'profile',
    initialState: {
        putProfileData: [],
        profileDataLoading: false,

        getProfileData: [],
        getProfileDataLoading: false,

        profilePictureImage: [],
        profilePictureImageLoading: false
    },

    extraReducers: (builder) => {
        builder
            .addCase(putProfile.pending, (state, action) => {
                profileDataLoading = true
            })
            .addCase(putProfile.fulfilled, (state, action) => {
                profileDataLoading = false,
                    state.putProfileData = action.payload
            })
            .addCase(putProfile.rejected, (state, action) => {
                profileDataLoading = false
            })


            .addCase(getProfile.pending, (state, action) => {
                getProfileDataLoading = true
            })
            .addCase(getProfile.fulfilled, (state, action) => {
                getProfileDataLoading = false,
                // console.log("action payload :----", action.payload);
                state.getProfileData = action.payload
            })
            .addCase(getProfile.rejected, (state, action) => {
                getProfileDataLoading = false
            })

            .addCase(updateProfile.pending, (state, action) => {
                profilePictureImageLoading = true
            })
            .addCase(updateProfile.fulfilled, (state, action) => {
                profilePictureImageLoading = false,
                // console.log("action payload :----", action.payload);
                state.profilePictureImage = action.payload
            })
            .addCase(updateProfile.rejected, (state, action) => {
                profilePictureImageLoading = false
            })
    }
})

export default ProfileSlice.reducer;