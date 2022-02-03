import {fetchBaseQuery} from '@reduxjs/toolkit/query'
import {createApi} from '@reduxjs/toolkit/query/react'

const urlInternal = process.env.NEXT_PUBLIC_INTERNAL_URL
const apiUrl = typeof window === 'object' ? process.env.NEXT_PUBLIC_API_URL : process.env.NEXT_PUBLIC_INTERNAL_API_URL

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
                console.log(response)
                return response.data.map(item => {
                    return {
                        ...item,
                        photos: item.photos.len > 0 ? {
                            ...item.photos[0],
                            photo_url: item.photos[0].photo_url
                        } : {}
                    }
                })
            }
        }),

        getRecentServices: build.query({
            query: (language) => `${language}/services/recent`,
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
                        optimized_photo_url: `${photo.optimized_photo_url}`
                    }
                })

                return {...response.data, photos}
            }
        }),

        getPhotoGallery: build.query({
            query: () => '/photos',
            transformResponse: response => response.data.map(photo => ({
                ...photo,
                photo_url: `${photo.photo_url}`,
                optimized_photo_url: `${photo.optimized_photo_url}`
            }))
        }),

        getMetadata: build.query({
            query: ({language, slug}) => `${language}/metadata-page/${slug}`,
            transformResponse: response => response.data
        }),

        submittingCotactForm: build.mutation({
            query: ({content, id}) => {
                const url = id ? `/services/${id}/contacts` : `/contacts`
                return {url: url, method: 'post', body: content }
            }
        }),

        getSearchResult:  build.query({
            query: ({language, searchQuery}) => {
                return {url: `${language}/search`, method: 'get', params: {search: searchQuery}}
            },
            transformResponse: response => {
                return response.data.map(item => {
                    return {
                        ...item,
                        photos: {
                            ...item.photos[0],
                            photo_url: `${item.photos[0].photo_url}`
                        }
                    }
                })
            }
        }
        )
  })
})

export const {
  useGetPopularServicesQuery,
  useGetRecentServicesQuery,
  useGetAllCategoriesQuery,
  useGetServicesQuery,
  useGetPhotoGalleryQuery,
  useGetMetadataQuery,
  useGetSearchResultQuery
} = apiSlice
