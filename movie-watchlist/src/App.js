import React, { useState, useRef } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import MovieCard from './component/MovieCard';
import Watchlist from './component/Watchlist';
import Sidebar from './component/Sidebar';
import './component/Sidebar.css';

function App() {
  const [watchlist, setWatchlist] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showWatchlist, setShowWatchlist] = useState(false);
  const watchlistTimeoutRef = useRef(null);


  // All movie objects in unsortedMovies (add all from previous array, not just the first 8)
  const unsortedMovies = [
    { id: 1, title: "Sitaare Zameen Par", year: 2025, description: "A heartwarming story about children who shine in their own unique ways, inspiring those around them.", imageUrl: '/sitaare_zameen_par.jpg', genre: ["Drama", "Family"] },
    { id: 2, title: "Avatar: Fire and Ash", year: 2025, description: "An epic fantasy adventure where elemental powers clash in a world on the brink of transformation.", imageUrl: '/avatar_fire_and_ash.jpg', genre: ["Fantasy", "Adventure"] },
    { id: 3, title: "War 2", year: 2025, description: "A high-octane action thriller as two elite agents face off in a global game of espionage and betrayal.", imageUrl: '/war_2.jpg', genre: ["Action", "Thriller"] },
    { id: 4, title: "Son of Sardaar 2", year: 2025, description: "A comedy-packed sequel with new adventures and family drama in the Sardaar household.", imageUrl: '/son_of_sardaar_2.jpg', genre: ["Comedy", "Drama"] },
    { id: 5, title: "Dhadak 2", year: 2025, description: "A romantic drama exploring new relationships and challenges in a modern Indian setting.", imageUrl: '/dhadak_2.jpg', genre: ["Romance", "Drama"] },
    { id: 6, title: "Baaghi 4", year: 2025, description: "The next chapter in the action-packed Baaghi franchise, with new stunts and a fight for justice.", imageUrl: '/baaghi_4.jpg', genre: ["Action", "Thriller"] },
    { id: 7, title: "Saiyaara", year: 2025, description: "A heartfelt journey of two souls who find love and hope amidst life's adversities, set against the backdrop of mesmerizing landscapes.", imageUrl: '/saiyaara.jpg', genre: ["Romance", "Drama"] },
    { id: 8, title: "Metro In Dino", year: 2025, description: "A contemporary urban drama exploring the intersecting lives and relationships of people in a bustling city.", imageUrl: '/metro_in_dino.jpg', genre: ["Drama", "Romance"] },
    { id: 9, title: "RRR", year: 2022, description: "A fictional story about two Indian revolutionaries, Alluri Sitarama Raju and Komaram Bheem, who fought against the British Raj and the Nizam of Hyderabad respectively.", imageUrl: '/rrr.jpg', genre: ["Action", "Drama"] },
    { id: 10, title: "Baahubali: The Beginning", year: 2015, description: "The story of two brothers, who are unaware of their royal lineage, and their quest to reclaim their kingdom from the tyrannical king.", imageUrl: '/Baahubali_The_Beginning_poster.jpg', genre: ["Action", "Adventure"] },
    { id: 11, title: "3 Idiots", year: 2009, description: "Three friends embark on a quest for education and self-discovery, challenging the traditional Indian education system.", imageUrl: '/3_idiots.jpg', genre: ["Comedy", "Drama"] },
    { id: 12, title: "Dangal", year: 2016, description: "The story of a former wrestler who trains his daughters to become world-class wrestlers, challenging societal norms.", imageUrl: '/dangal.jpg', genre: ["Biography", "Drama", "Sport"] },
    { id: 13, title: "Lagaan", year: 2001, description: "Set in the Victorian period of India's colonial British Raj, it tells the story of a small village that challenges the British to a game of cricket to avoid paying taxes.", imageUrl: '/lagaan.jpg', genre: ["Drama", "Musical", "Sport"] },
    { id: 14, title: "PK", year: 2014, description: "An alien lands on Earth and questions the religious beliefs of humans, leading to a series of humorous and thought-provoking events.", imageUrl: '/pk.png', genre: ["Comedy", "Drama", "Sci-Fi"] },
    { id: 15, title: "Gully Boy", year: 2019, description: "Inspired by the lives of street rappers in Mumbai, it tells the story of a young man who rises from the slums to become a successful rapper.", imageUrl: '/gully_boy.jpg', genre: ["Drama", "Music"] },
    { id: 16, title: "Queen", year: 2013, description: "A young woman from Delhi embarks on a solo honeymoon trip to Europe after her marriage falls apart, discovering independence and self-confidence along the way.", imageUrl: '/queen.jpg', genre: ["Adventure", "Comedy", "Drama"] },
    { id: 17, title: "Swades", year: 2004, description: "An Indian expatriate returns to his homeland to find his roots and help his village with a hydroelectric project.", imageUrl: '/swades.jpg', genre: ["Drama"] },
    { id: 18, title: "Barfi!", year: 2012, description: "Three young people learn that love can neither be defined nor contained by society's norms of normal and abnormal.", imageUrl: '/barfi.jpg', genre: ["Comedy", "Drama", "Romance"] },
    { id: 19, title: "Chakde! India", year: 2007, description: "Kabir Khan, a former hockey star, is tainted as someone who betrayed his country. However, he begins coaching the Indian women's national hockey team to prove his loyalty to the nation.", imageUrl: '/chakde_india.jpg', genre: ["Drama", "Family", "Sport"] },
    { id: 20, title: "Andhadhun", year: 2018, description: "A series of mysterious events change the life of a blind pianist who must now report a crime that he never actually witnessed.", imageUrl: '/andhadhun.jpg', genre: ["Crime", "Thriller"] },
    { id: 21, title: "Taare Zameen Par", year: 2007, description: "An eight-year-old boy is thought to be a lazy trouble-maker, until the new art teacher has the patience and compassion to discover the real problem behind his struggles in school.", imageUrl: '/taare_zameen_par.jpg', genre: ["Drama", "Family"] },
    { id: 22, title: "Zindagi Na Milegi Dobara", year: 2011, description: "Three friends decide to turn their fantasy vacation into reality after one of their number becomes engaged.", imageUrl: '/zindagi_na_milegi_dobara.jpg', genre: ["Adventure", "Comedy", "Drama"] },
    { id: 23, title: "Drishyam", year: 2015, description: "A man goes to great lengths to save his family from the dark side of the law after they commit an unexpected crime.", imageUrl: '/drishyam.jpg', genre: ["Crime", "Drama", "Thriller"] },
    { id: 24, title: "Rockstar", year: 2011, description: "A passionate musician's journey through love, heartbreak, and self-discovery.", imageUrl: '/rockstar.jpg', genre: ["Drama", "Music", "Romance"] },
    { id: 25, title: "Kabir Singh", year: 2019, description: "A brilliant but troubled surgeon spirals into self-destruction after a failed relationship.", imageUrl: '/kabir_singh.jpg', genre: ["Drama", "Romance"] },
    { id: 26, title: "Article 15", year: 2019, description: "A police officer investigates caste-based crimes in rural India, confronting deep-rooted social issues.", imageUrl: '/article_15.jpg', genre: ["Crime", "Drama", "Thriller"] },
    { id: 27, title: "Stree", year: 2018, description: "A small town is haunted by a mysterious female spirit in this horror-comedy.", imageUrl: '/stree.jpg', genre: ["Comedy", "Horror"] },
    // Add back any movies that were previously removed for missing imageUrl here
  ];

  // Extract unique genres
  const allGenres = Array.from(new Set(unsortedMovies.flatMap(m => m.genre))).sort();

  // Filter movies by selected genre
  const filteredMovies = selectedGenre
    ? unsortedMovies.filter(m => m.genre.includes(selectedGenre))
    : unsortedMovies;

  const addToWatchlist = (movie) => {
    if (!watchlist.some(item => item.id === movie.id)) {
      setWatchlist(prev => {
        setShowWatchlist(true);
        if (watchlistTimeoutRef.current) {
          clearTimeout(watchlistTimeoutRef.current);
        }
        watchlistTimeoutRef.current = setTimeout(() => setShowWatchlist(false), 5000);
        return [...prev, movie];
      });
    }
  };

  // Find the first movie not in the watchlist
  const nextMovieToAdd = filteredMovies.find(movie => !watchlist.some(item => item.id === movie.id));

  // Sidebar toggle handler
  const handleSidebarToggle = () => setIsSidebarOpen(open => !open);
  // Close sidebar when a genre is selected (on mobile)
  const handleSelectGenre = (genre) => {
    setSelectedGenre(genre);
    setIsSidebarOpen(false);
  };

  const removeFromWatchlist = (movieId) => {
    setWatchlist(watchlist.filter(movie => movie.id !== movieId));
  };
  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', position: 'relative' }}>
      {/* Full-width Navbar at the top */}
      <Navbar
        onSidebarToggle={handleSidebarToggle}
        isSidebarOpen={isSidebarOpen}
        onShowWatchlist={() => {
          setShowWatchlist(true);
          if (watchlistTimeoutRef.current) {
            clearTimeout(watchlistTimeoutRef.current);
          }
          watchlistTimeoutRef.current = setTimeout(() => setShowWatchlist(false), 5000);
        }}
      />
      {/* Main content: Sidebar and Movies below Navbar */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'row', width: '100%' }}>
        {/* Sidebar */}
        <div style={{ flex: '0 0 auto', zIndex: 100, position: 'relative' }}>
          <div
            className="sidebar-wrapper"
            style={{
              position: 'sticky',
              top: 0,
              height: '100vh',
              transition: 'left 0.3s',
              left: isSidebarOpen ? 0 : undefined,
              background: 'none',
              display: 'block',
            }}
          >
            <Sidebar
              genres={allGenres}
              selectedGenre={selectedGenre}
              onSelectGenre={handleSelectGenre}
              style={{ display: isSidebarOpen ? 'block' : undefined }}
            />
          </div>
          {/* Overlay for mobile when sidebar is open */}
          {isSidebarOpen && (
            <div
              onClick={() => setIsSidebarOpen(false)}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                background: 'rgba(0,0,0,0.18)',
                zIndex: 99,
                display: 'block',
              }}
            />
          )}
        </div>
        {/* Movies and Watchlist */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'row' }}>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <div className="movie-container">
              {filteredMovies.map(movie => (
                <MovieCard 
                  key={movie.id} 
                  movie={movie} 
                  addToWatchlist={addToWatchlist}
                  inWatchlist={watchlist.some(item => item.id === movie.id)}
                />
              ))}
            </div>
            {nextMovieToAdd && (
              <div style={{ textAlign: 'center', margin: '20px' }}>
                <button onClick={() => addToWatchlist(nextMovieToAdd)} style={{ padding: '10px 20px', fontSize: '16px', background: '#1976d2', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                  And add many more movie to your watchlist!!!!
                </button>
              </div>
            )}
          </div>
          {showWatchlist && (
            <div style={{ width: '320px', minWidth: '220px', maxWidth: '420px', background: 'rgba(255,255,255,0.18)', boxShadow: '0 2px 12px 0 rgba(24,90,157,0.10)', borderLeft: '1.5px solid rgba(24,90,157,0.10)', padding: '18px 10px 10px 10px', margin: '0 0 0 10px', borderRadius: '0 0 18px 0', height: 'calc(100vh - 18px)', overflowY: 'auto', position: 'sticky', top: 0, zIndex: 10, animation: 'watchlist-fadein 0.8s cubic-bezier(.4,2,.6,1)' }}>
              <Watchlist 
                movies={watchlist} 
                removeFromWatchlist={removeFromWatchlist}
              />
            </div>
          )}
        </div>
      </div>
      <button
        className="floating-watchlist-btn"
        onClick={() => {
          setShowWatchlist(true);
          if (watchlistTimeoutRef.current) {
            clearTimeout(watchlistTimeoutRef.current);
          }
          watchlistTimeoutRef.current = setTimeout(() => setShowWatchlist(false), 5000);
        }}
        aria-label="Show Watchlist"
        style={{
          position: 'fixed',
          right: 28,
          bottom: 32,
          zIndex: 999,
          background: 'linear-gradient(90deg, #43cea2 0%, #185a9d 100%)',
          color: '#fff',
          border: 'none',
          borderRadius: '50%',
          width: 60,
          height: 60,
          boxShadow: '0 4px 24px 0 rgba(24,90,157,0.18)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '2rem',
          cursor: 'pointer',
          transition: 'background 0.18s, transform 0.18s',
          outline: 'none',
        }}
      >
        <span style={{ animation: 'bounce 1.2s infinite' }}>🎬</span>
      </button>
      <style>{`
        @keyframes watchlist-fadein {
          0% { opacity: 0; transform: translateY(30px) scale(0.98); }
          60% { opacity: 1; transform: translateY(-8px) scale(1.03); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        .floating-watchlist-btn:hover {
          background: linear-gradient(90deg, #43cea2 0%, #43cea2 100%);
          transform: scale(1.09) translateY(-2px);
          box-shadow: 0 8px 32px 0 rgba(24,90,157,0.22);
        }
        @media (max-width: 700px) {
          .floating-watchlist-btn {
            width: 48px !important;
            height: 48px !important;
            font-size: 1.3rem !important;
            right: 12px !important;
            bottom: 16px !important;
          }
        }
      `}</style>
      <style>{`
        @media (max-width: 1100px) {
          .sidebar-wrapper {
            position: fixed !important;
            left: ${isSidebarOpen ? '0' : '-260px'};
            top: 0;
            z-index: 200;
            background: none;
            height: 100vh;
            transition: left 0.3s;
          }
          .App > div:last-child > div:last-child {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}

export default App;