import React from "react";

const Content = () => {
  return (
    <main className="converter">
      <div className="converter-content">
        <h1>CONVERTER</h1>
        <div className="background-convert">
          <form>
            <h3>Enter Amout</h3>
            <input type="number" placeholder="0" />
            <div className="currencyDiv">
              <div className="left">
                <h3>from:</h3>
                <select><option value="USD">USD</option></select>
              </div>
              <i class="fas fa-exchange-alt"></i>
              <div className="right">
                <h3>To:</h3>
                <select><option value="NGN">NGN</option></select>
              </div>
              
            </div>
            <button>Get Exchange Rate</button>
          </form>
          <p>1 Dollor is equal to 717 in Naira</p>
        </div>
      </div>
      <div className="news">
        <a href="#">News about currency rates<i class="fas fa-arrow-right"></i></a>
      </div>
    </main>
  );
};

export default Content;
