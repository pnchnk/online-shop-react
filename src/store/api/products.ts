import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { Product } from '../../types';

export const productsApi = createApi({
    reducerPath:'productsApi',
    baseQuery: fetchBaseQuery({baseUrl:"https://dummyjson.com/"}),
    endpoints: (builder) => ({
        getAllProducts: builder.query<Product[], void>({
            query: () => 'products',
            transformResponse:(response: Product[]) => {
                return response?.filter(el => el.category === 'smartphones' || el.category === 'laptops').sort((a, b) => b.rating - a.rating)
            }
        }),
        getProduct: builder.query({
            query: (id) => `products/${id}`,
        }),
    }) 

})

export const {useGetAllProductsQuery, useGetProductQuery} = productsApi;

export default productsApi;