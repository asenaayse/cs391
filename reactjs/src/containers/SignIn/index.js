import React, { useState } from "react";
import {
  Card, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle,Form,UncontrolledAlert,FormGroup,Label,Input,Col,Button
} from "reactstrap";
import userData from './../../data/userData.json';
import { useHistory } from "react-router-dom";
import welcome from "./../../images/welcome-banner-colorful-confetti-paper-vector-illustration-90360583.jpeg";

export const SignIn = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const onClick = () => {
    if(email && password){
      const user = userData.filter(user => user.email === email && user.password === password);
      if(user.length > 0){
        localStorage.setItem('user', user);
        history.push('/user-page')
      }else{
        setError('Sorry, we could not verify your credentials');
      }
    }else{
      setError('Please check your credentials')
    }
  }

  return (
    <div>
    <Card fluid className="col-xs-8 col-sm-8 col-lg-4" style={{margin:"2rem"}}>
      <CardBody>
        <CardTitle tag="h1">Sign In</CardTitle>
      </CardBody>
      <img className="ms-2" width="25%" src={welcome} alt="welcome" />
      <CardBody>
      <Form>
      {error && <UncontrolledAlert color="danger" fade={true}>
        I am an alert and I can be dismissed without animating!
      </UncontrolledAlert>}
      <FormGroup row>
        <Label for="examplename" sm={2}>
          Name:
        </Label>
        <Col sm={10}>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="name"
            name="name"
            id="examplename"
            placeholder="Enter your username"
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="examplePassword" sm={2}>
          Password:
        </Label>
        <Col sm={10}>
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            id="examplePassword"
            placeholder="Enter your password"
          />
        </Col>
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
