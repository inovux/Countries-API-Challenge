import actionCreatorFactory from 'typescript-fsa'
import { IOption } from '../../components/Select/Option'

const actionCreator = actionCreatorFactory('countries')

export const countryActionsTypes = {
    SELECT_REGION: 'SELECT_REGION',
}

export const countryActions = {
    selectRegion: actionCreator<IOption>(countryActionsTypes.SELECT_REGION),
}
