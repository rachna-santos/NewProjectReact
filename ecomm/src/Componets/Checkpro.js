import React, { useEffect, version } from 'react'
import ProductContext from '../Context/Product/ProductContext'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'

export default function Checkpro() {
	const context = useContext(ProductContext)
	const {veriation,Veriation}=context
	const{ProductId}=useParams()
	console.log("paramid",ProductId)

	const Adminurl='https://localhost:44376/'
	useEffect(()=>{
		Veriation(ProductId)
		 },[]);
		
	return (
		
	<>
		<div id="breadcrumb" className="section">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<ul className="breadcrumb-tree">
							<li><a href="#">Home</a></li>
							<li><a href="#">All Categories</a></li>
							<li><a href="#">Accessories</a></li>
							<li><a href="#">Headphones</a></li>
							<li className="active">Product name goes here</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		
		<div className="section">
			<div className="container">
				<div className="row">
				{veriation.map((season) => (
					<div className="col-md-5 col-md-push-2" key={season.veriationId}>
						<div id="product-main-img">
							<div className="product-preview">
							<img src={Adminurl+season.image} alt=""/>
							</div>
						</div>
					</div>
					))}		

					{veriation.map((season) => (						
					<div className="col-md-2  col-md-pull-5" key={season.veriationId}>
						<div id="product-imgs">
							<div className="product-preview">
								<img src={Adminurl+season.image} alt=""/>
							</div>
						</div>
					</div>				
				))}		
					<div className="col-md-5">
						<div className="product-details">
							<h2 className="product-name">product name goes here</h2>
							<div>
								<div className="product-rating">
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star-o"></i>
								</div>
								<a className="review-link" href="#">10 Review(s) | Add your review</a>
							</div>
							<div>
								<h3 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h3>
								<span className="product-available">In Stock</span>
							</div>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

							<div className="product-options">
								<label>
									Size
									<select className="input-select">
										<option value="0">X</option>
									</select>
								</label>
								<label>
									Color
									<select className="input-select">
										<option value="0">Red</option>
									</select>
								</label>					
							</div>
							
							<div className="add-to-cart">
								<div className="qty-label">
									Qty
									<div className="input-number">
										<input type="number"/>
										<span className="qty-up">+</span>
										<span className="qty-down">-</span>
									</div>
								</div>
								<button className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i> add to cart</button>
							</div>

							<ul className="product-btns">
								<li><a href="#"><i className="fa fa-heart-o"></i> add to wishlist</a></li>
								<li><a href="#"><i className="fa fa-exchange"></i> add to compare</a></li>
							</ul>

							<ul className="product-links">
								<li>Category:</li>
								<li><a href="#">Headphones</a></li>
								<li><a href="#">Accessories</a></li>
							</ul>

							<ul className="product-links">
								<li>Share:</li>
								<li><a href="#"><i className="fa fa-facebook"></i></a></li>
								<li><a href="#"><i className="fa fa-twitter"></i></a></li>
								<li><a href="#"><i className="fa fa-google-plus"></i></a></li>
								<li><a href="#"><i className="fa fa-envelope"></i></a></li>
							</ul>

						</div>
				
					<div className="col-md-12">
						<div id="product-tab">
							<ul className="tab-nav">
								<li className="active"><a data-toggle="tab" href="#tab1">Description</a></li>
								<li><a data-toggle="tab" href="#tab2">Details</a></li>
								<li><a data-toggle="tab" href="#tab3">Reviews (3)</a></li>
							</ul>
						
							<div className="tab-content">
								<div id="tab1" className="tab-pane fade in active">
									<div className="row">
										<div className="col-md-12">
											<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
										</div>
									</div>
								</div>
								
								<div id="tab2" className="tab-pane fade in">
									<div className="row">
										<div className="col-md-12">
											<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
										</div>
									</div>
								</div>
			
								<div id="tab3" className="tab-pane fade in">
									<div className="row">
										<div className="col-md-3">
											<div id="rating">
												<div className="rating-avg">
													<span>4.5</span>
													<div className="rating-stars">
														<i className="fa fa-star"></i>
														<i className="fa fa-star"></i>
														<i className="fa fa-star"></i>
														<i className="fa fa-star"></i>
														<i className="fa fa-star-o"></i>
													</div>
												</div>
												<ul className="rating">
													<li>
														<div className="rating-stars">
															<i className="fa fa-star"></i>
															<i className="fa fa-star"></i>
															<i className="fa fa-star"></i>
															<i className="fa fa-star"></i>
															<i className="fa fa-star"></i>
														</div>
														<div className="rating-progress">
															<div style={{"width":"80%"}}></div>
														</div>
														<span className="sum">3</span>
													</li>
													<li>
														<div className="rating-stars">
															<i className="fa fa-star"></i>
															<i className="fa fa-star"></i>
															<i className="fa fa-star"></i>
															<i className="fa fa-star"></i>
															<i className="fa fa-star-o"></i>
														</div>
														<div className="rating-progress">
															<div style={{"width":"60%"}}></div>
														</div>
														<span className="sum">2</span>
													</li>
													<li>
														<div className="rating-stars">
															<i className="fa fa-star"></i>
															<i className="fa fa-star"></i>
															<i className="fa fa-star"></i>
															<i className="fa fa-star-o"></i>
															<i className="fa fa-star-o"></i>
														</div>
														<div className="rating-progress">
															<div></div>
														</div>
														<span className="sum">0</span>
													</li>
													<li>
														<div className="rating-stars">
															<i className="fa fa-star"></i>
															<i className="fa fa-star"></i>
															<i className="fa fa-star-o"></i>
															<i className="fa fa-star-o"></i>
															<i className="fa fa-star-o"></i>
														</div>
														<div className="rating-progress">
															<div></div>
														</div>
														<span className="sum">0</span>
													</li>
													<li>
														<div className="rating-stars">
															<i className="fa fa-star"></i>
															<i className="fa fa-star-o"></i>
															<i className="fa fa-star-o"></i>
															<i className="fa fa-star-o"></i>
															<i className="fa fa-star-o"></i>
														</div>
														<div className="rating-progress">
															<div></div>
														</div>
														<span className="sum">0</span>
													</li>
												</ul>
											</div>
										</div>
										
										<div className="col-md-6">
											<div id="reviews">
												<ul className="reviews">
													<li>
														<div className="review-heading">
															<h5 className="name">John</h5>
															<p className="date">27 DEC 2018, 8:0 PM</p>
															<div className="review-rating">
																<i className="fa fa-star"></i>
																<i className="fa fa-star"></i>
																<i className="fa fa-star"></i>
																<i className="fa fa-star"></i>
																<i className="fa fa-star-o empty"></i>
															</div>
														</div>
														<div className="review-body">
															<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
														</div>
													</li>
													<li>
														<div className="review-heading">
															<h5 className="name">John</h5>
															<p className="date">27 DEC 2018, 8:0 PM</p>
															<div className="review-rating">
																<i className="fa fa-star"></i>
																<i className="fa fa-star"></i>
																<i className="fa fa-star"></i>
																<i className="fa fa-star"></i>
																<i className="fa fa-star-o empty"></i>
															</div>
														</div>
														<div className="review-body">
															<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
														</div>
													</li>
													<li>
														<div className="review-heading">
															<h5 className="name">John</h5>
															<p className="date">27 DEC 2018, 8:0 PM</p>
															<div className="review-rating">
																<i className="fa fa-star"></i>
																<i className="fa fa-star"></i>
																<i className="fa fa-star"></i>
																<i className="fa fa-star"></i>
																<i className="fa fa-star-o empty"></i>
															</div>
														</div>
														<div className="review-body">
															<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
														</div>
													</li>
												</ul>
												<ul className="reviews-pagination">
													<li className="active">1</li>
													<li><a href="#">2</a></li>
													<li><a href="#">3</a></li>
													<li><a href="#">4</a></li>
													<li><a href="#"><i className="fa fa-angle-right"></i></a></li>
												</ul>
											</div>
										</div>
					
										<div className="col-md-3">
											<div id="review-form">
												<form className="review-form">
													<input className="input" type="text" placeholder="Your Name"/>
													<input className="input" type="email" placeholder="Your Email"/>
													<textarea className="input" placeholder="Your Review"></textarea>
													<div className="input-rating">
														<span>Your Rating: </span>
														<div className="stars">
														<input id="star5" name="rating" value="5" type="radio"/><label htmlFor="star5"></label>					
														</div>
													</div>
													<button className="primary-btn">Submit</button>
												</form>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div id="newsletter" className="section">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div className="newsletter">
							<p>Sign Up for the <strong>NEWSLETTER</strong></p>
							<form>
								<input className="input" type="email" placeholder="Enter Your Email"/>
								<button className="newsletter-btn"><i className="fa fa-envelope"></i> Subscribe</button>
							</form>
							<ul className="newsletter-follow">
								<li>
									<a href="#"><i className="fa fa-facebook"></i></a>
								</li>
								<li>
									<a href="#"><i className="fa fa-twitter"></i></a>
								</li>
								<li>
									<a href="#"><i className="fa fa-instagram"></i></a>
								</li>
								<li>
									<a href="#"><i className="fa fa-pinterest"></i></a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
	</div>
  </>
  )
}

