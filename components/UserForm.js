import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function UserForm() {
  return (
    <Form>
     <InputGroup className="mb-3">
        <InputGroup.Text>Search</InputGroup.Text>
        <InputGroup.Text>Destination</InputGroup.Text>
        <Form.Control aria-label="Place searched by User" />
        <InputGroup.Text>Date of Travel</InputGroup.Text>
        <Form.Control aria-label="Date of Trip" />
        <InputGroup.Text>Airline</InputGroup.Text>
        <Form.Control aria-label="Airline taking Route" />
      </InputGroup>
      <h1>Book Ticket</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Flight Number</Form.Label>
        <Form.Control type="email" placeholder="Enter flight you wish to book" />
      </Form.Group>
      
       <Form.Group className="mb-3">
          <Form.Label>Seat Class</Form.Label>
          <Form.Select>
            <option>Economy</option>
            <option>Business</option>
            <option>First</option>
          </Form.Select>
        </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Seat Number</Form.Label>
        <Form.Control type="email" placeholder="Enter any available seat number" />
      </Form.Group>
      <Form.Group className="mb-3">
          <Form.Label>Meal Option</Form.Label>
          <Form.Select>
            <option>Vegetarian</option>
            <option>Non-Vegetarian</option>
          </Form.Select>
        </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Confirm Booking" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default UserForm;