import React from "react";
import "./signup.css";
import { useFormik } from "formik";

/*
function Signup() {
  const [firstName, setFirstName] = useState("");
  console.log(firstName);
  const [lastName, setLastName] = useState("");
  console.log(lastName);
  const [email, setEmail] = useState("");
  console.log(email);
  return (
    <form>
      <div>
        <input
          className="signup"
          id="firstName"
          name="firstName"
          type="text"
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
        />
      </div>
      <div>
        <input
          className="signup"
          id="lastName"
          name="lastName"
          type="text"
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
        />
      </div>
        <div>
        <input
          className="signup"
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>
    </form>
  );
}
export default Signup;
*/

function Signup() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
  });
  console.log(formik.values);
  return (
    <form>
      <div>
        <input
          className="signup"
          id="firstName"
          name="firstName"
          type="text"
          placeholder="First Name"
          onChange={formik.handleChange}
          value={formik.values.firstName}
        />
      </div>

      <div>
        <input
          className="signup"
          id="lastName"
          name="lastName"
          type="text"
          placeholder="Last Name"
          onChange={formik.handleChange}
          value={formik.values.lastName}
        />
      </div>
      <div>
        <input
          className="signup"
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
      </div>
    </form>
  );
}

export default Signup;
