import React, { useState } from "react";
import axios from "axios";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/signup", formData);
      console.log("Response from the server:", response.data);
    } catch (error) {
      console.error("Error while submitting the form:", error);
    }
  };

  return (
    <>
      <form
        className="flex flex-col justify-center items-center gap-10"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Enter your name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="Enter your email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          placeholder="Enter your password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <input
          className="bg-black text-white px-2 py-1 rounded-lg"
          type="submit"
          value="Submit"
        />
      </form>
    </>
  );
};

export default Index;
