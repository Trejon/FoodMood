import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="phantom" />
      <div className="footerStyle">
        &copy; {"by Trejon Stallsworth. Powered by "}
        <a
          className="link"
          href="https://forkify-api.herokuapp.com/api/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {"Forkify API"}
        </a>
        {" & "}
        <a
          className="link"
          href="https://www.yelp.com/developers/documentation/v3/business_search"
          target="_blank"
          rel="noopener noreferrer"
        >
          {"Yelp Businesses Search API"}
        </a>
      </div>
    </div>
  );
};

export default Footer;
