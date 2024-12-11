import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

import { postForm } from "../util/http";
import { loginFormFields } from "../formFileds";
import FormElement from "./FormElement";

export default function Login() {
  const formInput = useRef();
  const navigate = useNavigate();
  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: postForm,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(formInput.current);
    const data = Object.fromEntries(formData); //converting to json for sending to backend. alternatively, formData can be sent as well with content-type: "multipart/form-data"
    mutate({ data, endPoint: "user/signin" });
    if (!isError) {
      navigate("/dashboard");
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              ref={formInput}
              onSubmit={handleSubmit}
            >
              {loginFormFields.map((field) => (
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
                Sign in
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{" "}
                <a
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500 hover:cursor-pointer"
                  onClick={() => navigate("/signup")}
                >
                  Sign up
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
