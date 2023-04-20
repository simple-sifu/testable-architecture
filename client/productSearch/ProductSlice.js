import {createSlice} from '@reduxjs/toolkit';

export const productSlice = createSlice({
    name: 'products',
    initialState: {
        data: [],
        isLoading: false,
        error: null
    },
    reducers: {
        getProducts: (state) => {
            state.isLoading = true;
            state.data = [];
            state.error = null;
        },
        getProductsSuccess: (state, action) => {
            state.data = action.payload.data;
            state.isLoading = false;
            state.error = null;
        },
        getProductsFailure: (state, action) => {
            state.isLoading = false;
            state.error = action.payload
            state.data = [];
        }
    }
})
export const { getProducts, getProductsSuccess, getProductsFailure} = productSlice.actions;
export default productSlice.reducer;