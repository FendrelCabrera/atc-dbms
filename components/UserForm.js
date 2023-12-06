import { Auth } from '@/app/page';
import axios from 'axios';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function UserForm() {
  const { user } = useContext(Auth);

  const submitHandler = (e) => {
    e.preventDefault()

    let rid = e.target.querySelector("#btrid").value
    let cid = user;
    let seatNum = e.target.querySelector("#btSeatNum").value
    let seatClass = e.target.querySelector("#btSeatClass").value
    let mealOption = e.target.querySelector("#btMealOption").value

    let data = {
      rid,
      cid,
      seatNum,
      seatClass,
      mealOption
    }

    axios.post('http://localhost:5000/book_ticket', data, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(
      (resp) => alert("Success !!")
    ).catch(
      (err) => alert("Failure !!")
    )
  }

  return (
    <Form onSubmit={submitHandler}>
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
        <Form.Label>Route Id</Form.Label>
        <Form.Control required type="number" placeholder="Enter route you wish to book" id='btrid'/>
      </Form.Group>
      
       <Form.Group className="mb-3">
          <Form.Label>Seat Class</Form.Label>
          <Form.Select id='btSeatClass'>
            <option value={'E'}>Economy</option>
            <option value={'B'}>Business</option>
            <option value={'F'}>First</option>
          </Form.Select>
        </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Seat Number</Form.Label>
        <Form.Control type="text" placeholder="Enter any available seat number" id='btSeatNum'/>
      </Form.Group>
      <Form.Group className="mb-3">
          <Form.Label>Meal Option</Form.Label>
          <Form.Select id='btMealOption'>
            <optio value={0}>Vegetarian</optio>
            <option value={1}>Non-Vegetarian</option>
          </Form.Select>
        </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check required type="checkbox" label="Confirm Booking" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default UserForm;