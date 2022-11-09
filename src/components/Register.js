import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";

export default function Register()
{
    let navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            Email:'',
            UserName:'',
            Password:'', 
            Mobile:'',
           
        },
        onSubmit : values => {
            axios.post("http://localhost:8080/registeruser",values);
            alert("Registered Successfully");
            navigate("/login");
        }
    })
    
    return(
        <div className="form text-center">
            <h2>Register New User</h2>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>Email</dt>
                    <dd><input type="email" value={formik.values.Email} onChange={formik.handleChange} name="Email" /></dd>
                    <dt>User Name</dt>
                    <dd><input type="text" value={formik.values.UserName} onChange={formik.handleChange} name="UserName"/></dd>
                    <dt>Password</dt>
                    <dd><input type="password" value={formik.values.Password} onChange={formik.handleChange} name="Password"/></dd>
                   <dt>Mobile</dt>
                    <dd><input type="text" value={formik.values.Mobile} onChange={formik.handleChange} name="Mobile"/></dd>
                </dl>
                <button className="btn btn-primary">Register</button>
                <br />
                <Link to="/login">Already have account?</Link>
            </form>
        </div>
    )
}