import './SignIn.css'
import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const SignIn = () => {

    const [email, setEamil] = useState('')
    const [password, setPassword] = useState('')
    const [psdErr, setPasswordErr] = useState('')
    const [emailErr, setEmailErr] = useState('')
    const [flag, setFlag] = useState('')
    const [apiMsg, setApiMsg] = useState(false)

    function handleEmail(e) {
        setEamil(e.target.value)
    }

    function handlePassword(e) {
        setPassword(e.target.value)
    }

    function handleSubmit(e) {
        console.log(this)
        e.preventDefault()
        setPasswordErr('')
        setEmailErr('')
        setFlag('')
        setApiMsg('')

        axios.post('http://localhost:8081/api/v1/job_portal/login', {
            "email": email,
            "password": password
        })
            .then(response => {
                console.log(response)
                for (let i = 0; i < response.data.error; i++) {
                    console.log(response.data.error)
                    if (response.data.error[i].fieldName === 'password') {
                        console.log(response.data.error)
                        this.error = response.data.error[i].msg
                    }
                }
            })

            .catch(reason => {
                console.log('Error has occured ' + JSON.stringify(reason.response))
                if (reason.message === 'Network Error') {
                    console.log(JSON.stringify(reason))
                    alert("Server is not available or Your internet connection is not stable")
                    return
                }

                setFlag(reason.response.data.status)
                setApiMsg(reason.response.data.message)

                if (reason.response.data.error !== undefined && reason.response.data.error !== null) {
                    reason.response.data.error.map((err) => {
                        if (err.fieldName === 'password')
                            setPasswordErr(err.msg)
                        if (err.fieldName === 'email')
                            setEmailErr(err.msg)
                    })
                }
            })
    }

    return (
        <>
            <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700&display=swap" rel="stylesheet" />
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />

            <section className="ftco-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6 text-center mb-5">
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-7 col-lg-5">
                            <div className="login-wrap p-4 p-md-5">
                                <div className="icon d-flex align-items-center justify-content-center">
                                    <span className="fa fa-user-o"></span>
                                </div>
                                <h3 className="text-center mb-4">Sign In</h3>

                                {flag.length === 0 ?
                                    ''
                                    : < div className="alert alert-danger" role="alert">
                                        {apiMsg}
                                    </div>}

                                <form onSubmit={handleSubmit} className="login-form">
                                    <div className="form-group">
                                        <input type="text" className="form-control rounded-left" onChange={handleEmail} name="email" placeholder="Please enter email" />

                                        <div className="form-group " id="msgErr">
                                            <span>{emailErr} </span>
                                        </div>
                                    </div>
                                    <div className="form-group d-flex">
                                        <input type="password" className="form-control rounded-left" placeholder="Please enter password" onChange={handlePassword} name="password" />
                                    </div>

                                    <div className="form-group " id="msgErr">
                                        <span>{psdErr} </span>
                                    </div>

                                    <div className="form-group">
                                        <button type="submit" className="form-control btn btn-primary rounded submit px-3">Login</button>
                                    </div>
                                    <div className="form-group d-md-flex">
                                        <div className="w-50">
                                            <label className="checkbox-wrap checkbox-primary">Remember Me
                                                <input type="checkbox" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>
                                        <div className="w-50 text-md-right">
                                            <Link to="/forget-password">Forgot Password</Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default SignIn