import {GET_CATEGORIES} from "../constants";

export const getCategories = () => (
    {
        type: GET_CATEGORIES,
        request: {url: `/service-categories/`},
        meta: {
            requestKey: 'categories'
        }
    })





