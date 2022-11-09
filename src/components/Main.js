import React from 'react'
import { Button } from 'react-bootstrap'

export default function Main() {
  return (
    <div className="shadow p-4 bg-body rounded margin-top:100px ">
    <form className="d-flex justify-content-center align-items-center text-size= mg-5">

       <div className=' col-md-5 bg-light text-center'>
    <input className="form-control" type="search" placeholder="Technology, Jobs..." aria-label="Search"/> </div>
    <Button className="btn btn-inline-success" type="submit">Search</Button>
   
    </form>
    </div>

  )
}
