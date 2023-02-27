import { useEffect, useRef, useState } from "react";

export const RegisterPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [gender, setGender] = useState("Male");
  const [birthdate, setBirthdate] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [reason, setReason] = useState("");
  const [tc, setTC] = useState(false);
  const [showError, setShowError] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const formRef = useRef(null);

  const [requirementControllerSet, updateRequirementControllerSet] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  useEffect(() => {
    document.title = "Pixel Legion | Login";

    validateForm();
  }, [firstName, lastName, username, birthdate, email, password, confirm, tc]);

  // Regex Validator for Email Address
  const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );

  // Regex Validator for names
  const validNameRegex = RegExp(/^[a-z ,.'-]+$/i);

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
    const names = [firstName, lastName];
    const passwords = [password, confirm];

    const newReqController = [...requirementControllerSet];

    // Names
    if (
      !(
        validNameRegex.test(firstName.trim()) &&
        validNameRegex.test(lastName.trim())
      )
    ) {
      console.log("Names error");

      newReqController[1] = false;
    } else {
      console.log("Names are valid");
      newReqController[1] = true;
    }

    // Username & Email
    if (!validEmailRegex.test(email.trim())) {
      console.log("Email error");
      newReqController[4] = false;
    } else {
      console.log("Email is valid");
      newReqController[4] = true;
    }

    // Birthdate
    const ageRequirement = 18;
    if (birthdate.length === 0) {
      console.log("Birthdate is empty!");
      newReqController[3] = false;
    } else {
      let today = new Date();
      let bd = new Date(birthdate);

      let age = today.getFullYear() - bd.getFullYear();
      let m = today.getMonth() - bd.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < bd.getDate())) {
        age--;
      }
      if (age >= ageRequirement) {
        console.log("Birthdate is valid");
        newReqController[3] = true;
      } else {
        console.log("Birthdate error");
        newReqController[3] = false;
      }
    }

    if (!validUsernameRegex.test(username.trim())) {
      console.log("Username error");
      newReqController[2] = false;
    } else {
      console.log("Username is valid");
      newReqController[2] = true;
    }

    // Passwords
    if (
      !(validPasswordRegex.test(passwords[0]) && passwords[1] === passwords[0])
    ) {
      console.log("Passwords error");
      newReqController[5] = false;
      newReqController[6] = false;
      newReqController[7] = false;
    } else {
      console.log("Passwords are valid");
      newReqController[5] = true;
      newReqController[6] = true;
      newReqController[7] = true;
    }

    // Empty Checking
    if (tc === false) {
      console.log("* TC is unchecked!");
      newReqController[8] = false;
    } else {
      newReqController[8] = true;
    }
    console.log("_______________");

    newReqController[0] = newReqController.slice(1).every((value) => value);
    if (newReqController[0]) {
      setShowError(false);
    }
    updateRequirementControllerSet(newReqController);
  };

  const resetValues = () => {
    setFirstName("");
    setLastName("");
    setUsername("");
    setGender("Male");
    setBirthdate("");
    setEmail("");
    setPassword("");
    setConfirm("");
    setReason("");
    setTC(false);
  };

  return (
    <div className="flex justify-center items-center">
      <div
        className={`bg-blackTransparent text-gray-300 px-20 py-10 my-16  ${
          formSubmitted ? "rounded-none" : "rounded-xl mx-auto"
        }`}
      >
        <h1 className="font-silkscreen text-3xl font-bold tracking-tight">
          Register to <span className="text-salmon">Pixel Legion</span>
        </h1>
        <p>Let's build magnificent Pixel Art together!</p>
        {!formSubmitted ? (
          <form
            name="myForm"
            id="form"
            className="text-md font-display"
            onSubmit={(e) => handleSubmit(e)}
            ref={formRef}
          >
            <div className="form-group">
              <div>
                <label htmlFor="firstname">*First name:</label>
                <input
                  name="firstname"
                  type="text"
                  value={firstName}
                  placeholder="Enter your First name"
                  data-type="name"
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                  minLength={1}
                  maxLength={100}
                  // required
                />
              </div>
              <div>
                <label htmlFor="lastname">*Last name:</label>
                <input
                  name="lastname"
                  type="text"
                  value={lastName}
                  placeholder="Enter your Last name"
                  data-type="name"
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                  minLength={1}
                  maxLength={100}
                  // required
                />
              </div>
            </div>
            <div className="form-group">
              <div>
                <label htmlFor="username">*Username:</label>
                <input
                  name="username"
                  autoComplete="username"
                  type="text"
                  value={username}
                  placeholder="Enter your Username"
                  data-type="username"
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                  minLength={3}
                  maxLength={20}
                  // required
                />
              </div>
              <div>
                <label htmlFor="gender">*Gender:</label>
                <select
                  name="gender"
                  value={gender}
                  data-type="gender"
                  onInput={(e) => setGender(e.target.value)}
                  // required
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="NB">Non-Binary</option>
                </select>
              </div>
              <div>
                <label htmlFor="date">*Birthdate:</label>
                <input
                  name="date"
                  type="date"
                  value={birthdate}
                  placeholder="dd/mm/yyyy"
                  data-type="date"
                  onInput={(e) => {
                    setBirthdate(e.target.value);
                  }}
                  // required
                />
              </div>
            </div>
            <div>
              <label htmlFor="email">*Email Address:</label>
              <input
                name="email"
                type="email"
                value={email}
                autoComplete="email"
                placeholder="Enter your Email Address"
                data-type="email"
                onInput={(e) => {
                  setEmail(e.target.value);
                }}
                // required
              />
            </div>
            <div>
              <label htmlFor="password">*Password:</label>
              <input
                name="password"
                type="password"
                value={password}
                autoComplete="new-password"
                placeholder="Enter your Password"
                data-type="password"
                onInput={(e) => {
                  setPassword(e.target.value);
                }}
                // required
              />
            </div>
            <div>
              <label htmlFor="confirm">*Confirm password:</label>
              <input
                name="confirm"
                type="password"
                value={confirm}
                autoComplete="new-password"
                placeholder="Re-type your password"
                data-type="confirm"
                onInput={(e) => {
                  setConfirm(e.target.value);
                }}
                // required
              />
            </div>
            <div>
              <label htmlFor="reason">Reason for joining:</label>
              <br />
              <textarea
                maxLength="9999"
                value={reason}
                placeholder="Why you want to join Pixel Legion?"
                name="reason"
                data-type="content"
                onInput={(e) => setReason(e.target.value)}
              ></textarea>
            </div>
            <div>
              <input
                type="checkbox"
                name="terms"
                checked={tc}
                data-type="forced"
                className="mx-2"
                onChange={() => {
                  setTC((prev) => !prev);
                }}
                // required
              />
              <label
                htmlFor="terms"
                className={requirementControllerSet[8] ? "" : "text-salmon"}
              >
                *I agree with the terms and conditions
              </label>
              <br />
            </div>
            <div className="text-mauve text-sm my-2">
              <p className={requirementControllerSet[0] ? "" : "text-salmon"}>
                Requirements:
              </p>
              <p className={requirementControllerSet[1] ? "" : "text-salmon"}>
                *Names must not contain any numbers/special chars
              </p>
              <p className={requirementControllerSet[2] ? "" : "text-salmon"}>
                *Username must not contain any special chars
              </p>
              <p className={requirementControllerSet[3] ? "" : "text-salmon"}>
                *You must be 18 yrs old and above to register
              </p>
              <p className={requirementControllerSet[4] ? "" : "text-salmon"}>
                *Email Address must be valid
              </p>
              <p className={requirementControllerSet[5] ? "" : "text-salmon"}>
                *Password must contain:
              </p>
              <p className={requirementControllerSet[6] ? "" : "text-salmon"}>
                - 1 Capital letter & 1 Small letter
              </p>
              <p className={requirementControllerSet[7] ? "" : "text-salmon"}>
                - 1 Number, and 1 Special Character
              </p>
              <p>We will contact you when your application is confirmed.</p>
            </div>
            <input
              type="submit"
              value="Register"
              className="text-lg text-mauve border border-solid px-9 py-0.5 mr-5 mt-5 border-mauve bg-none rounded-md duration-150 hover:bg-mauve hover:text-black active:bg-white active:text-black"
            />
            <button
              type="button"
              onClick={() => resetValues()}
              className="text-lg text-mauve border border-solid px-9 py-0.5 mr-5 border-mauve bg-none rounded-md duration-150 hover:bg-mauve hover:text-black active:bg-white active:text-black"
            >
              Clear
            </button>
            <p className="text-red-500 mt-2">
              {showError
                ? "*Please check the form first for errors & missing values before submitting.."
                : ""}
            </p>
          </form>
        ) : (
          <div>
            <p className="my-3 text-lg">
              Hello <span className="text-mauve">{username}</span>, your
              application to join Pixel Legion has been successfully sent. We
              will contact you through email{" "}
              <span className="text-mauve">({email})</span> in the future
              regarding your registration. In the meantime, here is your
              submission:
            </p>
            <p>
              Your name is {firstName} {lastName}
            </p>
            <p>Your birthday is {birthdate}</p>
            <p>Your username is {username}</p>
            <p>Your email is {email}</p>
            <br />
            {reason.length === 0 ? (
              <></>
            ) : (
              <p>
                Your reason for joining Pixel Legion is:
                <br /> {reason}
              </p>
            )}
            <h2 className="mt-5 text-xl tracking-tighter font-silkscreen text-mauve">
              We wish you luck in your application!
            </h2>
          </div>
        )}
      </div>
    </div>
  );
};
