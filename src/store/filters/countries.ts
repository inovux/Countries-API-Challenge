import { AnyAction } from 'redux'
import { countryActions } from '../countries/actions'

const initialState = {}

export const countriesFilterReducer = (
    state = initialState,
    action: AnyAction
) => {
    switch (action.type) {
        case countryActions.selectRegion.type:
            return {
                search: undefined,
                region: action.payload.value,
            }
        case countryActions.setSearch.type:
            return {
                region: undefined,
                search: action.payload.search,
            }
        default:
            return state
    }
}
