import React from "react";
import { FaPrint, FaCheckCircle, FaBook, FaDollarSign, FaTimes } from 'react-icons/fa'
import useAuthContext from '../../../../hooks/useAuthContext'

import './formButton.scss'

const Button = ({handleClick, children, title}) => {
  return (
    <div title={title} className="roundButton" onClick={handleClick}>
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
  const { user, authFinished } = useAuthContext();
  console.log(user)

  const canEdit = true//user && user.privileges.booking_admin

  return (
    <div className="formButton">
      {print && <Button title="Skriv ut" handleClick={handlePrint}><FaPrint /></Button>}
      {deny && canEdit && <Button title="Avfärda" handleClick={handleDenied}><FaTimes /></Button>}
      {attest && canEdit && <Button title="Attestera" handleClick={handleAttest}><FaCheckCircle /></Button>}
      {book && canEdit && <Button title="Bokför" handleClick={handleBooked}><FaBook /></Button>}
      {payed && canEdit && <Button title="Betala" handleClick={handlePayed}><FaDollarSign /></Button>}
    </div>
  );
}



export default FormButton;
