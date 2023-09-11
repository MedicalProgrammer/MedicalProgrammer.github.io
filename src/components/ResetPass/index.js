import React from 'react'
import axios from 'axios';
import { useState,useEffect } from "react";

const ResetPass = () => {

    var headers = {
        origin: 'http://localhost:3000',     
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
      const urll="https://api.v2rayreseller.com/api/v1/user/update_profile";
 
      const [userPass, setuserPass] = useState()

    

    const handleSubmit=(e)=>{
        e.preventDefault();

        authenticateUser();
        
    }

    const handlechangeMail=(e)=>{
        e.preventDefault();
        setuserPass({...userPass,[e.target.id]:e.target.value})


    }

    const handlechangeOldPass=(e)=>{
        e.preventDefault();
        setuserPass({...userPass,[e.target.id]:e.target.value})


    }
    const handlechangeNewPass=(e)=>{
        e.preventDefault();
        setuserPass({...userPass,[e.target.id]:e.target.value})


    }
    const handlechangeNewPassRepeat=(e)=>{
        e.preventDefault();
        setuserPass({...userPass,[e.target.id]:e.target.value})


    }
    const handlechangeName=(e)=>{
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
                    alert("Password Reseted")

            window.location.replace("/dashboard");



                    





                   

                    
                }
        })
        
        .catch((err) => {
            alert("Fail")
        })        

        ;
        console.log(res.header);
        
    


    }























  return (

    <>
    
    
    <section class="bg-gray-50 dark:bg-gray-900">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img class="h-20 w-max  mr-2" src="https://user-images.githubusercontent.com/7676267/265968397-5fae9135-53b6-427c-a221-ef5575be9ab6.png" alt="logo"/>
          V2rayReseller™    
      </a>
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Reset Password
              </h1>
              <form class="space-y-4 md:space-y-6" action="" onSubmit={handleSubmit} >
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="email" name="email" id="email"  onChange={handlechangeMail} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                  </div>
                  <div>
                      <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
                      <input type="text" name="name" id="name"  onChange={handlechangeName} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Alex" required="" />
                  </div>
                  <div>
                      <label for="current_password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Old password</label>
                      <input type="password" name="current_password" id="current_password" onChange={handlechangeOldPass} placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  <div>
                      <label for="new_password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">New password</label>
                      <input type="password1" name="new_password" id="new_password" onChange={handlechangeNewPass}  placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  <div>
                      <label for="new_password_repeat" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm your password</label>
                      <input type="password1" name="new_password_repeat" id="new_password_repeat" onChange={handlechangeNewPassRepeat}  placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  
                  





                  <button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Reset Password</button>
                 
              </form>
          </div>
      </div>
  </div>
</section>
    
    </>

    )
}

export default ResetPass