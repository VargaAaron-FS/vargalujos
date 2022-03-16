import React from "react";
// import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Announcement(props) {
  return (
    <AnnouncementContainer>
      <Link href="/">
        <Paragraph>
          {props.announcementCopy}
          <LinkHighlight>{props.linkHighlight}</LinkHighlight>
        </Paragraph>
      </Link>
    </AnnouncementContainer>
  );
}

const AnnouncementContainer = styled.div``;

const Link = styled.a`
  margin-top: 1rem;
  display: block;
  text-align: center;
  align-items: center;
  padding: 1rem;
  border-radius: 0.25rem;
  text-decoration: none;
  color: #fff;
  background: #151515;
  &:hover {
    background: #000;
  }
`;

const Paragraph = styled.p`
  margin: 0;
`;

const LinkHighlight = styled.span`
  color: #ffd800;
  font-weight: 700;
  text-decoration: underline;
`;
