
import React from "react"
import { Container, Row, Col, Card, Button } from "react-bootstrap"
function Work() {
  return (
    // xs={12} md={7} sm={12} lg={7} 
    <Container>
      <Row>
        <Col xs={12} md={11} sm={12} lg={11}  style={{ color: "black" }}>
          <div style={{paddingTop:"8%"}}>
            {/* //first row/////////////////////////////////////////////////////////////////////////////// */}

            <div style={{ display: "flex" }}>
              <Card style={{ width: "16rem" }}>
                <Card.Img
                  variant="top"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2sc01OC5MLsEWgs8tT4E5ZaDEJ5gFgKEGZ4G9vEU0w8V05FxP_Fn8mKUB_6sj_p8eU-Y&usqp=CAU"
                />
                <Card.Body>
                  <Card.Title>Virtual Lolly</Card.Title>

                  <span style={{ display: "flex" ,paddingTop:"12%"}}>
                    <Button
                    
                    variant="outline-success"
                      target="_blank"
                      href="https://virtual-lollies-app.netlify.app/"
                    >
                      Live Site{" "}
                    </Button>
                  </span>
                </Card.Body>
              </Card>


              &nbsp;&nbsp;&nbsp;&nbsp;
              <Card style={{ width: "16rem" }}>
                <Card.Img
                  variant="top"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBi4PHPnWyQJ1yksBGaYkn-zctJXQR9_6sJ_eikmP2Z3CXc0bymS3w59srf_APo15Nse8&usqp=CAU"
                />
                <Card.Body>
                  <Card.Title>Random Advice</Card.Title>

                  <span style={{ display: "flex" ,paddingTop:"12%"}}>
                    <Button
                     variant="outline-success"
                      target="_blank"
                      href="https://randomadviceapp071.surge.sh/"
                    >
                      Live Site{" "}
                    </Button>
                  </span>
                </Card.Body>
              </Card>

              &nbsp;&nbsp;&nbsp;&nbsp;
              <Card style={{ width: "16rem" }}>
                <Card.Img
                  variant="top"
                  src="https://img.freepik.com/free-vector/quiz-logo_2728-12.jpg?size=338&ext=jpg"
                />
                <Card.Body>
                  <Card.Title>Quiz App</Card.Title>

                  <span style={{ display: "flex" }}>
                    <Button
                      variant="outline-success"
                      target="_blank"
                      href="https://quizapp071.surge.sh/"
                    >
                      Live Site{" "}
                    </Button>
                  </span>
                </Card.Body>
              </Card>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Card style={{ width: "16rem" }}>
                <Card.Img
                  variant="top"
                  src="https://lh3.googleusercontent.com/XEg5aR07Jx6Eo3FCSAKvbK4fvCrdndhcZxz3m1Y8gKxsfUNo23vBSXeWi5Xt6u2LF30"
                />
                <Card.Body>
                  <Card.Title>Serverless BookMark</Card.Title>

                  <span style={{ display: "flex" }}>
                    <Button
                     variant="outline-success"
                      target="_blank"
                      href="https://jamstack-bookmark-junaid.netlify.app/"
                    >
                      Live Site{" "}
                    </Button>
                  </span>
                </Card.Body>
              </Card>

            </div>


            <br />
           
            <h3 className='work-git' >
              For more work visit &nbsp;:{" "}
              <a
                target="_blank"
                style={{ textDecoration: "none" }}
                src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                href="https://github.com/Junaid-Rasheed"
              >
                Github
              </a>
            </h3>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Work
