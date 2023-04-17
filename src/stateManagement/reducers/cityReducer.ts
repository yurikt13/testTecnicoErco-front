import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialStateCities, Cities } from "../../models/commonCity";

const initialState: initialStateCities = {
    cities: []
}

export const citySlice = createSlice({
    name: 'city',
    initialState,
    reducers: {
        setCities: (state, { payload }: PayloadAction<Cities[]>) => {
            state.cities = payload
        }
    }
})

export const { setCities } = citySlice.actions
