import React, {useState} from 'react' 


export default function TextForm(props) {

// State variable to store the user input text
  const [text,setText]=useState('');
// State variable to manage the placeholder text
  const [placeholder, setPlaceholder] = useState('Enter text here');

// Calculates the word count of the input text
  const wordCount = text.trim().split(/\s+/).filter(word => word !== '').length;
//
  const [selectedFont, setSelectedFont] = useState('');

// This function handles the click event of the input field.
  const handleClick = () => {
    if (placeholder === 'Enter text here') {
      setPlaceholder('');
    }
  };

// This function handles the change event of the input field.
  const updateText=(event)=>{
    setText(event.target.value);
  }
  
// This function converts the text to uppercase when called.
  const clickUpper=()=>{
    let newText=text.toUpperCase();
    setText(newText);
  }
  
// This function converts the text to lowercase when called.
  const clickLower=()=>{
    let newText1=text.toLowerCase();
    setText(newText1);
  }

// This function clear the textwhen called.
  const clickClear=()=>{
    let newText= '';
    setText(newText);
  }


//
  const handleFontChange = (event) => {
    setSelectedFont(event.target.value);
  };

  const fontOptions = [
    'Arial',
    'Times New Roman',
    'Courier New',
    'Verdana',
    'Georgia',
    'Comic Sans MS',
    'Helvetica',
    'Roboto',
    'Tahoma',
    'Garamond',
    'Open Sans',
    'Lato',
    'Montserrat',
    'Raleway',
    'Oswald',
    'Roboto Slab',
    'Noto Sans',
    'PT Sans',
    'Playfair Display',
    'Merriweather',
  ];


  return (   <> 
    {/* The main container */}
        <div className="container">

            <div className="mb-3">
                <h1>{props.Heading}</h1>
                {/* Textarea for user input */}
                    <textarea 
                        className="form-control" 
                        value={text} 
                        placeholder={placeholder} 
                        onClick={handleClick} 
                        onChange={updateText}
                        id="exampleFormControlTextarea1" 
                        rows="6"
                        style={{ fontFamily: selectedFont}}
                    ></textarea>
        </div>
            {/* Buttons to convert text case */}
                <button 
                    className="btn btn-primary mx-2" onClick={clickUpper}>Convert to Uppercase</button>

                <button className="btn btn-primary mx-2" onClick={clickLower}>Convert to Lowercase</button>
                
                <button className="btn btn-primary mx-2" onClick={clickClear}>Clear</button>

               

                <select value={selectedFont} onChange={handleFontChange}>
                    <option value= "">Select a font</option>
                    {fontOptions.map((font, index) => (
                    <option key={index} value={font}>
                    {font}
                    </option>
                    ))}
                </select>
        </div>

        <div className="my-3">
        {/* Text summary */}
            <h2>Your text summary</h2> 
                <p>{wordCount} words and {text.length - text.split(" ").length + 1} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes to read</p>
        {/* Preview */}
            <h2>Preview</h2>
                <p>{text}</p>
        </div>
        
        </>
  )

}
