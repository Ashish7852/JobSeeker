import React, {useState}from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Form, Button, Alert } from 'react-bootstrap';
import GoogleButton from 'react-google-button';
import { useUserAuth } from '../context/UserAuthContext';
import e from 'cors';


const Signin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { signin, googleSignIn } = useUserAuth();
    const navigate = useNavigate();
    const handleSubmit = async (e) =>{
    e.preventDefault();
    setError("");
    try {
           await signin(email, password);
           navigate("/index")
    }catch (err) {
      setError(err.message);
    }
};
   
const handleGoogleSingIn = async (e) => {
    e.preventDefault();

    try {
   await googleSignIn();
   navigate('/index');
    } catch (err) {
   setError(err.message);
    }
};


  return (
    <>
     <div className='p-4 box'>
        <h2 className='mb-3'>Signin</h2>
        {error && <Alert variant ="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Control type='email' placeholder='Email address' onChange={(e) => setEmail(e.target.value)} /></Form.Group>


            <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Control type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} /></Form.Group>

            <div className='d-grid gap-2'>
                <Button variant='primary' type='submit'>
                    Sign in
                </Button>
            </div>
        </Form>
        <hr />
        <div>
        <GoogleButton className='g-btn' type='dark' onClick={handleGoogleSingIn} /> 
    </div>
    <Link to="phonesignup">
    <div className='d-grid gap-2 mt-3'>
    <Button variant='success' type='submit'>
        Sign in with phone
    </Button>
    </div>
    </Link>
    </div>
    <div className='p-4 box mt-3 text-center'>
        Don't have an account? <Link to="/signUp">Signup</Link> 
    </div>
    </>
  );
};


export default Signin;
