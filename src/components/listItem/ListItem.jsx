import React, { useState } from "react";
import Modal from "react-modal";
import PdfComponent from "../pdfForm/PdfForm";

import "./listItem.scss";

function ListItem({ doc }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        /* onAfterOpen={afterOpenModal}
				onRequestClose={closeModal} */
        contentLabel="Test"
      >
        <button onClick={closeModal}>X</button>
        <PdfComponent data={doc} />
      </Modal>
      <div className="listItem" onClick={openModal}>
        <p>Utlägg från {doc.user.username + " " + doc.date}</p>

        <div>
          <button className={`${doc.approvedKas ? "approved" : "disabled"}`}>
            Attesterat
          </button>
          <button className={`${doc.approvedDeg ? "approved" : "disabled"}`}>
            Bokfört
          </button>
          <button className={`${doc.payed ? "approved" : "disabled"}`}>
            Betalt
          </button>
        </div>
      </div>
    </>
  );
}

export default ListItem;
