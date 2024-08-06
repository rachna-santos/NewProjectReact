import React, { useEffect } from 'react'
 import { useContext } from 'react';
 import ProductContext from '../Context/Product/ProductContext';
import { Link } from 'react-router-dom';

export default function Home() {
	const context = useContext(ProductContext)
	const {pro,Getproduct} = context;  
	const Adminurl='https://localhost:44376/'
	
	useEffect(() => {
        Getproduct();
    },[]);

  return (
    <>
	<div className="section">
			<div className="container">
				<div className="row">
					<div className="col-md-4 col-xs-6">
						<div className="shop">
							<div className="shop-img">
								<img src="assets/img/shop01.png" alt=""/>
							</div>
							<div className="shop-body">
								<h3>Laptop<br/>Collection</h3>
								<a href="#" className="cta-btn">Shop now <i className="fa fa-arrow-circle-right"></i></a>
							</div>
						</div>
					</div>
				
					<div className="col-md-4 col-xs-6">
						<div className="shop">
							<div className="shop-img">
								<img src="assets/img/shop03.png" alt=""/>
							</div>
							<div className="shop-body">
								<h3>Accessories<br/>Collection</h3>
								<a href="#" className="cta-btn">Shop now <i className="fa fa-arrow-circle-right"></i></a>
							</div>
						</div>
					</div>
		
					<div className="col-md-4 col-xs-6">
						<div className="shop">
							<div className="shop-img">
								<img src="assets/img/shop02.png" alt=""/>
							</div>
							<div className="shop-body">
								<h3>Cameras<br/>Collection</h3>
								<a href="#" className="cta-btn">Shop now <i className="fa fa-arrow-circle-right"></i></a>
							</div>
						</div>
					</div>
				</div>
			</div>
	</div>

		{/* SECTION loop */}
		 <div className="section">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div className="section-title">
							<h3 className="title">New Products</h3>
							<div className="section-nav">
								<ul className="section-tab-nav tab-nav">
									<li className="active"><a data-toggle="tab" href="#tab1">Laptops</a></li>
									<li><a data-toggle="tab" href="#tab1">Smartphones</a></li>
									<li><a data-toggle="tab" href="#tab1">Cameras</a></li>
									<li><a data-toggle="tab" href="#tab1">Accessories</a></li>
								</ul>
							</div>
						</div>
					</div>
					<div className="col-md-12">
						<div className="row">
							<div className="products-tabs">
								<div id="tab1" className="tab-pane active">
									<div className="products-slick" data-nav="#slick-nav-1">
									{pro && Array.isArray(pro) ? (
										pro.map((product) => (									
											<div key={product.ProductId} className='col-md-4'>
											<div className="product">
											<div className="product-img">
												<img src={Adminurl+product.ImagePath} alt=""/>
												<div className="product-label">
													<span className="sale">-30%</span>
													<span className="new">NEW</span>
												</div>
											</div>
											<div className="product-body">
												<h3 className="product-name"><Link to="/checkprocess">{product.Name}</Link></h3>
												<h4 className="product-price">${product.Price}<del className="product-old-price">$990.00</del></h4>
												<div className="product-rating">
													<i className="fa fa-star"></i>
												</div>
												<div className="product-btns">
													<button className="add-to-wishlist"><i className="fa fa-heart-o"></i><span className="tooltipp">add to wishlist</span></button>
													<button className="add-to-compare"><i className="fa fa-exchange"></i><span className="tooltipp">add to compare</span></button>
													<button className="quick-view"><i className="fa fa-eye"></i><span className="tooltipp">quick view</span></button>
												</div>
											</div>
											<div className="add-to-cart">
												<button className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i> add to cart</button>
											</div>
										</div>
										</div>
									))
									) : (
									
										<p>Loading products...</p>
									)}
									</div>
									<div id="slick-nav-1" className="products-slick-nav"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>


		<div id="hot-deal" className="section">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div className="hot-deal">
							<ul className="hot-deal-countdown">
								<li>
									<div>
										<h3>02</h3>
										<span>Days</span>
									</div>
								</li>
								<li>
									<div>
										<h3>10</h3>
										<span>Hours</span>
									</div>
								</li>
								<li>
									<div>
										<h3>34</h3>
										<span>Mins</span>
									</div>
								</li>
								<li>
									<div>
										<h3>60</h3>
										<span>Secs</span>
									</div>
								</li>
							</ul>
							<h2 className="text-uppercase">hot deal this week</h2>
							<p>New Collection Up to 50% OFF</p>
							<a className="primary-btn cta-btn" href="#">Shop now</a>
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
