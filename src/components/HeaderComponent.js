import { LOGO } from "../utils/constants";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const HeaderComponent = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  return (
    <div className=" absolute bg-gradient-to-b from-black z-10 w-full">
      <div className="mx-20 ">
        <div className="px-10 py-3 flex justify-between">
          <img className="w-48" src={LOGO} alt="Logo" />
          {user && (
            <div className="flex m-5">
              <img
                src={user.photoURL}
                alt=""
                className="w-10 h-10 rounded-md"
              />
              <button
                onClick={handleSignOut}
                className="text-white mx-2 font-bold border border-gray-200 rounded-md px-2"
              >
                Sign out
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
