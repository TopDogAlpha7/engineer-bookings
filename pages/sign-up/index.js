import React from "react";
import Image from "next/image";
import {
  FaFacebookF,
  FaLinkedin,
  FaGoogle,
  FaRegEnvelope,
} from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import Link from "next/link";
import Swal from "sweetalert2";


const SignUp = () => {
  const sessionSuccess = () => {
  
    Swal.fire("Booking Successful!", "Thank You!", "success");
  };
  return (
    <>
      <div className="flex flex-col h-screen justify-center items-center    lg:px-8">
        <div className=" p-2  w-[1000px] shadow-lg">
          <div className="">
            <img
              className="mx-auto h-20 w-auto"
              src="/images/undraw_barber_-3-uel.svg"
              alt="Your Company"
            />
            <h2 className="mt-5 text-center text-3xl font-bold leading-9 tracking-tight text-blue-300">
              Fill in to Sign up for an account
            </h2>
          </div>

          <div className="p-10">
            <form className="space-y-6 " action="/api/register" method="POST">
              <div class="border-b border-gray-900/10 pb-12">
                <h2 class="text-base font-semibold leading-7 text-gray-900">
                  Personal Information
                </h2>
                <p class="mt-1 text-sm leading-6 text-gray-600">
                  Use a permanent address where you can receive mail.
                </p>

                <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div class="sm:col-span-3">
                    <label
                      for="first_name"
                      class="block text-sm font-medium leading-6 text-gray-900"
                    >
                      First name
                    </label>
                    <div class="mt-2">
                      <input
                        type="text"
                        name="first_name"
                        id="first_name"
                        autocomplete="given-name"
                        required
                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div class="sm:col-span-3">
                    <label
                      for="last_name"
                      class="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Last name
                    </label>
                    <div class="mt-2">
                      <input
                        type="text"
                        name="last_name"
                        id="last_name"
                        autocomplete="family-name"
                        required
                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div class="sm:col-span-4">
                    <label
                      for="email"
                      class="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Email address
                    </label>
                    <div class="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autocomplete="email"
                        required
                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div class="sm:col-span-2">
                    <label
                      for="email"
                      class="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Phone Number
                    </label>
                    <div class="mt-2">
                      <input
                        id="Pnumber"
                        name="Pnumber"
                        type="text"
                        autocomplete="email"
                        required
                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  {/* <div class="sm:col-span-3">
                    <label
                      for="province"
                      class="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Province
                    </label>
                    <div class="mt-2">
                      <select
                        id="province"
                        name="province"
                        autocomplete="province-name"
                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                      >
                        <option>Limpopo</option>
                        <option>Gauteng</option>
                        <option>Mpumalanga </option>
                        <option>Free State</option>
                        <option>North West</option>
                        <option>Eastern Cape </option>
                        <option>Northern Cape </option>
                        <option>Western Cape</option>
                        <option>KwaZulu Natal</option>
                      </select>
                    </div>
                  </div> */}

                 

                  <div class="sm:col-span-2 sm:col-start-1">
                    <label
                      for="city"
                      class="block text-sm font-medium leading-6 text-gray-900"
                    >
                      City
                    </label>
                    <div class="mt-2">
                      <input
                        type="text"
                        name="city"
                        id="city"
                        autocomplete="address-level2"
                        required
                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                 
                  <div class="sm:col-span-2">
                    <label
                      for="postal"
                      class="block text-sm font-medium leading-6 text-gray-900"
                    >
                      ZIP / Postal
                    </label>
                    <div class="mt-2">
                      <input
                        type="text"
                        name="postal"
                        id="postal"
                        autocomplete="postal"
                        required
                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div class="col-span-2">
                    <label
                      for="street"
                      class="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Street address
                    </label>
                    <div class="mt-2">
                      <input
                        type="text"
                        name="street"
                        id="street"
                        autocomplete="street-address"
                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div class="sm:col-span-3">
                    <label
                      for="email"
                      class="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Password
                    </label>
                    <div class="mt-2">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autocomplete="password"
                        required
                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-between ">
                <div className="flex ">
                  <p className=" text-center text-sm text-gray-300">
                    Already  a member?
                  </p>
                  <p className="font-semibold text-xs leading-6 ml-1 hover:text-blue-300">
                    <Link href={"/loginPage"}>Login</Link>
                  </p>
                </div>
                <div className="flex">
                  <button
                    type="submit"
                    
                    className="flex m-2 justify-center w-32 rounded-lg border border-blue-200 px-3 py-1.5 text-blue-300 text-sm font-semibold leading-6 shadow-sm hover:bg-blue-200 hover:text-white-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                  >
                    Sign up
                  </button>
                  <h1 className="flex m-2 justify-center w-32 rounded-lg border border-blue-200 px-3 py-1.5 text-blue-300 text-sm font-semibold leading-6 shadow-sm hover:bg-blue-200 hover:text-white-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">
                    <Link href={"/"}>Cancel</Link>
                  </h1>
                </div>
            
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp