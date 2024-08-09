import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import asd from '../img/M.jpeg';
import Row from 'react-bootstrap/Row';

function ShapeExample() {
  return (
    <Container>
      <Row>
        <Col xs={6} md={4}>
        <img src={asd} className='rounded-circle' alt="" width={400} height={400} />
        </Col>
      </Row>
    </Container>
  );
}

export default ShapeExample;