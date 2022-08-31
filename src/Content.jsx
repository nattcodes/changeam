import React from "react";

const Content = ({
  fromCurrency, 
  toCurrency,
  converterInput, 
  setConverterInput, 
  result, 
  loadFlagFrom, 
  loadFlagTo, 
  exchangeRate, 
  keys, 
  searchFrom, 
  searchTo, 
  switcher
}) => { // passing in props from App.jsx
  
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
            <button className="exchangeBtn" onClick={exchangeRate}>Get Exchange Rate</button>
          </form>
          <p>{converterInput} {fromCurrency} = {result} {toCurrency}</p>
        </div>
        <div className="news">
          <a href="https://www.cnbc.com/currencies/">News about currency rates<i class="fas fa-arrow-right"></i></a>
        </div>
      </div>
    </main>
  );
};

export default Content;
