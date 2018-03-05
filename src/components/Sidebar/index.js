import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import * as spacing from "../../theme/spacing";

/**
 * 
 *     
 * 
    overflow-y: auto;
    ::scrollbar-thumb   background: rgb(224, 214, 235); 
    
    ::scrollbar-track background: rgb(245, 243, 247);
 */

const FixedStyleBar = styled.div`
  position: fixed;
  overflow-y: auto;
  left: 0;
  top: 0;
  padding: 2.4rem;
  background: #555;
  margin-right: 0;
  padding-right: 0;
  width: 200px;
  height: 100%;
  background-color: #fcfafa;
  box-shadow: inset 0 4px 5px 0 rgba(102, 51, 153, 0.07),
    inset 0 1px 10px 0 rgba(157, 124, 191, 0.06),
    inset 0 2px 4px -1px rgba(157, 124, 191, 0.1);

  .selected {
    font-weight: bold;
    color: #af7878 !important;
  }

  .selected::before {
    content: "🚀";
    position: absolute;
    top: 0;
    left: -25px;
    font-size: 20px;
    color: red;
  }

  webkitoverflowscrolling: "touch";

  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  ::-webkit-scrollbar-thumb {
    height: 2px;
    background: #ecd9dbba;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-track {
    background: #f5f3f7;
  }

  font-size: 14px;

  h3 {
    color: #ee293d;
    font-size: 14px;
    line-height: 22px;
    margin: 0 0 8px 0 !important;
    text-transform: uppercase;
  }

  ul {
    margin: 0 0 16px 0 !important;

    li {
      margin: 0 !important;
    }
  }

  a {
    color: #757575 !important;
  }
`;

const SidebarContainer = styled.div`
  width: ${spacing.docSidebarWidth};
  margin: 0 16px 50px 0;

  font-size: 14px;
  h3 {
    color: #ee293d;
    font-size: 14px;
    line-height: 22px;
    margin: 0 0 8px 0 !important;
    text-transform: uppercase;
  }

  ul {
    margin: 0 0 16px 0 !important;

    li {
      margin: 0 !important;
    }
  }

  a {
    color: #757575 !important;
  }
`;

const Sidebar = () => (
  <FixedStyleBar className="styledSide">
    <h3>React</h3>
    <ul>
      <li>
        <Link to="/react-resource" activeClassName="selected">
          Resource
        </Link>
      </li>
      <li>
        <Link to="/react-styleguides" activeClassName="selected">
          Styleguides
        </Link>
      </li>
      <li>
        <Link to="/react-component-libraries" activeClassName="selected">
          Component Libraries
        </Link>
      </li>

      <li>
        <Link to="/react-people" activeClassName="selected">
          People
        </Link>
      </li>
    </ul>
    <h3>Components</h3>
    <ul>
      <li>
        <Link to="/component-resource" activeClassName="selected">
          Resource
        </Link>
      </li>
    </ul>
    <h3>Javascript</h3>
    <ul>
      <li>
        <Link to="/javascript-resource" activeClassName="selected">
          Resource
        </Link>
      </li>
      <li>
        <Link to="/javascript-styleguides" activeClassName="selected">
          Styleguides
        </Link>
      </li>
      <li>
        <Link to="/javascript-libraries" activeClassName="selected">
          Libraries
        </Link>
      </li>
      <li>
        <Link to="/javascript-people" activeClassName="selected">
          People
        </Link>
      </li>
    </ul>
    <h3>CSS</h3>
    <ul>
      <li>
        <Link to="/css-resource" activeClassName="selected">
          Resource
        </Link>
      </li>
      <li>
        <Link to="/css-flex-box" activeClassName="selected">
          Flex box
        </Link>
      </li>
      <li>
        <Link to="/css-grid" activeClassName="selected">
          CSS Grid
        </Link>
      </li>
      <li>
        <Link to="/css-utils" activeClassName="selected">
          CSS Utils
        </Link>
      </li>
      <li>
        <Link to="/css-cheat-sheet" activeClassName="selected">
          Cheat-sheet
        </Link>
      </li>
      <li>
        <Link to="/css-people" activeClassName="selected">
          CSS People
        </Link>
      </li>
    </ul>
    <h3>HTML</h3>
    <ul>
      <li>
        <Link to="/html-standards" activeClassName="selected">
          Standards
        </Link>
      </li>
      <li>
        <Link to="/html-semantics" activeClassName="selected">
          Semantics
        </Link>
      </li>
      <li>
        <Link to="/html-cheat-sheet" activeClassName="selected">
          Cheat sheet
        </Link>
      </li>
      <li>
        <Link to="/html-resource" activeClassName="selected">
          Resource
        </Link>
      </li>
    </ul>
    <h3>Typescript</h3>
    <ul style={{ height: "100px" }}>
      <li>
        <Link to="/typescript-resource" activeClassName="selected">
          Resource
        </Link>
      </li>
      <li>
        <Link to="/typescript-styleguides" activeClassName="selected">
          Styleguides
        </Link>
      </li>
      <li>
        <Link to="/typescript-people" activeClassName="selected">
          People
        </Link>
      </li>
    </ul>
  </FixedStyleBar>
);

export default Sidebar;
