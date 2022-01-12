import React, { useState } from 'react'


function TextForms(props) {
    const handleUpClick = () => {
        // console.log("uppercase is clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert('converted to uppercase', 'success')
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert('converted to lowercase', 'success')
    }

    const handleClearClick = () => {
        let newText = '';
        setText(newText)
        props.showAlert('Cleared all text', 'success')
    }

    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value);
    }

    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert('Removed Extra space', 'success')
    }

    const [text, setText] = useState("");
    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#133856' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="10"></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace}>Remove Extra Space</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your text summary</h2>
                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>
                <p>{text.split(" ").filter((element) => { return element.length !== 0 }).length * 0.008} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "text something in the textbox above to preview it here"}</p>
            </div>
        </>
    )
}

export default TextForms;

