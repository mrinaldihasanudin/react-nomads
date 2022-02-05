import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import MemberAreGoing from '../../Components/MemberAreGoing';
import DetailImage_1 from '../../Assets/frontend/images/details-1.jpg';
import IC_1 from '../../Assets/frontend/images/ic_event.png';
import IC_2 from '../../Assets/frontend/images/ic_bahasa.png';
import IC_3 from '../../Assets/frontend/images/ic_foods.png';

function index() {
  return (
    <>
      <Navbar />
      <main>
        <section className="section-details-header"></section>
        <section className="section-details-content">
          <div className="container">
            <div className="row">
              <div className="col p-0 pl-3 pl-lg-0">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item" aria-current="page">
                      Paket Travel
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Details
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-8 pl-lg-0">
                <div className="card card-details">
                  <h1>Nusa Peninda</h1>
                  <p>Republic of Indonesia Raya</p>
                  <div className="gallery">
                    <div className="xzoom-container">
                      <img
                        className="xzoom"
                        src={DetailImage_1}
                        alt="DetailImage_1"
                      />
                      <div className="xzoom-thumbs">
                        <Link to="#">
                          <img
                            className="xzoom-gallery"
                            width="128"
                            src={DetailImage_1}
                            alt="DetailImage_1"
                          />
                        </Link>
                      </div>
                    </div>
                    <h2 className="mt-3">Tentang Wisata</h2>
                    <p>
                      Nusa Penida is an island southeast of Indonesia’s island
                      Bali and a district of Klungkung Regency that includes the
                      neighbouring small island of Nusa Lembongan. The Badung
                      Strait separates the island and Bali. The interior of Nusa
                      Penida is hilly with a maximum altitude of 524 metres. It
                      is drier than the nearby island of Bali.
                    </p>
                    <p>
                      Bali and a district of Klungkung Regency that includes the
                      neighbouring small island of Nusa Lembongan. The Badung
                      Strait separates the island and Bali.
                    </p>
                    <div className="features row pt-3">
                      <div className="col-md-4">
                        <img src={IC_1} alt="" className="features-image" />
                        <div className="description">
                          <h3>Featured Ticket</h3>
                          <p>Tari Kecak</p>
                        </div>
                      </div>
                      <div className="col-md-4 border-left">
                        <img src={IC_2} alt="" className="features-image" />
                        <div className="description">
                          <h3>Language</h3>
                          <p>Bahasa Indonesia</p>
                        </div>
                      </div>
                      <div className="col-md-4 border-left">
                        <img src={IC_3} alt="" className="features-image" />
                        <div className="description">
                          <h3>Foods</h3>
                          <p>Local Foods</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <MemberAreGoing />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default index;
