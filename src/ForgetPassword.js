import React from 'react'
import './SignIn.css'
import { useState } from 'react'
import axios from 'axios'

function ForgetPassword() {
    const url = 'http://localhost:8081/api/v1/job_portal/forget-password/'

    const [email, setEmail] = useState('')
    const [flag, setFlag] = useState('')
    const [apiMsg, setApiMsg] = useState('')

    function setEamil(e) {
        setEmail(e.target.value)
    }

    function submitHandle(e) {
        setFlag('')
        setApiMsg('')
        e.preventDefault()
        axios.get(url + email)
            .then(response => {
                setFlag(response.data.status)
                setApiMsg(response.data.message)
                console.log(response.data)
            })
            .catch(error => {
                console.log("Error " + error)
                setApiMsg(error.response.data.message)
                setFlag(error.response.data.status)
            })
        console.log(email)
    }


    return <>
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
                            <h3 className="text-center mb-4">Forget Password</h3>

                            {flag.length === 0 ?
                                ''
                                : < div className="alert alert-danger" role="alert">
                                    {apiMsg}
                                </div>}

                            <form onSubmit={submitHandle} className="login-form">
                                <div className="form-group">
                                    <input type="text" className="form-control rounded-left" onChange={setEamil} name="email" placeholder="Please enter email" required />

                                    <div className="form-group " id="msgErr">
                                        <span> { } </span>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <button type="submit" className="form-control btn btn-primary rounded submit px-3">Submit</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    </>
}

export default ForgetPassword