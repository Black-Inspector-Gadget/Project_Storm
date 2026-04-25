import { Link } from 'react-router-dom';
import { ShieldAlert, BookOpen, Users, HeartPulse, ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <div>
      {/* Hero Section with Dynamic Background */}
      <section style={{ 
        position: 'relative',
        padding: '8rem 2rem 6rem 2rem', 
        overflow: 'hidden',
        background: 'linear-gradient(135deg, var(--bg-primary) 0%, var(--accent-light) 100%)'
      }}>
        {/* Abstract shapes for eye-catching design */}
        <div style={{
          position: 'absolute', top: '-10%', right: '-5%',
          width: '500px', height: '500px',
          background: 'var(--accent-primary)',
          filter: 'blur(100px)', opacity: 0.15,
          borderRadius: '50%', zIndex: 0
        }}></div>
        <div style={{
          position: 'absolute', bottom: '-20%', left: '-10%',
          width: '400px', height: '400px',
          background: '#a855f7',
          filter: 'blur(120px)', opacity: 0.1,
          borderRadius: '50%', zIndex: 0
        }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center', maxWidth: '900px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1.25rem', background: 'white', borderRadius: '50px', border: '1px solid var(--border-color)', marginBottom: '2rem', boxShadow: '0 4px 6px rgba(135, 85, 240, 0.1)' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-primary)', display: 'inline-block' }}></span>
            <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--accent-primary)', letterSpacing: '0.05em' }}>EPILEPSY AWARENESS & SUPPORT</span>
          </div>
          
          <h1 style={{ fontSize: 'clamp(3.5rem, 6vw, 5.5rem)', marginBottom: '1.5rem', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
            Welcome to <br/>
            <span style={{ 
              background: 'linear-gradient(135deg, var(--accent-primary), #a855f7)', 
              WebkitBackgroundClip: 'text', 
              WebkitTextFillColor: 'transparent' 
            }}>Project Storm</span>
          </h1>
          
          <p style={{ fontSize: '1.3rem', color: 'var(--text-secondary)', marginBottom: '3.5rem', maxWidth: '700px', margin: '0 auto 3.5rem auto', lineHeight: 1.7 }}>
            Empowering those living with or caring for people with Epilepsy. Because supporting someone involves understanding, empathy, and practical help.
          </p>
          
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/getting-started" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem', boxShadow: '0 10px 20px -10px var(--accent-primary)' }}>
              Get Started <ArrowRight size={20} />
            </Link>
            <a href="https://notebooklm.google.com/notebook/c854ac82-267d-41a9-ba07-1796598deabc" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '1rem 2rem', fontSize: '1.1rem', background: 'white' }}>
              Try AI Assistant
            </a>
          </div>
        </div>
      </section>

      {/* Cards Section with Glassmorphism */}
      <section className="container" style={{ padding: '5rem 2rem', marginTop: '-4rem', position: 'relative', zIndex: 20 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          
          <Link to="/support" className="card" style={{ display: 'block', textDecoration: 'none', background: 'rgba(255, 255, 255, 0.9)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.5)' }}>
            <div style={{ width: '60px', height: '60px', borderRadius: '16px', background: '#fee2e2', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
              <ShieldAlert size={32} color="var(--danger)" />
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>Seizure First Aid</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.6 }}>Learn exactly what to do (and what not to do) when someone is having a seizure.</p>
          </Link>

          <Link to="/getting-started" className="card" style={{ display: 'block', textDecoration: 'none', background: 'rgba(255, 255, 255, 0.9)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.5)' }}>
            <div style={{ width: '60px', height: '60px', borderRadius: '16px', background: 'var(--accent-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
              <BookOpen size={32} color="var(--accent-primary)" />
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>Action Plans</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.6 }}>Access templates and journals to track and manage epilepsy effectively.</p>
          </Link>

          <Link to="/classification" className="card" style={{ display: 'block', textDecoration: 'none', background: 'rgba(255, 255, 255, 0.9)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.5)' }}>
            <div style={{ width: '60px', height: '60px', borderRadius: '16px', background: 'var(--accent-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
              <HeartPulse size={32} color="var(--accent-primary)" />
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>Classification</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.6 }}>Understand different symptoms, seizure types, and specific epilepsy syndromes.</p>
          </Link>

          <Link to="/support" className="card" style={{ display: 'block', textDecoration: 'none', background: 'rgba(255, 255, 255, 0.9)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.5)' }}>
            <div style={{ width: '60px', height: '60px', borderRadius: '16px', background: 'var(--accent-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
              <Users size={32} color="var(--accent-primary)" />
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>Find Community</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.6 }}>Connect with support groups, events, and a network of people who understand.</p>
          </Link>
          
        </div>
      </section>
    </div>
  );
};

export default Home;
