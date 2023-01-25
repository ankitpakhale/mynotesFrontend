import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import Headers from "./components/Headers";
import NotePage from "./pages/NotePage";
import NotesListPage from "./pages/NotesListPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Headers />
        <Routes>
          <Route path="/" exact element={<NotesListPage />} />
          <Route path="/note/:id" exact element={<NotePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
