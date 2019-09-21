import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { SITE_METADATA } from './Header';
import footerStyles from './footer.module.scss';

const Footer = () => {
  const data = useStaticQuery(SITE_METADATA);

  return (
    <footer className={footerStyles.footer}>
      <p>Created by: {data.site.siteMetadata.author}, © {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;
