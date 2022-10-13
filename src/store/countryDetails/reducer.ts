import { AnyAction } from 'redux'
import { countryDetailsActions } from './actions'

const initialState = {
    data: undefined,
    isLoading: false,
    error: {},
}

export const countryDetailsReducer = (
    state = initialState,
    action: AnyAction
) => {
    switch (action.type) {
        case countryDetailsActions.getByCountryCode.started.type:
            return {
                ...state,
                error: {},
                isLoading: true,
            }
        case countryDetailsActions.getByCountryCode.done.type:
            return {
                ...state,
                data: action.payload[0],
                error: {},
                isLoading: false,
            }
        case countryDetailsActions.getByCountryCode.failed.type:
            return {
                ...state,
                data: undefined,
                error: action.payload.error,
                isLoading: false,
            }
        default:
            return state
    }
}
