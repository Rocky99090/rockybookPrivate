import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";


const MetaDecorator = ({ title, description, keywords }) => (
  <Helmet>
     <title>{title}</title>
          <meta name="keywords" content={keywords} />
        <meta name="title" content={title} />     
        <meta name="description" content={description} />
  </Helmet>
);

MetaDecorator.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  keywords: PropTypes.string.isRequired,
};

export default MetaDecorator;
