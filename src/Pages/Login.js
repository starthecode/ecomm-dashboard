import React, {useState} from 'react';
import Button from 'react-bootstrap/esm/Button';
import {Form, Card, Row, Col } from 'react-bootstrap';





const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const submitForm = () => {
    console.log(email + ' ' + password);
  }


  return (
    <>
    <Row className='justify-content-center'>
      <Col className="d-flex h-100 align-items-center position-absolute justify-content-center">
      <Card style={{ width: '30rem' }}>
        <Card.Body>
        <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" onChange={e => setEmail(e.target.value)} />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit" onClick={submitForm}>
    Submit
  </Button>
</Form>
        </Card.Body>
      </Card>
      </Col>
</Row>

    </>
  )
}

export default Login