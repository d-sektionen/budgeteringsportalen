import React, { useState } from "react";
import Modal from "react-modal";
import PdfComponent from "../pdfForm/PdfForm";
import { FiX } from "react-icons/fi"
import { FaCheckCircle, FaBook, FaDollarSign } from "react-icons/fa"

import "./listItem.scss";

function ListItem({ doc, updateOverview}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isStaff, setIsStaff] = useState(true);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  const customStyles = {
    content: {
      maxWidth: 'fit-content',
      display: 'flex',
      margin: 'auto'
    },
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        /* onAfterOpen={afterOpenModal}
				onRequestClose={closeModal} */
        contentLabel="Item"
        style={customStyles}
        
      >
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          <FiX onClick={closeModal} className="exitButton" />
          <PdfComponent data={doc} updateOverview={updateOverview} />
        </div>

      </Modal>
      <div className="listItem" onClick={openModal}>
        <p>Utlägg av {doc.user.username + " " + doc.date.substring(0,10)}</p>

        {isStaff &&
        (<div>
          <button className={`${doc.approvedKas ? "approved" : "disabled"}`}>
            Attesterat
            <FaCheckCircle />
          </button>
          <button className={`${doc.approvedDeg ? "approved" : "disabled"}`}>
            Bokfört
            <FaBook />
          </button>
          <button className={`${doc.payed ? "approved" : "disabled"}`}>
            Betalt
            <FaDollarSign />
          </button>
        </div>)
        }
      </div>
    </>
  );
}

export default ListItem;
