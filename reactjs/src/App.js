import  {Home} from "./containers/Home";
import { SignIn } from "./containers/SignIn";
import {SignUp} from "./containers/SignUp";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import {Footer} from "./components/Footer"
import {Container} from 'reactstrap';
function App() {
  return ( 
    <Container fluid>
    <Header/>
  <SignUp></SignUp>
  
  </Container>
  );
}

export default App;
