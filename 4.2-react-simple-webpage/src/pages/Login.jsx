import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const formRef = useRef(null);

  const [requirementControllerSet, updateRequirementControllerSet] = useState([
    false,
    false,
  ]);

  useEffect(() => {
    document.title = "Pixel Legion | Login";

    validateForm();
  }, [username, password]);

  // Regex Validator for password
  const validPasswordRegex = RegExp(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
  );

  // Regex Validator for username
  const validUsernameRegex = RegExp(/^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{3,20}$/);

  const handleSubmit = (e) => {
    e.preventDefault();
    validateForm();
    if (requirementControllerSet.every((value) => value)) {
      setFormSubmitted(true);
      // formRef.current.submit(); Mayhaps, a future use be for this poor submit function.
    } else {
      setShowError(true);
    }
  };

  const validateForm = () => {
    const newReqController = [...requirementControllerSet];

    if (!validUsernameRegex.test(username.trim())) {
      console.log("Username error");
      newReqController[0] = false;
    } else {
      console.log("Username is valid");
      newReqController[0] = true;
    }

    // Passwords
    if (!validPasswordRegex.test(password)) {
      console.log("Passwords error");
      newReqController[1] = false;
    } else {
      console.log("Passwords are valid");
      newReqController[1] = true;
    }
    console.log("_______________");

    let checker = newReqController.every((value) => value);
    if (checker) {
      setShowError(false);
    }
    updateRequirementControllerSet(newReqController);
  };

  const resetValues = () => {
    setUsername("");
    setPassword("");
  };

  return (
    <div className="flex justify-center items-center">
      <div
        className={`bg-blackTransparent text-gray-300 px-20 py-10 my-16  ${
          formSubmitted ? "rounded-none" : "rounded-xl mx-auto"
        }`}
      >
        <h1 className="font-silkscreen text-3xl font-bold tracking-tight">
          Login to <span className="text-salmon">Pixel Legion</span>
        </h1>
        <p>Let's build magnificent Pixel Art together!</p>
        {!formSubmitted ? (
          <form
            name="myForm"
            id="form-login"
            className="text-md font-display"
            onSubmit={(e) => handleSubmit(e)}
            ref={formRef}
          >
            <div className="my-4">
              <label
                htmlFor="username"
                className={requirementControllerSet[0] ? "" : "text-salmon"}
              >
                *Username:
              </label>
              <input
                name="username"
                autoComplete="username"
                type="text"
                value={username}
                placeholder="Enter your Username"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                minLength={3}
                maxLength={20}
                // required
              />
            </div>
            <div className="my-4">
              <label
                htmlFor="password"
                className={requirementControllerSet[1] ? "" : "text-salmon"}
              >
                *Password:
              </label>
              <input
                name="password"
                type="password"
                value={password}
                autoComplete="new-password"
                placeholder="Enter your Password"
                onInput={(e) => {
                  setPassword(e.target.value);
                }}
                // required
              />
            </div>
            <input
              type="submit"
              value="Login"
              className="text-lg text-mauve border border-solid px-9 py-0.5 mr-5 mt-5 phone:mb-0 mb-3 border-mauve bg-none rounded-md duration-150 hover:bg-mauve hover:text-black active:bg-white active:text-black"
            />
            <button
              type="button"
              onClick={() => resetValues()}
              className="text-lg text-mauve border border-solid px-9 py-0.5 mr-5 border-mauve bg-none rounded-md duration-150 hover:bg-mauve hover:text-black active:bg-white active:text-black"
            >
              Clear
            </button>

            <p>
              Do you want to register?{" "}
              <Link to="/u/register" className="text-mauve">
                Click here!
              </Link>
            </p>
            <p className="text-red-500 mt-2">
              {showError
                ? "*Please check the form first for errors & missing values before submitting.."
                : ""}
            </p>
          </form>
        ) : (
          <div>
            <p className="text-xl my-4">
              Hello <span className="text-mauve">{username}</span>,
              unfortunately if you're seeing this, this means that the webpage
              is still under construction.
            </p>
            <br />
            <h1 className="text-5xl text-center">¯\_(ツ)_/¯</h1>
            <p className="text-xl my-4 text-center">
              Remember that Pixel Legion is not a real company so this website
              is not affiliated with anyone. It is just an assignment made by a
              student. You can check me out{" "}
              <Link
                className="text-sky-400 underline underline-offset-2 hover:text-sky-200 active:text-sky-800"
                to="https://aldwinny.github.io/"
                target="_blank"
              >
                here
              </Link>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
