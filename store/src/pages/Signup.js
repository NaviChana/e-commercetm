import { Form, Button } from "react-bootstrap";
import React, { useState } from 'react';
import Axios from 'axios';
import axios from "axios";




function Signup() {
   const [firstName, setFirstName] = useState('');
   const [lastName , setLastName]  = useState('');
   const [email    , setEmail]     = useState('');
   const [username , setUsername]  = useState('');
   const [password , setPassword]  = useState('');

    const firstNameHandler = (value) => {
        setFirstName(value);
    }
    const lastNameHandler = (value) => {
        setLastName(value);
    }
    const emailHandler = (value) => {
        setEmail(value);
    }
    const usernameHandler = (value) => {
        setUsername(value);
    }
    const passwordHandler = (value) => {
        setPassword(value);
    }


    const saveUser = () => {
        const data = {
            FirstName: firstName,
            LastName : lastName,
            Email : email,
            Username : username,
            Password : password
        };
        const url = 'https://localhost:44374/api/User/register';
        axios.post(url, data)
    }

    return (
        <>
            <Form>
                <Form.Group className="mb-3" >
                    <Form.Label>First Name</Form.Label>
                    <Form.Control id="firstName" type="text" placeholder="Enter First name"  onChange={(e) => firstNameHandler(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Last name" onChange={(e) => lastNameHandler(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail" >
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" placeholder="Enter Email" onChange={(e) => emailHandler(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicUsername" >
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="username" placeholder="Enter Username" onChange={(e) => usernameHandler(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword" >
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter Password" onChange={(e) => passwordHandler(e.target.value)}/>
                </Form.Group>

                <Button variant="primary" type="button" href="/login" onClick={() => saveUser()}>
                    Create Account
                </Button>
            </Form>
        </>
    )
}

export default Signup;