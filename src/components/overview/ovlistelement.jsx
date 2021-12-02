import Button from '../mainpage/button/button.jsx';
import './overview.scss';

function OvListElement({ doc }) {
	return (
		<>
			<div className='ovListElement'>
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