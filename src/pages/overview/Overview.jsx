import ListItem from '../../components/listItem/ListItem';

import './overview.scss';
import '../mainPage/mainpage.scss'


function OverView() {
    let entries = [];

    const params = new URLSearchParams(document.location.search);
    const utlaggID = params.get("utlaggid");
    console.log(utlaggID);

    const tempUser = {
        id: 1,
        date: "2021-11-26T19:23:00+01:00",
        user: {
            id: 1,
            username: "felli675",
            first_name: "Felix",
            last_name: "Lindgren",
            pretty_name: "Felix Lindgren"
        },
        name: "felix",
        articles: [
            {
              spec: "Kakor",
              amount: 4,
              price: 5,
            },
            {
              spec: "dawodpamd dankwdnandk dwdajnwdnawdno dawoindnkj dahwiudwkdawdwjwadnjakwdwdwdk",
              amount: 10000,
              price: 5,
            },
            {
              spec: "Många kakor",
              amount: 23131,
              price: 321,
            },
          ],
        description: "Detta är en beskriving av köpet som gjorts",
        confirmed: false,
        clearingNr: "123",
        bankNr: "546",
        bankName: "Bank",
        location: "Linköping",
        committee: "1",
        approvedKas: false,
        approvedDeg: true,
        payed: false,
        ipaddr: "127.0.0.1",
        total_sum: 123123.0,
        signed: true,
    }
    for (let i = 0; i < 12; i++) {
        entries.push(tempUser);
    }


    return (
        <>
            <div id='overView' className="container">
                <h2>Översikt</h2>
                <div id='overViewList'>
                    {entries && entries.map((e, i) => (<ListItem doc={e} key={i}/>))}
                </div>
            </div>
        </>
    );
}

export default OverView;