import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import ProductContext from '../Context/Product/ProductContext'
import { Navigate, useNavigate } from 'react-router-dom';

export default function Register() {

    const context=useContext(ProductContext)
    const{Register,GetCountry,GetCity,city,country}=context
    const[create,setcreate]=useState({Name:"",Email:"",Password:"",Address:"",ZipCode:"",Telephone:"",CityId:0,city:[],CountryId:0,country:[]});
    
    let navigate = useNavigate();

        const handle = (event) => {
            setcreate({...create,[event.target.name]:event.target.value})
        }

        const handleCity=(e)=>{
            const selectedCityId = e.target.value;    
            const selectedCountry = city.find((pro) => pro.CityId === selectedCityId);
           setcreate({...create, CityId: selectedCityId, city: selectedCountry });
        }

        
        const handlecountry=(e)=>{
            const selectedCountryId = e.target.value;    
            const selectedCategory = country.find((pro) => pro.CountryId === selectedCountryId);
           setcreate({...create, CountryId: selectedCountryId, country: selectedCategory});
        }

        const submitForm=(e)=>{
        e.preventDefault();
        const formData=new FormData
        formData.append("Id",create.Id);
        formData.append("Name",create.Name);
        formData.append("CityId",create.CityId);
        formData.append("CountryId",create.CountryId)
        formData.append("Telephone",create.Telephone);
        formData.append("ZipCode",create.ZipCode);
        formData.append("Email",create.Email);
        formData.append("Password",create.Password);
        formData.append("Address",create.Address);

        console.log(formData);      
        // Register(create.Name,create.Email,create.Password,create.Address,create.CityId,create.CountryId,create.Telephone,create.ZipCode);
        Register(formData);
        setcreate({Name:"",Email:"",Password:"",Address:"",ZipCode:"",Telephone:"",CityId:0,city:[],CountryId:0,country:[]});
        navigate("/home");
    }

    useEffect(()=>{
        GetCity();
    },[]);
    useEffect(()=>{
        GetCountry();
    },[]);
  return (
    <>
<div id="breadcrumb" className="section">
<div className="container">
    <div className="row">
        <div className="col-md-12">
            <h3 className="breadcrumb-header">Checkout</h3>
            <ul className="breadcrumb-tree">
                <li><a href="#">Home</a></li>
                <li className="active">Checkout</li>
            </ul>
        </div>
    </div>
</div>
</div>

<div className="section">
<div className="container">
    <div className="row">
<form method='post' onSubmit={submitForm}>
        <div className="col-md-7">
            <div className="billing-details">
                <div className="section-title">
                    <h3 className="title">Billing address</h3>
                </div>
                <div className="form-group">
                    <input className="input" type="text" name="Name" value={create.Name} onChange={handle}  placeholder="First Name"/>
                </div>
                <div className="form-group">
                    <input className="input" type="email" name="Email" value={create.Email} onChange={handle} placeholder="Email"/>
                </div>
                <div className="form-group">
                    <input className="input" type="Password" name="Password" value={create.Password} onChange={handle} placeholder="Password"/>
                </div>
                <div className="form-group">
                    <input className="input" type="text" name="Address" value={create.Address} onChange={handle} placeholder="Address"/>
                </div>
                <div className="form-group">
                     <select className="input" name="CityId" value={create.CityId} onChange={handleCity}>
                        <option value="">Select City</option>
                             {city.map((pro) => (
                         <option key={pro.CityId} value={pro.CityId}>{pro.CityName}</option>
                         ))}
                    </select>
                </div>
                    <div className="form-group">
                    <select className="input" type="text" name="CountryId"  value={create.CountryId} onChange={handlecountry}>
                    <option value="">Select Country</option>
                        {country.map((pro)=>(
                        <option key={pro.CountryId} value={pro.CountryId}>{pro.CountryName}</option>
                    ))}
                    </select> 
                </div>
                <div className="form-group">
                    <input className="input" type="text" name="ZipCode"  value={create.ZipCode} onChange={handle} placeholder="ZIP Code"/>
                </div>
                <div className="form-group">
                    <input className="input" type="tel" name="Telephone"  value={create.Telephone} onChange={handle} placeholder="Telephone"/>
                </div>
                <div className="form-group">
                    <div className="input-checkbox">
                        <input type="checkbox" id="create-account"/>
                        <label for="create-account">
                            <span></span>
                            Create Account?
                        </label>
                        <div className="caption">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                            <input className="input" type="password" name="password" placeholder="Enter Your Password"/>
                        </div>
                    </div>
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
                    <label for="payment-1">
                        <span></span>
                        Direct Bank Transfer
                    </label>
                    <div className="caption">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
                <div className="input-radio">
                    <input type="radio" name="payment" id="payment-2"/>
                    <label for="payment-2">
                        <span></span>
                        Cheque Payment
                    </label>
                    <div className="caption">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
                <div className="input-radio">
                    <input type="radio" name="payment" id="payment-3"/>
                    <label for="payment-3">
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
                <label for="terms">
                    <span></span>
                    I've read and accept the <a href="#">terms & conditions</a>
                </label>
            </div>
            <input type='submit' className="primary-btn order-submit" value="Place order" />
        </div>
    </form>
    </div>
</div>
</div>
</>
  )
}
