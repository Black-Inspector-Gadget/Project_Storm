import { Link } from 'react-router-dom';
import { ArrowLeft, MessageSquare, Volume2, Share2, HelpCircle, Heart } from 'lucide-react';

const ChallengeStigma = () => {
  return (
    <div className="container" style={{ padding: '4rem 0', maxWidth: '800px' }}>
      <Link to="/getting-started" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', color: 'var(--text-secondary)' }}>
        <ArrowLeft size={20} /> Back to Getting Started
      </Link>

      <h1 className="section-title" style={{ textAlign: 'left', marginBottom: '1rem' }}>Challenge the <span>Stigma</span></h1>
      <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '3rem', lineHeight: 1.8 }}>
        Navigate social situations, advocate for your rights in the workplace, and learn how to talk openly about your diagnosis with confidence.
      </p>

      <div style={{ display: 'grid', gap: '2rem', marginBottom: '4rem' }}>
        
        {/* Educate others */}
        <div className="card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ padding: '0.75rem', background: 'var(--accent-light)', borderRadius: '12px' }}>
              <MessageSquare size={28} color="var(--accent-primary)" />
            </div>
            <h2 style={{ margin: 0, fontSize: '1.5rem' }}>Educate others</h2>
          </div>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
            Share accurate information about epilepsy with your friends, family, and community to help dispel myths and misconceptions. As well as help others recognize the signs and symptoms of Epilepsy.
          </p>
        </div>

        {/* Be an advocate */}
        <div className="card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ padding: '0.75rem', background: 'var(--accent-light)', borderRadius: '12px' }}>
              <Volume2 size={28} color="var(--accent-primary)" />
            </div>
            <h2 style={{ margin: 0, fontSize: '1.5rem' }}>Be an advocate</h2>
          </div>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
            Speak up if you hear someone making negative or inaccurate statements about epilepsy.
          </p>
        </div>

      </div>

      {/* What to do next? */}
      <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: 'var(--text-primary)' }}>What to do next?</h2>
      
      <div style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
        <div style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '1.5rem', textAlign: 'center' }}>
          <Share2 size={32} color="var(--accent-primary)" style={{ margin: '0 auto 1rem auto' }} />
          <p style={{ color: 'var(--text-secondary)' }}>Know someone dealing with Epilepsy?<br/><strong>Share Project Storm!</strong></p>
        </div>

        <div style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '1.5rem', textAlign: 'center' }}>
          <HelpCircle size={32} color="var(--accent-primary)" style={{ margin: '0 auto 1rem auto' }} />
          <p style={{ color: 'var(--text-secondary)' }}>Want to support someone with Epilepsy?<br/><strong>Ask them how, and for their SAP.</strong></p>
        </div>

        <div style={{ background: 'var(--accent-primary)', color: 'white', borderRadius: '12px', padding: '1.5rem', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Heart size={32} color="white" style={{ margin: '0 auto 1rem auto' }} />
          <p style={{ fontSize: '1.2rem', fontWeight: 600 }}>Share your knowledge!</p>
        </div>
      </div>

    </div>
  );
};

export default ChallengeStigma;
