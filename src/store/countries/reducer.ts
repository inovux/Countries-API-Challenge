import { AnyAction } from 'redux'
import { countryActions } from './actions'

const initialState = {
    data: {},
    isLoading: false,
}

export const countriesReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case countryActions.get.started.type:
            return {
                ...state,
                data: {},
                isLoading: true,
            }
        default:
            return state
    }
}
