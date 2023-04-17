import useRedux from "../../../hook/useRedux"

const useCity = () => {

    const { getCities } = useRedux()
    
    return {
        cities: getCities()
    }
}

export default useCity