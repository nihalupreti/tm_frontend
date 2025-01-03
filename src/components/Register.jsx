import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { registerFormFields } from "../formFileds";
import FormElement from "./FormElement";

export default function Register() {
  const userInput = useRef();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(userInput.current);
    const data = Object.fromEntries(formData);

    if (data.password !== data.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3000/api/user/signup",
        data
      );
      console.log("register", response.data);
      localStorage.setItem("authToken", response.data.token); // Save the JWT token in localStorage
      navigate("/dashboard"); // Navigate the user to the dashboard
    } catch (error) {
      console.error("Error:", error);
      if (error.response) {
        alert(error.response.data.message || "Something went wrong!");
      } else {
        alert("Network error or server not reachable!");
      }
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create an account
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              ref={userInput}
              onSubmit={handleSubmit}
            >
              {registerFormFields.map((field) => (
                <FormElement
                  key={field.name + field.type}
                  label={field.label}
                  name={field.name}
                  placeholder={field.placeholder}
                  type={field.type}
                />
              ))}
              <button
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Create an account
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
                <a
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500 hover:cursor-pointer"
                  onClick={() => navigate("/signin")}
                >
                  Login here
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
