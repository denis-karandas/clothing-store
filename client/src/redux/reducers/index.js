import { combineReducers } from 'redux'

import filter from "./filter"
import catalog from "./catalog"

const rootReducer =  combineReducers({
    filter,
    catalog
})

export default rootReducer