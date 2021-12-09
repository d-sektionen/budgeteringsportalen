import './specbox.scss';

function SpecBox({ values }) {
    return <>
        <div className="spec-row">
            <div className="spec-titles">
                <p className="spec-title">Specifikation</p>
                <p className="spec-title">Antal</p>
                <p className="spec-title">Pris</p>
                <p className="spec-title">Summa</p>
            </div>
            {values.map((val) => (
                <div className="spec-vals">
                    <p className="spec-val">{val.spec}</p>
                    <p className="spec-val">{val.amount}</p>
                    <p className="spec-val">{val.price}</p>
                    <p className="spec-val">{val.sum}</p>
                </div>
            ))}
        </div>
    </>
}

export default SpecBox;