import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialStateCountries, Countries } from "../../models/commonCountry";

const initialState: initialStateCountries = {
    countries: []
}

export const countrySlice = createSlice({
    name: 'country',
    initialState,
    reducers: {
        setCountries: (state, { payload }: PayloadAction<Countries[]>) => {
            state.countries = payload
        }
    }
})

export const { setCountries } = countrySlice.actions
