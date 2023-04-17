import VerCountries from "../components/countries/VerCountries"
import VerStates from "../components/states/verStates"
import VerCities from "../components/cities/VerCities"
import useCountry from "./hook/useCountry"

const Country: React.FC = () => {

    useCountry()

    return (
        <div className="container">
            <h1>Escoge el pais</h1>
            <div>
                <VerCountries />
                <VerStates />
                <VerCities />
            </div>
        </div>
    )
}

export default Country