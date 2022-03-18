import { AnyAction } from 'redux'
import { countryActions } from './actions'

const initialState = {
    data: {},
    isLoading: false,
}

export const countriesReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case countryActions.get.started.type:
        case countryActions.getByRegion.started.type:
            return {
                ...state,
                isLoading: true,
            }
        case countryActions.get.done.type:
        case countryActions.getByRegion.done.type:
            return {
                ...state,
                data: action.payload,
                isLoading: false,
            }
        default:
            return state
    }
}
