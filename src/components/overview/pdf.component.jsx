import React from 'react';
import ReactToPrint from 'react-to-print';

import DataComponent from './data.component';

class PdfComponent extends React.Component {
    
    render() {
      return (
        <div>
          <ReactToPrint
            content={() => this.componentRef}
            trigger={() => <button className="btn btn-primary">Print to PDF!</button>}
          />
          <DataComponent ref={(response) => (this.componentRef = response)} />
        </div>
      );
    }

}

export default PdfComponent;