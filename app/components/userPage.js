import React, { useContext, useEffect, useState } from 'react'
import { Auth } from '../page'
import { Button, Form, FormSelect } from 'react-bootstrap';
import { getAirports } from './userHelper';

const UserPage = () => {
    const { user } = useContext(Auth);

    if(user < 0)
        return null;

    return (
        <div className='d-flex flex-column vh-100 w-100 justify-content-center align-items-center'>
            <div className='container'>
                <div className='row justify-content-center'>
                    <SearchTicket />
                </div>
            </div>
        </div>
    )
}

const SearchTicket = () => {
    const [airports, setAirports] = useState([]);

    useEffect(() => {
    getAirports().then(
            (data) => setAirports(data)
        )
    }, [])

    let cdate = new Date().toLocaleDateString('en-CA')

    const submitHandler = (e) => {
        e.preventDefault();
        alert("button press");
    }

    return (
        <Form className='' onSubmit={submitHandler}>
            <Form.Group>
                <Form.Label>Destination</Form.Label>
                <Form.Select id='destSelect'>
                    {
                        airports.map((e) => <option key={e[0]}>{`${e[1][0]}, ${e[1][1]}`}</option>)
                    }
                </Form.Select>
            </Form.Group>

            <Form.Group>
                <Form.Label>Date</Form.Label>
                <Form.Control id='destDate' type='date' min={cdate} required />
            </Form.Group>

            <Button className='mt-3' type='submit'>Search</Button>
        </Form>
    )
}



export default UserPage