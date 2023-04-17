import { configureStore } from '@reduxjs/toolkit';
import { stateSlice } from '../reducers/stateReducer';
import { countrySlice } from '../reducers/countryReducer';
import { citySlice } from '../reducers/cityReducer';


const store = configureStore({
    reducer: {
        country: countrySlice.reducer,
        stateData: stateSlice.reducer,
        city: citySlice.reducer
    }
})

export default store

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch