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
} from "../actions/actionTypes"

const initialState = {
    products: [],
    loading: false,
    total: 0,
    page: 1,
    limit: 3,
    sortBy: 1,
    filters: [
        {
            type: INPUT_FILTER,
            name: 'search',
            value: '',
            placeholder: 'Search'
        },
        {
            type: CHECKBOX_FILTER,
            title: 'Size',
            name: 'size',
            items: [
                { id: 1, value: 'XXS', checked: false, available: 12 },
                { id: 2, value: 'XS', checked: false, available: 11 },
                { id: 3, value: 'S', checked: false, available: 3 },
                { id: 4, value: 'M', checked: false, available: 5 },
                { id: 5, value: 'L', checked: false, available: 2 },
                { id: 6, value: 'XL', checked: false, available: 7 },
                { id: 7, value: 'XXL', checked: false, available: 15 }
            ]
        },
        {
            type: CHECKBOX_FILTER,
            title: 'Color',
            name: 'color',
            items: [
                { id: 1, value: 'Black', checked: false, available: 12 },
                { id: 2, value: 'Blue', checked: false, available: 12 },
                { id: 3, value: 'Brown', checked: false, available: 12 },
                { id: 4, value: 'Green', checked: false, available: 12 },
                { id: 5, value: 'Grey', checked: false, available: 12 },
                { id: 6, value: 'Multi', checked: false, available: 12 },
                { id: 7, value: 'Orange', checked: false, available: 12 },
                { id: 8, value: 'Red', checked: false, available: 12 },
                { id: 9, value: 'White', checked: false, available: 12 },
                { id: 10, value: 'Yellow', checked: false, available: 12 }
            ]
        }
    ]
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_CATALOG_PRODUCTS:
            return {
                ...state,
                products: action.payload.products,
                total: action.payload.total
            }
        case SET_CATALOG_NEXT_PAGE:
            return {
                ...state,
                page: state.page + 1
            }
        case SET_CATALOG_PREV_PAGE:
            return {
                ...state,
                page: state.page - 1
            }
        case SET_CATALOG_PAGE:
            return {
                ...state,
                page: action.payload
            }
        case SET_CATALOG_SORT_BY:
            return {
                ...state,
                sortBy: action.payload
            }
        case SET_CATALOG_LOADING:
            return {
                ...state,
                loading: action.payload
            }
        case SET_CATALOG_INPUT_FILTER_VALUE:
            return {
                ...state,
                filters: [
                    ...state.filters.slice(0, action.payload.id),
                    {
                        ...state.filters[action.payload.id],
                        value: action.payload.value
                    },
                    ...state.filters.slice(action.payload.id + 1)
                ]
            }
        case SET_CATALOG_CHECKBOX_FILTER_VALUE: {
            const checkboxes = [...state.filters[action.payload.id].items];
            const selectedCheckbox = checkboxes.find(item => item.id === +action.payload.checkboxId);
            const newCheckboxes = checkboxes.map(checkbox => checkbox.id === +action.payload.checkboxId
                ? { ...selectedCheckbox, checked: !selectedCheckbox.checked }
                : checkbox
            );

            return {
                ...state,
                filters: [
                    ...state.filters.slice(0, action.payload.id),
                    {
                        ...state.filters[action.payload.id],
                        items: newCheckboxes
                    },
                    ...state.filters.slice(action.payload.id + 1)
                ]
            }
        }
        default: return state
    }
}