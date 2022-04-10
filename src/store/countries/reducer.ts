import { AnyAction } from 'redux'
import { countryActions } from './actions'

const initialState = {
    data: [],
    isLoading: false,
    error: {},
}

export const countriesReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case countryActions.get.started.type:
        case countryActions.getByRegion.started.type:
        case countryActions.getByName.started.type:
            return {
                ...state,
                error: {},
                isLoading: true,
            }
        case countryActions.get.done.type:
        case countryActions.getByRegion.done.type:
        case countryActions.getByName.done.type:
            return {
                ...state,
                data: action.payload,
                error: {},
                isLoading: false,
            }
        case countryActions.get.failed.type:
        case countryActions.getByRegion.failed.type:
        case countryActions.getByName.failed.type:
            return {
                ...state,
                data: [],
                error: action.payload.error,
                isLoading: false,
            }
        default:
            return state
    }
}
