import { AnyAction } from 'redux'
import { countryActions } from './actions'

const initialState = {
    countries: [],
}

export const countriesReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case countryActions.get.started.type:
            return {
                ...state,
                isLoading: true,
            }
        default:
            return state
    }
}
