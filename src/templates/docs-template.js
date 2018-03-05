import React, { Component } from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import MarkdownPageFooter from "../components/shared/MarkdownPageFooter";

const Container = styled.div`
  margin-bottom: 150px;
`;

const Header = styled.header`
  margin-bottom: 30px;

  span {
    opacity: 0.6;
    font-size: 20px;
    line-height: 24px;
    display: inline-block;
    margin: 8px 0;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  img {
  }

  blockquote {
    padding: 0 1em;
    color: #6a737d;
    border-left: 0.25em solid #dfe2e5;
  }

  hr {
    width: 100%;
    border-top: 1px solid #333;
    height: 0;
    background: transparent;
  }
`;

const Hr = styled.hr`
  margin-bottom: calc(1.05rem - 1px);
  background: hsla(0, 0%, 0%, 0.2);
  border: none;
  height: 1px;
  background-color: #f5f3f7;
`;

class Template extends Component {
  render() {
    const { data } = this.props;
    const { markdownRemark: page } = data;
    return (
      <Container>
        <Helmet title="Resources" />
        <div className="page">
          <Header>
            <h1>{page.frontmatter.title}</h1>
            {page.frontmatter.baseline && (
              <span>{page.frontmatter.baseline}</span>
            )}
            <Hr />
          </Header>
          <Content dangerouslySetInnerHTML={{ __html: page.html }} />
        </div>
        <MarkdownPageFooter page={page} />
      </Container>
    );
  }
}

export default Template;

export const pageQuery = graphql`
  query DocsByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        baseline
      }
    }
  }
`;
