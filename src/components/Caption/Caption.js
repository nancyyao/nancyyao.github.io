import React from 'react';

import './Caption.css';

const Caption = (props) => (
    <div className={props.side}>
      <h3 className="captionHeader">{props.header}</h3>
      <div className="captionText">{props.text}</div>
    </div>
);


export default Caption;
