import useState from "./hook/useState"
import useFindCity from "../cities/hook/useFindCity"

const VerStates = () => {

  const { states } = useState();
  const { obtenerCiudad } = useFindCity()


  return (
    <div>
      <select
        onChange={(e) => obtenerCiudad(e.target.value)}
      >
        <option selected>Estado</option>
        {
          states ? states.map(states => (
            <option value={states.ID_STATE}>{states.NAME}</option>
          )) : <></>
        }
      </select>
    </div>
  )
}

export default VerStates