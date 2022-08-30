import React, { useEffect, useState } from "react";


const Content = () => {
  const [converter, setConverter] = useState([]); //to get our currency rates and store it in our application.....other default state
  const [fromCurrency, setFromCurrency] = useState(); // to set our from currency to a default currency once on load
  const [toCurrency, setToCurrency] = useState(); // to set our to currency to a default currency once on load
  const [imgSearchFrom, setImgSearchFrom] = useState("ng");
  const [imgSearchTo, setImgSearchTo] = useState("us");
  const [converterInput, setConverterInput] = useState('');

  useEffect(() => {
    fetcher()
    
  }, [])

  // const API_URL = 'https://api.apilayer.com/fixer/latest?apikey=3UWP7PRyFvAX7He4xA1TupaLdJqfFrCo'
  
  const fetcher = () => {
    fetch('http://localhost:3500/rates') //api url
    .then((res) => res.json())
    .then((data) => {
      const firstCurrency = Object.keys(data)[106]
      const secondCurrency = Object.keys(data)[149]
      setConverter(data);
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
    "EUR" : "FR",
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
    "ZWL": "zl"
}

// function loadFlag(element){
//   for(let code in country_list){
//       if(code == element.value){
//           let imgTag = element.parentElement.querySelector("img");
//           imgTag.src = `https://flagcdn.com/48x36/${country_list[code].toLowerCase()}.png`;
//       }
//   }
// }
const loadFlagFrom = (e) => {
  for(let code in countryCode){
      if(code == e.target.value){
        setFromCurrency(e.target.value)
        setImgSearchFrom(countryCode[code].toLowerCase())
      }
  }
}
const loadFlagTo = (e) => {
  for(let code in countryCode){
      if(code == e.target.value){
        setToCurrency(e.target.value)
        setImgSearchTo(countryCode[code].toLowerCase());
      }
  }
}


const keys = Object.keys(converter); //converting our data/converter into array.....object to array function
// const imgTag = Object.keys(countryCode).map((keey) => {
//   countryCode[keey].toLowerCase()
// })


const searchFrom = `https://flagicons.lipis.dev/flags/4x3/${imgSearchFrom}.svg`
const searchTo = `https://flagicons.lipis.dev/flags/4x3/${imgSearchTo}.svg`
const switcher = () => {
  setFromCurrency(toCurrency)
  setToCurrency(fromCurrency)
  setImgSearchFrom(imgSearchTo)
  setImgSearchTo(imgSearchFrom)
}

return (
    <main className="converter">
      <div className="converter-content">
        <div className="wallpaper">
          <h1>CONVERTER</h1>
        </div>
        <div className="background-convert">
          <form onSubmit={(e) => e.preventDefault()}>
            <h3>Enter Amout</h3>
            <input 
              type="number" 
              placeholder="1234567890" 
              value={converterInput}
              onChange={(e) => setConverterInput(+e.target.value)}
            />
            <div className="currencyDiv">
              <div className="left">
                <h3>From:</h3>
                <div className="left-box">
                <img src={searchFrom}/>
                  <select value={fromCurrency} onChange={(e) => loadFlagFrom(e)}> 
                  {keys.map((converterItem, index) =>
                    <option key={index} value={converterItem}>{converterItem}</option>
                  )}
                    
                  </select>
                </div>
              </div>
              <button className="iconBtn" onClick={switcher}><i class="fas fa-exchange-alt"></i></button>
              <div className="right">
                <h3>To:</h3>
                <div className="right-box">
                  <img src={searchTo} />
                  <select value={toCurrency} onChange={(e) => loadFlagTo(e)}>
                  {keys.map((converterItem, index) =>
                    <option key={index} value={converterItem}>{converterItem}</option>
                  )}
                  </select>
                </div>
              </div>
            </div>
            <button className="exchangeBtn">Get Exchange Rate</button>
          </form>
          <p>{converterInput}</p>
        </div>
        <div className="news">
          <a href="https://www.cnbc.com/currencies/">News about currency rates<i class="fas fa-arrow-right"></i></a>
        </div>
      </div>
    </main>
  );
};

export default Content;
