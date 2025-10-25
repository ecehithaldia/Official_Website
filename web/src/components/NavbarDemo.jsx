"use client";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  NavBody,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";

export function NavbarDemo() {
  const navItems = [
    { name: "Home", link: "/" },

    {
      name: "About",
      link: "/about",
      dropdown: [
        { name: "Institute", link: "/about/institute" },
        { name: "Department", link: "/about/department" },
        { name: "Faculty", link: "/about/faculty" },
        { name: "Technical Staff", link: "/about/technical-staff" },
        { name: "Committees", link: "/about/committees" },
        { name: "Facilities", link: "/about/facilities" },
      ],
    },

    {
      name: "Students",
      link: "/students",
      dropdown: [
        { name: "Students List", link: "/students/list" },
        { name: "Training / Internship", link: "/students/training" },
        { name: "Industrial Visit", link: "/students/industrial-visit" },
        { name: "Placement", link: "/students/placement" },
        { name: "Alumni", link: "/students/alumni" },
        { name: "NPTEL Course [Completed / Enrolled]", link: "/students/nptel" },
      ],
    },

    {
      name: "Research",
      link: "/research",
      dropdown: [
        { name: "Research Grants", link: "/research/grants" },
        { name: "Publication (Yearwise Publication)", link: "/research/publications" },
        { name: "FDP Attended", link: "/research/fdp" },
        { name: "Consultancy", link: "/research/consultancy" },
      ],
    },

    {
      name: "Events",
      link: "/events",
      dropdown: [
        { name: "Seminar / Workshop", link: "/events/seminar-workshop" },
        { name: "Symposium / Conferences [sub]", link: "/events/symposium" },
        { name: "Invited Talks", link: "/events/invited-talks" },
        { name: "Alumni Interactions", link: "/events/alumni-interactions" },
        { name: "Newsletters", link: "/events/newsletters" },
        { name: "Magazine", link: "/events/magazine" },
        { name: "Wall Magazine", link: "/events/wall-magazine" },
        { name: "Others", link: "/events/others" },
      ],
    },

    {
      name: "Downloads",
      link: "/downloads",
      dropdown: [
        { name: "Syllabus", link: "/downloads/syllabus" },
        { name: "Academic Calendar", link: "/downloads/academic-calendar" },
      ],
    },

    { name: "Contact", link: "/contact" },
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
                <Link
                  to={item.link}
                  className="text-white px-3 py-2 font-medium hover:text-blue-600"
                >
                  {item.name}
                </Link>

                {item.dropdown && (
                  <div className="absolute left-0 top-full mt-1 w-56 bg-white dark:bg-gray-800 shadow-lg rounded-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-50">
                    {item.dropdown.map((subItem, subIdx) => (
                      <Link
                        key={subIdx}
                        to={subItem.link}
                        className="block px-4 py-2 text-sm text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        {subItem.name}
                      </Link>
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
                <Link
                  to={item.link}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="relative text-white py-2 px-4"
                >
                  {item.name}
                </Link>
                {item.dropdown && (
                  <div className="pl-4 flex flex-col gap-1">
                    {item.dropdown.map((subItem, subIdx) => (
                      <Link
                        key={subIdx}
                        to={subItem.link}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-sm text-white py-1 hover:text-blue-500"
                      >
                        {subItem.name}
                      </Link>
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

