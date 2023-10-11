"use client";

import { useState } from 'react';
import ButtonPrimary from '../../components/misc/ButtonPrimary';
import Link from 'next/link';
const SubscribeTab = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Perform subscription logic here
    console.log(`Subscribed with email: ${email}`);
    // Reset the email input
    setEmail('');
  };

  return (
    <div className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20">
      <h3 className="text-3xl lg:text-4xl font-medium leading-relaxed text-black-600 text-center">Subscribe for Special Features</h3><br></br>
      <form onSubmit={handleSubscribe} className="flex flex-col space-y-4">
        <input
          type="email"
          className="h-30 w-30 p-5  border-4 border-l-black-600 cursor-text"
          value={email}
          onChange={handleEmailChange}
          placeholder="Enter your email address"
          required
        /><br></br>
        <span><ButtonPrimary type="Submit">
          <Link href="/"><a>Subscribe</a></Link>
          </ButtonPrimary></span>
      </form>
    </div>
  );
};

export default SubscribeTab;
