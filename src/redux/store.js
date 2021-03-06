import { configureStore } from '@reduxjs/toolkit';
import { pickupsSlice } from './reducers/pickups.slice';
import { donationsSlice } from './reducers/donations.slice';
import { userSlice } from './reducers/user.slice';
import { causesSlice } from './reducers/causes.slice';


export default configureStore({
    reducer: {
        pickups: pickupsSlice.reducer,
        donations: donationsSlice.reducer,
        user: userSlice.reducer,
        causes: causesSlice.reducer,
    }
});

