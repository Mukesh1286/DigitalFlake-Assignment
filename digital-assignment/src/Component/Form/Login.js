import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import { loginAction } from '../../features/auth/authSlice';
import LoadingComponent from '../LoadingComponent/LoadingComponent';


const Login = () => {
    //dispatch
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [formData, setFormData] = useState("");

    //---Destructuring---
    const { email, password } = formData;

    //---onchange handler----
    const onChangeHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    //---onsubmit handler----
    const onSubmitHandler = (e) => {
        e.preventDefault();
        dispatch(loginAction({ email, password }));

    };

    //get data from store

    const { isSuccess, isLoading } = useSelector((state) => state?.auth)

    //redirect
    useEffect(() => {
        if (isSuccess) {
            navigate("admin");

        } else {
            navigate("");
        }
    }, [isSuccess]);



    return (
        <>
            <section>

                <div className="px-4 py-5 px-md-5 text-center text-lg-start">
                    <div className="container login">
                        <div className="row gx-lg-5 align-items-center">


                            <div className="col-lg-6 mb-1 mb-lg-0">
                                <div className="card">
                                    <div className="card-body py-5 px-md-5">

                                        <form onSubmit={onSubmitHandler}>

                                            <div className="row">
                                                <img src="image/DF_logo-transparent2.png" alt="logo" />

                                            </div>                                        


                                            <div className="form-outline mb-4">

                                                <input
                                                    name="email"
                                                    value={email}
                                                    onChange={onChangeHandler}
                                                    type="email"
                                                    class="form-control"
                                                    id="exampleFormControlInput1"
                                                    placeholder="Email address" />

                                            </div>


                                            <div className="form-outline mb-4">

                                                <input
                                                    name="password"
                                                    value={password}
                                                    onChange={onChangeHandler}
                                                    type="password"
                                                    className="form-control"
                                                    id="inputPassword"
                                                    placeholder="Password">

                                                </input>
                                            </div>

                                            <div className='forgot mb-4'>
                                                <Link to="/forgotpassword">Forgot Password?</Link>

                                            </div>


                                            <div className="d-grid gap-2 mb-2">
                                                {isLoading ? (
                                                    <LoadingComponent />
                                                ) : (
                                                    <button className="p-2 btn1" type="submit">Button</button>
                                                )}

                                            </div>


                                        </form>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 mb-5 mb-lg-0">
                                <h1 className="my-5 display-3 fw-bold ls-tight">

                                    <span className="text-primary"> Welcome to Digitalflake Admin</span>
                                </h1>

                            </div>
                        </div>
                    </div>
                </div>

            </section>

        </>
    )
}

export default Login