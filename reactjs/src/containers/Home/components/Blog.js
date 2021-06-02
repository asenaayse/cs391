import React from "react";
import {
  Container,
  Row,
  Col,
  CardBody,
  CardText,
  CardImg,
  Card,
  CardTitle,
  Button,
} from "reactstrap";
import kizkulesi from "./../../../images/kizkulesi.png";
import movie from "./../../../images/top10.png";
let images_from = [
  "https://image.winudf.com/v2/image1/Y29tLmNhcmtiaWxpc2ltLnJlYWxjb2ZmZWVmb3J0dW5lX3NjcmVlbl83XzE1NjMyODMxNjNfMDU2/screen-7.jpg?fakeurl=1&type=.jpg",
  "https://yenisistemmatematik.com/wp-content/uploads/2019/03/Test-Logo-Circle-black-transparent.png",
];
export const Blog =()=>{
    return(
        <Row className="pt-5">
        <Col sm="3">
          <Card body>
            <CardTitle tag="h5">Special Title Treatment</CardTitle>
            <img src={kizkulesi} style={{ width: "150px" }} alt="soru"></img>
            <CardText>
            If you want to take beatiful pictures in İstanbul, you should visit those places
            </CardText>
            <Button>Places You Should Visit in İstanbul After the Pandemic</Button>
          </Card>
        </Col>
        <Col sm="3">
          <Card body>
            <CardTitle tag="h5">Top 10 Movies You Should Watch Before You Die</CardTitle>
            <img src={movie} style={{ width: "73px" }} alt="soru"></img>
            <CardText>
            If you bored to stay at home due to covid, you should look these movies.            </CardText>
            <Button>Go somewhere</Button>
          </Card>
        </Col>
        <Col sm="3">
          <Card body>
            <img
              src={images_from[0]}
              style={{ width: "80px" }}
              alt="soru"
            ></img>
            <CardTitle tag="h5">Horoscope</CardTitle>
            <CardText>
            Do you believe fate? Check out the horoscope written by expert fortune tellers.
            </CardText>
            <Button>Go somewhere</Button>
          </Card>
        </Col>
        <Col sm="3">
          <Card body>
            <img
              src={images_from[1]}
              style={{ width: "120px" }}
              alt="soru"
            ></img>
            <CardTitle tag="h5">Tests</CardTitle>
            <CardText>
            Dou you want to know more about yourself? Check out these enjoyable tests.
            </CardText>
            <Button>Go somewhere</Button>
          </Card>
        </Col>
      </Row>
    );
};