import { useState } from "react";
import { SIGNIN_BG_IMG } from "../utils/constants";
import HeaderComponent from "./HeaderComponent";

const Signin = () => {
  const [isSigninForm, setIsSigninForm] = useState(true);
  const toggleSigninForm = () => {
    setIsSigninForm(!isSigninForm);
  };
  return (
    <div>
      <HeaderComponent />
      <div className="absolute">
        <img src={SIGNIN_BG_IMG} alt="signin-bg-img" />
      </div>
      <form
        action=""
        className=" w-3/12 absolute bg-black bg-opacity-80 text-white p-8 my-36 mx-auto left-0 right-0 rounded-lg"
      >
        <div className=" font-medium text-2xl m-1 p-1">
          {isSigninForm ? "Sign In" : "Sign Up"}
        </div>
        {!isSigninForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="my-2 p-3 rounded-md w-full bg-transparent border border-gray-200"
          />
        )}
        <input
          type="text"
          placeholder="Email"
          className="my-2 p-3 rounded-md w-full bg-transparent border border-gray-200"
        />
        <input
          type="password"
          placeholder="Password"
          className="my-2 p-3 rounded-md w-full bg-transparent border border-gray-200"
        />
        <button className="my-2 w-full bg-red-700 rounded-md p-3">
          {isSigninForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="my-3">
          {isSigninForm ? "New to Netflix? " : "Already registered! "}
          <span
            className=" font-bold cursor-pointer"
            onClick={toggleSigninForm}
          >
            {isSigninForm ? "Sign up now." : "Sign In"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Signin;
