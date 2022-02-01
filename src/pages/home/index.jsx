import React, { useEffect } from "react";
import HomeCards from "../../components/home/HomeCards";
import "./home.css";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "../../store/productSlice";
import axios from "axios";
import { LinkContainer } from "react-router-bootstrap";
import { Nav, Container, Row } from "react-bootstrap";

export default function Home() {
	const url = "https://61cebbc465c32600170c7ce8.mockapi.io/products";
	const products = useSelector((state) => state.products.value);
	const dispatch = useDispatch();

	useEffect(() => {
		axios.get(url).then((response) => {
			dispatch(setProducts(response.data));
		});
	}, [url]);

	return (
		<div className="home">
			<div className="home-container">
				<Container fluid>
					<div class="row no-gutter">
						<div class="col-md-6">
							<div class="d-flex align-items-center py-5">
								<Container>
									<Row>
										<div class="col-lg-10 col-xl-7 mx-auto">
											<h3 class="display-4">Just For You</h3>
											<p class="text-muted mb-4">
												Find the best products and sales in one place!
											</p>
											<div class="d-grid gap-2 mt-2">
												<button
													type="submit"
													class="btn btn-warning btn-block text-uppercase mb-2 rounded-pill shadow-sm"
												>
													<LinkContainer to="/products">
														<Nav.Link className="home-link">
															Explore Now
														</Nav.Link>
													</LinkContainer>
												</button>
											</div>
										</div>
									</Row>
								</Container>
							</div>
						</div>
						<div class="col-md-6 d-none d-md-flex home-image"></div>

						<div className="home-row">
							{products.slice(0, 3).map((product) => (
								<HomeCards product={product} />
							))}
						</div>
					</div>
				</Container>
			</div>
		</div>
	);
}
