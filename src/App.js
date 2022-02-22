import React from 'react';
import styled from 'styled-components';

// Components
import MyHeader from "./components/MyHeader";
import MyNav from './components/MyNav';

// Pages
// Pages go here!

// Routing
// import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <AppContainer>
      <MyHeader />
      <MyNav />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;
