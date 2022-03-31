import React from "react";
import { FaPrint, FaCheckCircle, FaBook, FaDollarSign, FaTimes } from 'react-icons/fa'
import useAuthContext from '../../../../hooks/useAuthContext'

import './formButton.scss'

const Button = ({ handleClick, children, title, active = false }) => {
  return (
    <div title={title} className={`roundButton ${active ? 'active' : ''}`} onClick={handleClick}>
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
  status
}) {
  console.log(status)
  const { user, authFinished } = useAuthContext();
  console.log(user)

  const canEdit = true//user && user.privileges.booking_admin

  return (
    <div className="formButton">
      {print && <Button title="Skriv ut" handleClick={handlePrint}><FaPrint /></Button>}
      {deny && canEdit && <Button title="Avfärda" handleClick={handleDenied}><FaTimes /></Button>}
      {attest && canEdit && <Button title="Attestera" handleClick={handleAttest} active={status.confirmed}><FaCheckCircle /></Button>}
      {book && canEdit && <Button title="Bokför" handleClick={handleBooked} active={status.booked} ><FaBook /></Button>}
      {payed && canEdit && <Button title="Betala" handleClick={handlePayed} active={status.payed}><FaDollarSign /></Button>}
    </div>
  );
}

export default FormButton;
