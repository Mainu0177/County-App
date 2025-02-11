
import { useEffect } from "react";
import { useState } from "react"
import './app.css'
import Countries from "./components/Countries";
import Search from "./components/Search";

// useState -> through which we will store the data
// useEffect -> through whitch we will fetch the data

const url = 'https://restcountries.com/v3.1/all';


function App() {
  const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [countries, setCountries] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState(countries)

    const fetchData = async (url) =>{
        setIsLoading(true)

        try {
            const response = await fetch(url);
        const data = await response.json()
        setCountries(data);
        setFilteredCountries(data)
        setIsLoading(false);
        setError(null);
        } catch (error) {
            setIsLoading(false);
            setError(error)
        }
    }

    useEffect(() =>{
        fetchData(url)
    }, []);

        // const handleRemoveCountry = (name) =>{
    //     setCountries(() =>{
    //         const filteredCountry = countries.filter((country)=> country.name.common != name)
    //         return filteredCountry
    //     })
    // }

    // alternative method or system
    const handleRemoveCountry = (name) =>{
      const filter = filteredCountries.filter((country) => country.name.common != name);
      setFilteredCountries(filter)
    }

        // search logic
    const handleSearch = (searchName) =>{
      let value = searchName.toLowerCase();
      const newCountrise = countries.filter((country) =>{
        const countryName = country.name.common.toLowerCase();
        return countryName.startsWith(value)
      })
      setFilteredCountries(newCountrise)
    }

  return (
    <>
      <h1>Country App</h1>
      <Search onSearch = {handleSearch} />
        {isLoading && <h2>Loading...</h2>}
        {error && <h2>{error.message}</h2>}
        {countries && <Countries countries = {filteredCountries} onRemoveCountry = {handleRemoveCountry} />}
    </>
  )
}

export default App
