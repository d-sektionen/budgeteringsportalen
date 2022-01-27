import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

import DataComponent from './data.component';

const PdfComponent = (data = {}) =>  {

      const componentRef = useRef()
      const handlePrint = useReactToPrint({
        content: () => componentRef.current,
      });
    
      return (
        <div>
          <DataComponent ref={componentRef} values={data}/>
          <button className="btn btn-primary" onClick={handlePrint} >Print to PDF!</button>
        </div>
      );
}

export default PdfComponent;