import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ExternalLink } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Getting Started', path: '/getting-started' },
    { name: 'Classification', path: '/classification' },
    { name: 'AI Chat', path: 'https://notebooklm.google.com/notebook/c854ac82-267d-41a9-ba07-1796598deabc', isExternal: true }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      background: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--border-color)',
      padding: '1rem 0'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Project Storm Logo" style={{ height: '40px', width: 'auto' }} />
          <span style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--accent-primary)' }}>Project Storm</span>
        </Link>

        {/* Desktop Nav */}
        <div className="desktop-nav" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          {links.map(link => (
            link.isExternal ? (
              <a 
                key={link.path} 
                href={link.path}
                target="_blank"
                rel="noopener noreferrer"
                style={{ 
                  fontWeight: 600, 
                  color: 'var(--text-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                  padding: '0.5rem 1rem',
                  background: 'var(--accent-light)',
                  borderRadius: '50px',
                  border: '1px solid var(--accent-primary)'
                }}
              >
                {link.name} <ExternalLink size={14} />
              </a>
            ) : (
              <Link 
                key={link.path} 
                to={link.path}
                style={{ 
                  fontWeight: 600, 
                  color: isActive(link.path) ? 'var(--accent-primary)' : 'var(--text-secondary)'
                }}
              >
                {link.name}
              </Link>
            )
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="mobile-toggle"
          onClick={() => setIsOpen(!isOpen)}
          style={{ background: 'none', border: 'none', color: 'var(--text-primary)', cursor: 'pointer', display: 'none' }}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="mobile-nav" style={{
          position: 'absolute', top: '100%', left: 0, right: 0,
          background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-color)',
          padding: '1rem 2rem', display: 'flex', flexDirection: 'column', gap: '1rem'
        }}>
          {links.map(link => (
            link.isExternal ? (
              <a 
                key={link.path} 
                href={link.path}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                style={{ 
                  fontWeight: 600, fontSize: '1.2rem',
                  color: 'var(--accent-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                {link.name} <ExternalLink size={16} />
              </a>
            ) : (
              <Link 
                key={link.path} 
                to={link.path}
                onClick={() => setIsOpen(false)}
                style={{ 
                  fontWeight: 600, fontSize: '1.2rem',
                  color: isActive(link.path) ? 'var(--accent-primary)' : 'var(--text-secondary)'
                }}
              >
                {link.name}
              </Link>
            )
          ))}
        </div>
      )}
      
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
