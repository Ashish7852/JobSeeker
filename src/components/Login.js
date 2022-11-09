import { Link, useNavigate } from "react-router-dom";
import { useFormik } from 'formik';
import { useState, useEffect } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";

export default function Login()
{
    let navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [cookies, setCookie, removeCookie] = useCookies();
    const formik = useFormik({
        initialValues: {
            Email:'',
            Password:''
        },
        onSubmit : values => {
            for(var user of users) {
                if(user.Email===values.Email && user.Password===values.Password){
                    setCookie("Email", user.Email);
                    navigate("/jobseeker")
                    break;
                } else {
                    navigate("/errorpage");
                }
            }
        }
    })

    useEffect(()=>{
        axios.get("http://localhost:8080/getusers")
            .then(response=> {
                setUsers(response.data);
            })
    },[]);

    return(
        <div className="form text-center">
            <h2>User Login</h2>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>Email</dt>
                    <dd><input value={formik.values.Email} name="Email" onChange=
                    {formik.handleChange} type="email"/></dd>
                    <dt>Password</dt>
                    <dd><input  value={formik.values.Password} name="Password" onChange= 
{formik.handleChange} type="password"/></dd>
                </dl>
                <button className="btn btn-primary">Login</button>
            </form>
            <br />
            <Link to="/register">New User?</Link>
            
        </div>
    )
}

