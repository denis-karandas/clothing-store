import {SET_CHECKBOX_FILTER_VALUE, SET_INPUT_FILTER_VALUE} from "./actionTypes"

export const setInputFilter = (id, value) => ({
    type: SET_INPUT_FILTER_VALUE,
    payload: { id, value }
})

export const setCheckboxFilter = (id, checkboxId) => ({
    type: SET_CHECKBOX_FILTER_VALUE,
    payload: { id, checkboxId }
})