import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home"
import Header from "./components/Header";
import Footer from "./components/Footer";
import TVShows from "./components/TVShows";
import Movies from "./components/Movies";
import RecentlyAdded from "./components/RecentlyAdded";
import MyList from "./components/MyList";
import PlayMovies from './components/PlayMovies';
 
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/tvshows" element={<TVShows />}/>
        <Route path="/movies" element={<Movies />}/>
        <Route path="/recent" element={<RecentlyAdded />}/>
        <Route path="/mylist" element={<MyList />}/>
        <Route path="/playmovies/:id" component={PlayMovies} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
