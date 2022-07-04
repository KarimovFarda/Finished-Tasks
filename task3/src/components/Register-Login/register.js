import React, { useState } from 'react'
import './registerLoginStyle.scss'
import axios from "axios"
import 'material-react-toastify/dist/ReactToastify.css';
export const Register = () => {
    const [firstname, setFirstname] = useState("")
    const [organizationName, setOrganizationName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [address, setAddress] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("")
    const FormSubmitted = () => {
        axios.post("http://localhost:8502/register", {
            firstname: String(firstname),
            organizationName: String(organizationName),
            address:String(address),
            phoneNumber: String(phoneNumber),
            email: String(email),
            password: String(password)
        })
            .then((response) => {
                window.location.href="login"
            })
    }
    return (
        <div className="auth-register-contain">
            <div className="forms-container">
                <div className="signin-signup">
                    <form onSubmit={(e) => { e.preventDefault(); FormSubmitted() }} className="sign-in-form auth-form">
                        <h2 className="title">Sign Up</h2>
                        <div className="input-field">
                            <i className="fas fa-user"></i>
                            <input className="auth-input" value={firstname} onChange={(e) => setFirstname(e.target.value)} type="text" placeholder="Firstname" />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-building"></i>
                            <input className="auth-input" type="text" value={organizationName} onChange={(e) => setOrganizationName(e.target.value)} placeholder="Organization Name" />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-search-location"></i>
                            <input className="auth-input" type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Address" />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-phone"></i>
                            <input className="auth-input" type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="Phone Number" />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-at"></i>                <input className="auth-input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-lock"></i>
                            <input className="auth-input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                        </div>
                        <div style={{display:"flex", columnGap:"10px"}}>
                        <input className="auth-input btn-register-button solid" type="submit" value="Register" />
                        <input className="auth-input btn-register-button solid" onClick={() => window.location.href= 'login'} type="submit" value="Login" />
                        </div>
                    </form>
                </div>
            </div>
            <div className="panels-container">
                <div className="panel left-panel">
                </div>
                <div className="panel right-panel">
                </div>
            </div>
        </div>
    )
}
export default Register