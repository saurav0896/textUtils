import React, { useState } from 'react'

export default function TextForm(props) {
    const [ textResult, setTextResult] = useState('')
    const [inputVal, setInputVal] = useState('')
    const darkMode = {
        backgroundColor : '#343a40',
        color: 'white'
    }
    const lightMode = {
        backgroundColor : 'white',
        color: '#212529'
    }
    const getInput = (e) => {
      setInputVal(e.target.value)
    }

    const setTopUpperCase = () => {
        setTextResult(inputVal.toUpperCase())
    }
    return (
        <div>
            <h1>Enter the text to Analyze</h1>
            <div className="mb-3">
                <textarea className="form-control" style={props.mode === 'dark' ? darkMode : lightMode} value={inputVal} onChange={getInput} id="myBox" rows="8"></textarea>
            </div>
            <button className='btn btn-primary mb-6' onClick={setTopUpperCase} >Convert to UpperCase</button>
            <div className='container mt-4'>
                <h2>Your text Summary</h2>
                <p>{inputVal.split(' ').length} words, {inputVal.length} characters</p>
                { inputVal.length > 1 ? <p>{0.008 * inputVal.split(' ').length} minutes will take to read.</p> : '' }
                <h3 className='my-2'>Preview</h3>
                <p>
                    {textResult}
                </p>
            </div>
        </div>
    )
}
