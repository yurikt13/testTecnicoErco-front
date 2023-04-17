import { useDispatch } from "react-redux"
import { setStates } from "../../../stateManagement/reducers/stateReducer"

const useFindState = () => {

    const dispatch = useDispatch()


    const obtenerPais = async (id: string) => {
        const data = await fetch(`http://localhost:3300/estados/${id}`)
        const result = await data.json()
        dispatch(setStates(result.estados))

    }

    return {
        obtenerPais: obtenerPais
    }
}

export default useFindState
