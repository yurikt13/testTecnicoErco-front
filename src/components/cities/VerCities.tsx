import useCity from "./hook/useCity";

const VerCities = () => {

    const { cities } = useCity()

    return (
        <div>
            <select>
                <option selected>Ciudad</option>
                {
                    cities ? cities.map(cities => (
                        <option value={cities.ID_STATE}>{cities.NAME}</option>
                    )) : <></>
                }
            </select>
        </div>
    )
}

export default VerCities