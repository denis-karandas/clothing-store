import api, { URL } from "../../services/API";
import { CHECKBOX_FILTER, INPUT_FILTER } from "../../pages/Catalog/utils/constants/filter";
import {
    SET_CATALOG_CHECKBOX_FILTER_VALUE,
    SET_CATALOG_INPUT_FILTER_VALUE,
    SET_CATALOG_LOADING,
    SET_CATALOG_NEXT_PAGE,
    SET_CATALOG_PAGE,
    SET_CATALOG_PREV_PAGE,
    SET_CATALOG_PRODUCTS,
    SET_CATALOG_SORT_BY,
} from "./actionTypes";

export const fetchProducts = (reqParams, filters, page, limit, sortBy) => dispatch => {
    let params = {};
    let {section = null, category = null} = reqParams;

    dispatch(setLoading(true));

    if (section) {
        params['section'] = section
    }
    if (category) {
        params['category'] = category
    }

    filters.forEach(filter => {
        switch (filter.type) {
            case INPUT_FILTER:
                params[filter.name] = filter.value;
                break;
            case CHECKBOX_FILTER: {
                const checkedCheckboxes = filter.items.filter(item => item.checked !== false);
                params[filter.name] = checkedCheckboxes.map(item => item.value);
                break;
            }
            default: break
        }
    });

    api.get(URL.CATALOG.SEARCH, {params: {...params, page, limit, sortBy}})
        .then(response => {
            if (response.products) {
                dispatch(setProducts(response.products, response.total));
            }
        })
        .finally(() => dispatch(setLoading(false)));
}

export const setProducts = (products, total) => ({
    type: SET_CATALOG_PRODUCTS,
    payload: { products, total }
});

export const setNextPage = () => ({
    type: SET_CATALOG_NEXT_PAGE
});

export const setPrevPage = () => ({
    type: SET_CATALOG_PREV_PAGE
});

export const setPage = number => ({
    type: SET_CATALOG_PAGE,
    payload: number
});

export const setSortBy = id => ({
    type: SET_CATALOG_SORT_BY,
    payload: id
});

export const setLoading = value => ({
    type: SET_CATALOG_LOADING,
    payload: value
});

export const setInputFilter = (id, value) => ({
    type: SET_CATALOG_INPUT_FILTER_VALUE,
    payload: { id, value }
});

export const setCheckboxFilter = (id, checkboxId) => ({
    type: SET_CATALOG_CHECKBOX_FILTER_VALUE,
    payload: { id, checkboxId }
});