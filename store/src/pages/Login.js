import axios from "axios";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";


function Login() {
    const [username , setUsername] = useState('');
    const [password , setPassword]  = useState('');

    const usernameAuth = (value) => {
        setUsername(value);
    }

    const passwordAuth = (value) => {
        setPassword(value);
    }

    const authenticateUser = () => {
        const data = {
            Username : username,
            Password : password
        };
        const url = 'https://localhost:44374/api/User/authenticate';
        axios.get(url,data)
    }

    return (
        <>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="username" placeholder="Enter Username" onChange={(e) => usernameAuth(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter Password" onChange={(e) => passwordAuth(e.target.value)}/>
                </Form.Group>

                <Button variant="primary" type="submit" href="/" onChange={() => authenticateUser()}>
                    Login
                </Button>

                <a href="/signup">Don't have an account?</a>
            </Form>
        </>
    )
}

export default Login;