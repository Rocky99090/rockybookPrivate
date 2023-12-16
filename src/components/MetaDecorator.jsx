import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";


const MetaDecorator = ({ title, description, imageUrl, imageAlt }) => (
  <Helmet>
     <title>Not the be Online Cricket ID Provider in India | Rocky Book</title>
          <meta name="keywords" content="best betting sites in India, cricket betting sites, best online betting sites India, top betting sites in India, fantasy sports sites in India, top sports websites in India, India's no.1 book, trusted cricket betting sites in India, India no 1 betting site, best legal betting sites, Online Gambling Sites, rocky book, best online gaming platform in India" />
        <meta name="title" content="Rocky Book - Best Online Cricket Betting Sites in India" />
        
        <meta name="description" content="Best Online Gaming Platforms in India - Discover the best online gaming platform in India with Rocky Book. Enjoy a wide range of thrilling games, seamless betting experience." />

  </Helmet>
);

MetaDecorator.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
};

export default MetaDecorator;
