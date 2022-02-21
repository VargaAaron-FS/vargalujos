import React from 'react';
import styled from 'styled-components';

// Components
import MyHeader from "./components/MyHeader";

// Pages
// Pages go here!

// Routing
// import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <AppContainer>
      <MyHeader />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  // Styles here!
`;
