
import React from 'react';

function Navbar({ watchlistCount, showWatchlist, onSidebarToggle, isSidebarOpen, onShowWatchlist }) {
  // For avatar dropdown (future use)
  const [showProfile, setShowProfile] = React.useState(false);
  // Responsive: show hamburger on small screens
  const [isMenuHovered, setIsMenuHovered] = React.useState(false);
  // ...existing code...
  return (
    <nav className="navbar classy-navbar glass-navbar" style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 2.2rem',
      background: 'linear-gradient(120deg, #fcb69f 0%, #ffecd2 100%)',
      boxShadow: '0 8px 32px 0 rgba(31,38,135,0.13)',
      height: '90px', minHeight: '90px',
      backdropFilter: 'blur(16px)',
      borderRadius: '0 0 28px 28px',
      border: '2px solid rgba(255,255,255,0.18)',
      position: 'sticky',
      top: 0,
      zIndex: 300,
      animation: 'navbar-slidein 1.1s cubic-bezier(.4,2,.6,1)',
      overflow: 'visible',
    }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {/* Hamburger menu for sidebar toggle */}
        <button
          className="hamburger-menu"
          aria-label={isSidebarOpen ? 'Close sidebar' : 'Open sidebar'}
          onClick={onSidebarToggle}
          onMouseEnter={() => setIsMenuHovered(true)}
          onMouseLeave={() => setIsMenuHovered(false)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            marginRight: '1.2rem',
            padding: 0,
            outline: 'none',
            zIndex: 300,
          }}
        >
          <span style={{ display: 'inline-block', width: 32, height: 32, position: 'relative' }}>
            {[0, 1, 2].map(i => (
              <span
                key={i}
                style={{
                  display: 'block',
                  position: 'absolute',
                  left: 0,
                  top: 8 + i * 8,
                  width: '100%',
                  height: 4,
                  borderRadius: 2,
                  background: isMenuHovered || isSidebarOpen ? 'linear-gradient(90deg, #43cea2 0%, #185a9d 100%)' : '#185a9d',
                  transition: 'background 0.2s',
                  boxShadow: '0 1px 4px #185a9d22',
                }}
              />
            ))}
          </span>
        </button>
        {/* Animated SVG Logo */}
        <span className="cinevibe-logo-anim" style={{ display: 'inline-block', width: 48, height: 48, marginRight: '0.7rem', borderRadius: '50%', boxShadow: '0 2px 12px #d7266022', background: 'white', animation: 'logo-fadein 1.2s', transition: 'box-shadow 0.3s, transform 0.3s' }}>
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
            <circle cx="24" cy="24" r="22" fill="#fff" stroke="#d72660" strokeWidth="3"/>
            <ellipse cx="24" cy="30" rx="12" ry="8" fill="#fcb69f">
              <animate attributeName="rx" values="12;14;12" dur="1.6s" repeatCount="indefinite"/>
              <animate attributeName="ry" values="8;7;8" dur="1.6s" repeatCount="indefinite"/>
            </ellipse>
            <ellipse cx="24" cy="18" rx="10" ry="6" fill="#ffecd2">
              <animate attributeName="rx" values="10;12;10" dur="1.2s" repeatCount="indefinite"/>
              <animate attributeName="ry" values="6;5;6" dur="1.2s" repeatCount="indefinite"/>
            </ellipse>
            <circle cx="18" cy="20" r="2.2" fill="#d72660">
              <animate attributeName="cy" values="20;18;20" dur="1.1s" repeatCount="indefinite"/>
            </circle>
            <circle cx="30" cy="20" r="2.2" fill="#d72660">
              <animate attributeName="cy" values="20;22;20" dur="1.1s" repeatCount="indefinite"/>
            </circle>
            <ellipse cx="24" cy="34" rx="4" ry="1.2" fill="#d72660" opacity="0.18">
              <animate attributeName="rx" values="4;6;4" dur="1.3s" repeatCount="indefinite"/>
            </ellipse>
          </svg>
        </span>
        <h1 style={{ margin: 0, fontFamily: 'cursive', color: '#d72660', letterSpacing: '1.7px', fontWeight: 800, textShadow: '1px 1px 10px #fff', fontSize: '2.1rem', filter: 'drop-shadow(0 2px 8px #fff8)', animation: 'logo-fadein 1.2s' }}>CineVibe</h1>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', flexWrap: 'nowrap', minWidth: 0, position: 'relative', zIndex: 2, justifyContent: 'flex-end', width: '100%', maxWidth: '340px' }}>
        {/* User avatar/profile dropdown */}
        <div style={{ position: 'relative', marginRight: '1.1rem' }}>
          {/* User initials circle as avatar replacement */}
          <span
            onClick={() => setShowProfile(v => !v)}
            tabIndex={0}
            aria-label="User profile"
            style={{
              width: 38,
              height: 38,
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '50%',
              background: showProfile ? 'linear-gradient(90deg, #43cea2 0%, #185a9d 100%)' : 'linear-gradient(90deg, #ffecd2 0%, #fcb69f 100%)',
              color: showProfile ? '#fff' : '#185a9d',
              fontWeight: 800,
              fontSize: '1.18rem',
              boxShadow: '0 2px 8px #185a9d33',
              border: '2px solid #fff',
              cursor: 'pointer',
              transition: 'box-shadow 0.2s, background 0.2s, color 0.2s',
              outline: 'none',
              userSelect: 'none',
              marginRight: 0,
            }}
          >
            MA
          </span>
          {showProfile && (
            <div style={{ position: 'absolute', right: 0, top: 48, background: 'rgba(255,255,255,0.98)', borderRadius: 12, boxShadow: '0 4px 24px #185a9d22', padding: '0.7rem 1.2rem', zIndex: 1000, minWidth: 120, animation: 'profile-fadein 0.3s' }}>
              <div style={{ fontWeight: 700, color: '#185a9d', marginBottom: 0 }}>Hi, mayu!!</div>
            </div>
          )}
        </div>
        {/* Logout button with ripple effect */}
        <button
          className="logout-btn classy-btn ripple-btn"
          style={{
            background: 'rgba(255,255,255,0.22)', color: '#d72660', border: 'none', borderRadius: '22px', padding: '10px 28px 10px 20px', fontWeight: 800, fontSize: '1.18rem', boxShadow: '0 4px 18px 0 rgba(215,38,96,0.13), 0 2px 8px 0 rgba(0,0,0,0.10)', cursor: 'pointer', margin: 0, transition: 'all 0.22s cubic-bezier(.4,2,.6,1)', position: 'relative', overflow: 'hidden', zIndex: 2, minWidth: '110px', verticalAlign: 'middle', display: 'inline-flex', alignItems: 'center', letterSpacing: '0.4px', backdropFilter: 'blur(2.5px)', animation: 'logout-fadein 1.3s',
          }}
          onClick={e => {
            // Ripple effect
            const btn = e.currentTarget;
            const circle = document.createElement('span');
            const diameter = Math.max(btn.clientWidth, btn.clientHeight);
            const radius = diameter / 2;
            circle.style.width = circle.style.height = `${diameter}px`;
            circle.style.left = `${e.clientX - btn.getBoundingClientRect().left - radius}px`;
            circle.style.top = `${e.clientY - btn.getBoundingClientRect().top - radius}px`;
            circle.classList.add('ripple');
            btn.appendChild(circle);
            setTimeout(() => circle.remove(), 600);
          }}
          tabIndex={0}
          aria-label="Logout"
        >
          <span style={{ marginRight: '10px', animation: 'bounce 1.2s infinite', fontSize: '1.25rem' }}>🚪</span>Logout
        </button>
      </div>
      <style>{`
        .cinevibe-logo-anim {
          transition: box-shadow 0.3s, transform 0.3s;
        }
        .cinevibe-logo-anim:hover {
          box-shadow: 0 0 24px 6px #d72660cc, 0 2px 12px #ffecd2, 0 0 40px 10px #43cea288;
          transform: scale(1.08) rotate(-8deg);
          animation: logo-glow 1.2s alternate infinite;
        }
        @keyframes logo-glow {
          0% { filter: drop-shadow(0 0 0px #d72660cc); }
          100% { filter: drop-shadow(0 0 16px #d72660cc) drop-shadow(0 0 8px #43cea2cc); }
        }
        /* Glassmorphism and animated gradient background */
        .glass-navbar {
          background: linear-gradient(120deg, #fcb69f 0%, #ffecd2 100%);
          box-shadow: 0 8px 32px 0 rgba(31,38,135,0.13);
          border: 2px solid rgba(255,255,255,0.18);
          backdrop-filter: blur(16px);
          position: sticky;
          top: 0;
          z-index: 300;
          overflow: visible;
          animation: navbar-bgmove 8s linear infinite alternate;
        }
        @keyframes navbar-bgmove {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
        /* Ripple effect for buttons */
        .ripple-btn {
          position: relative;
          overflow: hidden;
        }
        .ripple {
          position: absolute;
          border-radius: 50%;
          transform: scale(0);
          animation: ripple-animate 0.6s linear;
          background: rgba(215,38,96,0.18);
          pointer-events: none;
        }
        @keyframes ripple-animate {
          to {
            transform: scale(2.5);
            opacity: 0;
          }
        }
        /* Profile dropdown animation */
        @keyframes profile-fadein {
          0% { opacity: 0; transform: translateY(-10px) scale(0.98); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes navbar-slidein {
          0% { opacity: 0; transform: translateY(-40px) scale(0.98); }
          60% { opacity: 0.7; transform: translateY(8px) scale(1.03); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes logo-fadein {
          0% { opacity: 0; transform: scale(0.7) rotate(-8deg); }
          100% { opacity: 1; transform: scale(1) rotate(0deg); }
        }
        @keyframes logout-pulse {
          0%, 100% { box-shadow: 0 4px 18px 0 rgba(215,38,96,0.13), 0 2px 8px 0 rgba(0,0,0,0.10); }
          50% { box-shadow: 0 8px 32px 0 rgba(215,38,96,0.22), 0 4px 16px 0 rgba(0,0,0,0.13); }
        }
        @media (max-width: 1100px) {
          .hamburger-menu {
            display: inline-block !important;
          }
        }
        /* Sidebar overlay and scrollbar for mobile */
        @media (max-width: 1100px) {
          .sidebar {
            position: fixed !important;
            left: 0;
            top: 0;
            z-index: 250;
            height: 100vh !important;
            width: 220px !important;
            background: rgba(255,255,255,0.98) !important;
            box-shadow: 2px 0 16px 0 rgba(31,38,135,0.10);
            overflow-y: auto !important;
            transition: transform 0.3s;
            transform: translateX(${isSidebarOpen ? '0' : '-110%' });
          }
        }
        @media (max-width: 1100px) {
          .sidebar-list {
            max-height: 80vh;
            overflow-y: auto;
          }
        }
        /* Hide sidebar on mobile unless open */
        @media (max-width: 1100px) {
          .sidebar {
            display: ${isSidebarOpen ? 'block' : 'none'} !important;
          }
        }
        @keyframes popcorn-pop {
          0%, 100% { transform: scale(1); }
          20% { transform: scale(1.18); }
          40% { transform: scale(0.95); }
          60% { transform: scale(1.12); }
          80% { transform: scale(0.98); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .classy-btn {
          box-shadow: 0 4px 24px 0 rgba(31,38,135,0.10), 0 1.5px 8px 0 rgba(0,0,0,0.08);
          border: 1.5px solid rgba(255,255,255,0.22);
          background: rgba(255,255,255,0.18);
          backdrop-filter: blur(2.5px);
          transition: box-shadow 0.22s, background 0.22s, color 0.22s, transform 0.22s;
        }
        .classy-btn:hover, .classy-btn:focus {
          background: linear-gradient(90deg, #fcb69f 0%, #ffecd2 100%);
          color: #d72660;
          transform: translateY(-2px) scale(1.09) rotate(-1deg);
          box-shadow: 0 8px 32px 0 rgba(31,38,135,0.18), 0 2px 12px 0 rgba(0,0,0,0.12);
          z-index: 3;
          outline: none;
        }
        .logout-btn.classy-btn:hover, .logout-btn.classy-btn:focus {
          color: #fff;
          background: linear-gradient(90deg, #ff5858 0%, #f09819 100%);
          animation: logout-pulse 0.8s;
        }
        .watchlist-btn.classy-btn:hover, .watchlist-btn.classy-btn:focus {
          color: #fff;
          background: linear-gradient(90deg, #43cea2 0%, #185a9d 100%);
        }
        @media (max-width: 900px) {
          .navbar > div:last-child {
            flex-wrap: wrap;
            gap: 0.7rem;
            justify-content: flex-end;
          }
          .logout-btn, .watchlist-btn {
            width: 100%;
            min-width: 120px;
            margin-left: 0 !important;
            margin-right: 0 !important;
          }
        }
        /* Micro-interaction: logo hover */
        .glass-navbar h1:hover {
          color: #185a9d;
          text-shadow: 0 2px 16px #43cea2cc, 1px 1px 10px #fff;
          transform: scale(1.05) rotate(-2deg);
          transition: all 0.22s cubic-bezier(.4,2,.6,1);
        }
        .glass-navbar img[alt="CineVibe Logo"]:hover {
          box-shadow: 0 4px 24px #d72660cc, 0 2px 12px #fff8;
          transform: scale(1.08) rotate(2deg);
          transition: all 0.22s cubic-bezier(.4,2,.6,1);
        }
      `}</style>
    </nav>
  );
}

export default Navbar;