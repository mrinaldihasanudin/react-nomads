import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../Assets/frontend/images/logo.png';
function index(props) {
  if (props.hide) {
    return (
      <div class="container">
        <nav class="row navbar navbar-expand-lg navbar-light bg-white">
          <div class="navbar-nav ml-auto mr-auto mr-sm-auto mr-lg-0 mr-md-auto">
            <Link to="/" className="navbar-brand">
              <img src={Logo} alt="Logo" />
            </Link>
          </div>
          <ul class="navbar-nav mr-auto d-none d-lg-block">
            <li>
              <span class="text-muted">
                | &nbsp; Beyond the explorer of the world
              </span>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
  return (
    <div className="container">
      <nav className="row navbar navbar-expand-lg navbar-light bg-white">
        <Link to="/" className="navbar-brand">
          <img src={Logo} alt="Logo" />
        </Link>
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navb"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navb">
          <ul className="navbar-nav ml-auto mr-3">
            <li className="nav-item mx-md-2">
              <a className="nav-link active" href="#">
                Home
              </a>
            </li>
            <li className="nav-item mx-md-2">
              <a className="nav-link" href="#">
                Paket Travel
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbardrop"
                data-toggle="dropdown"
              >
                Services
              </a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">
                  Link 1
                </a>
                <a className="dropdown-item" href="#">
                  Link 2
                </a>
                <a className="dropdown-item" href="#">
                  Link 3
                </a>
              </div>
            </li>
            <li className="nav-item mx-md-2">
              <a className="nav-link" href="#">
                Testimonial
              </a>
            </li>
          </ul>

          <form className="form-inline d-sm-block d-md-none">
            <button className="btn btn-login my-2 my-sm-0">Masuk</button>
          </form>

          <form className="form-inline my-2 my-lg-0 d-none d-md-block">
            <button className="btn btn-login btn-navbar-right my-2 my-sm-0 px-4">
              Masuk
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}

export default index;
