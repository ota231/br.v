import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar fixed="top" bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">Beyond Roe v. Wade</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Map</Nav.Link>
                <Nav.Link href="#link">History</Nav.Link>
                <Nav.Link href="#link">Social Media</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <main>
        <Row class="justify-content-center mb-5">
          <h1 class="pt-4 display-4 mt-5 mb-3">Beyond Roe v. Wade</h1>
          <p class="w-25 justify-content-center mx-auto">
            With the recent overturning of Roe v. Wade, we aimed to visualize the ruling’s effects within the US, as well as how people are reacting on social media.
          </p>
        </Row>
        <Button class="mb-5" variant="primary" size="sm">Our Process</Button>

        <div class="row featurette mt-5 pt-2">
          <div class="col-md-7 order-md-2">
            <p class="lead w-25 justify-content-center mx-auto">Using data from a variety of sources, we visualized just how well protected abortion rights are within each state.</p>
            <Button class="justify-content-end" variant="primary" size="sm">See Full Interactive Map</Button>
          </div>
          <div class="col-md-5 order-md-1">
            <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee" /><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>

          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
