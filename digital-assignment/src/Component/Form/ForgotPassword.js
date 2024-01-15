import React from 'react'
import { Link } from "react-router-dom";


const ForgotPassword = () => {
    return (

        <>
            <section>
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div className="card forgot1">
                                <div className="card-body  text-center">                                        
                                     <div className='mt-5'>
                                    <h5 className="fw-bold mb-2 ">Did you forgot your password?</h5>
                                     </div>
                                     <div className='mt-3'>

                                    <p className="text-dark-50 mb-5">Enter your email address and we'll send you a link to restore password</p>
                                     </div>

                                    <div className="form-outline form-white mb-4">
                                        <input type="email" id="typeEmailX" placeholder='Email Address' className="form-control form-control-lg" />

                                    </div>
                                    <div className="d-grid gap-2 mb-2">
                                        <button className="p-2 buttonrest" type="button">Request reset link</button>

                                    </div>

                                    <div className='mt-5'>

                                        <Link to="/" className="small mb-5 pb-lg-2"><a className="text-dark-50" href="#!">Back to login</a></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default ForgotPassword