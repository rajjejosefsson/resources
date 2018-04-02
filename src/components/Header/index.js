import React from "react";
import Link from "gatsby-link";
import LogoSVG from "./_images/logo.svg";
import MarginContainer from "../shared/MarginContainer";
import styled from "styled-components";
import * as colors from "../../theme/colors";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 18px 0 60px 0;
  margin: 0 30px;

  @media (max-width: 600px) {
    padding: 5px 0;
  }
`;

const Logo = styled.div`
  a {
    line-height: auto;
    display: flex;
    font-size: 35px;
    img {
      height: 125px;

      padding: 0;
      margin: 0;
    }
  }
`;

const Nav = styled.nav`
  padding: 0;
  margin: 0;
  a {
    display: inline-block;
    color: ${colors.base} !important;
    margin: 0 0 0 50px;
    padding-bottom: 18px;
    position: relative;
    top: 18px;
    border-bottom: 5px solid #f2e9e0;

    &.selected,
    &:hover {
      border-bottom: 5px solid ${colors.blue};
    }
  }
`;

const Header = () => (
  <MarginContainer>
    <HeaderContainer>
      <Logo>
        <a href="#">
          <img src={LogoSVG} alt="Nasa" />
        </a>
      </Logo>
    </HeaderContainer>
  </MarginContainer>
);

export default Header;
