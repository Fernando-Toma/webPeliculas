import styles from "./App.module.css"
import {BrowserRouter as Router, Routes,Route,Link} from "react-router-dom"; 
import {LandingPage} from "./pages/LandingPage"
import {MovieDetails} from "./pages/MovieDetails"
import { Footer } from "./Footer";

export function App() {
  return (
    <Router>
      <header>
        <Link to="/">
        <h1 className={styles.title}>Movies</h1> 
        </Link>
      </header>
      <main>
      <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route exact path="/movies/:movieId" element={<MovieDetails />}></Route>
      </Routes>
      <Footer />
      </main>
      
    </Router>
  );
}
