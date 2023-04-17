import VerCountries from "../components/countries/VerCountries"
import VerStates from "../components/states/verStates"
import VerCities from "../components/cities/VerCities"
import useCountry from "./hook/useCountry"
import styled from '@emotion/styled';

const Country: React.FC = () => {

    useCountry()

    const Contenedor = styled.div`
        max-width: 900px;
        margin: 0 auto;
        width: 90%;
        padding: 5px;
    `

    const TitleContenedor = styled.h1`
        font-family: 'Courier New', Courier, monospace;
        background-color: #c8c8e2;
        border-radius: 10px;
        padding: 10px;
        font-size: 30px;
    `

    const ContenedorDiv = styled.div`
        margin: 10px;
    `

    return (
        <Contenedor>
            <TitleContenedor>1. Selecciona un país</TitleContenedor>
            <ContenedorDiv>
                <VerCountries />
            </ContenedorDiv>
            <TitleContenedor>2. Selecciona un estado</TitleContenedor>
            <ContenedorDiv>
                <VerStates />
            </ContenedorDiv>
            <TitleContenedor>3. Selecciona una ciudad</TitleContenedor>
            <ContenedorDiv>
                <VerCities />
            </ContenedorDiv>
        </Contenedor>
    )
}

export default Country