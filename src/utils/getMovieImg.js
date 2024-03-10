import placeholder from "../placeholder.jpg"

export function getMovieImg(path) {
    return path
    ? "https://image.tmdb.org/t/p/w300" + path 
    : placeholder;
}