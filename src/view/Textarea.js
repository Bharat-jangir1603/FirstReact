import React, {useState} from 'react'

export default function Textarea(props) {
    let changeFun = (e) => {
        setText(e.target.value);
    }
    let upperCase = () => {
        let text_val = text.toUpperCase();
        setText(text_val);
        props.showAlert('Converted to uppercase', 'Success');
    }
    let lowerCase = () => {
        let text_lover = text.toLowerCase();
        setText(text_lover);
        props.showAlert('Converted to lowercse', 'Success');
    }
    let emptyCase = () => {
        let emptCas = '';
        setText(emptCas);
    }
    let copyCase = () => {
        let textVal = document.querySelector('#area');
        textVal.select();
        navigator.clipboard.writeText(textVal.value)
        props.showAlert('Copied to clipboard', 'Success');
    }
    let extraCase = () => {
        let text_ = text.split(/[ ]+/);
        setText(text_.join(' '));
        props.showAlert('Extra space are removed', 'Success');
    }
    const [text, setText] = useState('');
    let styl = {color: props.mode == 'dark'?'white':'black',
    backgroundColor: props.mode == 'dark'?'gray':'white'
}
  return (
    <>
    <div className='container my-3' style={{backgroundColor: props.mode}}>
        <h2 style={styl}>{props.title}</h2>
        <div className="form-group">
            <textarea className="form-control" placeholder='Enter text here' style={styl} value={text} onChange={changeFun} id="area" rows="5"></textarea>
        </div>
        <button className="btn btn-primary my-2" onClick={upperCase}>Convert to uppercase</button>
        <button className="btn btn-primary mx-2" onClick={lowerCase}>Convert to lowercase</button>
        <button className="btn btn-primary mx-2" onClick={emptyCase}>Clear text</button>
        <button className="btn btn-primary mx-2" onClick={copyCase}>Copy text</button>
        <button className="btn btn-primary mx-2" onClick={extraCase}>Remove extra space</button>

    </div>
    <div className="container my-3" style={styl}>
        <h2>Your Text Sumary</h2>
        <p>{text.split(' ').filter((e) => { return e != 0 }).length} Words and {text.length} Charactors</p>
        <p>{0.008*text.split(' ').length} Time to read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:'Enter something in the textbox above to preview it'}</p>
    </div>
    </>
  )
}
