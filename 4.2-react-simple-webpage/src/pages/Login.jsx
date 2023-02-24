import { useEffect } from "react";

export const LoginPage = () => {
  useEffect(() => {
    document.title = "Pixel Legion | Login";
  }, []);

  // TODO: Cleanup and Migrate the LoginPage
  const lazyImplement = (str) => {
    console.log(`Pls implement ${str}`);
  };

  return (
    <>
      <h1>
        Register to <span className="text-salmon">Pixel Legion</span>
      </h1>
      <p>Let's build magnificent Pixel Art together!</p>
      <form
        name="myForm"
        id="form"
        className="card head"
        onSubmit={() => lazyImplement("validate")}
      >
        <div className="flex">
          <div>
            <label htmlFor="firstname">First name</label>
            <input
              name="firstname"
              type="text"
              placeholder="Enter your First name"
              data-type="name"
              onChange={() => lazyImplement("validateSingle(this)")}
            />
          </div>
          <div>
            <label htmlFor="lastname">Last name</label>
            <input
              name="lastname"
              type="text"
              placeholder="Enter your Last name"
              data-type="name"
              onInput={() => lazyImplement("validateSingle(this)")}
            />
          </div>
        </div>
        <div className="flex">
          <div>
            <label htmlFor="username">Username</label>
            <input
              name="username"
              type="text"
              placeholder="Enter your Username"
              data-type="username"
              onInput={() => lazyImplement("validateSingle(this)")}
            />
          </div>
          <div>
            <label htmlFor="gender">Gender</label>
            <select
              name="gender"
              data-type="gender"
              onInput={() => lazyImplement("validateSingle(this)")}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="NB">Non-Binary</option>
            </select>
          </div>
          <div>
            <label htmlFor="date">Birthdate</label>
            <input
              name="date"
              type="date"
              placeholder="dd/mm/yyyy"
              data-type="date"
              onInput={() => lazyImplement("validateSingle(this)")}
            />
          </div>
        </div>
        <div>
          <label htmlFor="email">Email Address</label>
          <input
            name="email"
            type="email"
            placeholder="Enter your Email Address"
            data-type="email"
            onInput={() => lazyImplement("validateSingle(this)")}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            placeholder="Enter your Password"
            data-type="password"
            onInput={() => lazyImplement("Validation")}
          />
        </div>
        <div>
          <label htmlFor="confirm">Confirm your password</label>
          <input
            name="confirm"
            type="password"
            placeholder="Re-type your password"
            data-type="confirm"
            onInput={() => lazyImplement("Validation")}
          />
        </div>
        <div>
          <label htmlFor="reason">Reason htmlFor joining</label>
          <br />
          <textarea
            maxLength="9999"
            placeholder="Why you want to join Pixel Legion?"
            name="reason"
            data-type="content"
            onInput={() => lazyImplement("validateSingle(this)")}
          ></textarea>
        </div>
        <div>
          <input
            type="checkbox"
            name="terms"
            data-type="forced"
            value="tc"
            onInput={() => lazyImplement("validateSingle(this)")}
          />
          <label htmlFor="terms">I agree with the terms and conditions</label>
          <br />
        </div>
        <div className="text-mauve">
          <p>Requirements:</p>
          <p>*Names must not contain any numbers/special chars</p>
          <p>*Username must not contain any special chars</p>
          <p>*You must be 13 yrs old and above to register</p>
          <p>*Email Address must be valid</p>
          <p>*Password must contain:</p>
          <p>- 1 Capital letter & 1 Small letter</p>
          <p>- 1 Number, and 1 Special Character</p>
        </div>
        <input
          type="submit"
          value="Register"
          onChange={() => lazyImplement("validate")}
          className="text-lg text-mauve border border-solid border-mauve bg-none rounded-md duration-150"
        />
        <button
          type="button"
          onClick={() => lazyImplement("resetForm()")}
          className="text-mauve border border-solid border-mauve bg-none rounded-md duration-150"
        >
          Clear
        </button>
        <p id="error"></p>
      </form>
    </>
  );
};
