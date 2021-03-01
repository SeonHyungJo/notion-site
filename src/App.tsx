import React from "react";
import { Route } from "react-router-dom";

import Notion from "./components/notion";

function App() {
  return (
    <>
      <Route exact strict path="/:pageId">
        <Notion />
      </Route>
      <Route path="*">
        <section className="no-match">
          <p className="no-match__text">Invalid URL</p>
          <p className="no-match__text">
            Please https://notion.snyung.com/[pageId]
          </p>
        </section>
      </Route>
    </>
  );
}

export default App;
