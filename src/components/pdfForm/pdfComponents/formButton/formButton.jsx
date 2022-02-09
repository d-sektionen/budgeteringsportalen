import React from "react";

function FormButton({
  print,
  attest,
  book,
  payed,
  deny,
  handlePrint,
  handlePayed,
  handleBooked,
  handleAttest,
  handleDenied,
}) {
  return (
    <>
      <>
        {print && <button onClick={handlePrint}>Print</button>}
        {attest && <button onClick={handleAttest}>Attestera</button>}
        {book && <button onClick={handleBooked}>Bokfört</button>}
        {payed && <button onClick={handlePayed}>Betalt</button>}
        {deny && <button onClick={handleDenied}>Neka</button>}
      </>
    </>
  );
}

export default FormButton;
