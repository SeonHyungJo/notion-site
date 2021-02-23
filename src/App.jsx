import React from 'react'
import './App.css'

import "./prism-tomorrow.css"; // only needed for code highlighting
import { NotionRenderer } from "react-notion";

import response from "./page.json"; // https://www.notion.so/api/v3/loadPageChunk

const blockMap = response;

function App() {
  return (
    <div className="App">
      <div style={{ maxWidth: 768 }}>
        <NotionRenderer blockMap={blockMap} />
      </div>
    </div>
  )
}

export default App
