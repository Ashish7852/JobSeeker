import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom';


const Data =() =>{
  return (
    <React.Fragment>
      <>
      <div className='text-center '>
        <h1> Welcome to JobSeeker </h1>
      <BrowserRouter>
      <div className="container">
  <div className="row">
    <div className="col">
    <div className="card" >
  <img src="https://mlm5d1iopoi6.i.optimole.com/aqq6pNY-1XNPwCLi/w:auto/h:auto/q:90/https://lorem.co.in/wp-content/uploads/2018/09/pexels-photo-327540.jpeg" className="card-img-top" alt="Training" height="200px"/>
  <div className="card-body">
    <h5 className="card-title">Training </h5>
    <p className="card-text">Training is the action of teaching somebody a particular skill. It may also refer to the teaching of a type of behavior. Training may apply to either humans or animals. It aims to improve a person’s capacity, capability, performance, or productivity.</p>
    <Link to="/office" className="btn btn-primary">Go somewhere</Link>
  </div>
</div>
    </div>
    <div className="col">
    <div className="card">
  <img src='https://edbasepro.com/wp-content/uploads/2015/12/course-10-1-768x441.jpg' className="card-img-top" alt="Training & Placement" height="200px"/>
  <div className="card-body">
    <h5 className="card-title">Training & Placement</h5>
    <p className="card-text">The major responsibility of Training & Placement cell is to interact with various industrial, management and research organisations in the country with the dual aim of ensuring that the students are given adequate technical exposure and industrial training.</p>
    <Link to="/office" className="btn btn-primary">Go somewhere</Link>
  </div>
</div>
    </div>
    <div className="col">
    <div className="card">
  <img src="https://esteps.in/images/internship-full.jpeg" className="card-img-top" alt="Internship" height="200px"/>
  <div className="card-body">
    <h5 className="card-title">Internship</h5>
    <p className="card-text">An internship is a period of work experience offered by an employer to give students and graduates exposure to the working environment, within a specific industry which relates to their field of study."They encouraged students to apply for internships"</p>
    <Link to="/office" className="btn btn-primary">Go somewhere</Link>
  </div>
</div>
    </div>
    <div className="col">
    <div className="card">
  <img src="https://www.sarenaapparel.com/images/temp/careers.jpg" className="card-img-top" alt="Job Refrences" height="200px"/>
  <div className="card-body">
    <h5 className="card-title">Job Refrences</h5>
    <p className="card-text">While you may choose to discuss your referral in-person, it is always a good idea to write a referral letter for employers. This may take the form of an email, depending on your company's preferences, keep your tone professional and positive.</p>
    <Link to="/office" className="btn btn-primary">Go somewhere</Link>
  </div>
</div>
    </div>
  </div>
</div>
</BrowserRouter>
      </div>
      </>
    </React.Fragment>
  );
};

export default Data;