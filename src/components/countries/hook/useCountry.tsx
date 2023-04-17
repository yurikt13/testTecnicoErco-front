import useRedux from "../../../hook/useRedux"

const useCountry = () => {

    const { getCountries } = useRedux()
    
    return {
        countries: getCountries()
    }
}

export default useCountry