import React from 'react';

import './DetailHeader.css';

const DetailHeader = (props) => (
    <div className="detailHeader">
      <div className="detailHeaderLeft">
        <h1 className="detailName">{props.name}</h1>
        <h2 className="detailSubheading"><b>Role:</b> {props.role}</h2>
        <h2 className="detailSubheading"><b>Skills:</b> {props.skills}</h2>
        <h2 className="detailSubheading"><b>Date:</b> {props.date}</h2>
      </div>
      <div>
        <h2 className="detailTagline">{props.tagline}</h2>
      </div>
    </div>
);


export default DetailHeader;
