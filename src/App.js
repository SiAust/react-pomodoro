import "./styles/App.css";

import Timer from "./components/timer";

function App() {
  return (
    <div className="App">
      <header className="App-header">Pomodoro Timer</header>
      <Timer />
      <footer className="app-footer">
        <p>
          Designed and coded by{" "}
          <a href="http://www.simonaust.co.uk">Simon Aust</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
