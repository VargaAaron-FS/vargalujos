import React, {  } from "react";
// import { Link } from "react-router-dom";
import styled from "styled-components";

export default function PrimaryButton(props) {
  return (
    <Button>
      <span style={{ borderBottom: "2px solid #FFD800", paddingBottom: ".25rem" }}>
        {props.buttonTitle}
      </span>
    </Button>
  );
}

const Button = styled.button`
  display: flex;
  flex-direction: row;
  background: #151515;
  color: #fff;
  padding: 1rem 3rem;
  justify-content: center;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 1rem;
  cursor: pointer;
  border-radius: .25rem;
  border: none;
  margin: auto;
  margin-top: 1rem;
  &:hover {
    background: #000;
  }
  @media (min-width: 1280px) {
    font-size: 1.25rem;
  }
  @media (min-width: 1536px) {
    font-size: 1.5rem;
  }
`;
