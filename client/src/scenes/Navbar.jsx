import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import "../index.css";

const Navbar = () => {
  const [articles, setArticles] = useState(false);
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  

  return (
    <div className="py-4 px-9 bg-white flex flex-row justify-between text-black sticky top-0 z-[1000]">
      <NavLink to="/" className={(navData) => navData.isActive && "logoColor"}>
        <img src={logo} alt="logo" className="w-[69px] h-[46px]" />
      </NavLink>
      <div className="hidden md:flex md:flex-row gap-7 justify-between items-center text-2xl">
        <div className="flex flex-row items-end gap-0.5">
          <NavLink
            to="/articles"
            className={(navData) =>
              navData.isActive && "text-orange"}
          >
            <p>Articles</p>
          </NavLink>
          <div className="relative inline-block text-right">
          <div className={location.pathname.includes('/articles') && 'logoColor'}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
                onClick={() => setArticles(!articles)}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
          </div>
            {articles && (
              <div className="flex flex-col absolute right-0 top-10 p-4 w-56 gap-5 bg-white mt-1.5">
                <NavLink
                  reloadDocument
                  to="/articles/womeninstem"
                  onClick={() => setArticles(!articles)}
                  className={(navData) => navData.isActive && "text-orange"}
                >
                  <p>Women In Stem</p>
                </NavLink>
                <NavLink
                  reloadDocument
                  to="/articles/tutorials"
                  onClick={() => setArticles(!articles)}
                  className={(navData) => navData.isActive && "text-orange"}
                >
                  <p>Tutorials</p>
                </NavLink>
              </div>
            )}
          </div>
        </div>
        <NavLink
          to="/about"
          className={(navData) => navData.isActive && "text-orange"}
        >
          <p>About</p>
        </NavLink>
        <NavLink
          to="/contact"
          className={(navData) => navData.isActive && "text-orange"}
        >
          <p>Contact</p>
        </NavLink>
      </div>
      <div className="md:hidden">
        <button className="pt-1.5"onClick={() => setMenuOpen(!menuOpen)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            fill="none"
            className="w-8 h-8"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            )}
          </svg>
        </button>
        {menuOpen &&
          <div className="flex flex-col absolute right-0 top-10 pr-9 w-60 gap-4 bg-white mt-4 py-4 pl-4 text-right">
          <div>
                <NavLink
                  to="/articles"
                  onClick={() => setMenuOpen(false)}
                  className={(navData) => navData.isActive && "text-orange"}
                >
                  <p>Articles</p>
                </NavLink>
                <div className="">
                <NavLink
                  reloadDocument
                  to="/articles/womeninstem"
                  onClick={() => setMenuOpen(false)}
                  className={(navData) => navData.isActive && "text-orange"}
                >
                  <p className="text-lg">Women In Stem</p>
                </NavLink>
                <NavLink
                  reloadDocument
                  to="/articles/tutorials"
                  onClick={() => setMenuOpen(false)}
                  className={(navData) => navData.isActive && "text-orange"}
                >
                  <p className="text-lg">Tutorials</p>
                </NavLink>
                </div>
                </div>
                <NavLink
                  to="/about"
                  onClick={() => setMenuOpen(false)}
                  className={(navData) => navData.isActive && "text-orange"}
                >
                  <p>About</p>
                </NavLink>
                <NavLink
                  to="/contact"
                  onClick={() => setMenuOpen(false)}
                  className={(navData) => navData.isActive && "text-orange"}
                >
                  <p>Contact</p>
                </NavLink>
              </div>
        }
      </div>
    </div>
  );
};

export default Navbar;
