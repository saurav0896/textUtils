import React from 'react'

export default function About(props) {
    const darkMode = {
        backgroundColor : '#343a40',
        color: 'white',
        border: '1px solid white'
    }
    const lightMode = {
        backgroundColor : 'white',
        color: '#212529'
    } 

    return (
        <div>
            <div className="accordion" style={props.mode === 'dark' ? darkMode : lightMode} id="accordionExample">
                <div className="accordion-item" style={props.mode === 'dark' ? darkMode : lightMode} >
                    <h2 className="accordion-header" style={props.mode === 'dark' ? darkMode : lightMode} id="headingOne">
                        <button className="accordion-button" style={props.mode === 'dark' ? darkMode : lightMode} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={props.mode === 'dark' ? darkMode : lightMode}>
                    <h2 className="accordion-header" id="headingTwo" style={props.mode === 'dark' ? darkMode : lightMode}>
                        <button className="accordion-button collapsed" style={props.mode === 'dark' ? darkMode : lightMode} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={props.mode === 'dark' ? darkMode : lightMode}>
                    <h2 className="accordion-header" id="headingThree" style={props.mode === 'dark' ? darkMode : lightMode}>
                        <button className="accordion-button collapsed" style={props.mode === 'dark' ? darkMode : lightMode} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
