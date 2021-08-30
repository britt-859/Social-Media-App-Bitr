import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/icons/logo.svg";
import BitrApi from "../web-apis/bitr-api/bitr-api";

//create the component
function Login(props) {
  const usernameRef = React.useRef();
  const passwordRef = React.useRef();

  React.useEffect(() => {
    usernameRef.current.value = localStorage.getItem("username");
  }, [usernameRef.current]);

  return (
    <div className="w-screen h-screen bg-background">
      {/* Screen Container */}
      <div className="w-full h-full flex items-center">
        {/* A wrapper to vertically align our child component using flex*/}
        <div className="bg-surface w-full h-full sm:w-96 sm:h-96 mx-auto flex flex-col justify-center sm:rounded-2xl sm:shadow-lg">
          {/* Card Container */}
          <div className=" w-full space-y-16 sm:space-y-8 max-w-xs sm:max-w-none px-4 sm:px-16 mx-auto sm:mx-0">
            {/* Content Container */}
            <div className="flex flex-col">
              <Logo className="text-primary mx-auto sm:mx-0" />
              <h1 className="text-3xl text-on-surface">Log into Bitr</h1>
            </div>
            <div className="flex flex-col space-y-5">
              <input
                ref={usernameRef}
                className="border border-primary px-2 py-1 rounded-lg focus:outline-none"
                type="text"
                placeholder="Username"
              />
              <input
                ref={passwordRef}
                className="border border-primary px-2 py-1 rounded-lg focus:outline-none"
                type="password"
                placeholder="Password"
              />
            </div>
            <div className="flex space-x-3">
              <Link
                to="/sign-up"
                className="text-center w-full px-2 py-1 text-sm rounded-full border border-primary text-primary focus:outline-none"
              >
                Sign Up
              </Link>
              <button
                className="w-full px-2 py-1 text-sm rounded-full bg-primary text-on-primary focus:outline-none"
                type="button"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
