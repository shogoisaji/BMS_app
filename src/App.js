import "./App.css";
import Login from "./pages/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Account from "./pages/Account";
import Search from "./pages/Search";
import SearchResult from "./pages/SearchResult";
import NotFound from "./pages/NotFound";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const routes = isLoggedIn ? (
    <>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<Detail />} />
      <Route path="/account" element={<Account />} />
      <Route path="/search" element={<Search />} />
      <Route path="/search/result" element={<SearchResult />} />
    </>
  ) : (
    <>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </>
  );

  return (
    <Router>
      <AuthProvider>
        <Routes>
          {routes}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
