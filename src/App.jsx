import React, { useEffect, useState } from 'react'
import { NotionRenderer } from "react-notion";
import axios from 'axios';

import './App.css'
import "./prism-tomorrow.css"; // only needed for code highlighting

import response from "./page.json"; // https://www.notion.so/api/v3/loadPageChunk

function App() {
  const [blockMap, setBlockMap] = useState({})

  useEffect(() => {
    axios.get('https://worker-test.zaritalk.workers.dev/v1/page/46d9612b457b4c23bc073105e69d15e3').then((res) => {
      setBlockMap(res.data)
    })
  }, [])

  return (
    <div className="App">
      <div style={{ maxWidth: 768 }}>
        <NotionRenderer blockMap={blockMap} />
      </div>
    </div>
  )
}

export default App
