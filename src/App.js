import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx"
import Movies from "./pages/Movies.jsx";
import TV from "./pages/TV.jsx";
import Celebrity from "./pages/Celebrity.jsx";
import NotFound from "./pages/NotFound.jsx";
import Header from "./components/Header.jsx";
import {movies} from "./movieDummy.js";

function App() {
  return (
    <div className="root-wrap">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/movie" element={<Movies {...movies}/>} />
          <Route path="/tv" element={<TV/>} />
          <Route path="/person" element={<Celebrity/>} />
          <Route path="/*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;