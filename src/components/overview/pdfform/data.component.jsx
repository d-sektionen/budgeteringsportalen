import React from 'react';
import DescriptionBox from './descriptionbox';
import InfoBox from './infobox';
import SpecBox from './specbox';
import TextRow from './textrow';

import './data.scss';

// TODO: datat kommer konstigt inpacketerat, är data.values.data liksom 
const DataComponent = React.forwardRef(({ values }, ref) => {

  const { data } = values

  console.log(data)
  const userValues = [data.committee, data.user.username, data.name, data.location, data.date]
  const bankValues = [data.clearingNr, data.bankNr, data.bankName]


  return (
    <div className="form-container" ref={ref}>
      <SpecBox values={data.articles} />
      <DescriptionBox title={"Ändamål med inköpet"} text={data.description} />
      <InfoBox title={"Kontouppgifter för överföring"} rowTitles={["Clearing-nr", "Konto-nr", "Bank"]} values={bankValues} />
      <InfoBox title={"Övringa Uppgifter"} rowTitles={["Utskott", "Liu-ID", "Namn", "Ort", "Datum"]} values={userValues} />
      <div>
        <input type="checkbox" id="horns" name="horns" checked />
        <p className="warning">
          Genom att signera intygar jag att ovanstående är korrekt
          och sanningsenligt samt att sektionen får lagra
          informationen i detta formulär tillsvidare i
          bokföringssyfte.
        </p>
      </div>
    </div>
  );
})

export default DataComponent;