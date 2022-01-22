import { combineReducers } from 'redux'
import { countriesFilterReducer } from './countries'

export const filtersReducer = combineReducers({
    countries: countriesFilterReducer,
})
