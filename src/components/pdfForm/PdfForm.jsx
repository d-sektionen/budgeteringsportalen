import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import FormButton from "./pdfComponents/formButton/formButton.jsx";
import rectLogo from "../../images/Color_white.svg";
import { put } from "../../utility/request"

import SpecBox from "./pdfComponents/specBox/specbox.jsx";

import "./pdfForm.scss";

const PdfForm = ({ data = {}, updateOverview }) => {
  const ref = useRef();

  const handlePrint = useReactToPrint({
    content: () => ref.current,
  });


  const callUpdate = () => {
    setTimeout(() => {
      updateOverview()
    }, 500)
  }

  const handleAttest = () => {
    const url = `/budget/expense-entries/${data.id}/approve/`

    let formData = new FormData()
    formData.append("approvedKas", true)
    formData.append("user_id", 1)
    put(url, formData).then((res) =>
      console.log(res)
    ).catch((res) =>
      console.log(res)
    )
    console.log(data.id)
    callUpdate()
  };
  const handleBooked = () => {
    const url = `/budget/expense-entries/${data.id}/approve/`

    let formData = new FormData()
    formData.append("approvedKas", true)
    formData.append("approvedDeg", true)
    formData.append("user_id", 1)
    put(url, formData).then((res) =>
      console.log(res)
    ).catch((res) =>
      console.log(res)
    )
    console.log(data.id)
    callUpdate()
  };
  const handlePayed = () => {
    const url = `/budget/expense-entries/${data.id}/approve/`
    let formData = new FormData()
    formData.append("approvedKas", true)
    formData.append("approvedDeg", true)
    formData.append("payed", true)
    formData.append("user_id", 1)
    put(url, formData).then((res) =>
      console.log(res)
    ).catch((res) =>
      console.log(res)
    )
    console.log(data.id)
    callUpdate()
  };
  const handleDenied = () => {
    console.log("neka");
    let data = prompt("Anledning", "");

    // TODO: implement

    callUpdate()
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
    <div style={{ margin: 'auto' }}>
      <div className="form-container" ref={ref}>
        <div className="rect-img-wrapper">
          <img src={rectLogo} alt="d-sektionen logo" />
        </div>
        <SpecBox values={data.articles} />

        <div>
          <div>
            <p className="descr-title descr-text">Ändamål med inköpet</p>
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
        <div style={{ display: 'flex', paddingTop: 18 }}>
          <input type="checkbox" id="horns" name="horns" checked />
          <p className="warning">
            Genom att signera intygar jag att ovanstående är korrekt och
            sanningsenligt samt att sektionen får lagra informationen i detta
            formulär tillsvidare i bokföringssyfte.
          </p>
        </div>
      </div>
      <div style={{ marginLeft: '10%' }}>
        {data.receipts.map((receipt, n) => <a className="descr-text" href={receipt.file} target="_blank" rel="noopener noreferrer">{`Underlag ${n + 1}`}</a>)}
      </div>
      <div style={{ display: 'flex', justifyContent: 'end', width: '80%', margin: 'auto', padding: '16px' }}>
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
          status={{
            confirmed: data.confirmed,
            booked: data.approvedDeg,
            payed: data.payed
          }}
        />
      </div>
    </div>
  );
};

export default PdfForm;
