import React, { useEffect, useRef } from "react";
import { Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import axiosInstance from "../utilities/AxiosInstance";

const Register = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
          phone: "",
        }}
        onSubmit={async (values) => {
          try {
            const res = await axios.post(" http://localhost:3000/users", values);
            console.log(res);
            window.localStorage.setItem("token", JSON.stringify(res));
            navigate("/login");
          } catch (error) {}
        }}
      >
        {({ values, handleChange, handleSubmit, actions }) => (
          <Form onSubmit={handleSubmit} onChange={handleChange}>
            <div className="flex flex-col items-center h-screen justify-center  max-w-lg mx-auto ">
              <h1 className="text-2xl font-bold text-center py-6">
                Register Page
              </h1>

              <input
                name="name"
                value={values.name}
                placeholder="Your Full Name"
                onChange={handleChange}
                className="p-2 border-2 border-b-0 w-full px-4 border-gray-700 rounded-t-md"
                type="text"
              />
              <input
                name="email"
                value={values.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="p-2 border-2 w-full  border-b-0  border-gray-700 rounded-l-none"
                type="email"
              />
              <input
                name="password"
                value={values.password}
                onChange={handleChange}
                placeholder="Your password"
                className="p-2 border-2 w-full  border-b-0  border-gray-700 rounded-l-none"
                type="password"
              />
              <input
                name="confirmPassword"
                value={values.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm password"
                className="p-2 border-2 w-full    border-gray-700 rounded-l-none rounded-b-md"
                type="password"
              />

              <button
                type="submit"
                className="p-2 border-2 w-full border-gray-700 bg-blue-700 rounded-md text-white mt-4"
              >
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Register;
