import { Link } from 'react-router-dom';
import { ArrowLeft, ShieldAlert, AlertTriangle, Clock, PhoneCall, HeartPulse, FileText } from 'lucide-react';

const SupportFirstAid = () => {
  return (
    <div className="container" style={{ padding: '4rem 0', maxWidth: '800px' }}>
      <Link to="/getting-started" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', color: 'var(--text-secondary)' }}>
        <ArrowLeft size={20} /> Back to Getting Started
      </Link>

      <h1 className="section-title" style={{ textAlign: 'left', marginBottom: '1rem', color: 'var(--danger)' }}>
        Seizure <span>First Aid</span>
      </h1>
      <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '3rem', lineHeight: 1.8 }}>
        Learn the critical steps to keep them safe during a seizure. Know when to observe, when to intervene, and exactly when to call 911.
      </p>

      {/* Primary First Aid Steps */}
      <div className="card" style={{ borderTop: '6px solid var(--danger)', marginBottom: '3rem' }}>
        <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
          <ShieldAlert size={32} color="var(--danger)" /> What to do during a seizure
        </h2>
        
        <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-secondary)', display: 'grid', gap: '1.25rem', fontSize: '1.1rem' }}>
          <li><strong style={{ color: 'var(--text-primary)' }}>Stay calm.</strong></li>
          
          <li>
            <strong style={{ color: 'var(--text-primary)' }}>Catch them if they fall.</strong>
            <span style={{ display: 'block', marginTop: '0.25rem', fontSize: '1rem' }}>
              <em>Important:</em> A seizure can cause someone to fall or drop things. Catch the seizing person if possible.
            </span>
          </li>
          
          <li><strong style={{ color: 'var(--text-primary)' }}>Cushion their head.</strong></li>
          
          <li><strong style={{ color: 'var(--text-primary)' }}>Time the seizure.</strong></li>
          
          <li>
            <strong style={{ color: 'var(--text-primary)' }}>Note behavior.</strong>
            <div style={{ background: 'var(--bg-primary)', padding: '1rem', borderRadius: '8px', marginTop: '0.5rem', fontSize: '1rem' }}>
              <ul style={{ display: 'grid', gap: '0.5rem', margin: 0, paddingLeft: '1rem' }}>
                <li><strong>Pre-ictal state:</strong> The period immediately before a seizure.</li>
                <li><strong>Ictal state:</strong> The period during which a seizure occurs.</li>
                <li><strong>Postictal state:</strong> The period of time immediately following a seizure where a person experiences impaired consciousness, confusion, and other neurological or psychological symptoms until they return to their normal baseline.</li>
              </ul>
            </div>
          </li>
          
          <li>
            <strong style={{ color: 'var(--text-primary)' }}>DO NOT restrain</strong> unless it's to protect from injury. Remove obstacles and other people from the area.
          </li>
          
          <li><strong style={{ color: 'var(--text-primary)' }}>Protect the person from injury.</strong></li>
          
          <li><strong style={{ color: 'var(--text-primary)' }}>Turn the person on their side</strong> (if they are not already).</li>
          
          <li style={{ background: '#fee2e2', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid var(--danger)' }}>
            <strong style={{ color: 'var(--danger)', fontSize: '1.2rem' }}>NEVER put anything in their mouth.</strong>
          </li>
          
          <li>
            <strong style={{ color: 'var(--text-primary)' }}>Provide reassurance and support</strong> as they recover. Reassure them that they are safe.
          </li>
          
          <li><strong style={{ color: 'var(--text-primary)' }}>Stay with the person</strong> until they are fully recovered and alert.</li>
        </ul>
      </div>

      {/* Emergency Protocol */}
      <div style={{ background: '#fee2e2', border: '1px solid #fca5a5', padding: '2rem', borderRadius: '12px' }}>
        <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', color: 'var(--danger)' }}>
          <PhoneCall size={32} /> Understand when it is an emergency
        </h2>
        <p style={{ color: 'var(--text-primary)', marginBottom: '1.5rem', fontSize: '1.1rem', fontWeight: 600 }}>
          Call 911 immediately if any of the following occur:
        </p>
        
        <div style={{ display: 'grid', gap: '1rem' }}>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', background: 'white', padding: '1rem', borderRadius: '8px' }}>
            <Clock size={24} color="var(--danger)" style={{ flexShrink: 0, marginTop: '2px' }} />
            <div>
              <strong style={{ display: 'block', marginBottom: '0.25rem' }}>Status Epilepticus</strong>
              <span style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>A single seizure lasts longer than 5 minutes; or Seizure clusters (two or more seizures without recovering consciousness or returning to a normal level of alertness between).</span>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', background: 'white', padding: '1rem', borderRadius: '8px' }}>
            <AlertTriangle size={24} color="var(--danger)" style={{ flexShrink: 0, marginTop: '2px' }} />
            <div>
              <strong style={{ display: 'block', marginBottom: '0.25rem' }}>First time seizure</strong>
              <span style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>The person has no known history of seizures or epilepsy.</span>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', background: 'white', padding: '1rem', borderRadius: '8px' }}>
            <HeartPulse size={24} color="var(--danger)" style={{ flexShrink: 0, marginTop: '2px' }} />
            <div>
              <strong style={{ display: 'block', marginBottom: '0.25rem' }}>Diabetic seizure</strong>
              <span style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>When a person with diabetes has a seizure.</span>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', background: 'white', padding: '1rem', borderRadius: '8px' }}>
            <ShieldAlert size={24} color="var(--danger)" style={{ flexShrink: 0, marginTop: '2px' }} />
            <div>
              <strong style={{ display: 'block', marginBottom: '0.25rem' }}>Injuries</strong>
              <span style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>When a person is injured during the seizure.</span>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', background: 'white', padding: '1rem', borderRadius: '8px' }}>
            <FileText size={24} color="var(--danger)" style={{ flexShrink: 0, marginTop: '2px' }} />
            <div>
              <strong style={{ display: 'block', marginBottom: '0.25rem' }}>SAP Criteria</strong>
              <span style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Other criteria identified by a person's Seizure Action Plan (SAP).</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SupportFirstAid;
