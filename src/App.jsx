import React from 'react'
import { Route } from "react-router-dom";

import Notion from "./Notion";

import './App.css';

function App() {
  return (
    <Route exact strict path="/:pageId">
      <Notion />
    </Route>
  )
}

export default App
