import { useState } from "react";
import "./App.css";
import Chart from "./components/Chart/Chart";
import Splash from "./components/Splash/Splash";
import Teams from "./components/Teams/Teams";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div>
      {showSplash && <Splash onFinish={() => setShowSplash(false)} />}
      <h1>adidas runners Zagreb January Battle 2026</h1>
      <Teams />
      <Chart />
    </div>
  );
}

export default App;
