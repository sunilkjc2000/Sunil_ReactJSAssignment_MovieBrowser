import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
const NavigationMenu = () => {
    return (
        
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto">
            <Nav.Link to="/" as={NavLink} ><FontAwesomeIcon icon={faFilm} />Movies in theater</Nav.Link>
            <Nav.Link to="/comingsoon" as={NavLink}>Coming soon</Nav.Link>
            <Nav.Link to="/topindianrated" as={NavLink}>Top rated indian</Nav.Link>
            <Nav.Link to="/topratedmovies" as={NavLink}>Top rated movies</Nav.Link>
            <Nav.Link to="/favourites" as={NavLink}>Favourites</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export  default NavigationMenu;