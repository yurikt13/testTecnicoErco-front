import { useDispatch } from "react-redux"
import { setCities } from "../../../stateManagement/reducers/cityReducer"

const useFindCity = () => {

    const dispatch = useDispatch()

    const obtenerCiudad = async (id: string) => {
        const data = await fetch(`http://localhost:3300/ciudades/${id}`)
        const result = await data.json()
        console.log(result)
        dispatch(setCities(result.ciudades))
    }

    const mostrarCiudad = async (id: string) => {
        const data = await fetch(`http://localhost:3300/ciudades/encontrarCiudad/${id}`)
        const result = await data.json()
        console.log(result)
        dispatch(setCities(result.ciudades))
    }

    return {
        obtenerCiudad: obtenerCiudad,
        mostrarCiudad: mostrarCiudad
    }
}

export default useFindCity
