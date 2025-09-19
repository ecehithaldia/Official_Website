"use client";
import React from "react";
import {
  IconBrandTwitter,
  IconBrandLinkedin,
  IconBrandInstagram,
  IconMail,
  IconMapPin,
  IconPhone,
} from "@tabler/icons-react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-gray-100 dark:text-gray-200 py-16 relative z-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
        {/* Brand & Description */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold">Electronics & Communication Dept.</h3>
          <p className="text-gray-300">
            Haldia Institute of Technology – <i>"Jnanam Vijnanam Sahitam."</i>
          </p>
          <div className="flex gap-4 mt-2">
            <a href="#" className="hover:text-blue-500 transition-colors duration-300">
              <IconBrandTwitter size={24} />
            </a>
            <a href="#" className="hover:text-blue-600 transition-colors duration-300">
              <IconBrandLinkedin size={24} />
            </a>
            <a href="#" className="hover:text-pink-500 transition-colors duration-300">
              <IconBrandInstagram size={24} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-3">
          <h4 className="font-semibold text-lg">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
            </li>
            <li>
              <a href="#students" className="hover:text-blue-400 transition-colors">Students</a>
            </li>
            <li>
              <a href="#research" className="hover:text-blue-400 transition-colors">Research</a>
            </li>
            <li>
              <a href="#events" className="hover:text-blue-400 transition-colors">Events</a>
            </li>
            <li>
              <a href="#downloads" className="hover:text-blue-400 transition-colors">Downloads</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-3">
          <h4 className="font-semibold text-lg">Contact Us</h4>
          <div className="flex items-center gap-2">
            <IconMapPin size={20} className="text-blue-400" />
            <span>Haldia, West Bengal, India</span>
          </div>
          <div className="flex items-center gap-2">
            <IconPhone size={20} className="text-blue-400" />
            <span>+91 12345 67890</span>
          </div>
          <div className="flex items-center gap-2">
            <IconMail size={20} className="text-blue-400" />
            <span>ecdept@hit.edu.in</span>
          </div>
        </div>

      </div>

      <div className=" mt-12 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Electronics & Communication Engineering Department, Haldia Institute of Technology. All rights reserved.
      </div>
      <div className=" mt-1 pt-6 text-center text-gray-500 text-sm">
         Developed with passion by Geex.
      </div>
    </footer>
  );
}
