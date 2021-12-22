import {fetchBaseQuery} from '@reduxjs/toolkit/query'
import {createApi} from '@reduxjs/toolkit/query/react'

const url = process.env.NEXT_PUBLIC_URL
const url_internal = process.env.NEXT_INTERNAL_URL
const apiUrl = typeof window === 'object' ? process.env.NEXT_PUBLIC_API_URL : process.env.NEXT_INTERNAL_API_URL

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
                return response.data.map(item => {
                    return {
                        ...item,
                        photos: {
                            ...item.photos[0],
                            photo_url: `${url_internal}/${item.photos[0].photo_url}`
                        }
                    }
                })
            }
        }),

        getServices: build.query({
            query: ({language, id}) => `${language}/services/${id}`,
            transformResponse: response => {
                const photos = response.data.photos.map(photo => {
                    return {
                        ...photo,
                        optimized_photo_url: `${url_internal}/${photo.optimized_photo_url}`
                    }
                })

                return {...response.data, photos}
            }
        }),

    getPhotoGallery: build.query({
      query: () => '/photos',
      transformResponse: response => response.data.map(photo => ({
        ...photo,
        photo_url: `${url_internal}/${photo.photo_url}`,
        optimized_photo_url: `${url_internal}/${photo.optimized_photo_url}`
      }))
    }),
    getMetadata: build.query({
      query: ({language, slug}) => `${language}/metadata-page/${slug}`,
      transformResponse: response => response.data
    })
  })
})

export const {
  useGetPopularServicesQuery,
  useGetAllCategoriesQuery,
  useGetServicesQuery,
  useGetPhotoGalleryQuery,
  useGetMetadataQuery,
} = apiSlice
