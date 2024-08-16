  import ProductContext from "./ProductContext";
  import { useState } from "react";
  import React from 'react'
  import { useParams } from "react-router-dom";

  export default function ProductState(props) {
  const product=[];
  const[pro,setpro]=useState(product)
  const[city,setcity]=useState([]);
  const[country,setcountry]=useState([]);
  const[veriation,setveriation]=useState([]);


    const Getproduct = async ()=>{
      try {
          const response = await fetch("https://localhost:44376/api/Product/ProductGet",{
              method: 'GET',
              headers: {
              "Content-Type": "application/json",
              }
          });
          const json = await response.json();
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
    
    const Veriation=async(ProductId)=>{
      try{
      const response=await fetch(`https://localhost:44376/api/Product/GetVeriation?productId=${ProductId}`,{
        method:"Get",
        headers:{
          "Content-Type": "application/json",
        },
      }) 
      const productData= await response.json();
      console.log(productData);
      // return productData;
      setveriation(productData)
      } catch(error){
        console.error('Error fetching data:', error.message || error);
      }
    }

    return (
      <ProductContext.Provider value={{country,city,pro,veriation,Getproduct,Register,GetCountry,GetCity,Veriation}}>
      {props.children}
      </ProductContext.Provider>
    )
  }

