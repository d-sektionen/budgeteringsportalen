import './lefttextbox.css';
import React, { useState } from 'react';

function LeftTextBox({ title, temp }) {
    const [textboxTitle] = useState(title);
    const [textboxTemp] = useState(temp);
    return <>
        <div class="inputTextBox">
            <p class="l-title">{textboxTitle}</p>
            <p class="l-temp">{textboxTemp}</p>
        </div>
    </>
}

export default LeftTextBox;