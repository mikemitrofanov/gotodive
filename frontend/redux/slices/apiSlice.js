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
                let photos = [];

                for (let i = 0; i < 4; i++) {
                    response.data.photos[i]?.optimized_photo_url
                        ? photos = [...photos, {
                            optimized_photo_url: `${url}/${response.data.photos[i].optimized_photo_url}`,
                            id: i + 1
                        }]
                        : photos = [...photos, {
                            optimized_photo_url: `${url}/${response.data.photos[0].optimized_photo_url}`,
                            id: i + 1
                        }]
                }

                let data = response.data;

                ['title', 'description', 'duration', 'min_age', 'required_experience', 'max_depth',
                    'certification_requirements', 'min_logged_dives', 'max_end', 'course_certificate']
                    .forEach(param => {

                        if (!data[param]) data[param] = null
                    })

                return {...data, photos}
            }
        }),

        getPhotoGallery: build.query({
            query: () => '/photos',
            transformResponse: response => {
                let data = [];
                response.data.map(photo => {
                    const newPhoto = {
                        ...photo,
                        photo_url: `${url}/${photo.photo_url}`,
                        optimized_photo_url: `${url}/${photo.optimized_photo_url}`
                    }
                    data = [...data, newPhoto];
                })

                return data
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
