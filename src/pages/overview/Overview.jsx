import ListItem from '../../components/listItem/ListItem';
import { get, post } from "../../utility/request";
import SelectBox from "../../components/boxes/selectBox/selectBox";

import './overview.scss';
import '../mainPage/mainpage.scss'
import { useEffect, useState } from 'react';


const OverView = () => {
    const [entries, setEntries] = useState([])
    const [user, setUser] = useState({})

    const updateOverview = () => {
        get("/budget/expense-entries/").
            then(r => {
                const d = r.data;
                for (const e of d) {
                    e.committee = e.committee.name;
                }
                setEntries(d)
            })
    }

    const getUser = () => {
        get("/account/me").
            then(r => {
                setUser(r)
            })
    }

    useEffect(() => {
        updateOverview()
        const intervalId = setInterval(() => {
            updateOverview()
        }, 20000)

        getUser()

        return () => clearInterval(intervalId);

    }, [])

    return (
        <>
            <div id='overView' className="container">
                <h2>Översikt</h2>
                <div>
                    <p>Antal utlägg: {entries.length}</p>
                    <div>
                        <input type="checkbox" id="Attesterade" name="attesterade"
                            checked></input>
                        <label htmlFor="attesterade">Attesterade</label>

                        <input type="checkbox" id="Bokförda" name="Bokförda"
                            checked></input>
                        <label htmlFor="Bokförda">Bokförda</label>

                        <input type="checkbox" id="Betalade" name="Betalade"
                            checked></input>
                        <label htmlFor="Betalade">Betalade</label>
                    </div>
                </div>

                <div id='overViewList'>
                    {entries && entries.map((e, i) => (<ListItem doc={e} key={i} updateOverview={updateOverview} />))}
                </div>
            </div>
        </>
    );
}

export default OverView;