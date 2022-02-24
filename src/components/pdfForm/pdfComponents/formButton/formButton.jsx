import React from "react";
import { FaPrint, FaCheckCircle, FaBook, FaDollarSign, FaTimes } from 'react-icons/fa'
import useAuthContext from '../../../../hooks/useAuthContext'

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
  const { user, authFinished } = useAuthContext();
  console.log(user)

  const canEdit = true//user && user.privileges.booking_admin

  return (
    <div className="formButton">
      {print && <Button handleClick={handlePrint}><FaPrint /></Button>}
      {attest && canEdit && <Button handleClick={handleAttest}><FaCheckCircle /></Button>}
      {book && canEdit && <Button handleClick={handleBooked}><FaBook /></Button>}
      {payed && canEdit && <Button handleClick={handlePayed}><FaDollarSign /></Button>}
      {deny && canEdit && <Button handleClick={handleDenied}><FaTimes /></Button>}
    </div>
  );
}



export default FormButton;
