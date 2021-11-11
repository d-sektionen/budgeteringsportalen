import './textbox.css';
import React, { useState } from 'react';

function TextBox({ title, temp }) {
    const [textboxTitle] = useState(title);
    const [textboxTemp] = useState(temp);
    return <>
        <div class="inputTextBox">
            <p class="title">{textboxTitle}</p>
            <input type="text" class="temp" placeholder={textboxTemp}/>
        </div>
    </>
}

export default TextBox;