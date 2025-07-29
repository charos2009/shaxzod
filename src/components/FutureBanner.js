
// import React from 'react';
// import './FeatureBanner.css';
import previewImg from '../rasm/preview.png';

function FutureBanner() {
  return (
    <div className="containere">
      <div className="left">
        <h1>
          OpenType feature <br />
          and Variable fonts
        </h1>
        <button className='try'>Try For Free</button>
      </div>
      <div className="right">
        <img src={previewImg} alt="Preview" />
      </div>
    </div>
  );
}

export default FutureBanner;
