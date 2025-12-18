import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Signup = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (event) => {
    event.preventDefault();

    try {
      const req = await axios.post("https://merninternship-vmxm.onrender.com/signup", {
        email,
        username,
        password,
      });

      console.log("Backend response:", req.data);
      
      if (req.data && req.data.isSignup) {
        alert(req.data.message || "Signup successful!");
        navigate("/login");
      } else if (req.data && req.data.message) {
        alert(req.data.message);
      } else {
        alert("Signup failed - Invalid response from server");
      }
    } catch (e) {
      console.error("Signup error:", e);
      if (e.response) {
        alert("Signup Failed: " + (e.response.data?.message || "Server error"));
      } else if (e.request) {
        alert("Signup Failed: Unable to connect to server");
      } else {
        alert("Signup Failed: " + e.message);
      }
    }
  };

  return (
    <div>
      <h2>Signup Page</h2>
      <form onSubmit={handleSignup}>
        <div>
          <label>Email:</label>
          <input type="email" onChange={(e) => setEmail(e.target.value)} required />
        </div>

        <br />

        <div>
          <label>Username:</label>
          <input type="text" onChange={(e) => setUsername(e.target.value)} required />
        </div>

        <br />

        <div>
          <label>Password:</label>
          <input type="password" onChange={(e) => setPassword(e.target.value)} required />
        </div>

        <br />
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already having an account?<Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default Signup;