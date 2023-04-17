import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { setCities } from "../../stateManagement/reducers/cityReducer";

const useCountry = () => {

    const dispatch = useDispatch();
    
    const getCities = async () => {
        const data = await fetch('http://localhost:3300/ciudades')
        const result = await data.json()
        dispatch(setCities(result.ciudades))
    }

    useEffect(() => {
        getCities()
    }, [])

}

export default useCountry