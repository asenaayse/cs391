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
import algida from "./../../../images/algida.png";
import trendyol from "./../../../images/trendyol.png";
import soru from "./../../../images/soru.png";
import soru2 from "./../../../images/soru2.png";
export const DidYouKnowAds = () => {
  return (
    <Row>
      <Col className="col-lg-8 ">
        <span>
          <div class="row" className="w-75">
            <div class="row-lg-6">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Did You Know?</h5>
                  <img src={soru2} style={{ width: "120px" }} alt="soru"></img>
                  <p class="card-text">
                    Did you know M&M's chocolate stands for the initials for its
                    inventors Mars and Murrie
                  </p>
                </div>
              </div>
            </div>
            <div class="row-lg-6" className="pt-4">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Did You Know?</h5>
                  <img src={soru} style={{ width: "120px" }} alt="soru"></img>
                  <p class="card-text">
                    Ralph Lauren's original name was Ralph Lifshitz
                  </p>
                </div>
              </div>
            </div>
          </div>
        </span>
      </Col>
      <Col xs="auto">
        <span className="w-100">
          <div>
            <Card>
              <CardImg
                style={{
                  maxHeight: "400px",
                  maxWidth: "250px",
                }}
                src={algida}
                alt="Card image cap"
              />
            </Card>
            <Card>
              <CardImg
                style={{
                  maxHeight: "350px",
                  maxWidth: "250px",
                }}
                className="mt-3"
                src={trendyol}
                alt="Card image cap"
              />
            </Card>
          </div>
        </span>
      </Col>
    </Row>
  );
};
