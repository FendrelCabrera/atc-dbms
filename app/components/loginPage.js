import React, { useContext } from 'react'
import { Auth } from '../page'
import { adminLogin, userLogin, newuser } from './loginHelper';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';

const LoginPage = () => {
    const { user } = useContext(Auth);

    if(user != -2)
        return null;

    return (

        <div className='d-flex flex-column vh-100 w-100 justify-content-center align-items-center'>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-md-7'>
                        <Tabs defaultActiveKey="login" id="lp-tab" className=''>
                            <Tab eventKey="login" title="Login">
                                <LoginForm />
                            </Tab>
                            <Tab eventKey="register" title="Register">
                                <RegForm />
                            </Tab>
                        </Tabs>
                    </div>
                </div>
            </div>
        </div>
    )
}

const LoginForm = () => {
    const { setUser } = useContext(Auth);

    const badCred = () => alert("BadCreds");

    const submitHandler = (e) => {
        e.preventDefault()
        
        const username = e.target.querySelector("#uname").value
        const pass = e.target.querySelector("#pass").value

        if(username == "admin") {
            adminLogin(pass).then(
                t => t?setUser(-1):badCred()
            )
        } else {
            userLogin(username, pass).then(
                cid => {
                    if(cid == -1)
                        badCred();
                    else
                        setUser(cid);
                }
            )
        }
    }

    return ( 
        <Form className='mt-3' onSubmit={submitHandler}>
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
    const { setUser } = useContext(Auth)

    const submitHandler = (e) => {
        e.preventDefault()
        
        let data = {};
        data['name'] = e.target.querySelector('#regName').value
        data['age'] = e.target.querySelector('#regAge').value
        data['gender'] = e.target.querySelector('#regGender').value
        data['email'] = e.target.querySelector('#regEmail').value
        data['pass'] = e.target.querySelector('#regPass').value

        if(e.target.querySelector('#regPass2').value != data['pass']) {
            alert("Passwords don't match !!");
            return;
        }

        console.log(data)

        newuser(data).then(
            (cid) => {
                if(cid == -1) {
                    alert("Registration Failed !! Please try again later.")
                    return;
                } else
                    setUser(cid);
            }
        )
    }

    return (
        <Form className="mt-3" onSubmit={submitHandler}>
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


export default LoginPage