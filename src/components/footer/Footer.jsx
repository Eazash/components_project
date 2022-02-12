import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./footer.css";

function Footer() {
	return (
		<div className="footer">
			<div className="footer-container">
				<div className="footer-all">
					<LinkContainer to="/">
						<Nav.Link className="footer-link">Home</Nav.Link>
					</LinkContainer>
				</div>

				<div className="footer-all">
					<LinkContainer to="">
						<Nav.Link className="footer-link">Company</Nav.Link>
					</LinkContainer>
				</div>

				<div className="footer-all">
					<LinkContainer to="/products">
						<Nav.Link className="footer-link">Products</Nav.Link>
					</LinkContainer>
				</div>

				<div className="footer-all">
					<p className="copyright text-center">
						<LinkContainer to="/">
							<Nav.Link className="footer-link">
								© {new Date().getFullYear()} UPSHOP
							</Nav.Link>
						</LinkContainer>
					</p>
				</div>
			</div>
		</div>
	);
}

export default Footer;
