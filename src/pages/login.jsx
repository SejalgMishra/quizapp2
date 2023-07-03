import { Form, Formik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate()

  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
         onSubmit={() => (
           navigate("/main")
         )}
      >
        {({ values, handleChange, handleSubmit }) => (
          <Form onSubmit={handleSubmit} onChange={handleChange}>
            <div className="flex flex-col items-center  h-screen justify-center max-w-lg mx-auto ">
              <h1 className="text-2xl font-bold my-4">Login Page</h1>

              <input
                name="email"
                value={values.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="p-2 border-2 w-full border-gray-700 border-b-0 rounded-t-md"
                type="email"
              />
              <input
                name="password"
                value={values.password}
                onChange={handleChange}
                placeholder="Your password"
                className="p-2 border-2 w-full border-gray-700 rounded-b-md"
                type="password"
              />
              <button
                type="submit"
                className="p-2 border-2 w-full border-gray-700 bg-blue-700 rounded-md text-white my-4"
              >
                Sign in
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
