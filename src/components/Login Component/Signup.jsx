import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "./Input";
import Logo from "../Logo.jsx";
import { auth } from "../../firebase.js";
import { createUserWithEmailAndPassword } from "firebase/auth";

function Signup() {
  const navigate = useNavigate();
  const [email1, setEmail1] = useState("");
  const [password1, setPassword1] = useState("");
  const [name, setName] = useState("");

  const signUp = async (e) => {
    e.preventDefault();

    //firebase sign up or register
    await createUserWithEmailAndPassword(auth, email1, password1)
      .then((auth) => {
        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="flex items-center justify-center mt-10">
      <div className="mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10">
        <div className="mb-2 flex justify-center mt-[-1rem]">
          <span className="inline-block w-full max-w-[400px] ml-12">
            <Link to="/">
              <Logo width="100%" />
            </Link>
          </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">
          Sign up to create account
        </h2>
        <p className="mt-2 text-center text-base text-black/60">
          Already have an account?&nbsp;
          <Link
            to="/login"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign in
          </Link>
        </p>
        <form>
          <div className="space-y-5">
            <Input
              label="Full Name"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              label="Email:"
              placeholder="Enter your email"
              type="email"
              value={email1}
              onChange={(e) => setEmail1(e.target.value)}
            />
            <Input
              label="Password:"
              type="password"
              placeholder="Enter your password"
              value={password1}
              onChange={(e) => setPassword1(e.target.value)}
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg"
              onClick={signUp}
            >
              Create Account
            </button>
          </div>
        </form>
        <p className="mt-2">
          By creating an account or logging in, you agree to Stridefusion&apos;s
          Conditions of Use and Privacy Policy.
        </p>
      </div>
    </div>
  );
}

export default Signup;
