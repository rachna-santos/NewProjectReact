import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Login() {

    const[login,setlogin]=useState({Email:"",Password:""});
    let navigate = useNavigate();

        const handle = (event) => {
            setlogin({...login,[event.target.name]:event.target.value})
        }
        const LoginUser=async(e)=>{
            e.preventDefault(); // Prevent form from submitting the default way

            const response = await fetch('https://localhost:44376/api/Product/LoginCustomer',{
                method:'POST',
                headers:{
                    "Content-Type": "application/json",
                },        
                body: JSON.stringify({Email:login.Email,Password:login.Password})
            });
                const json = await response.json();
                navigate("/home"); 
            }
        
  return (
    <>  	 
  <div className="section">
      <div className="container">
          <div className="row">
          <form method='post' onSubmit={LoginUser}>
              <div className="col-md-7">
                  <div className="billing-details">
                      <div className="section-title">
                          <h3 className="title">SignIn</h3>
                      </div>                   
                      <div className="form-group">
                          <input className="input" type="email" name="Email" value={login.Email} placeholder="Email" onChange={handle}/><br/><br/><br/>
                      </div>
                      <div className="form-group">
                          <input className="input" type="password" name="Password" value={login.Password} placeholder="password" onChange={handle}/><br/><br/><br/>
                      </div>                
                  </div>
              </div>
              <div className="col-md-5 order-details">
                  <div className="section-title text-center">
                      <h3 className="title">Your Order</h3>
                  </div>
                  <div className="order-summary">
                      <div className="order-col">
                          <div><strong>PRODUCT</strong></div>
                          <div><strong>TOTAL</strong></div>
                      </div>
                      <div className="order-products">
                          <div className="order-col">
                              <div>1x Product Name Goes Here</div>
                              <div>$980.00</div>
                          </div>
                          <div className="order-col">
                              <div>2x Product Name Goes Here</div>
                              <div>$980.00</div>
                          </div>
                      </div>
                      <div className="order-col">
                          <div>Shiping</div>
                          <div><strong>FREE</strong></div>
                      </div>
                      <div className="order-col">
                          <div><strong>TOTAL</strong></div>
                          <div><strong className="order-total">$2940.00</strong></div>
                      </div>
                  </div>
                  <div className="payment-method">
                      <div className="input-radio">
                          <input type="radio" name="payment" id="payment-1"/>
                          <label htmlFor="payment-1">
                              <span></span>
                              Direct Bank Transfer
                          </label>
                          <div className="caption">
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                          </div>
                      </div>
                      <div className="input-radio">
                          <input type="radio" name="payment" id="payment-2"/>
                          <label htmlFor="payment-2">
                              <span></span>
                              Cheque Payment
                          </label>
                          <div className="caption">
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                          </div>
                      </div>
                      <div className="input-radio">
                          <input type="radio" name="payment" id="payment-3"/>
                          <label htmlFor="payment-3">
                              <span></span>
                              Paypal System
                          </label>
                          <div className="caption">
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                          </div>
                      </div>
                  </div>
                  <div className="input-checkbox">
                      <input type="checkbox" id="terms"/>
                      <label htmlFor="terms">
                          <span></span>
                          I've read and accept the <a href="#">terms & conditions</a>
                      </label>
                  </div>
                  <input type='submit' value="Place order" className="primary-btn order-submit"/>
              </div>
              </form> 

          </div>
      </div>
  </div>
  </>

  )
}
