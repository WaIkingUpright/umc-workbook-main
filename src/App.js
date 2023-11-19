import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx"
import Movies from "./pages/Movies.jsx";
import TV from "./pages/TV.jsx";
import Celebrity from "./pages/Celebrity.jsx";
import NotFound from "./pages/NotFound.jsx";
import Header from "./components/Header.jsx";
import {movies} from "./movieDummy.js";
import {programs} from "./tvDummy.js"
import MovieDetail from "./pages/MovieDetail.jsx";
import Login from "./pages/Login.jsx";
import TVDetail from "./pages/TVDetail.jsx";

function App() {
  return (
    <div className="root-wrap">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/movie" element={<Movies {...movies}/>} />
          <Route path="/movie/:title" element={<MovieDetail />}/>
          <Route path="/tv" element={<TV {...programs}/>} />
          <Route path="/tv/:title" element={<TVDetail />} />
          <Route path="/person" element={<Celebrity/>} />
          <Route path="/*" element={<NotFound/>} />
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;