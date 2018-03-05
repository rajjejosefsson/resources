import React, { Component } from "react";
import Helmet from "react-helmet";
import styled from "styled-components";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import MarginContainer from "../components/shared/MarginContainer";
import Favicon from "./favicon.ico";
import * as colors from "../theme/colors";
import * as spacing from "../theme/spacing";

import "./index.css";
require("prismjs/themes/prism-okaidia.css");

const SiteContainer = styled.div`
  height: 100vh;
  padding-left: 14.8rem; /* ONLY FOR WHEN FIXED SIDEBAR*/
  overflow: auto;
  display: flex;
  flex-direction: column;
  color: ${colors.base};

  font-size: 16px;
  line-height: 24px;

  a {
    text-decoration: none;
    color: ${colors.linkPrimary};

    &:hover {
      filter: brightness(120%);
    }
  }

  p {
    margin-bottom: 12px;
  }

  h1 {
    font-style: normal;
    font-variant-ligatures: normal;
    font-variant-caps: normal;
    font-variant-numeric: normal;
    font-variant-east-asian: normal;
    font-weight: 300;
    font-stretch: normal;
    font-size: 44px;
    line-height: 44px;
    font-family: Roboto, sans-serif;
    margin-bottom: 13px;
    overflow: visible;
    padding: 0;
  }

  h2 {
    font-style: normal;
    font-variant-ligatures: normal;
    font-variant-caps: normal;
    font-variant-numeric: normal;
    font-variant-east-asian: normal;
    font-weight: 300;
    font-stretch: normal;
    font-size: 34px;
    line-height: 40px;
    font-family: Roboto, sans-serif;
    margin: 16px 0;
  }

  h3 {
    font-style: normal;
    font-variant-ligatures: normal;
    font-variant-caps: normal;
    font-variant-numeric: normal;
    font-variant-east-asian: normal;
    font-weight: 400;
    font-stretch: normal;
    font-size: 20px;
    line-height: 32px;
    font-family: Roboto, sans-serif;
    margin-bottom: 16px;
  }

  ul a {
    font-family: roboto;
    font-weight: 400;
    font-style: normal;
  }

  p {
    font-style: normal;
    font-variant-ligatures: normal;
    font-variant-caps: normal;
    font-variant-numeric: normal;
    font-variant-east-asian: normal;
    font-weight: 400;
    font-stretch: normal;
    font-size: 16px;
    line-height: 24px;
    font-family: Roboto, sans-serif;
    color: #757575;
  }

  ul {
    list-style-type: disc;

    li {
      margin-left: 2rem;
      margin-bottom: 0.8rem;
    }
  }

  ol {
    list-style-type: decimal;

    li {
      margin-left: 2rem;
      margin-bottom: 1rem;
    }
  }
`;

const Content = styled.div`
  display: flex;
  flex: 1 0 auto;
`;

const InnerContent = styled.div`
  display: flex;
`;

const Main = styled.div`
  flex: 1;
  width: ${spacing.docMainWidth};
`;

const TemplateWrapper = ({ children }) => (
  <SiteContainer>
    <Helmet
      title="Awesome Collection of resources"
      meta={[
        {
          name: "description",
          content: `Making the web a better place`
        }
      ]}
    >
      <link rel="shortcut icon" type="image/x-icon" href={Favicon} />
      <link
        rel="stylesheet"
        href="//fonts.googleapis.com/css?family=Roboto:300,400,400italic,500,500italic,700,700italic|Roboto+Mono:400,500,700|Material+Icons"
      />>
    </Helmet>
    <Header />
    <Content>
      <MarginContainer>
        <InnerContent>
          <Sidebar />
          <Main>{children()}</Main>
        </InnerContent>
      </MarginContainer>
    </Content>
    <Footer />
  </SiteContainer>
);

export default TemplateWrapper;
