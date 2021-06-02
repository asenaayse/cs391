import React from "react";
import {Container} from "reactstrap";
import {DidYouKnowAds} from "./components/DidYouKnowAds";
import {Blog} from "./components/Blog";

export const Home = () => {
  return (
    <Container fluid className="pt-5">
      <DidYouKnowAds></DidYouKnowAds>
      <Blog></Blog>
    </Container>
  );
};
