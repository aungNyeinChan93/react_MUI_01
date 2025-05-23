import { configureStore } from '@reduxjs/toolkit'
import { productApi } from './services/productData';
import counterSlice from './features/counter/CounterSlice';
import { recipeApi } from './services/recipeData';

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        [productApi.reducerPath]: productApi.reducer,
        [recipeApi.reducerPath]: recipeApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productApi.middleware, recipeApi.middleware),

});

export default store;