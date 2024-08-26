import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute -z-10">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/36a4db5b-dec2-458a-a1c0-662fa60e7473/1115a02b-3062-4dcc-aae0-94028a0dcdff/IN-en-20240820-TRIFECTA-perspective_WEB_eeff8a6e-0384-4791-a703-31368aeac39f_large.jpg"
          alt="background "
        />
      </div>
      <form className="absolute w-3/12 p-16 bg-black mx-auto my-36 right-0 left-0 text-white opacity-90">
        <h1 className="py-4 font-bold text-3xl">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Name"
            className="p-2 my-4 w-full border border-gray-300 bg-neutral-950 rounded-sm"
          />
        )}
        <input
          type="text"
          placeholder="Email or Mobile No."
          className="p-2 my-4 w-full border border-gray-300 bg-neutral-950 rounded-sm"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 my-4 w-full border border-gray-300 bg-neutral-950 rounded-sm"
        />
        <button className="p-4 my-6 w-full bg-red-700 rounded-sm cursor-pointer">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p onClick={toggleSignInForm} className="font-bold cursor-pointer">
          {isSignInForm
            ? "New to Netflix? Sign up now."
            : "Already a User? Sign In now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
