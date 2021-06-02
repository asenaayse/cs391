import React, { useState } from "react";
import {
  Card,NavLink,UncontrolledTooltip , CardBody, 
  CardTitle,Form,UncontrolledAlert,FormGroup,Label,Input,Col,Button
} from "reactstrap";
import userData from './../../data/userData.json';
import validation from "./validation.js";
import { useHistory } from "react-router-dom";
import icon from "./../../images/signup.jpeg";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
export const SignUp = () => {
  const [values,setValues] = useState({
    username:"",
    email:"",
    password:"",
    repassword:"",
    agreement:false
  })
  const history = useHistory();
  const [errors, setErrors] = useState('');
  const [agreement,setAgreement] = useState(false);
  const onClick = (event) => {
    event.preventDefault();
    setErrors(validation(values));
    // if(email && password){
    //   const user = userData.filter(user => user.email === email && user.password === password);
    //   if(user.length > 0){
    //     localStorage.setItem('user', user);
    //     history.push('/user-page')
    //   }else{
    //     setError('Sorry, we could not verify your credentials');
    //   }
    // }else{
    //   setError('Please check your credentials')
    // }
    
  }
  const onChange = (event) => {
    setValues({
      ...values,[event.target.name]:event.target.value,
    })
  
  }
  return (
    <div>
    <Card fluid className="col-xs-8 col-sm-8 col-lg-4" style={{margin:"2rem"}}>
      <CardBody>
        <CardTitle tag="h1">Sign Up</CardTitle>
      </CardBody>
      <img className="ms-4" width="15%" src={icon} alt="welcome" />
      <CardBody>
      <Form>
      <FormGroup row>
        <Label for="examplename" sm={2}>
          Name:
        </Label>
        <Col className="col-sm-7 col-lg-7 col-md-7 col-xs-7">
          <Input
            value={values.username}
            onChange={onChange}
            type="name"
            name="username"
            id="examplename"
            placeholder="Enter your username"
          />
        </Col>
        {errors.username && <UncontrolledAlert color="danger" fade={true}>
        {errors.username}
      </UncontrolledAlert>}
      </FormGroup>
      <FormGroup row>
        <Label for="exampleEmail" sm={2}>
          Email:
        </Label>
        <Col className="col-sm-7 col-lg-7 col-md-7 col-xs-7">
          <Input
            value={values.email}
            onChange={onChange}
            type="email"
            name="email"
            id="exampleemail"
            placeholder="Enter your email address"
          />
        </Col>
        {errors.email && <UncontrolledAlert color="danger" fade={true}>
        {errors.email}
      </UncontrolledAlert>}
      </FormGroup>
      <FormGroup row>
        <Label for="examplePassword" sm={2}>
          Password:
        </Label>
        <Col className="col-sm-7 col-lg-7 col-md-7 col-xs-7">
          <Input
            value={values.password}
            onChange={onChange}
            type="password"
            name="password"
            id="examplePassword"
            placeholder="Enter your password"
          />
        </Col>
        {errors.password && <UncontrolledAlert color="danger" fade={true}>
        {errors.password}
      </UncontrolledAlert>}
      </FormGroup>
      <FormGroup row>
        <Label for="examplePassword2" sm={10}>
          Re-enter Your Password:
        </Label>
        <Col style={{paddingLeft:"19%"}} className="col-sm-9 col-lg-9 col-md-9">
          <Input
            value={values.repassword}
            onChange={onChange}
            type="password"
            name="repassword" 
            id="examplerePassword"
            placeholder="Enter your password again"
          />
        </Col>
        {errors.repassword && <UncontrolledAlert color="danger" fade={true}>
        {errors.repassword}
      </UncontrolledAlert>}
      </FormGroup>
      <FormGroup row>
      <Label for="exampleDate" sm={2}>Birthday:</Label>
      <Col className="col-sm-7 col-lg-7 col-md-7 col-xs-7">
        <Input
          type="date"
          name="date"
          id="exampleDate"
          placeholder="date placeholder"
        /></Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleSelect" sm={2}>Gender Identity:</Label>
        <Col className="col-sm-7 col-lg-7 col-md-7 col-xs-7">
        <Input type="select" name="select" id="exampleSelect">
          <option>Female</option>
          <option>Male</option>
        </Input>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleSelectMulti" sm={2}>Horoscope:</Label>
        <Col className="col-sm-7 col-lg-7 col-md-7 col-xs-7">
        <Input type="select" name="selectmulti" id="exampleSelectMulti" multiple>
          <option>Aries</option>
          <option>Taurus</option>
          <option>Gemini</option>
          <option>Cancer</option>
          <option>Leo</option>
          <option>Libra</option>
          <option>Virgo</option>
          <option>Scorpio</option>
          <option>Sagittarius</option>
          <option>Capricorn</option>
          <option>Aquarius</option>
          <option>Pisces</option>
        </Input>
        </Col>
      </FormGroup>
      <FormGroup check row>
      <span><NavLink id="UncontrolledTooltipExample" strict to="/events/">
  Horoscope
</NavLink></span>
<UncontrolledTooltip placement="right" target="UncontrolledTooltipExample">
        It is made for who does not know what his/her horoscope is.
      </UncontrolledTooltip>
      </FormGroup>
      <FormGroup check row>
        <Label check>
          <Input type="checkbox" name="agreement" value={agreement} onChange={onChange}/>I accept the agreement.
        </Label>
        {errors.agreement && <UncontrolledAlert color="danger" fade={true}>
        {errors.agreement}
      </UncontrolledAlert>}
      </FormGroup>
      <FormGroup check row>
        <Col sm={{ size: 10, offset: 2 }}>
          <Button onClick={onClick}>Submit</Button>
        </Col>
      </FormGroup>
    </Form>
      </CardBody>
    </Card>
  </div>


    
  );
};
