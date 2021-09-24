import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query";

function randomImage(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return `/images/img${Math.floor(rand)}.png`;
}

export const categoriesApi = createApi({

        reducerPath: 'categoriesApi',

        baseQuery: fetchBaseQuery({
            baseUrl: process.env.API_URL + '/ru',
        }),
        endpoints: (build) => ({
                getCategory: build.query({
                    query: (arg) => `service-categories/${arg}`

                }),
                getAllCategories: build.query({
                    query: () => 'service-categories/services'
                }),
                getPopularServices: build.query({
                    query: () => 'services/popular',
                    transformResponse: (baseQueryReturnValue, meta) =>
                        baseQueryReturnValue.data.map(service => service.imageUrl ? service : {
                                ...service,
                                'imageUrl': randomImage(1, 3)
                            }
                        )
                }),
            }
        ),

    }
)
export const {useGetServicesQuery} = categoriesApi;