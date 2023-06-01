import { useState } from "react";
import axios from "axios";

const LoginForm = () => {
  // States to set the username and password
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // To display the error message
  const [errMessage, setErrMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // to prevent the default nature of submit button

    // Here is the user login object along with project id
    const authObject = {
      "Project-ID": "62f540e5-404f-46a2-8a6f-22798a6caf6e",
      "User-Name": username,
      "User-Secret": password,
    };

    try {
      //
      // Making the requests of the messages with the user object
      await axios.get("https://api.chatengine.io/chats", {
        headers: authObject,
      });

      // Username and password are setted to the local storage
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);

      // It makes the entire window to reload
      window.location.reload();

      // If this one success, we are setting errMessage state to normal
      setErrMessage("");
    } catch (err) {
      //
      // If there is any error, we will display the below messages
      setErrMessage("Invalid Login credentials");
    }
  };

  return (
    <div className="bg-dark d-flex" style={{ height: "100vh", width: "100%" }}>
      <div className="bg-secondary rounded p-3 form m-auto">
        {/*  */}
        {/* Header of the Chat Room  */}
        <h1 className="login-title display-6 text-center fw-semibold">
          Chat Room Application
        </h1>

        {/* Form */}
        <form onSubmit={handleSubmit} className="form-label">
          {/* Username input */}
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="form-control p-3 mb-4 mt-4"
            placeholder="Username"
            required
          />

          {/* password input field */}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control mb-3 p-3"
            placeholder="Password"
            required
          />

          {/* Button to login */}
          <div align="center">
            <button type="submit" className="btn btn-success fw-semibold">
              <span className="fw-bold p-1 rounded m-1 border">Login</span>
            </button>
          </div>
        </form>

        {/* Displays the error message */}
        <p className="text-warning text-center fw-bold">{errMessage}</p>
      </div>
    </div>
  );
};

export default LoginForm;
