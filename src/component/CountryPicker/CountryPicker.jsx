import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import styles from "./CountryPicker.module.css";

const CountryPicker = ({ handleCountryChange, countries }) => {
  return (
    <FormControl className={styles.formControl}>
      <NativeSelect
        defaultValue="India"
        onChange={(e) => handleCountryChange(e.target.value)}
      >
         <option value="">India</option>
        {countries.map((country, i) => (
          <option
            style={{
              color: "beige",
              textAlign: "center",
              backgroundColor: "rgb(43, 48, 53)",
            }}
            key={i}
            value={country}
          >
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
