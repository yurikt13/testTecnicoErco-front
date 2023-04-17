import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { setStates } from "../../stateManagement/reducers/stateReducer";

const useState = () => {

    const dispatch = useDispatch();

    const getStates = async () => {
        const data = await fetch('http://localhost:3300/estados')
        const result = await data.json()
        dispatch(setStates(result.estados))
    }

    useEffect(() => {
        getStates()
    }, [])

}

export default useState