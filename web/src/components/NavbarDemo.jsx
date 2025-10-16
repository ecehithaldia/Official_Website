

"use client";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";

export function NavbarDemo() {
  const navItems = [
    { name: "Home", link: "#" },
    {
      name: "About",
      link: "#about",
      dropdown: ["Mission", "Vision", "Faculty", "History", "Accreditation", "Contact Info"],
    },
    {
      name: "Students",
      link: "#students",
      dropdown: ["Courses", "Clubs", "Scholarships", "Projects", "Achievements", "Internships"],
    },
    {
      name: "Research",
      link: "#research",
      dropdown: ["Publications", "Labs", "Collaborations", "Funding"],
    },
    {
      name: "Events",
      link: "#events",
      dropdown: [
        "Seminars",
        "Workshops",
        "Tech Fest",
        "Cultural Fest",
        "Conferences",
        "Competitions",
        "Guest Lectures",
        "Exhibitions",
      ],
    },
    {
      name: "Downloads",
      link: "#downloads",
      dropdown: ["Brochure", "Forms"],
    },
    { name: "Contact", link: "#Get_in_Touch" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navbar */}
        <NavBody>
          <NavbarLogo />

          <div className="flex items-center gap-6">
            {navItems.map((item, idx) => (
              <div key={idx} className="relative group">
                <a
                  href={item.link}
                  className="text-white px-3 py-2 font-medium hover:text-blue-600"
                >
                  {item.name}
                </a>

                {item.dropdown && (
                  <div className="absolute left-0 top-full mt-1 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-50">
                    {item.dropdown.map((subItem, subIdx) => (
                      <a
                        key={subIdx}
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="flex items-center gap-4">
            <Link to="/login">
              <NavbarButton as="div" variant="secondary">
                Login
              </NavbarButton>
            </Link>
            <Link to="/signup">
              <NavbarButton as="div" variant="primary">
                Signup
              </NavbarButton>
            </Link>
          </div>
        </NavBody>

        {/* Mobile Navbar */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <div key={`mobile-link-${idx}`} className="flex flex-col">
                <a
                  href={item.link}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="relative text-white py-2 px-4"
                >
                  {item.name}
                </a>
                {item.dropdown && (
                  <div className="pl-4 flex flex-col gap-1">
                    {item.dropdown.map((subItem, subIdx) => (
                      <a
                        key={subIdx}
                        href="#"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-sm text-white py-1 hover:text-blue-500"
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Mobile Buttons */}
            <div className="flex w-full flex-col gap-4 mt-4">
              <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                <NavbarButton as="div" variant="secondary" className="w-full">
                  Login
                </NavbarButton>
              </Link>
              <Link to="/signup" onClick={() => setIsMobileMenuOpen(false)}>
                <NavbarButton as="div" variant="primary" className="w-full">
                  Signup
                </NavbarButton>
              </Link>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}

export default NavbarDemo;
