import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Logo } from "../../assets";

const Header = () => {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const queryTerm = event.target.search.value;
    event.target.reset();
    return navigate(`/search?q=${queryTerm}`);
  };

  return (
    <header className="shadow sticky top-0 bg-base-100 z-50 pb-5">
      <div className="navbar max-w-screen-xl mx-auto">
        {/* logo */}
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/apple"}>Apple</Link>
              </li>
              <li>
                <Link to={"/tesla"}>Tesla</Link>
              </li>
              <li>
                <Link to={"/business"}>Business</Link>
              </li>
              <li>
                <Link to={"/tech-crunch"}>TechCrunch</Link>
              </li>
              <li>
                <Link to={"/wall-street-journal"}>Wall Street Journal</Link>
              </li>
            </ul>
          </div>
          <Link to={"/"} className="flex items-center gap-2">
            <img src={Logo} alt="logo" className="md:w-16 w-12" />
            <span className="md:text-2xl text-xl font-semibold">
              News Portal
            </span>
          </Link>
        </div>
        <div className="navbar-end">
          <div className="form-control w-full">
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <input
                  type="text"
                  name="search"
                  placeholder="Search…"
                  className="input input-bordered w-full"
                />
                <button type="submit" className="btn btn-square">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex max-w-screen-xl mx-auto border">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/apple"}>Apple</Link>
          </li>
          <li>
            <Link to={"/tesla"}>Tesla</Link>
          </li>
          <li>
            <Link to={"/business"}>Business</Link>
          </li>
          <li>
            <Link to={"/tech-crunch"}>TechCrunch</Link>
          </li>
          <li>
            <Link to={"/wall-street-journal"}>Wall Street Journal</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
