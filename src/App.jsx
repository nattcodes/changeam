import React, { useState, useEffect } from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";



function App() {
    const [converter, setConverter] = useState([]); //to get our currency rates and store it in our application.....other default state
  const [fromCurrency, setFromCurrency] = useState(); // to set our from currency to a default currency once on load
  const [toCurrency, setToCurrency] = useState(); // to set our to currency to a default currency once on load
  const [imgSearchFrom, setImgSearchFrom] = useState("ng"); //default input for our img URL on the fromCurrency
  const [imgSearchTo, setImgSearchTo] = useState("us"); //default input for our img URL on the toCurrency
  const [converterInput, setConverterInput] = useState(421); // form input
  const [result, setResult] = useState('1.00'); //our total data/value gotten from the current conversion

  useEffect(() => {
    fetcher()
  }, [])

  const fetcher = () => {
    fetch('changeam.json') //api url
    .then((res) => res.json())
    .then((data) => {
      const firstCurrency = Object.keys(data.rates)[106]
      const secondCurrency = Object.keys(data.rates)[149]
      setConverter(data.rates);
      setFromCurrency(firstCurrency);
      setToCurrency(secondCurrency);
      
    })
    .catch((err) => console.error(err))
    
  }
  

  let countryCode = { 
    "AED" : "AE",
    "AFN" : "AF",
    "XCD" : "AG",
    "ALL" : "AL",
    "AMD" : "AM",
    "ANG" : "AN",
    "AOA" : "AO",
    "AQD" : "AQ",
    "ARS" : "AR",
    "AUD" : "AU",
    "AZN" : "AZ",
    "BAM" : "BA",
    "BBD" : "BB",
    "BDT" : "BD",
    "XOF" : "BE",
    "BGN" : "BG",
    "BHD" : "BH",
    "BIF" : "BI",
    "BMD" : "BM",
    "BND" : "BN",
    "BOB" : "BO",
    "BRL" : "BR",
    "BSD" : "BS",
    "NOK" : "BV",
    "BWP" : "BW",
    "BYR" : "BY",
    "BZD" : "BZ",
    "CAD" : "CA",
    "CDF" : "CD",
    "XAF" : "CF",
    "CHF" : "CH",
    "CLP" : "CL",
    "CNY" : "CN",
    "COP" : "CO",
    "CRC" : "CR",
    "CUP" : "CU",
    "CVE" : "CV",
    "CYP" : "CY",
    "CZK" : "CZ",
    "DJF" : "DJ",
    "DKK" : "DK",
    "DOP" : "DO",
    "DZD" : "DZ",
    "ECS" : "EC",
    "EEK" : "EE",
    "EGP" : "EG",
    "ETB" : "ET",
    "EUR" : "EU",
    "FJD" : "FJ",
    "FKP" : "FK",
    "GBP" : "GB",
    "GEL" : "GE",
    "GGP" : "GG",
    "GHS" : "GH",
    "GIP" : "GI",
    "GMD" : "GM",
    "GNF" : "GN",
    "GTQ" : "GT",
    "GYD" : "GY",
    "HKD" : "HK",
    "HNL" : "HN",
    "HRK" : "HR",
    "HTG" : "HT",
    "HUF" : "HU",
    "IDR" : "ID",
    "ILS" : "IL",
    "INR" : "IN",
    "IQD" : "IQ",
    "IRR" : "IR",
    "ISK" : "IS",
    "JMD" : "JM",
    "JOD" : "JO",
    "JPY" : "JP",
    "KES" : "KE",
    "KGS" : "KG",
    "KHR" : "KH",
    "KMF" : "KM",
    "KPW" : "KP",
    "KRW" : "KR",
    "KWD" : "KW",
    "KYD" : "KY",
    "KZT" : "KZ",
    "LAK" : "LA",
    "LBP" : "LB",
    "LKR" : "LK",
    "LRD" : "LR",
    "LSL" : "LS",
    "LTL" : "LT",
    "LVL" : "LV",
    "LYD" : "LY",
    "MAD" : "MA",
    "MDL" : "MD",
    "MGA" : "MG",
    "MKD" : "MK",
    "MMK" : "MM",
    "MNT" : "MN",
    "MOP" : "MO",
    "MRO" : "MR",
    "MTL" : "MT",
    "MUR" : "MU",
    "MVR" : "MV",
    "MWK" : "MW",
    "MXN" : "MX",
    "MYR" : "MY",
    "MZN" : "MZ",
    "NAD" : "NA",
    "XPF" : "NC",
    "NGN" : "NG",
    "NIO" : "NI",
    "NPR" : "NP",
    "NZD" : "NZ",
    "OMR" : "OM",
    "PAB" : "PA",
    "PEN" : "PE",
    "PGK" : "PG",
    "PHP" : "PH",
    "PKR" : "PK",
    "PLN" : "PL",
    "PYG" : "PY",
    "QAR" : "QA",
    "RON" : "RO",
    "RSD" : "RS",
    "RUB" : "RU",
    "RWF" : "RW",
    "SAR" : "SA",
    "SBD" : "SB",
    "SCR" : "SC",
    "SDG" : "SD",
    "SEK" : "SE",
    "SGD" : "SG",
    "SKK" : "SK",
    "SLL" : "SL",
    "SOS" : "SO",
    "SRD" : "SR",
    "STD" : "ST",
    "SVC" : "SV",
    "SYP" : "SY",
    "SZL" : "SZ",
    "THB" : "TH",
    "TJS" : "TJ",
    "TMT" : "TM",
    "TND" : "TN",
    "TOP" : "TO",
    "TRY" : "TR",
    "TTD" : "TT",
    "TWD" : "TW",
    "TZS" : "TZ",
    "UAH" : "UA",
    "UGX" : "UG",
    "USD" : "US",
    "UYU" : "UY",
    "UZS" : "UZ",
    "VEF" : "VE",
    "VND" : "VN",
    "VUV" : "VU",
    "YER" : "YE",
    "ZAR" : "ZA",
    "ZMK" : "ZM",
    "ZWD" : "ZW",
    "ZWL" : "ZL",
    "BTC" : "XX",
    "ZMW" : "XX"
} //object, which will be used to fetch flag data from img URL


const loadFlagFrom = (e) => {
  for(let code in countryCode){
      if(code == e.target.value){ //looping through the countryCode object to give the string a variable called "code"....using forloop (for the fromCurrency)
        setFromCurrency(e.target.value)
        setImgSearchFrom(countryCode[code].toLowerCase())
      }
  }
}
const loadFlagTo = (e) => {
  for(let code in countryCode){
      if(code == e.target.value){ //looping through the countryCode object to give the string a variable called "code"....using forloop (for the toCurrency)
        setToCurrency(e.target.value)
        setImgSearchTo(countryCode[code].toLowerCase());
      }
  }
}
function exchangeRate() { //getting the value from the input and miltiplying it by the toCurrency and dividing by the fromCurrency to get our result
  const value = converterInput * converter[toCurrency] / converter[fromCurrency];
  setResult((value).toFixed(2))
}


const keys = Object.keys(converter); //converting our data/converter into array.....object to array function



const searchFrom = `https://flagicons.lipis.dev/flags/4x3/${imgSearchFrom}.svg` //img URl
const searchTo = `https://flagicons.lipis.dev/flags/4x3/${imgSearchTo}.svg`

const switcher = () => { // to switch two currencies using the switch icon
  setFromCurrency(toCurrency)
  setToCurrency(fromCurrency)
  setImgSearchFrom(imgSearchTo)
  setImgSearchTo(imgSearchFrom)
  const value = converterInput * converter[fromCurrency] / converter[toCurrency];
  setResult((value).toFixed(2))
  
}
    return ( 
        <div className = "App" >
            <Header />
            <Content 
                converter={converter}
                setConverter={setConverter}
                fromCurrency={fromCurrency}
                toCurrency={toCurrency}
                imgSearchFrom={imgSearchFrom}
                setImgSearchFrom={setImgSearchFrom}
                imgSearchTo={imgSearchTo}
                setImgSearchTo={setImgSearchTo}
                converterInput={converterInput}
                setConverterInput={setConverterInput}
                result={result}
                setResult={setResult}
                loadFlagFrom={loadFlagFrom}
                loadFlagTo={loadFlagTo}
                exchangeRate={exchangeRate}
                keys={keys}
                searchFrom={searchFrom}
                searchTo={searchTo}
                switcher={switcher}
            />
            <Footer />
        </div>
    );
}

export default App;