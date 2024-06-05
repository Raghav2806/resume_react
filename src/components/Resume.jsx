import React, { useRef } from "react";
import { useReactToPrint } from 'react-to-print';
import emailSVG from "../assets/envelope-fill.svg";
import locSVG from "../assets/geo-alt-fill.svg";
import teleSVG from "../assets/telephone-fill.svg";
import Button from 'react-bootstrap/Button';

function Resume({formInput}) {
    console.log(formInput);
    const myStyle = {
        fontFamily: 'Russo One'
    };

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

    return (
        <div>
        <div className="resume">
            <div className="resume-light">
                <h1>{formInput.fname} {formInput.lname}</h1>
                <hr />
                <h2 className="first">PROFESSIONAL SUMMARY</h2>
                <hr className="no-margin"/>
                <p>{formInput.summary}</p>
                <h2>WORK HISTORY</h2>
                <hr className="no-margin"/>
                <div className="work">
                    <h3><span style={myStyle}>{formInput.pos1}</span> , {formInput.time1} <br />
                    {formInput.location1}</h3>
                    <ul>
                        <li>{formInput.description11}</li>
                        <li>{formInput.description12}</li>
                        <li>{formInput.description13}</li>
                    </ul>
                </div>
                <div className="work">
                    <h3><span style={myStyle}>{formInput.pos2}</span> , {formInput.time2} <br />
                    {formInput.location2}</h3>
                    <ul>
                        <li>{formInput.description21}</li>
                        <li>{formInput.description22}</li>
                        <li>{formInput.description23}</li>
                    </ul>
                </div>
                <div className="work">
                    <h3><span style={myStyle}>{formInput.pos3}</span> , {formInput.time3} <br />
                    {formInput.location3}</h3>
                    <ul>
                        <li>{formInput.description31}</li>
                        <li>{formInput.description32}</li>
                        <li>{formInput.description33}</li>
                    </ul>
                </div>
            </div>
            <div className="resume-dark">
                <ul className="list">
                    <li><img className="img" src={locSVG} alt="location" />{formInput.address}</li>
                    <li><img className="img" src={emailSVG} alt="mail" />{formInput.email}@gmail.com</li>
                    <li><img className="img" src={teleSVG} alt="tele" />{formInput.phone}</li>
                </ul>
                <h2>Skills</h2>
                <hr className="no-margin"/>
                <ul>
                    <li>{formInput.skill1}</li>
                    <li>{formInput.skill2}</li>
                    <li>{formInput.skill3}</li>
                    <li>{formInput.skill4}</li>
                    <li>{formInput.skill5}</li>
                    <li>{formInput.skill6}</li>
                </ul>
                <h2>Education</h2>
                <hr className="no-margin"/>
                <p><span style={myStyle}>{formInput.deg}</span><br />{formInput.college}<br />{formInput.coladd}</p>
                <h2>Affilations</h2>
                <ul>
                    <li>{formInput.aff1}</li>
                    <li>{formInput.aff2}</li>
                </ul>
            </div>
        </div>
        <Button onClick={handlePrint} variant="outline-dark">Export to PDF</Button>

        <div ref={componentRef}>
        <div className="resume">
            <div className="resume-light">
                <h1>{formInput.fname} {formInput.lname}</h1>
                <hr />
                <h2 className="first">PROFESSIONAL SUMMARY</h2>
                <hr className="no-margin"/>
                <p>{formInput.summary}</p>
                <h2>WORK HISTORY</h2>
                <hr className="no-margin"/>
                <div className="work">
                    <h3><span style={myStyle}>{formInput.pos1}</span> , {formInput.time1} <br />
                    {formInput.location1}</h3>
                    <ul>
                        <li>{formInput.description11}</li>
                        <li>{formInput.description12}</li>
                        <li>{formInput.description13}</li>
                    </ul>
                </div>
                <div className="work">
                    <h3><span style={myStyle}>{formInput.pos2}</span> , {formInput.time2} <br />
                    {formInput.location2}</h3>
                    <ul>
                        <li>{formInput.description21}</li>
                        <li>{formInput.description22}</li>
                        <li>{formInput.description23}</li>
                    </ul>
                </div>
                <div className="work">
                    <h3><span style={myStyle}>{formInput.pos3}</span> , {formInput.time3} <br />
                    {formInput.location3}</h3>
                    <ul>
                        <li>{formInput.description31}</li>
                        <li>{formInput.description32}</li>
                        <li>{formInput.description33}</li>
                    </ul>
                </div>
            </div>
            <div className="resume-dark">
                <ul className="list">
                    <li><img className="img" src={locSVG} alt="location" />{formInput.address}</li>
                    <li><img className="img" src={emailSVG} alt="mail" />{formInput.email}@gmail.com</li>
                    <li><img className="img" src={teleSVG} alt="tele" />{formInput.phone}</li>
                </ul>
                <h2>Skills</h2>
                <hr className="no-margin"/>
                <ul>
                    <li>{formInput.skill1}</li>
                    <li>{formInput.skill2}</li>
                    <li>{formInput.skill3}</li>
                    <li>{formInput.skill4}</li>
                    <li>{formInput.skill5}</li>
                    <li>{formInput.skill6}</li>
                </ul>
                <h2>Education</h2>
                <hr className="no-margin"/>
                <p><span style={myStyle}>{formInput.deg}</span><br />{formInput.college}<br />{formInput.coladd}</p>
                <h2>Affilations</h2>
                <ul>
                    <li>{formInput.aff1}</li>
                    <li>{formInput.aff2}</li>
                </ul>
            </div>
        </div>
        </div>
        </div>
    );
}

export default Resume;