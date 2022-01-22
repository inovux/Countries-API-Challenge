import { AnyAction } from 'redux'
import { IRootState, RootState } from '../state'
import { countryActions } from './actions'

export const countryReducer = (
    filters: IRootState['filters'] = RootState.filters,
    action: AnyAction
) => {
    switch (action.type) {
        case countryActions.selectRegion.type:
            return {
                filters: {
                    countries: {
                        ...filters.countries,
                        region: action.payload.value,
                    },
                },
            }
        default:
            return filters
    }
}
