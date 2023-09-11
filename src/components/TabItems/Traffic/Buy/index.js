import React from 'react'
import axios from 'axios';
import { useState,useEffect } from "react";

const Buy = () => {

    var headers = {
        origin: 'http://localhost:3000',     
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
    const urll="https://api.v2rayreseller.com/api/v1/bandwidth/buy";
 
    const [userPass, setuserPass] = useState()

  

  const handleSubmit=(e)=>{
      e.preventDefault();

      authenticateUser();
      
  }

  const handlechangeAmount=(e)=>{
      e.preventDefault();
      setuserPass({...userPass,[e.target.id]:e.target.value})


  }

  


  const authenticateUser = () =>{
      const res =  axios.post(urll, userPass, {
          withCredentials: true,
 // az in bebad in kire klharo bezar hameja ham to get ham topost
 // va menallahe siktr
 
        },headers)
      .then(function (response) {
              if(response.data.status=="success"){
                
                  console.log(response.data.status)
                  alert("Success Buy Traffic ")



              }
      })
      .catch((err) => {
          alert("  Failed Confirm Deposit")
        })        

      ;
      console.log(res.header);


  }








  return (
<>


  
<section class="bg-gray-50 dark:bg-gray-900">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-96  lg:py-0">
     
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 md:space-y-6 sm:p-8">
          <h2 class="mb-4 text-2xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                  Buy Traffic
              </h2>
              
              <br/>
             
              <form class="space-y-4 md:space-y-6" action="" onSubmit={handleSubmit} >
                  <div>
                      <label for="Amount" class="block mb-2text-sm font-medium text-gray-900 dark:text-white">Amount</label>
                      <input type="Amount" name="Amount" id="amount"  onChange={handlechangeAmount} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="10" required="" />
                  </div>
                 
                  <div class="flex items-center justify-between">
                    
                  </div>
                  <button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Confirm</button>
                  
              </form>
          </div>
      </div>
  </div>
</section>



</>
    )
}

export default Buy