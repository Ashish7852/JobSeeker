
import './App.css';
import './Main.css';
import { Routes, Route } from 'react-router-dom';
import Signin from './components/Signin';
import { Container, Row, Col } from "react-bootstrap";
import Signup from './components/Signup';
import {UserAuthContextProvider} from './context/UserAuthContext';

import ProtectedRoute from './components/ProtectedRoute';

import PhoneSignUp from './components/PhoneSignUp';

import About from './components/About';

function App() {
  return (
     <Container>
        <Row>
          <Col>
          <UserAuthContextProvider>
          <Routes>
          <Route path="/about" 
          element={
            <ProtectedRoute>
              <About />
            </ProtectedRoute>
          }  />
            <Route path="/" element={<Signin />}  />
            <Route path="/phonesignup" element={<PhoneSignUp/>}  />
            <Route path="/signUp" element={<Signup/>}  />
          </Routes>
          </UserAuthContextProvider>
          </Col>
        </Row>
     </Container>   
  );
}

export default App;
