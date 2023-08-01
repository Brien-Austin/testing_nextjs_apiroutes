"use client";
import React, { useState } from "react";
import axios from 'axios'

const Index = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password : ""
  })
  const handleSubmit = async(e) => {
    e.preventDefault(); try {
      const response = await axios.post("api/signup", formData);
      console.log("Data Posted on DB " + response);
      
    } catch (error) {
      console.log(error)
      
    }
  

  }

  const handleChange = () => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
      
    }))
    
  }
  return (
    <>
      <h2 className="text-center mt-10 mb-10 text-2xl font-medium">
        Signup - Sample
      </h2>
      <form className="flex flex-col gap-10" onSubmit={handleSubmit}>
        
          <input onChange={handleChange} type="text" name="name" value={formData.name}
          className=" outline-none mx-auto text-center border-b border-b-black"
          placeholder="Enter your name" />
        
         <input onChange={handleChange}type="email" name="email" value={formData.email}
          className=" outline-none mx-auto text-center border-b border-b-black"
          placeholder="Enter your email" />
        
         <input onChange={handleChange}type="password" name = "password" value = {formData.password}
          className=" outline-none mx-auto text-center border-b border-b-black"
          placeholder="Enter your password" />
        
        <button className=" outline-none mx-auto text-white bg-black w-1/5 h-12 rounded-lg">
          Submit
        </button>


      </form>
    </>
  );
};

export default Index;
