import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from '@material-ui/core'
import styles from './CountryPicker.module.css';

const CountryPicker = ({ handleCountryChange, countries } ) => {

  /*   const [fetchedCountries, setFetchedCountries] = useState({});
    const countries = ['USA', 'Italy', 'France'];
    useEffect(() => {
        
        setFetchedCountries(countries);
      
      }, []); */

      
    return (
        <FormControl className={styles.formControl}>
            <NativeSelect  style={{color:"beige", backgroundColor:"black"}}defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                {countries.map((country, i) => <option style={{color:"beige",textAlign:"center", backgroundColor:"rgb(43, 48, 53)"}} key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;
