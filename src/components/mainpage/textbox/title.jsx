import './title.css';
import React, { useState } from 'react';

function Title({ titleText }) {
    const [textboxTitle] = useState(titleText);
    return <>
        <div class="textBoxTitle">
            <p class="title">{textboxTitle}</p>
        </div>
    </>
}

export default Title;