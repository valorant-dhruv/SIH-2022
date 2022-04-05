import React, { useState, useEffect } from "react";
import "./login_signup.css";
import {BrowserRouter,Route} from 'react-router-dom';
import { useQuery, useMutation } from "react-query";
import { GoogleLogin } from "react-google-login";
import Login from "../login";
const queryClient = require("../../client");

// queryClient.getQueryData("colleges");
const fetcher = () => {
  return fetch("http://localhost:3001/clg").then((res) => {
    return res.json();
  });
};

const Login_signup = () => {
  const [data, setData] = useState({ email: "None", password: "None" });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [uni, setUni] = useState("");
  const [domain, setDomain] = useState("");

  const handleLogin = async (googleData) => {
    console.log(googleData.tokenId);
    const res = await fetch("http://localhost:3001/api/v1/auth/google", {
      method: "POST",
      body: JSON.stringify({
        token: googleData.tokenId,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);
    if (data.status === "Not Ok") {
      alert(
        "We need some more information about the user. Please go to sign up"
      );
      setName(data.body.name);
      setPassword(data.body.password);
      setEmail(data.body.email);
    }
    // store returned user somehow
  };

  let { colleges, isLoading } = useQuery("colleges", () => fetcher());

  const mutation = useMutation((string, obj, which) => {
    fetch(`http://localhost:3001/${string}`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        Name: name,
        email: email,
        password: password,
        Phone_number: number,
        Institute: uni,
        Domains_of_interest: domain,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert(`Invalid${data.error}`);
      });
  });

  useEffect(() => {
    console.log(email);

    //CleanUp function of the useEffect
    return () => {};
  }, [email]);

  useEffect(() => {
    console.log(password);

    return () => {};
  }, [password]);

  function Submitted(e) {
    e.preventDefault();
    let obj = { email, password };
    console.log(obj);
    mutation.mutateAsync("api/student/login", obj, false);
  }
  const handleSignIn = () => {
    document
      .querySelector("#modalContainer")
      .classList.remove("right-panel-active");
  };
  const handleSignUp = () => {
    document
      .querySelector("#modalContainer")
      .classList.add("right-panel-active");
  };

  function signupsubmitted(e) {
    e.preventDefault();
    let obj = {
      name,
      email,
      password,
      number,
      uni,
      domain,
    };
    console.log(obj);
    mutation.mutateAsync("api/student/signup", obj, true);
  }

  if (isLoading) {
    return (
      <div>
        <h1>Data is still Loading...</h1>
      </div>
    );
  }

  return (
    <>
      <div className="modalBackground">
        <div className="modalContainer" id="modalContainer">
          <div className="form-container sign-up-container">
            <form className="modalForm" onSubmit={signupsubmitted}>
              <h1 className="title">Create Account</h1>
              <input
                className="input-modal"
                name="name"
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <input
                className="input-modal"
                name="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <input
                className="input-modal"
                name="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <input
                className="input-modal"
                name="number"
                type="text"
                placeholder="Phone Number"
                value={number}
                onChange={(e) => {
                  setNumber(e.target.value);
                }}
              />
              <input
                className="input-modal"
                name="university"
                type="text"
                placeholder="University"
                value={uni}
                onChange={(e) => {
                  setUni(e.target.value);
                }}
              />
              <input
                className="input-modal"
                name="interest"
                type="text"
                placeholder="Domain Interest"
                value={domain}
                onChange={(e) => {
                  setDomain((olddata) => {
                    return e.target.value;
                  });
                }}
              />
              <input type="submit" value="Sign Up"></input>
            </form>
          </div>
          <div className="form-container sign-in-container">
            <form className="modalForm" onSubmit={Submitted}>
              <h1 className="title">Welcome Back 🎉</h1>
              <GoogleLogin
                clientId={`425774411147-mhaovikhugapv956gsn4trpvfgc24828.apps.googleusercontent.com`}
                buttonText="Log in with Google"
                onSuccess={handleLogin}
                onFailure={handleLogin}
                cookiePolicy={"single_host_origin"}
              />
              <br />
              <span className="spanText mt-2">or use your account</span>
              <input
                className="input-modal"
                name="email"
                type="name"
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <input
                className="input-modal"
                name="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <input type="submit" value="Sign In"></input>
              <a href="/" className="anchorText">
                Forgot your password?
              </a>
              {/* <button className="modalButton" disabled>
                Sign In
              </button> */}
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1 className="title">Welcome Back!</h1>
                <p className="paraText">
                  To keep connected with us please login with your personal info
                </p>
                <button
                  className="ghost modalButton"
                  id="signIn"
                  onClick={handleSignIn}
                >
                  Sign In
                </button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1 className="title">Hello, Friend!</h1>
                <p className="paraText">
                  Enter your personal details and start journey with us
                </p>
                <button
                  className="ghost modalButton"
                  id="signUp"
                  onClick={handleSignUp}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login_signup;
