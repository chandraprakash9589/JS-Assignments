import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import HomePage from "./pages/HomePage";
// import store from "./redux/store";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Add other routes for todos, posts, and comments */}
      </Routes>
    </Router>
  );
};

export default App;
