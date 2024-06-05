import React, {useState} from "react";

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

function MyForm({onNextPage}) {
    const [formInput, setFormInput] = useState({
        fname: '',
        lname:'',
        address: '',
        email: '',
        phone: '',
        skill1: '',
        skill2: '',
        skill3: '',
        skill4: '',
        skill5: '',
        skill6: '',
        deg: '',
        college: '',
        coladd: '',
        aff1: '',
        aff2:'',
        summary:'',
        pos1:'',
        time1:'',
        location1:'',
        description11:'',
        description12:'',
        description13:'',
        pos2:'',
        time2:'',
        location2:'',
        description21:'',
        description22:'',
        description23:'',
        pos3:'',
        time3:'',
        location3:'',
        description31:'',
        description32:'',
        description33:'',
      });

    const handleChange = (e) => {
        const { name, value } = e.target;

        let capitalizedValue = value;

        if (name === 'fname' || name === 'lname') {
          capitalizedValue= value.charAt(0).toUpperCase() + value.slice(1);
        }
        setFormInput({
          ...formInput,
          [name]: capitalizedValue,
        });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formInput);
        onNextPage(formInput);
      };
      
    return (
  <div className="class-form">
    <header>
      <h1>Resume Builder</h1>
    </header> 
    <div className="inner-form">
    <Form onSubmit={handleSubmit}>
    <Row className="g-2 mb-3 ml-3">
      <Col md>
        <FloatingLabel controlId="floatingInputGrid" label="First Name">
          <Form.Control type="text" name="fname" value={formInput.fname} onChange={handleChange} placeholder="fName" />
        </FloatingLabel>
      </Col>
      <Col md>
        <FloatingLabel controlId="floatingInputGrid" label="Last Name">
          <Form.Control type="text" name="lname" value={formInput.lname} onChange={handleChange} placeholder="lName" />
        </FloatingLabel>
      </Col>
    </Row>

    <FloatingLabel controlId="floatingInput" label="Address" className="mb-3">
        <Form.Control type="text" name="address" value={formInput.address} onChange={handleChange} placeholder="address" />
    </FloatingLabel>

    <InputGroup className="mb-3">
      <FloatingLabel controlId="floatingInput" label="Email">
        <Form.Control type="text" name="email" value={formInput.email} onChange={handleChange} placeholder="name@example.com" />
      </FloatingLabel>
      <InputGroup.Text id="basic-addon2">@gmail.com</InputGroup.Text>
    </InputGroup>          
          
    <Row className="g-2 mb-3">
      <Col>
        <FloatingLabel controlId="floatingSelectGrid" label="Country Code">
          <Form.Select aria-label="Floating label select example">
            <option>Open this select menu</option>
            <option value="1">+91</option>
            <option value="2">+1</option>
            <option value="3">+44</option>
            <option value="4">+555</option>
          </Form.Select>
        </FloatingLabel>
      </Col>
      <Col xs={9}>
        <FloatingLabel controlId="floatingInputGrid" label="Contact Number">
          <Form.Control type="tel" name="phone" value={formInput.phone} onChange={handleChange} placeholder="contact number" />
        </FloatingLabel>
      </Col>
    </Row>

    <Row className="g-2 mb-3 ml-3">
      <Col md>
        <FloatingLabel controlId="floatingInput" label="Enter One of Your Skills" className="mb-3">
          <Form.Control type="text" name="skill1" value={formInput.skill1} onChange={handleChange} placeholder="skill 1" />
        </FloatingLabel>
      </Col>
      <Col md>
        <FloatingLabel controlId="floatingInput" label="Enter One of Your Skills" className="mb-3">
          <Form.Control type="text" name="skill2" value={formInput.skill2} onChange={handleChange} placeholder="skill 2" />
        </FloatingLabel>
      </Col>
    </Row>

    <Row className="g-2 mb-3 ml-3">
      <Col md>
        <FloatingLabel controlId="floatingInput" label="Enter One of Your Skills" className="mb-3">
          <Form.Control type="text" name="skill3" value={formInput.skill3} onChange={handleChange} placeholder="skill 3" />
        </FloatingLabel>
      </Col>
      <Col md>
        <FloatingLabel controlId="floatingInput" label="Enter One of Your Skills" className="mb-3">
          <Form.Control type="text" name="skill4" value={formInput.skill4} onChange={handleChange} placeholder="skill 4" />
        </FloatingLabel>
      </Col>
    </Row>

    <Row className="g-2 mb-3 ml-3">
      <Col md>
        <FloatingLabel controlId="floatingInput" label="Enter One of Your Skills" className="mb-3">
          <Form.Control type="text" name="skill5" value={formInput.skill5} onChange={handleChange} placeholder="skill 5" />
        </FloatingLabel>
      </Col>
      <Col md>
        <FloatingLabel controlId="floatingInput" label="Enter One of Your Skills" className="mb-3">
          <Form.Control type="text" name="skill6" value={formInput.skill6} onChange={handleChange} placeholder="skill 6" />
        </FloatingLabel>
      </Col>
    </Row>           

    <FloatingLabel controlId="floatingInput" label="Enter One of Your Affilations" className="mb-3">
        <Form.Control type="text" name="aff1" value={formInput.aff1} onChange={handleChange} placeholder="aff 1" />
    </FloatingLabel>

    <FloatingLabel controlId="floatingInput" label="Enter One of Your Affilations" className="mb-3">
        <Form.Control type="text" name="aff2" value={formInput.aff2} onChange={handleChange} placeholder="aff 2" />
    </FloatingLabel>
                
    <FloatingLabel controlId="floatingTextarea2" label="Professional Summary" className="mb-3">
      <Form.Control as="textarea" type="text" name="summary" value={formInput.summary} onChange={handleChange} placeholder="Summary" style={{ height: '200px' }} />
    </FloatingLabel>

      <h2>Education</h2>

    <FloatingLabel controlId="floatingInput" label="Degree" className="mb-3">
        <Form.Control type="text" name="deg" value={formInput.deg} onChange={handleChange} placeholder="deg" />
    </FloatingLabel>

    <FloatingLabel controlId="floatingInput" label="College" className="mb-3">
        <Form.Control type="text" name="college" value={formInput.college} onChange={handleChange} placeholder="college" />
    </FloatingLabel>

    <FloatingLabel controlId="floatingInput" label="College Address" className="mb-3">
        <Form.Control type="text" name="coladd" value={formInput.coladd} onChange={handleChange} placeholder="coladd" />
    </FloatingLabel>
                
    <h2>Work History</h2>
    <h3>Current Job</h3>
    <FloatingLabel controlId="floatingInput" label="Position" className="mb-3">
        <Form.Control type="text" name="pos1" value={formInput.pos1} onChange={handleChange} placeholder="pos 1" />
    </FloatingLabel>

    <FloatingLabel controlId="floatingInput" label="Duration" className="mb-3">
        <Form.Control type="text" name="time1" value={formInput.time1} onChange={handleChange} placeholder="time 1" />
    </FloatingLabel>

    <FloatingLabel controlId="floatingInput" label="Location" className="mb-3">
        <Form.Control type="text" name="location1" value={formInput.location1} onChange={handleChange} placeholder="location 1" />
    </FloatingLabel>

    <h4>Position Description in Points</h4>

    <FloatingLabel controlId="floatingTextarea2" label="First Point" className="mb-3">
      <Form.Control as="textarea" type="text" name="description11" value={formInput.description11} onChange={handleChange} placeholder="des11" style={{ height: '100px' }} />
    </FloatingLabel>

    <FloatingLabel controlId="floatingTextarea2" label="Second Point" className="mb-3">
      <Form.Control as="textarea" type="text" name="description12" value={formInput.description12} onChange={handleChange} placeholder="des12" style={{ height: '100px' }} />
    </FloatingLabel>

    <FloatingLabel controlId="floatingTextarea2" label="Third Point" className="mb-3">
      <Form.Control as="textarea" type="text" name="description13" value={formInput.description13} onChange={handleChange} placeholder="des13" style={{ height: '100px' }} />
    </FloatingLabel>
                
    <h3>Previous Job</h3>
    <FloatingLabel controlId="floatingInput" label="Position" className="mb-3">
        <Form.Control type="text" name="pos2" value={formInput.pos2} onChange={handleChange} placeholder="pos 2" />
    </FloatingLabel>

    <FloatingLabel controlId="floatingInput" label="Duration" className="mb-3">
        <Form.Control type="text" name="time2" value={formInput.time2} onChange={handleChange} placeholder="time 2" />
    </FloatingLabel>

    <FloatingLabel controlId="floatingInput" label="Location" className="mb-3">
        <Form.Control type="text" name="location2" value={formInput.location2} onChange={handleChange} placeholder="location 2" />
    </FloatingLabel>

    <h4>Position Description in Points</h4>

    <FloatingLabel controlId="floatingTextarea2" label="First Point" className="mb-3">
      <Form.Control as="textarea" type="text" name="description21" value={formInput.description21} onChange={handleChange} placeholder="des21" style={{ height: '100px' }} />
    </FloatingLabel>

    <FloatingLabel controlId="floatingTextarea2" label="Second Point" className="mb-3">
      <Form.Control as="textarea" type="text" name="description22" value={formInput.description22} onChange={handleChange} placeholder="des22" style={{ height: '100px' }} />
    </FloatingLabel>

    <FloatingLabel controlId="floatingTextarea2" label="Third Point" className="mb-3">
      <Form.Control as="textarea" type="text" name="description23" value={formInput.description23} onChange={handleChange} placeholder="des23" style={{ height: '100px' }} />
    </FloatingLabel>
                
    <h3>First Job</h3>
    <FloatingLabel controlId="floatingInput" label="Position" className="mb-3">
        <Form.Control type="text" name="pos3" value={formInput.pos3} onChange={handleChange} placeholder="pos 3" />
    </FloatingLabel>

    <FloatingLabel controlId="floatingInput" label="Duration" className="mb-3">
        <Form.Control type="text" name="time3" value={formInput.time3} onChange={handleChange} placeholder="time 3" />
    </FloatingLabel>

    <FloatingLabel controlId="floatingInput" label="Location" className="mb-3">
        <Form.Control type="text" name="location3" value={formInput.location3} onChange={handleChange} placeholder="location 3" />
    </FloatingLabel>

    <h4>Position Description in Points</h4>

    <FloatingLabel controlId="floatingTextarea2" label="First Point" className="mb-3">
      <Form.Control as="textarea" type="text" name="description31" value={formInput.description31} onChange={handleChange} placeholder="des31" style={{ height: '100px' }} />
    </FloatingLabel>

    <FloatingLabel controlId="floatingTextarea2" label="Second Point" className="mb-3">
      <Form.Control as="textarea" type="text" name="description32" value={formInput.description32} onChange={handleChange} placeholder="des32" style={{ height: '100px' }} />
    </FloatingLabel>

    <FloatingLabel controlId="floatingTextarea2" label="Third Point" className="mb-3">
      <Form.Control as="textarea" type="text" name="description33" value={formInput.description33} onChange={handleChange} placeholder="des33" style={{ height: '100px' }} />
    </FloatingLabel>
      <Button type="submit" value="Submit" variant="outline-dark">Submit</Button>{' '}
    </Form>
    </div>
  </div>
    )
}

export default MyForm;