import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";
import { api_url } from "../../config";
import "./auth.css";
import { useDispatch } from "react-redux";
import { saveUser } from "../../store/authSlice";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const [isErrored, setIsErrored] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function login() {
    await setLoading(true);
    try {
      const { data: user } = await axios.post(`${api_url}/auth/login`, {
        email,
        password,
      });
      dispatch(saveUser(user));
      navigate("/");
    } catch (error) {
      if (error.response) {
        setError(error.response.data);
      } else {
        setError({ message: "Unknown error" });
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
            <div className="login d-flex align-items-center py-5">
              <div className="container">
                <div className="row">
                  <div className="col-lg-10 col-xl-7 mx-auto">
                    <h3 className="display-4">Log In!</h3>
                    <p className="text-muted mb-4">
                      Login and get access to our products.
                    </p>
                    <form>
                      <div className="mb-3">
                        <input
                          id="inputEmail"
                          type="email"
                          placeholder="Email or Username"
                          required
                          value={email}
                          onChange={(event) => setEmail(event.target.value)}
                          autofocus
                          className="form-control rounded-pill border-0 shadow-sm px-4"
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          id="inputPassword"
                          type="password"
                          placeholder="Password"
                          required=""
                          value={password}
                          onChange={(event) => setPassword(event.target.value)}
                          className="form-control rounded-pill border-0 shadow-sm px-4 text-warning"
                        />
                      </div>
                      {isErrored ? (
                        <div className="mb-3">
                          <Alert variant="danger">{error.message}</Alert>
                        </div>
                      ) : null}
                      <div className="mb-3">
                        <p>
                          Don't have an account? Create one
                          <Link to="/signup" className="here-link">
                            {" "}
                            here
                          </Link>
                          !
                        </p>
                      </div>
                      <div className="d-grid gap-2 mt-2">
                        <button
                          type="submit"
                          className="btn btn-warning btn-block text-uppercase mb-2 rounded-pill shadow-sm"
                          onClick={login}
                          disabled={loading}
                        >
                          Log in
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

export default Login;
