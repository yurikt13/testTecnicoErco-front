import useRedux from "../../../hook/useRedux"

const useState = () => {

    const { getStates } = useRedux()
    return {
        states: getStates()
    }
}

export default useState