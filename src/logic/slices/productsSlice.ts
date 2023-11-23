
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export type Product = { id: number; title: string; image: string; price: string }
type SliceState = { products: Product[]; isLoading: boolean; error: string }

const initialState = {
    products: [],
    isLoading: false,
    error: '',
}

export const fetchProducts = createAsyncThunk(
    'content/fetchProducts',
    async () => {
        const res = await axios('https://fakestoreapi.com/products', {
            params: {
                _limit: 10
            }
        })
        const data = await res.data
        return data as Product[]
    }
)

export const productsSlice = createSlice({
    name: 'content',
    initialState: initialState as SliceState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.isLoading = false
            state.products = action.payload
        })
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message ?? ''
        })
    },
})

export default productsSlice.reducer