import './specbox.scss';

function SpecBox({ values }) {

    return <>
        <div>
            <table className="right">
                <tr>
                    <th>Specifikation</th>
                    <th>Antal</th>
                    <th>Pris</th>
                    <th>Summa</th>
                </tr>   
                {values.map((val) => (
                <tr>
                    <td>{val.spec}</td>
                    <td>{val.amount}</td>
                    <td>{val.price}</td>
                    <td>{val.sum}</td>
                </tr>
            ))}
                <td colspan={2}></td>
                <td><strong>Total</strong></td>
                <td>$10.71</td>
            </table>
        </div>
    </>
}

export default SpecBox;