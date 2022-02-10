import React from "react";
import { FaPrint, FaCheckCircle, FaBook, FaDollarSign, FaTimes } from 'react-icons/fa'

import './formButton.scss'

const Button = ({handleClick, children}) => {
  return (
    <div className="roundButton" onClick={handleClick}>
      {children}
    </div>
  )
}


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
    <div className="formButton">
      {print && <Button handleClick={handlePrint}><FaPrint /></Button>}
      {attest && <Button handleClick={handleAttest}><FaCheckCircle /></Button>}
      {book && <Button handleClick={handleBooked}><FaBook /></Button>}
      {payed && <Button handleClick={handlePayed}><FaDollarSign /></Button>}
      {deny && <Button handleClick={handleDenied}><FaTimes /></Button>}
    </div>
  );
}



export default FormButton;
