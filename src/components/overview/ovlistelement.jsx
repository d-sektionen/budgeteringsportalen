import React, { useState } from 'react'
import Button from '../mainpage/button/button.jsx';
import PdfComponent from './pdfform/pdf.component.jsx';
import './overview.scss';
import Modal from 'react-modal';


function OvListElement({ doc }) {

	const [isOpen, setIsOpen] = useState(false)

    const openModal = () => {
        setIsOpen(true)
    }
    const closeModal = () => {
        setIsOpen(false)
    }
		
	return (
		<>
			<Modal
				isOpen={isOpen}
				/* onAfterOpen={afterOpenModal}
				onRequestClose={closeModal} */
				contentLabel="Test">
				<p onClick={closeModal}>X</p>
				<PdfComponent data={doc}/>
			</Modal>
			<div className='ovListElement' onClick={openModal}>
				Utlägg från {doc.user.username + " " + doc.date}
				{/* <div id="approvedKasSymbol">
                    aKas: { doc.approvedKas ?"Approved": "Not approved"}
                </div>
                <div id="approvedDegSymbol">
                    aDeg: { doc.approvedDeg ?"Approved": "Not approved"}
                </div> */}
			</div>
		</>
	);
}

export default OvListElement;