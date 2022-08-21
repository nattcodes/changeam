import React from "react";

const Content = () => {
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
                    <option value="USD">USD</option>
                    <option value="USD">USD</option>
                    <option value="USD">USD</option>
                    <option value="USD">USD</option>
                    <option value="USD">USD</option>
                  </select>
                </div>
              </div>
              <i class="fas fa-exchange-alt"></i>
              <div className="right">
                <h3>To:</h3>
                <div className="right-box">
                  <img src="https://flagicons.lipis.dev/flags/4x3/ng.svg" />
                  <select>
                    <option value="USD">NGN</option>
                    <option value="USD">NGN</option>
                    <option value="USD">NGN</option>
                    <option value="USD">NGN</option>
                    <option value="USD">NGN</option>
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
