import React from "react";
// molecules
import NavList from "../../components/molecules/NavList";
// import NavList from "../../components/Home/molecules/NavList";

function Navabar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top py-3 px-5">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-5">
            {/* Home */}
            <NavList
              className="nav-item mx-2 nav-link active fw-bold"
              href="/"
              labelLink="Home"
              aria-current="page"
            />

            <NavList
              className="nav-item mx-2 nav-link fw-bold"
              href="/add"
              labelLink="Add Recipe"
            />
            <NavList
              className="nav-item mx-2 nav-link fw-bold"
              href="/profile"
              labelLink="Profile"
            />
          </ul>
          <form className="d-flex justify-content-start mx-5">
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-lg btn-warning text-muted dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Action
              </button>
              <ul className="dropdown-menu">
                <NavList
                  className="dropdown-item"
                  href="/login"
                  labelLink="Login"
                />
                <NavList
                  className="dropdown-item"
                  href="/register"
                  labelLink="Register"
                />
                <NavList
                  className="dropdown-item"
                  href="/logout"
                  labelLink="Logout"
                />
              </ul>
            </div>
          </form>
        </div>
      </nav>
    </>
  );
}

export default Navabar;
