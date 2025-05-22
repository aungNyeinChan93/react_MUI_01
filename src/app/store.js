import { configureStore } from '@reduxjs/toolkit'
import { productApi } from './services/productData';
import counterSlice from './features/counter/CounterSlice';

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        [productApi.reducerPath]: productApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productApi.middleware),

});

export default store;