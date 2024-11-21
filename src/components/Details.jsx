import { useLocation } from "react-router-dom"

export default function Details() {
    const { state: cca2 } = useLocation();

    return(
        <div className="detailsContainer">
            <h1>{cca2.name.common}</h1>
            <img src={cca2.flags.svg} alt={`${cca2.name.common} flag`} />
            <div className="detailsTextContainer">
                <h2>Capital: </h2>
                <p>{cca2.capital}</p>
            </div>
            <div className="detailsTextContainer">
                <h2>Located in: </h2>
                <p>{cca2.subregion}</p>
            </div>
        </div>
    )
}