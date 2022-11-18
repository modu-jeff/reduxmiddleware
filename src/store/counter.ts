import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
  isLoading: boolean;
  errorMessage: string;
}

const fetchCount = () => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(null);
    }, 1000)
  );
};

export const increaseAsync = createAsyncThunk("counter/increase_async", () => {
  return fetchCount();
});

export const decreaseAsync = createAsyncThunk("counter/decrease_async", () => {
  return fetchCount();
});

const initialState: CounterState = {
  value: 0,
  isLoading: false,
  errorMessage: "",
};

const counter = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increase: (state) => ({
      ...state,
      value: state.value + 1,
    }),
    decrease: (state) => ({
      ...state,
      value: state.value - 1,
    }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(increaseAsync.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(increaseAsync.fulfilled, (state) => ({
        ...state,
        isLoading: false,
        value: state.value + 1,
      }))
      .addCase(increaseAsync.rejected, (state) => ({
        ...state,
        isLoading: false,
      }))
      .addCase(decreaseAsync.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(decreaseAsync.fulfilled, (state) => ({
        ...state,
        isLoading: false,
        value: state.value - 1,
      }))
      .addCase(decreaseAsync.rejected, (state) => ({
        ...state,
        isLoading: false,
      }));
  },
});

export const { increase, decrease } = counter.actions;

export default counter.reducer;
