"use client";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase"; // Make sure this path is correct
import { signOut } from "firebase/auth";
import {
  Navbar,
  NavBody,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar"; // Make sure this path is correct

// A simple user icon component
const UserIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5"
  >
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

export function NavbarDemo({ currentUser }) {
  // 1. Here is your FULL list of nav items (Unchanged)
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
        { name:"Magazine", link: "/events/magazine" },
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
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("User logged out successfully");
      navigate("/");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  // 2. --- ADDED ---
  // This is our new "bouncer" function.
  // It checks if a user can access a link.
  const handleNavClick = (e, item) => {
    // Allow navigation if:
    // 1. The user is logged in (currentUser is not null)
    // 2. The item they clicked is "Home" (which is always public)
    if (currentUser || item.name === "Home") {
      return; // All good, let the <Link> component do its thing
    }

    // Otherwise, the user is NOT logged in and clicked a protected link
    e.preventDefault(); // Stop the link from navigating to its 'to' prop
    navigate("/login"); // Send them to the login page instead
  };

  // 3. --- DELETED ---
  // We're removing the old 'visibleNavItems' logic.
  // We want to show ALL items now.

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navbar */}
        <NavBody>
          <NavbarLogo />

          <div className="flex items-center gap-6">
            {/* 4. --- MODIFIED ---
                We now map over the FULL 'navItems' list */}
            {navItems.map((item, idx) => (
              <div key={idx} className="relative group">
                <Link
                  to={item.link}
                  onClick={(e) => handleNavClick(e, item)} // <-- ADDED
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
                        onClick={(e) => handleNavClick(e, subItem)} // <-- ADDED
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

          {/* Desktop Auth Buttons (This logic is unchanged) */}
          <div className="flex items-center gap-4">
            {currentUser ? (
              <>
                <div className="flex items-center gap-2 text-white">
                  <UserIcon />
                  <span className="font-medium">
                    {currentUser.displayName || "User"}
                  </span>
                </div>
                <NavbarButton
                  as="button"
                  variant="secondary"
                  onClick={handleLogout}
                >
                  Logout
                </NavbarButton>
              </>
            ) : (
              <>
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
              </>
            )}
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
            {/* 5. --- MODIFIED ---
                We also map over the FULL 'navItems' list for mobile */}
            {navItems.map((item, idx) => (
              <div key={`mobile-link-${idx}`} className="flex flex-col">
                <Link
                  to={item.link}
                  onClick={(e) => {
                    // --- MODIFIED ---
                    // On mobile, we need to BOTH check auth AND close the menu
                    setIsMobileMenuOpen(false); // Always close the menu on click
                    handleNavClick(e, item); // Run our bouncer check
                  }}
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
                        onClick={(e) => {
                          // --- MODIFIED ---
                          setIsMobileMenuOpen(false); // Also close on sub-item click
                          handleNavClick(e, subItem); // And run the bouncer check
                        }}
                        className="text-sm text-white py-1 hover:text-blue-500"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Mobile Auth Buttons (This logic is unchanged) */}
            <div className="flex w-full flex-col gap-4 mt-4">
              {currentUser ? (
                <>
                  <div className="flex items-center gap-2 text-white py-2 px-4">
                    <UserIcon />
                    <span className="font-medium">
                      {currentUser.displayName || "User"}
                    </span>
                  </div>
                  <NavbarButton
                    as="button"
                    variant="secondary"
                    className="w-full"
                    onClick={() => {
                      handleLogout();
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    Logout
                  </NavbarButton>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <NavbarButton
                      as="div"
                      variant="secondary"
                      className="w-full"
                    >
                      Login
                    </NavbarButton>
                  </Link>
                  <Link
                    to="/signup"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <NavbarButton
                      as="div"
                      variant="primary"
                      className="w-full"
                    >
                      Signup
                    </NavbarButton>
                  </Link>
                </>
              )}
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}

export default NavbarDemo;