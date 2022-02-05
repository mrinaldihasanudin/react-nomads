import React from 'react';
import { Link } from 'react-router-dom';
import Member from '../../Assets/frontend/images/members.png';

function index() {
  return (
    <div className="col-lg-4">
      <div className="card card-details card-right">
        <h2>Members are going</h2>
        <div className="members my-2">
          <img src={Member} alt="" className="w-75" />
        </div>
        <hr />
        <h2>Trip Informations</h2>
        <table className="trip-informations">
          <tr>
            <th width="50%">Date of Departure</th>
            <td width="50%" className="text-right">
              22 Aug, 2019
            </td>
          </tr>
          <tr>
            <th width="50%">Duration</th>
            <td width="50%" className="text-right">
              4D 3N
            </td>
          </tr>
          <tr>
            <th width="50%">Type</th>
            <td width="50%" className="text-right">
              Open Trip
            </td>
          </tr>
          <tr>
            <th width="50%">Price</th>
            <td width="50%" className="text-right">
              $80,00 / person
            </td>
          </tr>
        </table>
      </div>
      <div className="join-container">
        <Link to="/checkout" className="btn btn-block btn-join-now mt-3 py-2">
          Join Now
        </Link>
      </div>
    </div>
  );
}

export default index;
