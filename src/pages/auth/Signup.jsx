import React from "react";
import "./auth.css";

function Signup() {
	return (
		<div className="main-container">
			<div class="container-fluid">
				<div class="row no-gutter">
					<div class="col-md-6 d-none d-md-flex bg-image"></div>

					<div class="col-md-6 bg-light">
						<div class="signup d-flex align-items-center py-5">
							<div class="container">
								<div class="row">
									<div class="col-lg-10 col-xl-7 mx-auto">
										<h3 class="display-4">Sign Up!</h3>
										<p class="text-muted mb-4">
											Don't have an account yet? Open an account now.
										</p>
										<form>
                    <div class="mb-3">
												<input
													id="inputEmail"
													type="email"
													placeholder="Username"
													required=""
													autofocus=""
													class="form-control rounded-pill border-0 shadow-sm px-4"
												/>
											</div>
											<div class="mb-3">
												<input
													id="inputEmail"
													type="email"
													placeholder="Email "
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
											<div class="d-grid gap-2 mt-2">
												<button
													type="submit"
													class="btn btn-warning btn-block text-uppercase mb-2 rounded-pill shadow-sm"
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
