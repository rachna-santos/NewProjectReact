import React from 'react'

export default function Footer() {
  return (
    <>
		<footer id="footer">
			<div className="section">
				<div className="container">
					<div className="row">
						<div className="col-md-3 col-xs-6">
							<div className="footer">
								<h3 className="footer-title">About Us</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.</p>
								<ul className="footer-links">
									<li><a to="#"><i className="fa fa-map-marker"></i>1734 Stonecoal Road</a></li>
									<li><a to="#"><i className="fa fa-phone"></i>+021-95-51-84</a></li>
									<li><a to="#"><i className="fa fa-envelope-o"></i>email@email.com</a></li>
								</ul>
							</div>
						</div>

						<div className="col-md-3 col-xs-6">
							<div className="footer">
								<h3 className="footer-title">Categories</h3>
								<ul className="footer-links">
									<li><a to="#">Hot deals</a></li>
									<li><a to="#">Laptops</a></li>
									<li><a to="#">Smartphones</a></li>
									<li><a to="#">Cameras</a></li>
									<li><a to="#">Accessories</a></li>
								</ul>
							</div>
						</div>

						<div className="clearfix visible-xs"></div>

						<div className="col-md-3 col-xs-6">
							<div className="footer">
								<h3 className="footer-title">Information</h3>
								<ul className="footer-links">
									<li><a to="#">About Us</a></li>
									<li><a to="#">Contact Us</a></li>
									<li><a to="#">Privacy Policy</a></li>
									<li><a to="#">Orders and Returns</a></li>
									<li><a to="#">Terms & Conditions</a></li>
								</ul>
							</div>
						</div>

						<div className="col-md-3 col-xs-6">
							<div className="footer">
								<h3 className="footer-title">Service</h3>
								<ul className="footer-links">
									<li><a to="#">My Account</a></li>
									<li><a to="#">View Cart</a></li>
									<li><a to="#">Wishlist</a></li>
									<li><a to="#">Track My Order</a></li>
									<li><a to="#">Help</a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div id="bottom-footer" className="section">
				<div className="container">
					<div className="row">
						<div className="col-md-12 text-center">
							<ul className="footer-payments">
								<li><a to="#"><i className="fa fa-cc-visa"></i></a></li>
								<li><a to="#"><i className="fa fa-credit-card"></i></a></li>
								<li><a to="#"><i className="fa fa-cc-paypal"></i></a></li>
								<li><a to="#"><i className="fa fa-cc-mastercard"></i></a></li>
								<li><a to="#"><i className="fa fa-cc-discover"></i></a></li>
								<li><a to="#"><i className="fa fa-cc-amex"></i></a></li>
							</ul>
							<span className="copyright">
								 <a target="_blank" to="https://www.templateshub.net">Templates Hub</a>
							</span>
						</div>
					</div>
				</div>
			</div>
		</footer>
    </>
	
  )
}
