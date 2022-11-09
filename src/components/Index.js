import React from "react";
import Home from "./Home";
import Navbar from "./Navbar";
import Main from "./Main";
import Data from "./Data";
import "./Indexcomponents.css";

import { Component } from "react";


class Index extends Component {
  render() {
   
  return (
    <>
    
      <div>
        <header>
          <Navbar />
        </header>
      </div>
      <div>
        <section className="d-flex justify-content-center align-items-center ">
          <main>
            <div>
              <Main />
            </div>
            <div className="container-fluid">
              <div className="box">
                <Home />
              </div>
            </div>
          </main>
        </section>
      </div>
      <div>
        <footer className="m-1 p-1">
          <Data />
        </footer>
      </div>
     
    </>
    
  )
  }
}

export default Index;