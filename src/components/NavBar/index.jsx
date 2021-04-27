import React from "react";
import CartWidget from "../CartWidget";
import { NavLink } from "react-router-dom";

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-green-500 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <NavLink to="/"
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-1 whitespace-no-wrap text-white"
              href="#inicio"
            ><i className="fas fa-golf-ball"></i>  GOLF  Shop </NavLink>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <NavLink to={`/category/clubs`}
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                  <i className="text-lg leading-lg text-white opacity-75"></i><span className="ml-2">clubs</span>
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to={`/category/bags`}
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#bolso"
                >
                  <i className="text-lg leading-lg text-white opacity-75"></i><span className="ml-2">bags</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={`/category/accessories`}
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#zapas"
                >
                  <i className="text-lg leading-lg text-white opacity-75"></i><span className="ml-2">accessories</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={`/cart`}
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#cart"
                >
                  <CartWidget />
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
