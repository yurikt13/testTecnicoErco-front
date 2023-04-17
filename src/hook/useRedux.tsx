import { useSelector } from 'react-redux'
import { Countries } from '../models/commonCountry'
import { States } from '../models/commonState'
import { RootState } from '../stateManagement/store'
import { Cities } from '../models/commonCity'

const useRedux = () => {

    //obtener estado global de la app
    const state = useSelector((state: RootState) => {
        return state
    })

    //métodos para obtener el estado
    const getCountries = (): Countries[] | [] | null => {
        return state.country.countries
    }

    const getStates = (): States[] | [] | null => {
        return state.stateData.states
    }
    
    const getCities = () : Cities[] | [] | null => {
        return state.city.cities
    }

    return {
        getCountries,
        getStates,
        getCities
    }
}

export default useRedux