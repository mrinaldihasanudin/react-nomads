import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ImageDeretan from '../../Assets/frontend/images/travel-1.jpg';
import ImageBromo from '../../Assets/frontend/images/travel-2.jpg';
import ImageNusaPenida from '../../Assets/frontend/images/travel-3.jpg';
import ImageDubai from '../../Assets/frontend/images/travel-4.jpg';
import ImageOurNetworks from '../../Assets/frontend/images/partner.png';
import ImageAvatar_1 from '../../Assets/frontend/images/avatar-1.png';
import ImageAvatar_2 from '../../Assets/frontend/images/avatar-2.png';
import ImageAvatar_3 from '../../Assets/frontend/images/avatar-3.png';

function index() {
  return (
    <main>
      <div className="container">
        <section
          className="section-stats row justify-content-center"
          id="stats"
        >
          <div className="col-3 col-md-2 stats-detail">
            <h2>20K</h2>
            <p>Members</p>
          </div>
          <div className="col-3 col-md-2 stats-detail">
            <h2>12</h2>
            <p>Countries</p>
          </div>
          <div className="col-3 col-md-2 stats-detail">
            <h2>3K</h2>
            <p>Hotels</p>
          </div>
          <div className="col-3 col-md-2 stats-detail">
            <h2>72</h2>
            <p>Partners</p>
          </div>
        </section>
      </div>
      <section className="section-popular" id="popular">
        <div className="container">
          <div className="row">
            <div className="col text-center section-popular-heading">
              <h2>Wisata Popular</h2>
              <p>
                Something that you never try
                <br />
                before in this world
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section-popular-content" id="popularContent">
        <div className="container">
          <div className="section-popular-travel row justify-content-center">
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div
                className="card-travel text-center d-flex flex-column"
                style={{ backgroundImage: `url(${ImageDeretan})` }}
              >
                <div className="travel-country">INDONESIA</div>
                <div className="travel-location">DERATAN, BALI</div>
                <div className="travel-button mt-auto">
                  <Link to="/details" className="btn btn-travel-details px-4">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div
                className="card-travel text-center d-flex flex-column"
                style={{ backgroundImage: `url(${ImageBromo})` }}
              >
                <div className="travel-country">INDONESIA</div>
                <div className="travel-location">BROMO, MALANG</div>
                <div className="travel-button mt-auto">
                  <Link to="/details" className="btn btn-travel-details px-4">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div
                className="card-travel text-center d-flex flex-column"
                style={{ backgroundImage: `url(${ImageNusaPenida})` }}
              >
                <div className="travel-country">INDONESIA</div>
                <div className="travel-location">NUSA PENIDA</div>
                <div className="travel-button mt-auto">
                  <Link to="/details" className="btn btn-travel-details px-4">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div
                className="card-travel text-center d-flex flex-column"
                style={{ backgroundImage: `url(${ImageDubai})` }}
              >
                <div className="travel-country">INDONESIA</div>
                <div className="travel-location">DUBAI</div>
                <div className="travel-button mt-auto">
                  <Link to="/details" className="btn btn-travel-details px-4">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-networks" id="networks">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h2>Our Networks</h2>
              <p>
                Companies are trusted us
                <br />
                more than just a trip
              </p>
            </div>
            <div className="col-md-8 text-center">
              <img
                src={ImageOurNetworks}
                className="img-patner"
                alt="ImageOurNetworks"
              />
            </div>
          </div>
        </div>
      </section>
      <section
        className="section-testimonials-heading"
        id="testimonialsHeading"
      >
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <h2>They Are Loving Us</h2>
              <p>
                Moments were giving them
                <br />
                the best experience
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        className="section-testimonials-content"
        id="testimonialsContent"
      >
        <div className="container">
          <div className="section-popular-travel row justify-content-center match-height">
            <div className="col-sm-6 col-md-6 col-lg-4">
              <div className="card card-testimonial text-center">
                <div className="testimonial-content">
                  <img
                    src={ImageAvatar_1}
                    alt=""
                    className="mb-4 rounded-circle"
                  />
                  <h3 className="mb-4">Angga Risky</h3>
                  <p className="testimonials">
                    “ It was glorious and I could not stop to say wohooo for
                    every single moment Dankeeeeee “
                  </p>
                </div>
                <hr />
                <p className="trip-to mt-2">Trip to Ubud</p>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-4">
              <div className="card card-testimonial text-center">
                <div className="testimonial-content">
                  <img
                    src={ImageAvatar_2}
                    alt=""
                    className="mb-4 rounded-circle"
                  />
                  <h3 className="mb-4">Shayna</h3>
                  <p className="testimonials">
                    “ The trip was amazing and I saw something beautiful in that
                    Island that makes me want to learn more “
                  </p>
                </div>
                <hr />
                <p className="trip-to mt-2">Trip to Nusa Penida</p>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-4">
              <div className="card card-testimonial text-center">
                <div className="testimonial-content mb-auto">
                  <img
                    src={ImageAvatar_3}
                    alt=""
                    className="mb-4 rounded-circle"
                  />
                  <h3 className="mb-4">Shabrina</h3>
                  <p className="testimonials">
                    “ I loved it when the waves was shaking harder — I was
                    scared too “
                  </p>
                </div>
                <hr />
                <p className="trip-to mt-2">Trip to Karimun Jawa</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 text-center">
              <Link className="btn btn-need-help px-4 mt-4 mx-1">
                I Need Help
              </Link>
              <Link className="btn btn-get-started px-4 mt-4 mx-1">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default index;
