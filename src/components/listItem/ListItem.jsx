import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import PdfComponent from "../pdfForm/PdfForm";
import { FiX } from "react-icons/fi"
import { FaCheckCircle, FaBook, FaDollarSign, FaTimes } from "react-icons/fa"

import "./listItem.scss";

const ListItem = ({ doc, updateOverview }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isStaff, setIsStaff] = useState(true);

  
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
    const queryParams = new URLSearchParams(window.location.search);   
    if (queryParams.has('id')) {
      queryParams.delete('id')
      //window.location.search = queryParams.toString()
      window.location.search = ""
      //window.history.replaceState( {} , "title", "" )
    }
  };

  useEffect(()=>{
    //console.log(window.location)
       
    
    const queryParams = new URLSearchParams(window.location.search);   
    if(doc.id == queryParams.get("id")){
      
      openModal();
      
    }
  })

  //Modal.setAppElement(el)

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
        <p>Utlägg av {doc.user.username + " " + doc.date.substring(0, 10)}</p>

        {isStaff &&
          (<div>
            <label className={`statusLabel ${doc.approvedKas ? "approved" : "disabled"}`}>
              Attesterat 
              {" "}
              <FaCheckCircle />
            </label>
            <label className={`statusLabel ${doc.approvedDeg ? "approved" : "disabled"}`}>
              Bokfört
              {" "}
              <FaBook />
            </label>
            <label className={`statusLabel ${doc.payed ? "approved" : "disabled"}`}>
              Betalt 
              {" "}
              <FaDollarSign />
            </label>
            {doc.denied && 
            <label className={"deniedLabel"}> 
            Nekad
            {" "}
            <FaTimes/>
            </label>}
          </div>)
        }
      </div>
    </>
  );
}

export default ListItem;
