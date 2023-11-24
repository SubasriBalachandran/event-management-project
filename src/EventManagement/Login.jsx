import React, { useState, useRef } from "react";
import { Button, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";

const Login = () => {
  const { user, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get("http://localhost:4000/users");
      const users = response.data;
      const foundUser = users.find(
        (user) =>
          user.email === emailRef.current.value &&
          user.password === passwordRef.current.value
      );
      dispatch({ type: "LOGIN", payload: foundUser });
      if (foundUser) {
        navigate("/userpage");
      } else {
        setError("Invalid email or password. Please try again.");
      }
    } catch (error) {
      console.error("Error fetching or comparing data:", error);
      setError("Error while processing. Please try again.");
    }
  };

  return (
    <div className="login">
      <Typography
        component="h3"
        variant="h1"
        color="white"
        letterSpacing={3}
        display={"flex"}
        justifyContent={"flex-start"}
        justifyItems={"flex-end"}
        className="userlogin"
      >
        USER LOGIN
      </Typography>

      <form onSubmit={handleSubmit}>
        <p>Please login to continue</p>
        <label>Email Address</label>
        <input id="email" name="email" type="email" ref={emailRef} required />
        <label>Password</label>
        <input
          id="password"
          name="password"
          type="password"
          ref={passwordRef}
          required
        />
        <center>
          <Button className="button" type="submit" style={{ color: "white" }}>
            LOGIN
          </Button>
        </center>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <Typography paddingLeft={4}>
          Don't have an account?&emsp;
          <Link to="/signup" style={{ textDecoration: "none", color: "black" }}>
            Register
          </Link>
        </Typography>
      </form>
    </div>
  );
};

export default Login;

// import React, { useState } from "react";
// import { Button, Typography } from "@mui/material";
// import { Link, useHistory } from "react-router-dom";
// import { useEffect } from "react";
// import axios from "axios";
// import { useRef } from "react";
// const Login = () => {
//   const history = useHistory();
//   const [data, setData] = useRef({
//     email: "",
//     password: "",
//   });
//   const [error, setError] = useState("");
//   const handleInput = (e) => {
//     setData({ ...data, [e.target.name]: e.target.value });
//   };
//   useEffect(() => {
//     axios
//       .get(" http://localhost:4000/users")
//       .then((res) => console.log(res.data))
//       .catch((err) => console.log(err));
//     if (data.email === res.data.email && data.password === res.data.password) {
//       history.push("/userpage");
//     } else {
//       setError("Invalid details");
//     }
//   }, []);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const { email, password } = data;
//     console.log("Email:", data.email);
//     console.log("Password:", data.password);
//   };

//   return (
//     <div className="login">
//       <form onSubmit={handleSubmit}>
//         <center>
//           <Typography
//             component="h3"
//             variant="h3"
//             color="white"
//             letterSpacing={3}
//             marginTop={2}
//           >
//             USER LOGIN
//           </Typography>
//           <p>Please login to continue</p>
//         </center>
//         <label>Email Address</label>
//         <input
//           id="email"
//           name="email"
//           type="email"
//           value={data.email}
//           onChange={handleInput}
//           required
//         />
//         <label>Password</label>
//         <input
//           id="password"
//           label="Password"
//           name="password"
//           type="password"
//           value={data.password}
//           onChange={handleInput}
//           required
//         />
//         <center>
//           <Button className="button" type="submit" style={{ color: "white" }}>
//             LOGIN
//             {/* <Link to="/home" style={{ textDecoration: "none", color: "white" }}>
//               LOGIN
//             </Link> */}
//           </Button>
//         </center>
//         <p>Forgot password?</p>
//         <Typography paddingLeft={4}>
//           Don't have an account?&emsp;
//           <Link to="/signup" style={{ textDecoration: "none", color: "black" }}>
//             Register
//           </Link>
//         </Typography>
//       </form>
//     </div>
//   );
// };

// export default Login;
