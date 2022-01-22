import { AnyAction } from 'redux'
import { countryActions } from '../countries/actions'

const initialState = {
    region: '',
    search: '',
}

export const countriesFilterReducer = (
    state = initialState,
    action: AnyAction
) => {
    switch (action.type) {
        case countryActions.selectRegion.type:
            return {
                ...state,
                region: action.payload.value,
            }
        default:
            return state
    }
}
