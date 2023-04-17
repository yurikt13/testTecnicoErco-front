import useFindState from "../states/hook/useFindState";
import useCountry from "./hook/useCountry";

const VerCountries = () => {

  const { countries } = useCountry()
  const { obtenerPais } = useFindState()

  return (
    <div>
      <select
        onChange={(e) => obtenerPais(e.target.value)}
      >
        <option selected disabled>Escoge el País</option>
        {
          countries ? countries.map(countries => (
            <option value={countries.ID_COUNTRY}>{countries.NAME}</option>
          )) : <></>
        }
      </select>
    </div>
  )
}

export default VerCountries