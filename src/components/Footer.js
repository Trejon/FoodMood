import React from 'react';
import ReactDOM from 'react-dom';

var footerStyle = {
  backgroundColor: "#F8F8F8",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  padding: "20px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "60px",
  width: "100%",
}

var phantom = {
display: 'block',
padding: '20px',
height: '60px',
width: '100%',
}

const Footer = () => {
  return (
      <div>
          <div className="phantom" />
          <div className="footerStyle">
           &copy; by Trejon Stallsworth. Powered by <a rel="noopener" href="https://forkify-api.herokuapp.com/api/" target="_blank" class="link">Forkify API</a> & <a rel="noopener" href="https://www.yelp.com/developers/documentation/v3/business_search" target="_blank" class="link">Yelp Businesses Search API</a>
          </div>
      </div>
  )
}

export default Footer;