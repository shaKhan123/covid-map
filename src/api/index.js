import axios from "axios";
import Moment from "moment";

const url = "https://corona.lmao.ninja/v2/countries";
 
export const fetchData = async () => {
  try {
    const response = await fetch(url);
    const json = await response.json();
    return json;
  } catch (error) {}
};


export const fetchCountryStatsData = async (country) => {
  try {
    const response  = await fetch(`https://corona.lmao.ninja/v2/historical/${country}?lastdays=60`);
    const { timeline : {cases, deaths, recovered}} = await response.json();  
    const totalCases = Object.values(cases);
    const totalDeaths = Object.values(deaths);
    const totalRecoverd = Object.values(recovered);
    const reportedDate = Object.keys(cases).map((date) => Moment(date).format("MMM Do"));
    return {totalCases, totalDeaths, totalRecoverd, reportedDate};
  } catch (error) {

  }
}