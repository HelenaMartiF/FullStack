import { useState } from "react";
import "./App.css";
import DigitalClock from "./layouts/DigitalClock";
import Countdown from "./layouts/CountDown";
import Stopwatch from "./layouts/StopWatch";


function App() {
  return (
    <>
    <DigitalClock/>
    <Countdown/>
    <Stopwatch/>
    </>
  );
  }

export default App;
