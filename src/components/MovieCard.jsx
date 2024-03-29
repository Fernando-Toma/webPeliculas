import styles from "./MovieCard.module.css"
import { Link } from "react-router-dom";
import { getMovieImg } from "../utils/getMovieImg";

export function MovieCard({ movie }) {
    const imagenUrl = getMovieImg(movie.poster_path)

    return (
    <li className={styles.movieCard}>
        <Link to={"/movies/" + movie.id}>
            <img className={styles.movieImage} src={imagenUrl} alt={movie.title} />
            <div>{movie.title}</div>
        </Link>
    </li>
    );
}
