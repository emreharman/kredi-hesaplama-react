import React from "react";

const Calculate = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="calculate">
      <form onSubmit={handleSubmit}>
        <div className="form-p">
          <p style={{ margin: "0", padding: "0" }}>Kredi Tutarı</p>
          <div className="input-group">
            <input type="number" />
            <span>TL kredi istiyorum</span>
          </div>
          <div>
            <input
              className="type-range"
              type="range"
              min="1000"
              max="100000"
              step="500"
            />
            <div
              style={{
                width: "80%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <span>1.000 TL</span>
              <span>100.000 TL</span>
            </div>
          </div>
        </div>
        <div className="form-p" style={{ marginTop: "2rem" }}>
          <p style={{ margin: "0", padding: "0" }}>Taksit Sayısı</p>
          <div className="input-group">
            <input type="number" />
            <span>ay ödeyebilirim</span>
          </div>
          <div>
            <input
              className="type-range"
              type="range"
              min="3"
              max="36"
              step="3"
            />
            <div
              style={{
                width: "80%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <span>3 Ay</span>
              <span>36 Ay</span>
            </div>
          </div>
        </div>
        <div className="form-p" style={{ marginTop: "2rem" }}>
          <p style={{ margin: "0", padding: "0" }}>Faiz Oranı</p>
          <div className="input-group">
            <input type="number" />
          </div>
        </div>
        <div className="button-container">
          <button type="submit">Hesapla</button>
        </div>
      </form>
    </div>
  );
};

export default Calculate;
