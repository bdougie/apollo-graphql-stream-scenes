/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Router } from "@reach/router";

import MissionBriefing from "./scenes/mission-briefing";
import LaunchPad from "./scenes/launch-pad";
import Orbit from "./scenes/orbit";
import Chat from "./overlays/chat";
import Follows from "./overlays/new-follows";
import CurrentViewerCount from "./overlays/current-viewer-count";

function App() {
  return (
    <Router css={{ width: "100vw", height: "100vh" }}>
      <MissionBriefing path="/mission-briefing" />
      <LaunchPad path="/launch-pad" />
      <Orbit path="/orbit" />
      <Chat path="/chat" />
      <Follows path="/follows" />
      <CurrentViewerCount path="/current-viewer-count" />
    </Router>
  );
}

export default App;
