import React from "react";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex flex-col h-screen justify-center items-center    lg:px-8">
      <div className=" py-32 px-48 shadow-lg">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-20 w-auto"
            src="/images/undraw_barber_-3-uel.svg"
            alt="Your Company"
          />
          <h2 className="mt-5 text-center text-3xl font-bold leading-9 tracking-tight text-blue-300">
            Login to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto  sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="/api/login" method="POST">
            <div>
              <label
                for="email"
                className="block text-sm font-medium leading-6 "
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autocomplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  for="password"
                  className="block text-sm font-medium leading-6 "
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-gray-300 hover:text-blue-200"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autocomplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="flex justify-between ">
              <button
                type="submit"
                className="flex  justify-center w-32 rounded-lg border border-blue-200 px-3 py-1.5 text-blue-300 text-sm font-semibold leading-6 shadow-sm hover:bg-blue-200 hover:text-white-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
              >
                Login
              </button>
              <h1 className="flex  justify-center w-32 rounded-lg border border-blue-200 px-3 py-1.5 text-blue-300 text-sm font-semibold leading-6 shadow-sm hover:bg-blue-200 hover:text-white-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">
                <Link href={"/"}>Cancel</Link>
              </h1>
            </div>
            <div className="flex">
              <p className=" text-center text-sm text-gray-300">
                Not a member?
              </p>
              <p className="font-semibold text-xs leading-6 ml-1 hover:text-blue-300">
                <Link href={"/signupPage"}>Sign Up</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}