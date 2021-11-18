import React, { useState } from 'react';

function Title({ titleText }) {
    const [textboxTitle] = useState(titleText);
    return <>
        <div className="textBoxTitle">
            <p className="title">{textboxTitle}</p>
        </div>
    </>
}

export default Title;