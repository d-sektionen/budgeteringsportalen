import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import FormButton from "./pdfComponents/formButton/formButton.jsx";

import SpecBox from "./pdfComponents/specBox/specbox.jsx";

import "./pdfForm.scss";

const PdfForm = ({ data = {} }) => {
  const ref = useRef();

  const handlePrint = useReactToPrint({
    content: () => ref.current,
  });
  const handleAttest = () => {
    console.log("Attestera");
  };
  const handleBooked = () => {
    console.log("Bokfört");
  };
  const handlePayed = () => {
    console.log("Betalat");
  };
  const handleDenied = () => {
    console.log("neka");
    let data = prompt("Anledning", "");
  };

  const userValues = [
    data.committee,
    data.user.username,
    data.name,
    data.location,
    data.date,
  ];
  const bankValues = [data.clearingNr, data.bankNr, data.bankName];

  return (
    <div style={{margin: 'auto'}}>
      <div className="form-container" ref={ref}>
        <SpecBox values={data.articles} />
        <div>
          <div>
            <p className="descr-title descr-text">Ändamål med inköpet</p>
          </div>
          <div>
            <p className="descr-text">{data.description}</p>
          </div>
        </div>
        <div className="infoContainer">
          <p className="t-info-title">Kontouppgifter för överföring</p>
          {["Clearing-nr", "Konto-nr", "Bank"].map((t, i) => (
            <div className="t-row">
              <div className="trow-title">
                <p>{t}</p>
              </div>
              <div className="t-val">
                <p>{bankValues[i]}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="infoContainer">
          <p className="t-info-title">Övriga Uppgifter</p>
          {["Utskott", "Liu-ID", "Namn", "Ort", "Datum"].map((t, i) => (
            <div className="t-row">
              <div className="trow-title">
                <p>{t}</p>
              </div>
              <div className="t-val">
                <p>{userValues[i]}</p>
              </div>
            </div>
          ))}
        </div>
        <div>
          <input type="checkbox" id="horns" name="horns" checked />
          <p className="warning">
            Genom att signera intygar jag att ovanstående är korrekt och
            sanningsenligt samt att sektionen får lagra informationen i detta
            formulär tillsvidare i bokföringssyfte.
          </p>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'end', width: '80%', margin: 'auto'}}>
        <FormButton
          print
          attest
          book
          payed
          deny
          handlePrint={handlePrint}
          handlePayed={handlePayed}
          handleBooked={handleBooked}
          handleAttest={handleAttest}
          handleDenied={handleDenied}
        />
        </div>
    </div>
  );
};

export default PdfForm;
