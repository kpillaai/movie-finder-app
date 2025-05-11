import "../css/MovieCard.css";
import { useMovieContext } from "../contexts/MovieContext";

function MovieCard({ movie }) {
  const { isFavourite, addToFavourites, removeFromFavourites } =
    useMovieContext();
  const favourite = isFavourite(movie.id);

  function onFavouriteClick(e) {
    e.preventDefault();
    console.log("Before click:", favourite);
    if (favourite) {
      removeFromFavourites(movie.id);
      console.log("is favourite");
    } else {
      addToFavourites(movie);
      console.log("is not favourite");
    }
    console.log("After click:", isFavourite(movie.id));
  }

  function getMonth(monthNumber) {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    return monthNames[monthNumber];
  }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
      </div>
      <div className="movie-overlay">
        <button
          className={`favourite-btn ${favourite ? "active" : ""}`}
          onClick={onFavouriteClick}
        >
          ♥
        </button>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>
          {getMonth(parseInt(movie.release_date?.split("-")[1]))}{" "}
          {movie.release_date?.split("-")[0]}
        </p>
      </div>
    </div>
  );
}

export default MovieCard;
