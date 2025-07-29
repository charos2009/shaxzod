// import React from 'react';
import { FaTwitter, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { MdLocationOn, MdPhoneAndroid } from 'react-icons/md';

const Footer = () => {
  return (
    <div className='container'>
    <footer style={{ backgroundColor: '#1000', color: 'white', padding: '50px 20px',marginTop:'30px' }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        Width: '1050px',
        margin: '0 auto',
        
      }}>
        
        <div>
          <h4>Fingertipe</h4>
          <br></br>
          <p>Home</p>
          <br></br>
          <p>Examples</p>
          <br></br>
          <p>Pricing</p>
          <br></br>
          <p>Updates</p>
        </div>
        <div>
          <h4>Resources</h4>
          <br></br>
          <p>Home</p>
          <br></br>
          <p>Examples</p>
          <br></br>
          <p>Pricing</p>
          <br></br>
          <p>Updates</p>
        </div>
        <div>
          <h4>About</h4>
          <br></br>
          <p>Home</p>
          <br></br>
          <p>Examples</p>
          <br></br>
          <p>Pricing</p>
          <br></br>
          <p>Updates</p>
        </div>

        
        <div>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <MdLocationOn style={{ marginRight: '8px' }} />
            <span>7480 Mockingbird Hill undefined</span>
            <br></br>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
            <MdPhoneAndroid style={{ marginRight: '8px' }} />
            <br></br>
            <span>(239) 555-0108</span>
            <br></br>
          </div>

          
          <div style={{ display: 'flex', gap: '15px' }}>
            <FaTwitter />
            <FaFacebookF />
            <FaLinkedinIn />
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default Footer;
