import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import Headers from "./components/Headers";
import NotesListPage from "./pages/NotesListPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Headers />
        <Routes>
          <Route path="/" exact element={<NotesListPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
