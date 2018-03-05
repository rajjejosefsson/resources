import React from "react";
import styled from "styled-components";

const Hr = styled.hr`
  margin-bottom: calc(1.05rem - 1px);
  background: hsla(0, 0%, 0%, 0.2);
  border: none;
  height: 1px;
  background-color: #f5f3f7;
  margin-top: 2.8rem;
`;

export default class MarkdownPageFooter extends React.Component {
  constructor() {
    super();
    this.state = { feedbackSubmitted: false };
  }
  render() {
    return (
      <div key="div">
        <Hr />
        <a
          style={{
            position: "absolute",
            bottom: "0",
            right: "0",
            float: "right",
            display: "block",
            color: "hsla(270,6.8076334240000005%,0%,0.54)",
            fontSize: "0.87055rem",
            border: "none",
            padding: "0.7rem"
          }}
          href={`https://github.com/rajjejosefsson/resources/blob/master/src/docs${
            this.props.page.frontmatter.path
          }.md`}
        >
          edit this page on GitHub
        </a>
      </div>
    );
  }
}
