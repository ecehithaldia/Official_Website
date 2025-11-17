"use client";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
import { useAuth } from "../App";

export function NavbarDemo() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.error("Failed to log out:", error);
    }
  };

  const navItems = [
    { name: "Home", link: "/" },
    {
      name: "About",
      link: "/about",
      dropdown: [
        { name: "Institute", link: "/about#institute" },
        { name: "Department", link: "/about#department" },
        { name: "Faculty", link: "/about#faculty" },
        { name: "Technical Staff", link: "/about#technical-staff" },
        { name: "Committees", link: "/about#committees" },
        { name: "Facilities", link: "/about#facilities" },
      ],
    },
    {
      name: "Students",
      link: "/students",
      dropdown: [
        {
          name: "Students List",
          link: "/students/list",
          dropdown: [
            { name: "Batch 2022", link: "https://drive.google.com/file/d/1sQR2CJUoETYgKXS5U0OUPIKuh6xo9TxD/view" },
            { name: "Batch 2023", link: "https://drive.google.com/file/d/1oADriMXY_p02dB8VHbGeFeaz3dZy709I/view" },
            { name: "Batch 2024", link: "https://drive.google.com/file/d/1IZKAi8tSXXQ5ZP_sbcjobf1F6V1wDJNH/view" },
            { name: "Batch 2025", link: "https://drive.google.com/file/d/1QKkPd0Z6wwe8GvSu8sOf6l6aBeSzzuYi/view" },
            { name: "Batch 2026", link: "https://drive.google.com/file/d/1qTCQMOmpr-fzHmC0a1TJB6kbpb9da6qu/view" },
            { name: "Batch 2027", link: "https://drive.google.com/file/d/1mep5QUKjIk9tgFL_UUyMf4BwDCriuncX/view" },
            { name: "Batch 2028", link: "https://drive.google.com/file/d/1IrFM2nmyTlshQDuBqS2OYv9cNKW038MC/view" },
          ],
        },
        {
          name: "Training / Internship",
          link: "https://drive.google.com/file/d/1xjUxr_I8gqzUMNO68eDUvMlXrJNUG4r5/view",
        },
        { name: "Industrial Visit", link: "/students#industrial-visits" },
        {
          name: "Placement",
          link: "/students/placement",
          dropdown: [
            { name: "Batch 2023", link: "https://drive.google.com/file/d/1g3f3r7BhrK7If6bBHEoC1aTAH_KBGs3H/view" },
            { name: "Batch 2022", link: "https://drive.google.com/file/d/1n9K0iPrXkM1sJ8_rvIy1GYx1c6JKaYRk/view" },
          ],
        },
        { name: "Alumni", link: "/students#alumni" },
        {
          name: "NPTEL Course",
          link: "/students/nptel",
          dropdown: [
            { name: "Completed", link: "https://drive.google.com/file/d/1Uf-Sp0piTZX2Fu6Pyo4429gneXUSJe9Q/view" },
            { name: "Enrolled", link: "https://drive.google.com/file/d/1WctrYzFCWj0EKQyHYugdoZFnJ12xo4_C/view" },
          ],
        },
      ],
    },
    {
      name: "Research",
      link: "/research",
      dropdown: [
        { name: "Research Grants", link: "#" },
        {
          name: "Publication (Yearwise Publication)",
          link: "/research/publications",
          dropdown: [
            { name: "AY 2024 - 2025", link: "https://drive.google.com/file/d/1ALNlfgOX0d6Hq0m5jaIBBtubPnny9nhe/view" },
            { name: "AY 2023 - 2024", link: "https://drive.google.com/file/d/1W9AnRfDufzyYnptR012WcDORykuyXdTN/view" },
            { name: "AY 2022 - 2023", link: "https://drive.google.com/file/d/1iKlE5MIOF2uV3DKVtZkIlkIHDkoJmYMH/view" },
            { name: "AY 2021 - 2022", link: "https://drive.google.com/file/d/1B_LfYl92fPkfzJOZAyvcPCogKBVmN7hC/view" },
          ],
        },
        { name: "FDP Attended", link: "https://drive.google.com/file/d/1JGNdJ0F5EuMIuBSOT0nh3W_9d9zbb4Ez/view" },
        { name: "Consultancy", link: "https://drive.google.com/file/d/1XpbtI8mRTm_fjFzFIo_6IWcIFd8nEpAz/view" },
      ],
    },
    {
      name: "Events",
      link: "/events",
      dropdown: [
        { name: "Seminar / Workshop", link: "https://drive.google.com/file/d/1Y-grh1CEnWKUw7SkQhypiaBkWzjdX6Xi/view?usp=sharing" },
        {
          name: "Symposium / Conferences",
          link: "/events/symposium",
          dropdown: [
            { name: "ICCDC 2025", link: "/downloads/academic-calendar/a" },
            { name: "NSIC 2025", link: "/downloads/academic-calendar/b" },
            { name: "ICCDC 2023", link: "/downloads/academic-calendar/a" },
            { name: "ICCDC 2021", link: "/downloads/academic-calendar/b" },
            { name: "ICCDC 2019", link: "/downloads/academic-calendar/a" },
            { name: "ICCDC 2017", link: "/downloads/academic-calendar/b" },
          ],
        },
        { name: "Alumni Interactions", link: "/events/alumni-interactions" },
        { name: "Newsletters", link: "/events/newsletters",
          dropdown: [
            { name: "IMPULSE 2022", link: "https://drive.google.com/file/d/1BXDqlNS2pRnxW82ldnOwSMyMrYdXcRmB/view?usp=sharing" },
            { name: "IMPULSE 2023", link: "https://drive.google.com/file/d/1ByR0OJFxptN8_DkH8tBNILUYHagGSgDd/view?usp=sharing" },
            { name: "IMPULSE 2024", link: "https://drive.google.com/file/d/1jz4eqM-Fh5T4cbAKGTdWyN4Mg2UJne28/view?usp=sharing" },
          ],
         },
        { name: "Invited Talks", link: "/events#invited-talks" },
        { name: "Magazine", link: "/events#artefacts" },
        { name: "Wall Magazine", link: "/events#wall-magazine" },
        { name: "Others", link: "/events/others",
          dropdown: [
            { name: "Blood Donation Camp", link: "https://drive.google.com/file/d/1tTHP2uXZD3testwMV9VxXuo-852ZabFQ/view?usp=sharing" },
            { name: "Invited Expert Visit & Talk", link: "https://drive.google.com/file/d/1Y-grh1CEnWKUw7SkQhypiaBkWzjdX6Xi/view?usp=sharing" },
          ],
         },
      ],
    },
    {
      name: "Downloads",
      link: "/downloads",
      dropdown: [
        {
          name: "Syllabus",
          link: "/downloads/syllabus",
          dropdown: [
            { name: "B. Tech (Old)", link: "https://drive.google.com/file/d/1vJkvSd2R8E9Tra7vQeXEbjaynI99DLJN/view" },
            { name: "B. Tech (Revised)", link: "https://drive.google.com/file/d/1CgrZKAE8__SDW2YJ3mxeZ4lMBv_Wh0uE/view" },
            { name: "M. Tech (Old)", link: "https://drive.google.com/file/d/1aEvfBWiHG649g-u1tUqnh0NXXcMCBidT/view" },
            { name: "M. Tech (Revised)", link: "https://drive.google.com/file/d/1mFfwaIAuC9-9nILQiUXh3bzKzGqjcouD/view" },
          ],
        },
        {
          name: "Academic Calendar",
          link: "/downloads/academic-calendar",
          dropdown: [
            { name: "AY 2024 - 2025", link: "https://drive.google.com/file/d/1HWrGZTTJ78fB8WEUq4rPc2f3D2jB17_E/view" },
            { name: "AY 2023 - 2024", link: "https://drive.google.com/file/d/1YVx3OCuguMpktpuKz1QGebwWgePjIAU_/view" },
          ],
        },
      ],
    },
    { name: "Contact", link: "/#contact" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      <Navbar>
        <NavBody>
          <NavbarLogo />

          <div className="flex items-center gap-6">
            {navItems.map((item, idx) => (
              <DropdownItem key={idx} item={item} />
            ))}
          </div>

          <div className="flex items-center gap-4">
            {currentUser ? (
              <>
                <span className="text-white font-medium hidden lg:block">
                  Hi, {currentUser.displayName || currentUser.email.split("@")[0]}
                </span>
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
                  <NavbarButton as="div" variant="secondary">Login</NavbarButton>
                </Link>
                <Link to="/signup">
                  <NavbarButton as="div" variant="primary">Signup</NavbarButton>
                </Link>
              </>
            )}
          </div>
        </NavBody>

        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
            {navItems.map((item, idx) => (
              <MobileDropdownItem
                key={`mobile-${idx}`}
                item={item}
                onClick={() => setIsMobileMenuOpen(false)}
              />
            ))}

            <div className="flex flex-col gap-4 mt-4">
              {currentUser ? (
                <>
                  <span className="text-white text-center py-2 font-medium">
                    Hi, {currentUser.displayName || currentUser.email.split("@")[0]}
                  </span>

                  <NavbarButton
                    as="button"
                    variant="secondary"
                    className="w-full"
                    onClick={async () => {
                      await handleLogout();
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    Logout
                  </NavbarButton>
                </>
              ) : (
                <>
                  <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                    <NavbarButton className="w-full" variant="secondary">
                      Login
                    </NavbarButton>
                  </Link>
                  <Link to="/signup" onClick={() => setIsMobileMenuOpen(false)}>
                    <NavbarButton className="w-full" variant="primary">
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

/* ---------------------- DROPDOWN (FIXED) ---------------------- */
function DropdownItem({ item }) {
  // Helper function to scroll to top for internal, non-hash links
  const handleClick = (link) => {
    if (link.startsWith('/') && !link.includes('#')) {
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="relative group">
      <Link
        to={item.link}
        onClick={() => handleClick(item.link)} // <-- FIX
        className="text-white px-3 py-2 font-medium hover:text-blue-600 flex items-center"
      >
        {item.name}
        {item.dropdown && <span className="ml-1 text-xs">▼</span>}
      </Link>

      {item.dropdown && (
        <div className="absolute left-0 top-full mt-1 w-56 bg-white dark:bg-gray-800 shadow-lg rounded-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-50">
          {item.dropdown.map((subItem, idx) => (
            <div key={idx} className="relative group/sub">
              <Link
                to={subItem.link}
                onClick={() => handleClick(subItem.link)} // <-- FIX
                className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                {subItem.name}
              </Link>

              {subItem.dropdown && (
                <div className="absolute left-full top-0 ml-1 w-56 bg-white dark:bg-gray-800 shadow-lg rounded-md opacity-0 group-hover/sub:opacity-100 invisible group-hover/sub:visible transition-all duration-200">
                  {subItem.dropdown.map((nested, nIdx) => (
                    <Link
                      key={nIdx}
                      to={nested.link}
                      onClick={() => handleClick(nested.link)} // <-- FIX
                      className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      {nested.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/* ---------------------- MOBILE DROPDOWN (FIXED) ---------------------- */
// This component handles the top-level mobile nav items
function MobileDropdownItem({ item, onClick }) {
  const [open, setOpen] = useState(false);

  // This function handles navigation: scrolls to top for internal links (non-hash)
  // and then calls the main onClick (which closes the mobile menu).
  const handleNav = (link) => {
    if (link.startsWith('/') && !link.includes('#')) {
      window.scrollTo(0, 0);
    }
    onClick(); // This is passed from parent, closes the whole mobile nav
  };

  // Case 1: No dropdown (e.g., "Home", "Contact")
  // Just render a simple link.
  if (!item.dropdown) {
    return (
      <Link
        to={item.link}
        onClick={() => handleNav(item.link)}
        className="text-white py-2 px-4 block"
      >
        {item.name}
      </Link>
    );
  }

  // Case 2: Item HAS a dropdown (e.g., "About", "Students")
  // We render the link and a *separate* toggle button.
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center">
        {/* The item name itself is a link */}
        <Link
          to={item.link}
          onClick={() => handleNav(item.link)}
          className="text-white py-2 px-4 flex-grow"
        >
          {item.name}
        </Link>
        {/* The toggle button is separate */}
        <button
          onClick={() => setOpen(!open)}
          className="text-white py-2 px-4" // Padding for click target
        >
          {open ? "▲" : "▼"}
        </button>
      </div>

      {/* Collapsible section */}
      {open && (
        <div className="pl-6 flex flex-col">
          {item.dropdown.map((subItem, idx) => (
            // Use a recursive component for nested items
            <MobileNestedItem key={idx} item={subItem} onNav={handleNav} />
          ))}
        </div>
      )}
    </div>
  );
}

// This new component handles all nested levels (e.g., "Students List", "Batch 2022")
function MobileNestedItem({ item, onNav }) {
  const [open, setOpen] = useState(false);

  // Case 1: No dropdown (e.g., "Institute", "Batch 2022")
  if (!item.dropdown) {
    return (
      <Link
        to={item.link}
        onClick={() => onNav(item.link)}
        className="py-1 text-sm text-white hover:text-blue-400 block"
      >
        {item.name}
      </Link>
    );
  }

  // Case 2: HAS a dropdown (e.g., "Students List", "Placement")
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center">
        <Link
          to={item.link}
          onClick={() => onNav(item.link)}
          className="py-1 text-sm text-white hover:text-blue-400 flex-grow"
        >
          {item.name}
        </Link>
        <button
          onClick={() => setOpen(!open)}
          className="text-white py-1 px-2 text-xs"
        >
          {open ? "▲" : "▼"}
        </button>
      </div>

      {/* Collapsible section for 3rd level */}
      {open && (
        <div className="pl-4 border-l border-gray-700 mt-1">
          {item.dropdown.map((nested, nIdx) => (
            <Link
              key={nIdx}
              to={nested.link}
              onClick={() => onNav(nested.link)}
              className="py-1 text-xs text-gray-300 hover:text-blue-400 block"
            >
              {nested.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}


export default NavbarDemo;