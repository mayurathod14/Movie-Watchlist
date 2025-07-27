import React from 'react';

function MovieCard({ movie, addToWatchlist, inWatchlist }) {
  // fallback images for all movies
  const fallbackImages = {
    "RRR": "https://upload.wikimedia.org/wikipedia/en/d/d7/RRR_Poster.jpg",
    "Baahubali: The Beginning": "https://upload.wikimedia.org/wikipedia/en/5/5d/Baahubali_The_Beginning_poster.jpg",
    "3 Idiots": "https://upload.wikimedia.org/wikipedia/en/d/df/3_idiots_poster.jpg",
    "Dangal": "https://upload.wikimedia.org/wikipedia/en/9/99/Dangal_Poster.jpg",
    "Lagaan": "https://upload.wikimedia.org/wikipedia/en/b/b6/Lagaan.jpg",
    "PK": "https://upload.wikimedia.org/wikipedia/en/c/c3/PK_poster.jpg",
    "Gully Boy": "https://upload.wikimedia.org/wikipedia/en/9/9a/Gully_Boy_poster.jpg",
    "Queen": "https://upload.wikimedia.org/wikipedia/en/6/6a/QueenMoviePoster7thMarch.jpg",
    "Swades": "https://upload.wikimedia.org/wikipedia/en/5/5c/Swades_poster.jpg",
    "Barfi!": "https://upload.wikimedia.org/wikipedia/en/7/7e/Barfi%21_poster.jpg",
    "Chakde! India": "https://upload.wikimedia.org/wikipedia/en/2/2e/Chakde_india.jpg",
    "Andhadhun": "https://upload.wikimedia.org/wikipedia/en/6/6e/Andhadhun_poster.jpg",
    "Taare Zameen Par": "https://upload.wikimedia.org/wikipedia/en/8/8c/Taare_Zameen_Par.jpg",
    "Zindagi Na Milegi Dobara": "https://upload.wikimedia.org/wikipedia/en/3/3c/Zindaginamilegidobara.jpg",
    "Drishyam": "https://upload.wikimedia.org/wikipedia/en/6/6e/Drishyam_poster.jpg"
  };

  const fallbackImage = fallbackImages[movie.title];

  return (
    <div className="movie-card">
      <img
        src={movie.imageUrl}
        alt={movie.title}
        className="movie-poster"
        onError={fallbackImage ? (e) => { e.target.onerror = null; e.target.src = fallbackImage; } : undefined}
      />
      <div className="movie-info">
        <h3>{movie.title} ({movie.year})</h3>
        <p className="genre">{movie.genre.join(', ')}</p>
        <p className="description">{movie.description}</p>
        <button
          onClick={() => addToWatchlist(movie)}
          disabled={inWatchlist}
          className={inWatchlist ? 'added-btn' : 'add-btn'}
        >
          {inWatchlist ? 'Added to Watchlist' : 'Add to Watchlist'}
        </button>
      </div>
    </div>
  );
}

export default MovieCard;