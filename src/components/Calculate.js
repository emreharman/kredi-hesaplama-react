import React, { useState, useEffect } from "react";

const Calculate = () => {
  const [kredi, setKredi] = useState(1000);
  const [krediError, setKrediError] = useState(false);
  const [krediErrorMessage, setKrediErrorMessage] = useState("");
  const [taksitSayisi, setTaksitSayisi] = useState(3);
  const [taksitError, setTaksitError] = useState(false);
  const [taksitErrorMessagge, setTaksitErrorMessagge] = useState("");
  const [faizOrani, setFaizOrani] = useState(0);
  const [faizError, setFaizError] = useState(false);
  const [faizErrorMessagge, setFaizErrorMessagge] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(kredi, taksitSayisi, faizOrani);
    const aylikTaksit =
      (kredi *
        ((faizOrani * Math.pow(1 + faizOrani / 100, taksitSayisi)) /
          (Math.pow(1 + faizOrani / 100, taksitSayisi) - 1))) /
      100;
    //console.log("aylık taksit: ", aylikTaksit);
    const toplamOdeme = aylikTaksit * taksitSayisi;
    //console.log("toplam ödeme: ", toplamOdeme);
  };
  useEffect(() => {
    if (kredi > 100000) {
      setKrediError(true);
      setKrediErrorMessage("Tutar 100.000 TL'den Büyük Olamaz.");
      setKredi(100000);
      setTimeout(() => {
        setKrediError(false);
        setKrediErrorMessage("");
      }, 1000);
    }
    if (kredi < 1000) {
      setKrediError(true);
      setKrediErrorMessage("Tutar 1.000 TL'den Küçük Olamaz.");
      setKredi(1000);
      setTimeout(() => {
        setKrediError(false);
        setKrediErrorMessage("");
      }, 1000);
    }
  }, [kredi]);
  useEffect(() => {
    if (taksitSayisi > 36) {
      setTaksitError(true);
      setTaksitErrorMessagge("Taksit Sayısı 36'dan Büyük Olamaz.");
      setTaksitSayisi(36);
      setTimeout(() => {
        setTaksitError(false);
        setTaksitErrorMessagge("");
      }, 1000);
    }
    if (taksitSayisi < 3) {
      setTaksitError(true);
      setTaksitErrorMessagge("Taksit Sayısı 3'ten Küçük Olamaz.");
      setTaksitSayisi(3);
      setTimeout(() => {
        setTaksitError(false);
        setTaksitErrorMessagge("");
      }, 1000);
    }
  }, [taksitSayisi]);
  useEffect(() => {
    if (faizOrani < 0) {
      setFaizError(true);
      setFaizErrorMessagge("Faiz Oranı 0'dan Küçük Olamaz.");
      setFaizOrani(0);
      setTimeout(() => {
        setFaizError(false);
        setFaizErrorMessagge("");
      }, 1000);
    }
  }, [faizOrani]);
  return (
    <div className="calculate">
      <form onSubmit={handleSubmit}>
        <div className="form-p">
          <p style={{ margin: "0", padding: "0" }}>Kredi Tutarı</p>
          <div className="input-group">
            <input
              type="number"
              value={kredi}
              onChange={(e) => setKredi(parseInt(e.target.value))}
            />
            <span>TL kredi istiyorum</span>
          </div>
          <div>
            <input
              className="type-range"
              type="range"
              min="1000"
              max="100000"
              step="500"
              value={kredi}
              onChange={(e) => setKredi(parseInt(e.target.value))}
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
          <div className="error">
            {krediError && <p>{krediErrorMessage}</p>}
          </div>
        </div>
        <div className="form-p" style={{ marginTop: "2rem" }}>
          <p style={{ margin: "0", padding: "0" }}>Taksit Sayısı</p>
          <div className="input-group">
            <input
              type="number"
              value={taksitSayisi}
              onChange={(e) => setTaksitSayisi(parseInt(e.target.value))}
            />
            <span>ay ödeyebilirim</span>
          </div>
          <div>
            <input
              className="type-range"
              type="range"
              min="3"
              max="36"
              step="3"
              value={taksitSayisi}
              onChange={(e) => setTaksitSayisi(parseInt(e.target.value))}
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
          <div className="error">
            {taksitError && <p>{taksitErrorMessagge}</p>}
          </div>
        </div>
        <div className="form-p" style={{ marginTop: "2rem" }}>
          <p style={{ margin: "0", padding: "0" }}>Faiz Oranı</p>
          <div className="input-group">
            <input
              type="number"
              required
              value={faizOrani}
              onChange={(e) => setFaizOrani(parseFloat(e.target.value))}
            />
          </div>
          <div className="error">{faizError && <p>{faizErrorMessagge}</p>}</div>
        </div>
        <div className="button-container">
          <button type="submit">Hesapla</button>
        </div>
      </form>
    </div>
  );
};

export default Calculate;
