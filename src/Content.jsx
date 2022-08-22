import React, { useEffect, useState } from "react";


const Content = () => {
  const [converter, setConverter] = useState([])
  useEffect(() => {
    fetch('http://localhost:3500/rates')
    .then((res) => res.json())
    .then((data) => setConverter(data))
  
  }, [])
  // const API_URL = 'https://api.apilayer.com/fixer/latest?apikey=3UWP7PRyFvAX7He4xA1TupaLdJqfFrCo'
   
   
  const keys = Object.keys(converter);
  return (
    <main className="converter">
      <div className="converter-content">
        <div className="wallpaper">
          <h1>CONVERTER</h1>
        </div>
        <div className="background-convert">
          <form>
            <h3>Enter Amout</h3>
            <input type="number" placeholder="1234567890" />
            <div className="currencyDiv">
              <div className="left">
                <h3>From:</h3>
                <div className="left-box">
                  <img src="https://flagicons.lipis.dev/flags/4x3/um.svg" />
                  <select>
                  {keys.map((converterItem, index) =>
                    <option key={index} value={converterItem}>{converterItem}</option>
                  )}
                    
                  </select>
                </div>
              </div>
              <i class="fas fa-exchange-alt"></i>
              <div className="right">
                <h3>To:</h3>
                <div className="right-box">
                  <img src="https://flagicons.lipis.dev/flags/4x3/ng.svg" />
                  <select>
                  {keys.map((converterItem, index) =>
                    <option key={index} value={converterItem}>{converterItem}</option>
                  )}
                  </select>
                </div>
              </div>
            </div>
            <button>Get Exchange Rate</button>
          </form>
          <p>1 Dollar is equal to 717 in Naira</p>
        </div>
        <div className="news">
          <a href="https://www.cnbc.com/currencies/">News about currency rates<i class="fas fa-arrow-right"></i></a>
        </div>
      </div>
    </main>
  );
};

export default Content;
