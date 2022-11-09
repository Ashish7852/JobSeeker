import React from 'react'
import { BrowserRouter , Link } from 'react-router-dom'

export default function Home() {
  return (
    <BrowserRouter>
        <div className="text-center mg-5"><br/>
            <h2 >24/7 Oppourtunites help</h2><br/><br/>
            <h1 >GO with Jobseeker<br/></h1><br/>
            <h2>From first day to finals, get help, for your internship,<br/>
               job oppourtunites, support—tailored to your courses.</h2> &nbsp;
               <Link to="/office" className="btn btn-primary">Success</Link>
        </div>
        </BrowserRouter>
  )
}
