import React, { useState, useEffect } from "react";
import { Route, useLocation, useParams } from "react-router-dom";
import axios from "axios";

import { NotionRenderer } from "@/components/notion-react";

import "@/style/styles.css";
import "@/style/prism-tomorrow.css";

import response from "@/data/resume.json"; // https://notion.snyung.workers.dev/v1/page/46d9612b457b4c23bc073105e69d15e3

function Notion() {
  const { pageId } = useParams();
  const [blockMap, setBlockMap] = useState({});

  useEffect(() => {
    axios.get(`https://notion.snyung.workers.dev/v1/page/${pageId}`).then((res) => {
      setBlockMap(res.data)
    })
  }, [])

  return <NotionRenderer blockMap={blockMap} fullPage={true} />;
}

export default Notion;
