import { Link } from 'react-router-dom';
import { ArrowLeft, MessageCircleHeart, ShieldCheck, FileText, HeartHandshake } from 'lucide-react';

const HowToHelp = () => {
  return (
    <div className="container" style={{ padding: '4rem 0', maxWidth: '800px' }}>
      <Link to="/getting-started" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', color: 'var(--text-secondary)' }}>
        <ArrowLeft size={20} /> Back to Getting Started
      </Link>

      <h1 className="section-title" style={{ textAlign: 'left', marginBottom: '1rem' }}>How to Help <span>Practically</span></h1>
      <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '3rem', lineHeight: 1.8 }}>
        Discover actionable ways to support your loved one, such as offering rides, attending neurology appointments to take notes, or helping organize medications.
      </p>

      <div style={{ background: 'var(--accent-light)', padding: '2rem', borderRadius: '12px', marginBottom: '3rem', borderLeft: '4px solid var(--accent-primary)' }}>
        <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', color: 'var(--accent-primary)' }}>
          <MessageCircleHeart size={28} /> Asking to Support
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.6 }}>
          <strong>Important: Ask!</strong> Don't be afraid to ask your friend or loved one about their specific experience with epilepsy, including how it affects them and what support they need.
        </p>
      </div>

      <h2 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>What to Say and Do</h2>
      
      <div className="card" style={{ marginBottom: '2rem' }}>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
          Let them know you have done your research and you understand how to document a seizure.
        </p>
        <p style={{ color: 'var(--text-primary)', fontSize: '1.1rem', fontWeight: 600, marginBottom: '1rem' }}>
          Assure them and let them know you are prepared to:
        </p>
        
        <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-secondary)', display: 'grid', gap: '1rem', fontSize: '1.05rem' }}>
          <li><strong style={{ color: 'var(--text-primary)' }}>Stay calm.</strong></li>
          <li><strong style={{ color: 'var(--text-primary)' }}>Time the seizure.</strong></li>
          <li><strong style={{ color: 'var(--text-primary)' }}>Protect them from injury.</strong></li>
          <li><strong style={{ color: 'var(--text-primary)' }}>Turn them on their side</strong> (if they are not already).</li>
          <li><strong style={{ color: 'var(--danger)' }}>Never put anything in their mouth.</strong></li>
          <li><strong style={{ color: 'var(--text-primary)' }}>Provide reassurance and support</strong> as they recover.</li>
          <li><strong style={{ color: 'var(--text-primary)' }}>Stay with them</strong> until they are fully recovered and alert.</li>
          <li><strong style={{ color: 'var(--text-primary)' }}>Advocate on their behalf</strong> until they are baseline.</li>
        </ul>
      </div>

      <div style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', padding: '2rem', borderRadius: '12px', textAlign: 'center' }}>
        <FileText size={40} color="var(--accent-primary)" style={{ margin: '0 auto 1rem auto' }} />
        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>The Seizure Action Plan</h3>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
          Ask them if they are comfortable sharing their Seizure Action Plan (SAP) with you, and take the time to deeply familiarize yourself with it.
        </p>
      </div>

    </div>
  );
};

export default HowToHelp;
