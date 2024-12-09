import React from "react";

interface Props {
  pages: string[];
  activePage: string;
}

const Navbar = ({ pages, activePage }: Props) => {
  return (
    <nav className="navbar sticky-top navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src="https://cdn.discordapp.com/emojis/849414447604957234.webp?size=96"
            alt="Logo"
            width="30"
            className="d-inline-block align-text-top"
          />
          GiantEevee
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarLandingPage"
          aria-controls="navbarLandingPage"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarLandingPage">
          <div className="navbar-nav me-auto mb-2 mb-lg-0">
            {pages.map((item) => (
              <a
                className={item === activePage ? "nav-link active" : "nav-link"}
                key={item}
                aria-current={item === activePage && "page"}
                href="#"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
