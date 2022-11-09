import React from 'react'
import { useUserAuth } from '../context/UserAuthContext';
import {Button} from 'react-bootstrap';


export default function About() {
  const { user, logOut } =useUserAuth();
  console.log (user);
  const handleLogOut = async ()=>{
    try{
         await logOut();
    }catch (err) {
      console.log(err.message);
    }
  }
  return (
    <>
     <div className='text-center p-4 box mt-3'>
      <h1>Here for every moment</h1><br/>
      {user && user.email}
      </div>
      <div className='d-grid gap-2'>
        <Button variant="primary" onClick={handleLogOut}>Log out</Button>
        
      </div>
      </>

  )
}
