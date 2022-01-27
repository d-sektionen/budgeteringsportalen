import React from 'react';


function FormButton({ type, handleClick }) {

  console.log(handleClick)
    
    return <>
        <>
            {type === 'print' && <button onClick={handleClick}>Print</button>}
            {type === 'attest' && <button onClick={handleClick} >Attestera</button>}
            {type === 'book' && <button onClick={handleClick}>Bokfört</button>}
            {type === 'payed' && <button onClick={handleClick}>Betalt</button>}
            {type === 'deny' && <button onClick={handleClick}>Neka</button>}
        </>
    </>
}

export default FormButton;