import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" fixed='top'>
        <Container>
          <Navbar.Brand href="#home">Maximiliano Jimenez</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#Portfolio">Porfolio</Nav.Link>
            <Nav.Link href="#Sobremí">Sobre mí</Nav.Link>
            <Nav.Link href="#Form">Contacto</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;