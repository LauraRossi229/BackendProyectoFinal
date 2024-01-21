import React from "react";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import '../Home/Home.scss'

const Home = () => {
  return (
    <>
      <main>
        <Carousel controls={false} fade={true}>
          <Carousel.Item>
            <img src="./slide.png" alt="" className="img-fluid" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="./slide3.png" alt="" className="img-fluid" />
          </Carousel.Item>
        </Carousel>
      </main>
      <section className="some-products">
        <Container>
          <h1 className="some-products-title">Algunos de nuestros productos</h1>
          <Row className="text-center mt-3 mb-3">
            <Col xs={12} sm={6} md={6} lg={4} xl={4}>
              <img src="./p1.png" alt="" className="img-fluid" />
            </Col>
            <Col xs={12} sm={6} md={6} lg={4} xl={4}>
              <img src="./p2.png" alt="" className="img-fluid" />
            </Col>
            <Col xs={12} sm={6} md={6} lg={4} xl={4}>
              <img src="./p3.png" alt="" className="img-fluid" />
            </Col>
          </Row>
          <Row className="text-center mb-3">
            <Col xs={12} sm={6} md={6} lg={4} xl={4}>
              <img src="./p4.png" alt="" className="img-fluid" />
            </Col>
            <Col xs={12} sm={6} md={6} lg={4} xl={4}>
              <img src="./p5.png" alt="" className="img-fluid" />
            </Col>
            <Col xs={12} sm={6} md={6} lg={4} xl={4}>
              <img src="./p6.png" alt="" className="img-fluid" />
            </Col>
          </Row>
          <Row>
            <img src="./p7.jpg" className="img-fluid" alt="" />
          </Row>
          <Row className="text-center mt-3 mb-3">
            <Col xs={12} sm={6} md={6} lg={4} xl={4}>
              <img src="./p7.png" alt="" className="img-fluid" />
            </Col>
            <Col xs={12} sm={6} md={6} lg={4} xl={4}>
              <img src="./p8.png" alt="" className="img-fluid" />
            </Col>
            <Col xs={12} sm={6} md={6} lg={4} xl={4}>
              <img src="./p9.png" alt="" className="img-fluid" />
            </Col>
          </Row>
          <Row className="text-center mb-3">
            <Col xs={12} sm={6} md={6} lg={4} xl={4}>
              <img src="./p10.png" alt="" className="img-fluid" />
            </Col>
            <Col xs={12} sm={6} md={6} lg={4} xl={4}>
              <img src="./p11.png" alt="" className="img-fluid" />
            </Col>
            <Col xs={12} sm={6} md={6} lg={4} xl={4}>
              <img src="./p12.png" alt="" className="img-fluid" />
            </Col>
          </Row>
          <Row>
            <img src="./slide7.jpg" className="img-fluid" alt="" />
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
