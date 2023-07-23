import React, { useContext, useEffect, useRef, useState } from "react";
import Apple from "../components/Layouts/Apple";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../store/AuthContext";
import { Type } from "typescript";

const Register = () =>{
    const [isLoadingRegister, setLoadingRegister] = useState(false);
    const [errorRegister, setErrorRegister] = useState<string | null>(null);
  
    const navigate = useNavigate();
    const usernameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const [isLoadingLogin, setLoadingLogin] = useState<boolean>(false);
    const [errorLogin, setErrorLogin] = useState<string | null>();
    const Auth = useContext(AuthContext);

    const onSubmitHandler = async (event: React.FormEvent): Promise<void> => {

      event.preventDefault();
      setErrorRegister(null);

      const username = usernameRef.current?.value ?? "";
      const email = emailRef.current?.value ?? "";
      const password = passwordRef.current?.value ?? "";


      try {
        setLoadingRegister(true);

        	try {
            // Implement your registration logic here, e.g., sending a request to the server to register the user
            // For example:
            const response = await fetch("/register/user", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                username: username,
                email: email,
                password: password,
              }),
            });

            // Check if the registration was successful
            if (response.ok) {
              // Handle successful registration, e.g., set the token and log the user in
              const data = await response.json();
              Auth.login(data.token);
              return;
            }

            // If the registration failed, get the error message from the response
            const responseData = await response.json();
            setErrorRegister(responseData.error); // Set the error message in the state
            
          } catch (error: any) {
            console.log(error);
            setErrorRegister("An error occurred during registration. Please try again later.");
            throw error;
          }finally {
            setLoadingRegister(false);
          }

        // navigate("admin/dashboard", { replace: true });
      } catch (error: any) {
         setErrorRegister(error.message);
         setLoadingRegister(false);
      }
    };

    const handleClick = (event: Event) => {
      // Prevent the form from submitting
      event.preventDefault();
      return false;
    };

    useEffect(() => {
      if (Auth.isLoggedIn) {
        navigate("/admin/dashboard");
      }
    }, [Auth.isLoggedIn, navigate]); 
    
    return (
          <div className="authentication-wrapper authentication-cover authentication-bg">
            <div className="authentication-inner row">
              {/* <!-- /Left Text --> */}
              <div className="d-none d-lg-flex col-lg-7 p-0">
                <div className="auth-cover-bg auth-cover-bg-color d-flex justify-content-center align-items-center">
                  <img
                    src="../../assets/img/illustrations/auth-register-illustration-light.png"
                    alt="auth-register-cover"
                    className="img-fluid my-5 auth-illustration"
                    data-app-light-img="illustrations/auth-register-illustration-light.png"
                    data-app-dark-img="illustrations/auth-register-illustration-dark.png"
                  />

                  <img
                    src="../../assets/img/illustrations/bg-shape-image-light.png"
                    alt="auth-register-cover"
                    className="platform-bg"
                    data-app-light-img="illustrations/bg-shape-image-light.png"
                    data-app-dark-img="illustrations/bg-shape-image-dark.png"
                  />
                </div>
              </div>
              {/* <!-- /Left Text --> */}

              {/* <!-- Register --> */}
              <div className="d-flex col-12 col-lg-5 align-items-center p-sm-5 p-4">
                <div className="w-px-400 mx-auto">
                  {/* <!-- Logo --> */}
                  <div className="app-brand mb-4">
                    <a href="index.html" className="app-brand-link gap-2">
                      <span className="app-brand-logo demo">
                        <svg width="32" height="22" viewBox="0 0 32 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M0.00172773 0V6.85398C0.00172773 6.85398 -0.133178 9.01207 1.98092 10.8388L13.6912 21.9964L19.7809 21.9181L18.8042 9.88248L16.4951 7.17289L9.23799 0H0.00172773Z"
                            fill="#7367F0"
                          />
                          <path
                            opacity="0.06"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M7.69824 16.4364L12.5199 3.23696L16.5541 7.25596L7.69824 16.4364Z"
                            fill="#161616"
                          />
                          <path
                            opacity="0.06"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M8.07751 15.9175L13.9419 4.63989L16.5849 7.28475L8.07751 15.9175Z"
                            fill="#161616"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M7.77295 16.3566L23.6563 0H32V6.88383C32 6.88383 31.8262 9.17836 30.6591 10.4057L19.7824 22H13.6938L7.77295 16.3566Z"
                            fill="#7367F0"
                          />
                        </svg>
                      </span>
                    </a>
                  </div>
                  {/* <!-- /Logo --> */}
                  <h3 className="mb-1 fw-bold">Adventure starts here 🚀</h3>
                  <p className="mb-4">Make your app management easy and fun!</p>

                  <form id="formAuthentication" className="mb-3" onSubmit={onSubmitHandler} method="POST">

                    <div className="mb-3">
                      <label htmlFor="username" className="form-label">Username</label>
                      <input
                        type="text"
                        className="form-control"
                        id="username"
                        name="username"
                        placeholder="Enter your username"
                        autoFocus
                        ref={usernameRef}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">Email</label>
                      <input type="email" className="form-control" id="email" name="email" placeholder="Enter your email" ref={emailRef} required/>
                    </div>
                    <div className="mb-3 form-password-toggle">
                      <label className="form-label" htmlFor="password">Password</label>
                      <div className="input-group input-group-merge">
                        <input
                          type="password"
                          id="password"
                          className="form-control"
                          name="password"
                          placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                          aria-describedby="password"
                          ref={passwordRef}
                          required

                        />
                        <span className="input-group-text cursor-pointer"><i className="ti ti-eye-off"></i></span>
                      </div>
                    </div>

                    <div className="mb-3">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="terms-conditions" name="terms" />
                        <label className="form-check-label" htmlFor="terms-conditions">
                          I agree to
                          <a href="#">privacy policy & terms</a>
                        </label>
                      </div>
                    </div>
                    <button className="btn btn-primary d-grid w-100">Sign up</button>
                  </form>
                  {errorRegister && <p className="text-danger">{errorRegister}</p>}

                  <p className="text-center">
                    <span>Already have an account?</span>
                    <Link to={`/`}>
                      <span>Sign in instead</span>
                    </Link>
                  </p>

                  <div className="divider my-4">
                    <div className="divider-text">or</div>
                  </div>

                  <div className="d-flex justify-content-center">
                    <a href="#" className="btn btn-icon btn-label-facebook me-3">
                      <i className="tf-icons fa-brands fa-facebook-f fs-5"></i>
                    </a>

                    <a href="#" className="btn btn-icon btn-label-google-plus me-3">
                      <i className="tf-icons fa-brands fa-google fs-5"></i>
                    </a>

                    <a href="#" className="btn btn-icon btn-label-twitter">
                      <i className="tf-icons fa-brands fa-twitter fs-5"></i>
                    </a>
                  </div>
                </div>
              </div>
              {/* <!-- /Register --> */}
            </div>
          </div>
    );
};

export default Register;