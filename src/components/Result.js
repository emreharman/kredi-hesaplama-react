import React from "react";

const Result = ({ result }) => {
  return (
    <div className="result">
      {result != "" ? (
        <>
          <div>
            <h2>Taksit Tutarı</h2>
            <p>{result.aylikTaksit.toFixed(2)}</p>
          </div>
          <div>
            <h2>Toplam Ödeme Miktarı</h2>
            <p>{result.toplamOdeme.toFixed(2)}</p>
          </div>
          <div>
            <h2>Faiz Oranı</h2>
            <p>% {result.faizOrani}</p>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Result;
