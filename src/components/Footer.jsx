import React from 'react';
import { FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#A84AA4] z-10 w-full text-white mx-auto py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4 items-center justify-between">
          <div className="w-full lg:w-1/4 px-4 mb-8 lg:mb-0">
            <h2 className="text-lg font-semibold mb-4">Customer Care</h2>
            <ul>
              <li>Email: aleesha@gmail.com</li>
              <li>WA: 0812123456789</li>
            </ul>
            <p className="mt-10">2024 All Rights Reserved by CodeHorizon </p>
          </div>
          <div className="text-center lg:text-right w-full lg:w-3/4 px-4">
            <div className="flex justify-center lg:justify-end items-center">
              <span className="hidden lg:inline-block text-white mr-4">Connect With Us :</span>
              <a href="https://twitter.com">
                <FaTwitter className="text-white mx-2" size={24} />
              </a>
              <a href="https://instagram.com">
                <FaInstagram className="text-white mx-2" size={24} />
              </a>
              <a href="https://facebook.com">
                <FaFacebook className="text-white mx-2" size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
