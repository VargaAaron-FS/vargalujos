import React, {  } from "react";
// import { Link } from "react-router-dom";
import styled from "styled-components";

import { FaSearch } from "react-icons/fa";

export default function SearchBar() {
  return (
    <SearchContainer>
      <FaSearch style={{ position: "absolute", right: "1rem", top: "1.35rem", cursor: "pointer", color: "#C4C4C4" }} />
      <Input placeholder="Search for products" />
    </SearchContainer>
  );
}

const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1rem;
  position: relative;
`;

const Input = styled.input`
  border: 1px solid #C4C4C4;
  padding: 1rem;
  border-radius: .25rem;
  font-size: 1rem;
  color: #151515;
  width: 100%;
  font-family: 'Poppins', sans-serif;
`;
