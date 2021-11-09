import './textbox.css';
import React, { useState } from 'react';

function TextBox({ title, temp }) {
    const [textboxTitle] = useState(title);
    const [textboxTemp] = useState(temp);
    return <>
        <div class="inputTextBox">
            <p class="title">{textboxTitle}</p>
            <p class="temp">{textboxTemp}</p>
        </div>
    </>
}

export default TextBox;