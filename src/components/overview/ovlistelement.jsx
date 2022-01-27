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
				<button onClick={closeModal}>X</button>
				<PdfComponent data={doc}/>
			</Modal>
			<div className='ovListElement' onClick={openModal}>
				<p>Utlägg från {doc.user.username + " " + doc.date}</p>
				
				<div>
					<button className={`${doc.approvedKas ? 'approved' : 'disabled'}`}>Attesterat</button>
					<button className={`${doc.approvedDeg ? 'approved' : 'disabled'}`}>Bokfört</button>
					<button className={`${doc.payed ? 'approved' : 'disabled'}`}>Betalt</button>
				</div>
			</div>
		</>
	);
}

export default OvListElement;