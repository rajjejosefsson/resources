import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import MarginContainer from "../shared/MarginContainer";
import Ionicon from "react-ionicons";
import * as colors from "../../theme/colors";

const FooterContainer = styled.footer`
  padding: 32px 0;
  background-color: ${colors.gray};
  color: ${colors.beige};
`;
const FooterContent = styled.nav`
  display: flex;
  justify-content: space-between;
`;

const Copy = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const LinkList = styled.div`
  display: flex;
`;

const LinkBlock = styled.nav`
  margin-right: 50px;
  a {
    color: ${colors.beige} !important;
    display: block;
    text-decoration: none;
  }
`;

const SocialList = styled.nav`
  display: flex;
  align-items: flex-start;
  a {
    margin-left: 32px;
  }
  img {
    padding: 4px 0;
    height: 24px;
  }
`;

const Footer = () => (
  <FooterContainer>
    <MarginContainer>
      <FooterContent>
        <Copy>Copyright &copy; 2018</Copy>
        <SocialList>
          <a href="https://twitter.com/_rjosefsson">
            <Ionicon icon="logo-twitter" fontSize="24px" color={colors.beige} />
          </a>
        </SocialList>
      </FooterContent>
    </MarginContainer>
  </FooterContainer>
);

export default Footer;
