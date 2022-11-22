import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { Products } from '../../types';

export const productsApi = createApi({
    reducerPath:'productsApi',
    baseQuery: fetchBaseQuery({baseUrl:"https://dummyjson.com/"}),
    endpoints: (builder) => ({
        getAllProducts: builder.query<Products[], void>({
            query: () => 'products',
            transformResponse:(response: Products[]) => {
                return response.filter(el => el.category === 'smartphones' || el.category === 'laptops').sort((a, b) => b.rating - a.rating)
            }
        }),
        getProduct: builder.query({
            query: (id) => `products/${id}`,
        }),
    }) 

})

export const {useGetAllProductsQuery, useGetProductQuery} = productsApi;

export default productsApi;