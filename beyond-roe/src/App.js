import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <div className="App">
      <header bg="lavender">
        <Navbar fixed="top" bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">Beyond Roe v. Wade</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" class="justify-content-end">
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
        <Row class="justify-content-center">
          <h1 class="pt-5 display-4 mt-5 mb-5">Beyond Roe v. Wade</h1>
        </Row>
        <div>
          <p class="w-50 display-6 fs-4 justify-content-center mx-auto mb-4">
              With the recent overturning of Roe v. Wade, our project aims to visualize the ruling’s effects within the US, as well as how people are reacting on social media.
          </p>
          <Button class="mb-5" size="lg">Our Process</Button>
        </div>

        <div class="row featurette my-5 pt-2 justify-content-center bg-secondary" color="black">
          <div class="col-5 justify-content-center mx-auto">
            <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto justify-content-center" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee" /><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>
          </div>
          <div class="col-7 pt-5 mt-5">
            <p class="lead w-50 justify-content-center mx-auto pt-5 mb-5">Using nation-wide data from a variety of sources, we visualized just how well protected abortion rights are within each state.</p>
            <Button class="justify-content-end btn btn-info" bg="cyan" size="lg">See Full Interactive Map</Button>
          </div>
        </div>
      </main>
      <footer>
        <div class="bg-primary mt-5">
        <Row class="p-5 justify-content-start">
          <p class="col justify-content-start text-left p-5">
            <Navbar.Brand class="justify-content-start text-left">Beyond <br/> Roe v. Wade</Navbar.Brand>
          </p>
          <p class="col justify-content-end text-left p-5">
            <Nav.Link href="#home">About Us</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
          </p>
        </Row>
        </div>
      </footer>
    </div>
  );
}

export default App;