import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import FormButton from './formButton.jsx';

import DataComponent from './data.component';

const PdfComponent = (data = {}) =>  {

      const componentRef = useRef()
      const handlePrint = useReactToPrint({
        content: () => componentRef.current,
      });
      const handleAttest = () => {
        console.log('Attestera')
      }
      const handleBooked = () => {
        console.log('Bokfört')
      }
      const handlePayed = () => {
        console.log('Betalat')
        
      }
      const handleDenied = () => {
        console.log('neka')
        let data = prompt('Anledning', '')
      }
    
      return (
        <div>
          <DataComponent ref={componentRef} values={data}/>
          <FormButton type={"print"} handleClick={handlePrint}/>
          <FormButton type={"attest"} handleClick={handleAttest}/>
          <FormButton type={"book"} handleClick={handleBooked}/>
          <FormButton type={"payed"} handleClick={handlePayed}/>
          <FormButton type={"deny"} handleClick={handleDenied}/>
        </div>
      );
}

export default PdfComponent;