import {createSlice, createAsyncThunk, createAction} from '@reduxjs/toolkit';

const fetchCount = () => {
    return new Promise((resolve, reject) => setTimeout(() => {resolve(null)}, 1000) )
}

export const increaseAsync = createAsyncThunk('counter/increase_async', async () => {
    return fetchCount()
})

export const decreaseAsync = createAsyncThunk('counter/decrease_async', async () => {
    return fetchCount()
})

const initialState = {
    value: 0,
    isLoading: false,
    errorMessage: ""
}

const counter = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increase: (state) => ({
            ...state,
            value: state.value + 1
        }),
        decrease: (state) => ({
            ...state,
            value: state.value - 1
        }),
    },
    extraReducers: (builder) => {
        // @ts-ignore
        builder
            .addCase(increaseAsync.pending, (state) => ({
                ...state,
                isLoading: true
            }))
            .addCase(increaseAsync.fulfilled, (state) => ({
                ...state,
                isLoading: false,
                value: state.value + 1
            }))
            .addCase(increaseAsync.rejected, (state) => ({
                ...state,
                isLoading: false
            }))
            .addCase(decreaseAsync.pending, (state) => ({
                ...state,
                isLoading: true,
            }))
            .addCase(decreaseAsync.fulfilled, (state) => ({
                ...state,
                isLoading: false,
                value: state.value - 1
            }))
            .addCase(decreaseAsync.rejected, (state, action) => ({
                ...state,
                isLoading: false,
            }))
    }
})

export const { increase, decrease } = counter.actions;

export default counter.reducer;