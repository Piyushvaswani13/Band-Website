import React from 'react';
import bandMemberImage from '../images/bandmember.jpg';

const BandSection = () => (
  <div className="band-section" id="band">
    <h2>THE BAND</h2>
    <p className="subtitle"><i>We love music</i></p>
    <p className="description">We have created a fictional band website. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    <div className="band-members">
      <div className="band-member">
        <p>Name</p>
        <img src={bandMemberImage} alt="Band Member" />
      </div>
      <div className="band-member">
        <p>Name</p>
        <img src={bandMemberImage} alt="Band Member" />
      </div>
      <div className="band-member">
        <p>Name</p>
        <img src={bandMemberImage} alt="Band Member" />
      </div>
    </div>
  </div>
);

export default BandSection;
