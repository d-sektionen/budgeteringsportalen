import Button from '../mainpage/button/button.jsx';
import OvListElement from './ovlistelement.jsx';

import './overview.scss';
import '../mainpage/mainpage.scss';
import LeftTextBox from '../mainpage/textbox/lefttextbox.jsx';
import OvUtlagg from './ovutlagg.jsx';

function OverView() {
    const entries = [];

    const params = new URLSearchParams(document.location.search);
    const utlaggID = params.get("utlaggid");
    console.log(utlaggID);

    // hämta alla utlägg
    // test
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
        articles: "[123,345]",
        description: "desc",
        confirmed: false,
        clearingNr: "123",
        bankNr: "546",
        bankName: "",
        location: "",
        committee: "1",
        approvedKas: false,
        approvedDeg: false,
        payed: false,
        ipaddr: "127.0.0.1",
        total_sum: 123123.0
    }
    for (let i = 0; i < 12; i++) {
        entries.push(tempUser);
    }

    return (
        <>
            <div id='overView' className='container'>
                <h1>Översikt</h1>


                <div id='overViewList'>
                    {entries.map((e, i) => (<OvListElement doc={e} key={i} />))}
                </div>
                <div>
                    <OvUtlagg content={tempUser} />
                </div>
            </div>
        </>
    );
}

export default OverView;