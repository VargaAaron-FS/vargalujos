import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Announcement(props) {
  return (
    <AnnouncementContainer>
      <AnnouncementLink to="/pairing-assistant">
        <Paragraph>
          {props.announcementCopy}
          <LinkHighlight>{props.linkHighlight}</LinkHighlight>
        </Paragraph>
      </AnnouncementLink>
    </AnnouncementContainer>
  );
}

const AnnouncementContainer = styled.div``;

const AnnouncementLink = styled(Link)`
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
