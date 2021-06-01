import {
    SET_LOADING,
    SET_NEXT_PAGE,
    SET_PAGE,
    SET_PREV_PAGE,
    SET_PRODUCTS,
    SET_SORT_BY,
} from "../actions/actionTypes"

const initialState = {
    items: [],
    loading: false,
    total: 0,
    page: 1,
    limit: 3,
    sortBy: 1
}

export default (state = initialState, action) => {
    switch (action.type) {

        case SET_PRODUCTS:
            return {
                ...state,
                items: action.payload.products,
                total: action.payload.total
            }

        case SET_NEXT_PAGE:
            return {
                ...state,
                page: state.page + 1
            }

        case SET_PREV_PAGE:
            return {
                ...state,
                page: state.page - 1
            }

        case SET_PAGE:
            return {
                ...state,
                page: action.payload
            }

        case SET_SORT_BY:
            return {
                ...state,
                sortBy: action.payload
            }

        case SET_LOADING:
            return {
                ...state,
                loading: action.payload
            }

        default: return state
    }
}