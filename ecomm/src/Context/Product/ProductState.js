import ProductContext from "./ProductContext";
import { useState } from "react";
import React from 'react'

export default function ProductState(props) {
const product=[];
const[pro,setpro]=useState(product)
const[city,setcity]=useState([]);
const[country,setcountry]=useState([]);

const Getproduct = async ()=>{
    try {
        const response = await fetch('https://localhost:44376/api/Product/ProductGet',{
            method: 'GET',
            headers: {
            "Content-Type": "application/json",
            }
        });
        const json = await response.json();
        console.log(json);
        setpro(json);
        
    } catch (error) {
        console.error('Error fetching data:', error.message || error);
    }
  };

  const GetCountry=async()=>{
        try {
          const response = await fetch('https://localhost:44376/api/Product/userCountryGet', {
              method: 'GET',
              headers: {
              "Content-Type": "application/json",
              },
          });
          const json = await response.json();
          setcountry(json);
      } catch (error) {
          console.error('Error fetching data:', error.message || error);
      }
  }

  const GetCity=async()=>{
    try {
      const response = await fetch('https://localhost:44376/api/Product/usercityGet', {
          method: 'GET',
          headers: {
          "Content-Type": "application/json",
          },
      });
      const json = await response.json();
      setcity(json);
  } catch (error) {
      console.error('Error fetching data:', error.message || error);
  }
}

  const Register=async(formData)=>{
    try {
        const response = await fetch('https://localhost:44376/api/Product/createcustomer', {
            method: 'POST',
            body:formData,
            headers: {
            },
        });
        const json = await response.json();
        console.log(json);
      } catch (error) {
        console.error('Error fetching data:', error.message || error);
    }
  };

  return (
    <ProductContext.Provider value={{country,city,pro,Getproduct,Register,GetCountry,GetCity}}>
    {props.children}
  </ProductContext.Provider>
  )
}

