'use client'
import {React, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Form from 'react-bootstrap/Form';

export default function NewCard({title, description, image, main, tab, othertab}) {
    // had div card border-dark width at 25rem 
	return (
        <div className='col-4 bg-light'>
            <Tabs defaultActiveKey="image" id="lp-tab"  className="bg-light" fill justify variant='pills'>
                <Tab eventKey="image" title={main}>
                    <img src={image} className="card-img-top" alt="Boo" />
                    <Card  className="">
                        <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Tab>
                <Tab eventKey="login" title={tab}>
                    <RegForm />
                    <Card>
                        <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Tab>
                <Tab eventKey="register" title={othertab}>
                    <RegForm />
                </Tab>
            </Tabs>
        </div>
	)
}


const LoginForm = () => {
    return ( 
        <Form className='mt-3'>
            <Form.Group className='my-2'>
                <Form.Label>Username</Form.Label>
                <Form.Control id='uname' required type='email' />
            </Form.Group>
            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' id='pass' required />
            </Form.Group>
            <Button type='submit' className='mt-3'>Sign in</Button>
        </Form>
    )
}

const RegForm = () => {

    return (
        <Form className="mt-3 bg-light">
            <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control id='regName' type="text" required/>
            </Form.Group>

            <Form.Group className='mt-2'>
                <Form.Label>Age</Form.Label>
                <Form.Control id='regAge' type="number" min={1} required/>
            </Form.Group>

            <Form.Group className='mt-2'>
                <Form.Label>Gender</Form.Label>
                <Form.Select id='regGender' defaultValue={'M'}>
                    <option value='M'>Male</option>
                    <option value='F'>Female</option>
                    <option value='O'>Others</option>
                </Form.Select>
            </Form.Group>

            <Form.Group className='mt-2'>
                <Form.Label>Email</Form.Label>
                <Form.Control id='regEmail' type="email" required/>
            </Form.Group>

            <Form.Group className='mt-2'>
                <Form.Label>Password</Form.Label>
                <Form.Control id='regPass' type="password" required/>
            </Form.Group>

            <Form.Group className='mt-2'>
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control id='regPass2' type="password" required/>
            </Form.Group>

            <Button className='mt-3' variant='primary' type='submit'>
                Sign up
            </Button>
        </Form>
    )
}
