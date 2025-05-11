import "../css/MovieCard.css";

function MovieCard({ movie }) {
  function onFavouriteClick() {
    alert("clicked");
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
        <button className="favourite-btn" onClick={onFavouriteClick}>
          ♡
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
