import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { setCountries } from "../../stateManagement/reducers/countryReducer";

const useCountry = () => {

    const dispatch = useDispatch();

    const getCountries = async () => {
        const data = await fetch('http://localhost:3300/paises')
        const result = await data.json()
        dispatch(setCountries(result.paises))
    }

    useEffect(() => {
        getCountries()
    }, [])

}

export default useCountry