import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const recipeApi = createApi({
    reducerPath: 'recipeApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com' }),
    endpoints: (builder) => ({
        getRecipes: builder.query({
            query: () => `/recipes`
        }),
        createRecipe: builder.mutation({
            query: (newRecipe) => ({
                url: `/recipes/add`,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newRecipe)
            })
        })
    })
});

export const { useGetRecipesQuery, useCreateRecipeMutation } = recipeApi;
