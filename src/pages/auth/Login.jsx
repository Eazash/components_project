import React from "react";
import { Link } from "react-router-dom";
import "./auth.css";

function Login() {
	return (
		<div className="main-container">
			<div class="container-fluid">
				<div class="row no-gutter">
					<div class="col-md-6 d-none d-md-flex bg-image"></div>

					<div class="col-md-6 bg-light">
						<div class="login d-flex align-items-center py-5">
							<div class="container">
								<div class="row">
									<div class="col-lg-10 col-xl-7 mx-auto">
										<h3 class="display-4">Log In!</h3>
										<p class="text-muted mb-4">
											Login and get access to our products.
										</p>
										<form>
											<div class="mb-3">
												<input
													id="inputEmail"
													type="email"
													placeholder="Email or Username"
													required=""
													autofocus=""
													class="form-control rounded-pill border-0 shadow-sm px-4"
												/>
											</div>
											<div class="mb-3">
												<input
													id="inputPassword"
													type="password"
													placeholder="Password"
													required=""
													class="form-control rounded-pill border-0 shadow-sm px-4 text-warning"
												/>
											</div>
											<div class="mb-3">
												<p>
													Don't have an account? Create one
													<Link to="/signup" className="here-link"> here</Link>!
												</p>
											</div>
											<div class="d-grid gap-2 mt-2">
												<button
													type="submit"
													class="btn btn-warning btn-block text-uppercase mb-2 rounded-pill shadow-sm"
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
