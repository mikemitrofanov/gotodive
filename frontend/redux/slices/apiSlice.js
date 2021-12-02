import {fetchBaseQuery} from "@reduxjs/toolkit/query";
import {createApi} from '@reduxjs/toolkit/query/react';

const url = process.env.NEXT_PUBLIC_URL;
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: apiUrl,
    }),
    endpoints: (build) => ({
        getAllCategories: build.query({
            query: (language) => `${language}/service-categories/services`,
            transformResponse: response => {
                return response.data
            }
        }),

        getPopularServices: build.query({
            query: (language) => `${language}/services/popular`,
            transformResponse: response => {
                return response.data
            }
        }),

        getServices: build.query({
            query: ({language, id}) => `${language}/services/${id}`,
            transformResponse: response => {
                const photos = response.data.photos.map(photo => {
                    return {
                        ...photo,
                        optimized_photo_url: `${url}/${photo.optimized_photo_url}`
                    }
                })

                return {...response.data, photos}
            }
        }),

        getPhotoGallery: build.query({
            query: () => '/photos',
            transformResponse: response => {
               const photoList = response.data.map(photo => {
                   return {
                        ...photo,
                        photo_url: `${url}/${photo.photo_url}`,
                        optimized_photo_url: `${url}/${photo.optimized_photo_url}`
                    }
                })

                return photoList
            }
        })
    })
})

export const {
    useGetPopularServicesQuery,
    useGetAllCategoriesQuery,
    useGetServicesQuery,
    useGetPhotoGalleryQuery
} = apiSlice;
