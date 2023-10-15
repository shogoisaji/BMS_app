import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./contexts/AuthContext";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Account from "./pages/Account";
import Search from "./pages/Search";
import SearchResult from "./pages/SearchResult";
import NotFound from "./pages/NotFound";

function App() {
  const { user } = useContext(AuthContext);

  const routes =
    user != null ? (
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
      <AuthContext>
        <Routes>
          {routes}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthContext>
    </Router>
  );
}

export default App;
