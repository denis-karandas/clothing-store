import {CHECKBOX_FILTER, INPUT_FILTER} from "../../pages/Catalog/components/Filter/Filter"
import {SET_CHECKBOX_FILTER_VALUE, SET_INPUT_FILTER_VALUE} from "../actions/actionTypes"

const initialState = {
    items: [
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

        case SET_INPUT_FILTER_VALUE:
            return {
                ...state,
                items: [
                    ...state.items.slice(0, action.payload.id),
                    {
                        ...state.items[action.payload.id],
                        value: action.payload.value
                    },
                    ...state.items.slice(action.payload.id + 1)
                ]
            }

        case SET_CHECKBOX_FILTER_VALUE: {
            const checkboxes = [...state.items[action.payload.id].items]
            const selectedCheckbox = checkboxes.find(item => item.id === +action.payload.checkboxId)
            const newCheckboxes = checkboxes.map(checkbox => checkbox.id === +action.payload.checkboxId
                ? { ...selectedCheckbox, checked: !selectedCheckbox.checked }
                : checkbox
            )

            return {
                ...state,
                items: [
                    ...state.items.slice(0, action.payload.id),
                    {
                        ...state.items[action.payload.id],
                        items: newCheckboxes
                    },
                    ...state.items.slice(action.payload.id + 1)
                ]
            }
        }
        default: return state
    }
}