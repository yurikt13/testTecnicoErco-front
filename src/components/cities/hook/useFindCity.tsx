import { useDispatch } from "react-redux"
import { setCities } from "../../../stateManagement/reducers/cityReducer"

const useFindCity = () => {

    const dispatch = useDispatch()

    const obtenerCiudad = async (id: string) => {
        const data = await fetch(`http://localhost:3300/ciudades/${id}`)
        const result = await data.json()
        dispatch(setCities(result.ciudades))

    }

    return {
        obtenerCiudad: obtenerCiudad
    }
}

export default useFindCity
