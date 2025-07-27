import React from 'react';

function Watchlist({ movies, removeFromWatchlist, goBack }) {
  return (
    <div className="watchlist-container" style={{ animation: 'watchlist-slidein 0.7s cubic-bezier(.4,2,.6,1)' }}>
      <h2 style={{ animation: 'watchlist-fadein 1.1s 0.2s both' }}>Your Watchlist ({movies.length})</h2>
      {movies.length === 0 ? (
        <p style={{ animation: 'watchlist-fadein 1.1s 0.3s both' }}>Your watchlist is empty. Add some movies!</p>
      ) : (
        <div className="watchlist-mini-list">
          {movies.map((movie, idx) => (
            <div
              key={movie.id}
              className="watchlist-mini-movie"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '14px',
                background: 'rgba(255,255,255,0.13)',
                borderRadius: '12px',
                padding: '7px 10px',
                boxShadow: '0 1px 6px 0 rgba(24,90,157,0.07)',
                animation: `watchlist-fadein 0.8s ${0.18 + idx * 0.07}s both`,
              }}
            >
              <img src={movie.imageUrl} alt={movie.title} style={{ width: 48, height: 68, objectFit: 'cover', borderRadius: '7px', boxShadow: '0 1px 4px #185a9d22' }} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontWeight: 700, fontSize: '0.98rem', color: '#185a9d', marginBottom: 2, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{movie.title}</div>
                <div style={{ fontSize: '0.85rem', color: '#444', marginBottom: 2, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{movie.year} &bull; {movie.genre && movie.genre.join(', ')}</div>
                <div style={{ fontSize: '0.82rem', color: '#555', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: 160 }}>{movie.description.slice(0, 48)}{movie.description.length > 48 ? '...' : ''}</div>
              </div>
              <button 
                onClick={() => removeFromWatchlist(movie.id)}
                className="remove-btn"
                style={{ marginLeft: 6, background: 'linear-gradient(90deg, #ff5858 0%, #f09819 100%)', color: '#fff', border: 'none', borderRadius: '8px', padding: '4px 10px', fontWeight: 700, fontSize: '0.85rem', cursor: 'pointer', boxShadow: '0 1px 4px #ff585822', transition: 'background 0.18s' }}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
      <style>{`
        @keyframes watchlist-slidein {
          0% { opacity: 0; transform: translateX(60px) scale(0.98); }
          60% { opacity: 0.7; transform: translateX(-8px) scale(1.03); }
          100% { opacity: 1; transform: translateX(0) scale(1); }
        }
        @keyframes watchlist-fadein {
          0% { opacity: 0; transform: translateY(18px) scale(0.98); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </div>
  );
}

export default Watchlist;