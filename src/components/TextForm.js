import React, { useState } from 'react'

// import  PropTypes from 'prop-types';



export default function TextForm(props) {
    const [text, setText] = useState('');        // should be included in function 
    // text = "hello";          // we can't do it like that we have to use setText func
    // setText("Correct way ")      // correct way to change the text

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleloClick = () => {

        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleClrClick = () => {

        let newText = '';
        setText(newText);
    }

    const handleCopy = () =>{
        let copyText = document.getElementById('exampleFormControlTextarea1');
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
        alert('Copied To Clipboard');
    }

  

    return (
        <>
            <div className="container">
                <div className="mb-3">
                    <h1 className="my-3">{props.heading}</h1>
                    <textarea data-gramm_editor="false" value={text} onChange={handleOnChange} className="form-control" id="exampleFormControlTextarea1" rows="6"></textarea>
                    <div className="container ">
                        <button className="btn btn-primary my-2" onClick={handleUpClick}> Convert to UPPERCASE</button>
                        <button className="btn btn-primary my-2 mx-2" onClick={handleloClick}> Convert to lowercase</button>
                        <button className="btn btn-primary my-2 mx-2" onClick={handleClrClick}> Clear Text</button>
                        <button className="btn btn-primary my-2 mx-2" onClick={handleCopy}> Copy Text</button>
                    </div>
                </div>
            </div>
            <div className="container">
                <h2>Text Summary</h2>
                <p >Word Count: {text.split(' ').length} | Character Count:  {text.length} | line Count: {text.split(/\r\n|\r|\n/).length}</p>
                <p>{0.008 * text.split(' ').length} Minute to Read</p>
            </div>
        </>
    )
}
