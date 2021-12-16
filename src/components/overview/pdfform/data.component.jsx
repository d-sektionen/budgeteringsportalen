import React from 'react';
import DescriptionBox from './descriptionbox';
import InfoBox from './infobox';
import SpecBox from './specbox';
import TextRow from './textrow';

import './data.scss';

const specifications = [
  {
    spec: "Kakor",
    amount: 4,
    price: 5,
    sum: 20,
  },
  {
    spec: "Många kakor",
    amount: 10000,
    price: 5,
    sum: 50000,
  },
  {
    spec: "dawodpamd dankwdnandk dwdajnwdnawdno dawoindnkj dahwiudwkdawdwjwadnjakwdwdwdk",
    amount: 23131,
    price: 321,
    sum: 312344,
  },
]

const description = {
    title: "Ändamål med inköpet",
    descr: "Beskrivning av köpet djnawkndpnawdn dj aowjdwjwaj awd  jwadoijdwåaiojwj",
}

const accountInfo = {
    title: "Kontouppgifter för överföring",
    rowTitles: ["Clearing-nr", "Konto-nr", "Bank"],
    values: [1,2,3],
}

const userInfo = {
    title: "Övringa Uppgifter",
    rowTitles: ["Utskott", "Liu-ID", "Namn", "Ort", "Datum"],
    values: [1,2,3,4,5],
}
  
class DataComponent extends React.Component {    

    render() {
      return (
        <div className="form-container">
            <SpecBox values={specifications}/>
            <DescriptionBox title={description.title} text={description.descr}/>
            <InfoBox title={accountInfo.title} rowTitles={accountInfo.rowTitles} values={accountInfo.values}/>
            <InfoBox title={userInfo.title} rowTitles={userInfo.rowTitles} values={userInfo.values}/>
        </div>
      );
    }
  }

  export default DataComponent;