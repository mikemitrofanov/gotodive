import {GET_SERVICES} from "../constants";


export const getCategoryServices = (categoryId) => {
    return {
        type: GET_SERVICES,
        request: {url: `/service-categories/${categoryId}/services`},
        meta: {
            requestKey: categoryId
        }
    }
}




