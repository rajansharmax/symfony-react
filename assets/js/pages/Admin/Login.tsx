import React, { useContext, useEffect, useRef, useState } from "react";
import Apple from "../../components/Layouts/Apple";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../store/AuthContext";
import { Type } from "typescript";

const Login = () =>{
  
    const navigate = useNavigate();
    const loginRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const [isLoadingLogin, setLoadingLogin] = useState<boolean>(false);
    const [errorLogin, setErrorLogin] = useState<string | null>();
    const Auth = useContext(AuthContext);

    const onSubmitHandler = (event: React.FormEvent): void => {
        event.preventDefault();
        getloginApi();
    };

    const getloginApi = async () => {
      setErrorLogin(null);
      console.log('ee');
      console.log(loginRef, passwordRef);

      try{
        const response = await fetch('/api/login',{
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              username: loginRef.current?.value,
              password: passwordRef.current?.value
            }),
        });

        if(401 === response.status){
          throw new Error('Wrong access. Try Again!');
        }
        if (200 !== response.status) {
          throw new Error(response.statusText);
        }

        const data = await response.json();
        Auth.login(data.token);

        navigate('admin/dashboard',{ replace:true });

      }catch(error:any){
        setErrorLogin(error.message);
        setLoadingLogin(false);
      }
    }

    useEffect(() => {
      if (Auth.isLoggedIn) {
        navigate("/admin/dashboard");
      }
    }, [Auth.isLoggedIn, navigate]);

    return (
        <div className="container-xxl">
          <div className="authentication-wrapper authentication-basic container-p-y">
            <div className="authentication-inner py-4">
              <div className="card">
                <div className="card-body">
                  <div className="app-brand justify-content-center mb-4 mt-2">
                    <a href="index.html" className="app-brand-link gap-2">
                      <span className="app-brand-logo demo">
                        <svg
                          width="32"
                          height="22"
                          viewBox="0 0 32 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
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
                      <span className="app-brand-text demo text-body fw-bold ms-1">
                        Vuexy
                      </span>
                    </a>
                  </div>

                  <h4 className="mb-1 pt-2">Welcome to Vuexy! 👋</h4>
                  <p className="mb-4">
                    Please sign-in to your account and start the adventure
                  </p>

                  <form
                    id="formAuthentication"
                    className="mb-3"
                    onSubmit={onSubmitHandler}
                   
                  >
                    <div className="mb-3">
                      {!!errorLogin ? (<div className="text-danger">{errorLogin}</div>) : null}
                      <label htmlFor="email" className="form-label">
                        Email or Username
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="email"
                        name="email-username"
                        placeholder="Enter your email or username"
                        ref={loginRef}
                        autoFocus
                      />
                    </div>
                    <div className="mb-3 form-password-toggle">
                      <div className="d-flex justify-content-between">
                        <label className="form-label" htmlFor="password">
                          Password
                        </label>
                        <a href="auth-forgot-password-basic.html">
                          <small>Forgot Password?</small>
                        </a>
                      </div>
                      <div className="input-group input-group-merge">
                        <input
                          type="password"
                          id="password"
                          className="form-control"
                          name="password"
                          placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                          aria-describedby="password"
                          ref={passwordRef}
                        />
                        <span className="input-group-text cursor-pointer">
                          <i className="ti ti-eye-off"></i>
                        </span>
                      </div>
                    </div>
                    <div className="mb-3">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="remember-me"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="remember-me"
                        >
                          {" "}
                          Remember Me{" "}
                        </label>
                      </div>
                    </div>
                    <div className="mb-3">
                      <button
                        className="btn btn-primary d-grid w-100"
                        type="submit"
                      >
                        Sign in
                      </button>
                    </div>
                  </form>

                  <p className="text-center">
                    <span>New on our platform?</span>
                    <a href="auth-register-basic.html">
                      <span>Create an account</span>
                    </a>
                  </p>

                  <div className="divider my-4">
                    <div className="divider-text">or</div>
                  </div>

                  <div className="d-flex justify-content-center">
                    <a
                      href="#"
                      className="btn btn-icon btn-label-facebook me-3"
                    >
                      <i className="tf-icons fa-brands fa-facebook-f fs-5"></i>
                    </a>

                    <a
                      href="#"
                      className="btn btn-icon btn-label-google-plus me-3"
                    >
                      <i className="tf-icons fa-brands fa-google fs-5"></i>
                    </a>

                    <a
                      href="#"
                      className="btn btn-icon btn-label-twitter"
                    >
                      <i className="tf-icons fa-brands fa-twitter fs-5"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
};

export default Login;