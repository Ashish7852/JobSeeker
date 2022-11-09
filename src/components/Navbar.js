import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Reacts from "./Technology/Reacts";
import Jobseeker from "./Jobseeker";
import Javas from "./Technology/Javas";
import Contactus from "./Contactus";
import Htmls from "./Technology/Htmls";
import Intern from "./Job/Intern";
import Placs from "./Job/Placs";
import Offs from "./Job/Offs";
import Helps from "./Helps";
import Office from "./Office";
import Login from "./Login";
import Register from "./Register";


export default function Navbar(props) {
  return (
    <div>
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg navbar-light ">
          <Link className="navbar-brand mx-4 " to="/">
            {" "}
            <h1>JOBSEEKER</h1>{" "}
          </Link>

          <div className="container mx-3">
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                  <Link
                    className="nav-Link dropdown-toggle navbar m-3"
                    to="/"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Technology
                  </Link>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link className="dropdown-item " to="/reactjs">
                        React Js
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/javas">
                        Java script
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/html&css">
                        HTMl & Css
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-Link  dropdown-toggle navbar m-3"
                    to="/"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Job Opportunities
                  </Link>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link className="dropdown-item" to="/intern">
                        Internship
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/placement">
                        Placement
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/offer">
                        fresher Job
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-Link navbar m-3 "
                    to="./Contactus"
                    id="navbarDropdown"
                    role="button"
                  >
                    Contact us
                  </Link>
                </li>
              </ul>

              <div className="d-flex">
                <Link
                  className="nav-Link  navbar m-3"
                  to="/help"
                  id="navbarDropdown"
                >
                  Help
                </Link>

                <Link className="nav-Link  navbar m-1" to="/Signin">
                  <Button onClick={props.Signin} className="btn-btn-danger">
                    {" "}
                    Login{" "}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <div className="content">
        <Routes>
          <Route path="/jobseeker" element={<Jobseeker />} />
          <Route path="/reactjs" element={<Reacts />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/javas" element={<Javas />} />
          <Route path="/html&css" element={<Htmls />} />
          <Route path="/intern" element={<Intern />} />
          <Route path="/placement" element={<Placs />} />
          <Route path="/offer" element={<Offs />} />
          <Route path="/help" element={<Helps />} />
          <Route path="/office" element={<Office />} />
         
        </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}
