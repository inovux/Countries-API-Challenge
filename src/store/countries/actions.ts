import actionCreatorFactory from 'typescript-fsa'
import { IOption } from '../../components/Select/Option'

const actionCreator = actionCreatorFactory('countries')

export const countryActionsTypes = {
    GET: 'GET',
    SELECT_REGION: 'SELECT_REGION',
    SET_SEARCH: 'SET_SEARCH',
}

export const countryActions = {
    selectRegion: actionCreator<IOption>(countryActionsTypes.SELECT_REGION),
    get: actionCreator.async(countryActionsTypes.GET),
    setSearch: actionCreator<{ search: string }>(
        countryActionsTypes.SET_SEARCH
    ),
}
