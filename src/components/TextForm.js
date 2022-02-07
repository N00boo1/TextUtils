import React, {useState} from 'react';


export default function TextForm(props) {

    const handleUpClick=()=>{
        let newText =text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","success");
    }
    const handleOnChange=(e)=>{
        setText(e.target.value);
    }
    const handledownClick=()=>{
        let newText =text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase","success");

    }
    const space=()=>{
        let newtext=text.split(/[ ]+/);
        setText(newtext.join(" "));
    }
   
    const [text,setText] =useState('');
    


    return (
            <>
            <div className='container' style={{color: props.mode==='light'? '#042743':'white'}}>
                <h1>{props.heading}</h1>
                <div className="form-group">
                    <label htmlFor="myBox" className='form-label'></label>
                    <textarea className="form-control" id="myBox" rows="8" value={text} style={{backgroundColor: props.mode==='light'? 'white':'grey' , color:props.mode==='light'? '#042743':'white'}} onChange={handleOnChange}></textarea>
                </div>
                <button className='btn btn-primary my-3 mx-2' onClick={handleUpClick}>Convert to Upper case</button>
                <button className='btn btn-primary my-3 mx-2' onClick={handledownClick}>Convert to Lower case</button>
                <button className='btn btn-primary my-3 mx-2' onClick={space}>Remove extra space</button>

            </div>
            <div className='container my-2' style={{color: props.mode==='light'? '#042743':'white'}}>
                <h1>Your text summary</h1>
                <p>{text.trim().split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes to read</p>
                <h2>Preview</h2>
                <p>{text.length>0 ? text:"Enter something"}</p>
            </div>
            </>
    )
        ;
}
