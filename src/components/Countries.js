import React, { useEffect, useState } from 'react';
import axios from "axios"; 
import Cards from './Cards';

const Countries = () => {

    const [data, setData] = useState([]);

   

    // le useEffect se joue quand le composant est monté
    useEffect(() =>{
            axios.get("https://restcountries.com/v3.1/name/france").then((res) => setData(res.data)); 

    },[]);

    return (
        <div>
            <h1>COUNTRIES</h1>

            <ul>
                {
                //    data.map((country, index) => <li key={index}>{country.capital}</li>)
                   
                }
            </ul>

            <p> salut les pays</p>
        </div>
    );
};

export default Countries;