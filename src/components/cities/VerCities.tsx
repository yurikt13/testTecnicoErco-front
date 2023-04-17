import useCity from "./hook/useCity";
import styled from '@emotion/styled';
import useFindCity from "./hook/useFindCity";
import { useState } from "react";
import ReactDOM from "react-dom/client";

const VerCities = () => {

    const { cities } = useCity()
    const { mostrarCiudad } = useFindCity()

    const InformacionCiudad = styled.div`
        margin-top: 10px;
        justify-content: left;
        width: 30%;
        height: 100%;
        font-size: 20px;
        background-color: #e0e0ec;
        border-radius: 3px;
        padding: 5px;
    `

    const mostrarPoblacion = (id: string) => {
        const agregar = ReactDOM.createRoot(document.getElementById('agregar') as HTMLElement);
        const element = <InformacionCiudad>
            {
                cities ? cities.map(cities => (
                    cities ? <p>Población: {cities.POPULATION}</p> : <p></p>
                )) : <></>
            }
        </InformacionCiudad>

        agregar.render(element)

    }

    return (
        <div>
            <select
                onChange={(e) => {
                    mostrarCiudad(e.target.value)
                    mostrarPoblacion(e.target.value)
                }}
            >
                <option selected disabled>Escoge la ciudad</option>
                {
                    cities ? cities.map(cities => (
                        <option value={cities.ID_CITY}>{cities.NAME}</option>
                    )) : <></>
                }
            </select>

            <div id="agregar"></div>

        </div>
    )
}

export default VerCities