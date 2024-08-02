import React, { useState } from "react";
import Logo from "../Logo.jsx";
import { Link, useNavigate } from "react-router-dom";
import Input from "./Input.jsx";
import { auth } from "../../firebase.js";
import { signInWithEmailAndPassword } from "firebase/auth";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    //firebase log in or sign in
    signInWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        navigate("/");
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="flex items-center justify-center w-full mt-10">
      <div className="mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10">
        <div className="mb-2 flex justify-center mt-[-1rem]">
          <span className="inline-block w-full max-w-[400px] ml-12">
            <Link to="/">
              <Logo width="100%" />
            </Link>
          </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">
          Sign in to your account
        </h2>
        <p className="mt-2 text-center text-base text-black/60">
          Don&apos;t have any account?&nbsp;
          <Link
            to="/signup"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign Up
          </Link>
        </p>

        <form className="mt-8">
          <div className="space-y-3">
            <Input
              label="Email: "
              placeholder="Enter your email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              label="Password: "
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg"
              onClick={signIn}
            >
              Sign in
            </button>
          </div>
        </form>
        <p className="mt-2">
          By signing-in, you agree to Stridefusion's Conditions of Use and
          Privacy Notice.
        </p>
      </div>
    </div>
  );
}

export default Login;
