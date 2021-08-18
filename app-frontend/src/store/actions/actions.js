import { categoryTypes } from '../types/types'

export const fetchCategories = () => ({
  type: categoryTypes.FETCH_CATEGORIES,
  request: { url: '/api/categories' },
});
