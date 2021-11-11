import './titledtextbox.css';
import React, { useState } from 'react';

function TitledTextBox({ title, temp }) {
    const [textboxTitle] = useState(title);
    const [textboxTemp] = useState(temp);
    return <>
        <div class="inputTextBox">
            <p class="t-title">{textboxTitle}</p>
            <input type="text" class="t-temp" placeholder={textboxTemp}/>
        </div>
    </>
}

export default TitledTextBox;