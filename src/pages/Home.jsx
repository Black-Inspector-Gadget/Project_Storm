import { Link } from 'react-router-dom';
import { ShieldAlert, BookOpen, Users, HeartPulse } from 'lucide-react';

const Home = () => {
  return (
    <div className="container">
      <section style={{ textAlign: 'center', padding: '4rem 0', maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Welcome to <span style={{ color: 'var(--accent-primary)' }}>Project Storm</span></h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '3rem' }}>
          Empowering those living with or caring for people with Epilepsy. Supporting someone with epilepsy involves understanding, empathy, and practical help.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/getting-started" className="btn btn-primary">Get Started</Link>
          <a href="https://notebooklm.google.com/notebook/c854ac82-267d-41a9-ba07-1796598deabc" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            Try AI Assistant
          </a>
        </div>
      </section>

      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', padding: '2rem 0' }}>
        <Link to="/support" className="card" style={{ display: 'block', textDecoration: 'none' }}>
          <ShieldAlert size={32} color="var(--danger)" style={{ marginBottom: '1rem' }} />
          <h3 style={{ color: 'var(--text-primary)' }}>Seizure First Aid</h3>
          <p style={{ color: 'var(--text-secondary)' }}>Learn what to do when someone is having a seizure.</p>
        </Link>
        <Link to="/getting-started" className="card" style={{ display: 'block', textDecoration: 'none' }}>
          <BookOpen size={32} color="var(--accent-primary)" style={{ marginBottom: '1rem' }} />
          <h3 style={{ color: 'var(--text-primary)' }}>Action Plans & Journals</h3>
          <p style={{ color: 'var(--text-secondary)' }}>Tools to track and manage epilepsy effectively.</p>
        </Link>
        <Link to="/classification" className="card" style={{ display: 'block', textDecoration: 'none' }}>
          <HeartPulse size={32} color="var(--accent-primary)" style={{ marginBottom: '1rem' }} />
          <h3 style={{ color: 'var(--text-primary)' }}>Classification</h3>
          <p style={{ color: 'var(--text-secondary)' }}>Understand symptoms, types, and syndromes.</p>
        </Link>
        <Link to="/support" className="card" style={{ display: 'block', textDecoration: 'none' }}>
          <Users size={32} color="var(--accent-primary)" style={{ marginBottom: '1rem' }} />
          <h3 style={{ color: 'var(--text-primary)' }}>Find Community</h3>
          <p style={{ color: 'var(--text-secondary)' }}>Connect with support groups and resources.</p>
        </Link>
      </section>
    </div>
  );
};

export default Home;
