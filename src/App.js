import { Routes, Route } from "react-router-dom";
import TaskOne from "./TaskOne";
import TaskTwo from "./TaskTwo";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<TaskOne />} />
        <Route path="/Task1" element={<TaskOne />} />
        <Route path="/Task2" element={<TaskTwo />} />
      </Routes>
    </div>
  );
}

export default App;
