import React, { useEffect, useState } from "react";
import { useQuery, useMutation } from "react-query";
import { GoogleLogin } from "react-google-login";

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
  // store returned user somehow
};

export default function Login() {
  const [data, setData] = useState({ email: "None", password: "None" });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const mutation = useMutation(() =>
    fetch("http://localhost:3001/api/student/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
  );
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
    mutation.mutateAsync();
  }

  return (
    <div>
      <form onSubmit={Submitted}>
        <label>Email:</label>
        <input
          type="text"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>
        <br />
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
        <br />
        <input type="submit"></input>
      </form>
      <GoogleLogin
        clientId={`425774411147-mhaovikhugapv956gsn4trpvfgc24828.apps.googleusercontent.com`}
        buttonText="Log in with Google"
        onSuccess={handleLogin}
        onFailure={handleLogin}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
}
