import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

export default function Countries() {
    const [countries, setCountries] = useState([]);
    const url = 'https://restcountries.com/v3.1/name/kingdom';
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
            try{
                const response = await fetch(url);
                const data = await response.json();
                setCountries(data);
                console.log(data);
            } catch(e){
                console.log(e.message);
            }
        }
        fetchData();
    }, []);

    function handleCountryChange(e) {
        const selectedCountry = countries.find(
            (country) => country.cca2 === e.target.value
        );
        if (selectedCountry) {
            navigate(`/countries/${selectedCountry.cca2}`, { state: selectedCountry });
        }
    }
    return(
        <div>
            <h1>World kingdoms</h1>
            <select name="countries" id="countries" onChange={handleCountryChange}>
                <option value="">Select a country</option>
                {countries.map(country => (
                    <option key={country.cca2} value={country.cca2}>{country.name.common}</option>
                ))}
            </select>
            <Outlet />
        </div>
    )
}