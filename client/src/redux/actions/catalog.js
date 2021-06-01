import axios from "axios"
import {SET_LOADING, SET_NEXT_PAGE, SET_PAGE, SET_PREV_PAGE, SET_PRODUCTS, SET_SORT_BY} from "./actionTypes"
import {CHECKBOX_FILTER, INPUT_FILTER} from "../../pages/Catalog/components/Filter/Filter"

export const fetchProducts = (reqParams, filters, page, limit, sortBy) => dispatch => {
    let params = {}
    let {section = null, category = null} = reqParams

    dispatch(setLoading(true))

    if (section) {
        params['section'] = section
    }
    if (category) {
        params['category'] = category
    }

    filters.forEach(filter => {
        switch (filter.type) {
            case INPUT_FILTER:
                params[filter.name] = filter.value
                break
            case CHECKBOX_FILTER: {
                const checkedCheckboxes = filter.items.filter(item => item.checked !== false)
                params[filter.name] = checkedCheckboxes.map(item => item.value)
                break
            }
            default: break
        }
    })

    axios.get('http://localhost:5000/api/catalog', {params: {...params, page, limit, sortBy}})
        .then(response => {
            dispatch(setProducts(response.data.products, response.data.total))
        })
        .finally(() => dispatch(setLoading(false)))
}

export const setProducts = (products, total) => ({
    type: SET_PRODUCTS,
    payload: { products, total }
})

export const setNextPage = () => ({
    type: SET_NEXT_PAGE
})

export const setPrevPage = () => ({
    type: SET_PREV_PAGE
})

export const setPage = number => ({
    type: SET_PAGE,
    payload: number
})

export const setSortBy = id => ({
    type: SET_SORT_BY,
    payload: id
})

export const setLoading = value => ({
    type: SET_LOADING,
    payload: value
})