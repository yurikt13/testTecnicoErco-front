import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialStateStates, States } from "../../models/commonState";

const initialState: initialStateStates = {
    states: []
}

export const stateSlice = createSlice({
    name: 'stateData',
    initialState,
    reducers: {
        setStates: (state, { payload }: PayloadAction<States[]>) => {
            state.states = payload
        }
    }
})

export const { setStates } = stateSlice.actions
