import { useRef, useState } from "react";
import { SIGNIN_BG_IMG } from "../utils/constants";
import HeaderComponent from "./HeaderComponent";
import { checkValidateSigninData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Signin = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [isSigninForm, setIsSigninForm] = useState(true);
  const toggleSigninForm = () => {
    setIsSigninForm(!isSigninForm);
  };

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const [errMessage, setErrMessage] = useState(null);

  const handleButtonSignin = () => {
    // console.log(email.current.value);
    // console.log(password.current.value);
    const message = checkValidateSigninData(
      email.current.value,
      password.current.value
    );
    console.log(message);
    setErrMessage(message);

    if (message) return;

    //signin/signup logic
    if (!isSigninForm) {
      //signup logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/133759756?v=4",
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              // An error occurred
              setErrMessage(error.message);
            });
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(errorCode + "-" + errorMessage);
        });
    } else {
      //signin logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(errorCode + "-" + errorMessage);
        });
    }
  };
  return (
    <div>
      <HeaderComponent />
      <div className="absolute">
        <img src={SIGNIN_BG_IMG} alt="signin-bg-img" />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className=" w-3/12 absolute bg-black bg-opacity-80 text-white p-8 my-36 mx-auto left-0 right-0 rounded-lg"
      >
        <div className=" font-medium text-2xl m-1 p-1">
          {isSigninForm ? "Sign In" : "Sign Up"}
        </div>
        {!isSigninForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="my-2 p-3 rounded-md w-full bg-transparent border border-gray-200"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email"
          className="my-2 p-3 rounded-md w-full bg-transparent border border-gray-200"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="my-2 p-3 rounded-md w-full bg-transparent border border-gray-200"
        />
        <p className="text-red-600 my-2 font-medium text-lg">{errMessage}</p>
        <button
          className="my-2 w-full bg-red-700 rounded-md p-3"
          onClick={handleButtonSignin}
        >
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
