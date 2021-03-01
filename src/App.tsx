import React from "react";
import { Switch, Route } from "react-router-dom";

import Notion from "./components/notion";

function App() {
  return (
    <Switch>
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
    </Switch>
  );
}

export default App;
