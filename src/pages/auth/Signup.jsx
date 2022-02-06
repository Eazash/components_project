import axios from "axios";
import { useState } from "react";
import { Alert } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { api_url } from "../../config";
import { saveUser } from "../../store/authSlice";
import "./auth.css";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const [isErrored, setIsErrored] = useState(false);
  const dipatch = useDispatch();

  async function signup() {
    await setLoading(true);
    try {
      const { data: user } = await axios.post(`${api_url}/auth/signup`, {
        username,
        email,
        password,
      });
      dipatch(saveUser(user));
    } catch (error) {
      if (error.response) {
        setError(error.response.data);
      } else {
        setError({ message: "Unknown Error" });
      }
      setIsErrored(true);
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className="main-container">
      <div className="container-fluid">
        <div className="row no-gutter">
          <div className="col-md-6 d-none d-md-flex bg-image"></div>

          <div className="col-md-6 bg-light">
            <div className="signup d-flex align-items-center py-5">
              <div className="container">
                <div className="row">
                  <div className="col-lg-10 col-xl-7 mx-auto">
                    <div className="mb-3">
                      <h3 className="display-4">Sign Up!</h3>
                    </div>
                    <form>
                      <div className="mb-3">
                        <input
                          id="inputUsername"
                          type="text"
                          placeholder="Username"
                          required
                          autofocus
                          value={username}
                          onChange={(event) => setUsername(event.target.value)}
                          className="form-control rounded-pill border-0 shadow-sm px-4"
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          id="inputEmail"
                          type="email"
                          placeholder="Email "
                          required
                          value={email}
                          onChange={(event) => setEmail(event.target.value)}
                          className="form-control rounded-pill border-0 shadow-sm px-4"
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          id="inputPassword"
                          type="password"
                          placeholder="Password"
                          required
                          value={password}
                          onChange={(event) => setPassword(event.target.value)}
                          className="form-control rounded-pill border-0 shadow-sm px-4 text-warning"
                        />
                      </div>
                      {isErrored ? (
                        <Alert variant="danger">{error.message}</Alert>
                      ) : null}
                      <div className="mb-3">
                        <p className="text-muted mb-4">
                          Already have an account yet? Log in
                          <Link to="/login" className="here-link">
                            {" "}
                            here
                          </Link>
                        </p>
                      </div>
                      <div className="d-grid gap-2 mt-2">
                        <button
                          type="submit"
                          className="btn btn-warning btn-block text-uppercase mb-2 rounded-pill shadow-sm"
                          disabled={loading}
                          onClick={signup}
                        >
                          Sign Up
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
