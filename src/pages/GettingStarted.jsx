import { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Users, BookOpen, FileText, Activity, Shield, HeartHandshake, Brain } from 'lucide-react';

const GettingStarted = () => {
  const [activePathway, setActivePathway] = useState(null); // 'self' or 'support'

  return (
    <div className="container" style={{ padding: '4rem 0' }}>
      <section style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: '800px', margin: '0 auto 4rem auto' }}>
        <h1 className="section-title">Getting <span>Started</span></h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>
          Whether you are navigating a new diagnosis yourself or looking to support a loved one, we have resources tailored specifically for your journey. Please select your path below.
        </p>
      </section>

      {/* Pathway Selection */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
        <button 
          onClick={() => setActivePathway('self')}
          className="card"
          style={{ 
            cursor: 'pointer', 
            textAlign: 'center',
            border: activePathway === 'self' ? '2px solid var(--accent-primary)' : '1px solid var(--border-color)',
            background: activePathway === 'self' ? 'var(--accent-light)' : 'var(--bg-secondary)',
            transform: activePathway === 'self' ? 'translateY(-4px)' : 'none'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
            <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'var(--accent-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <User size={40} color="white" />
            </div>
          </div>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Self Care Guide</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>I am living with Epilepsy and looking for tools, education, and ways to manage my diagnosis.</p>
        </button>

        <button 
          onClick={() => setActivePathway('support')}
          className="card"
          style={{ 
            cursor: 'pointer', 
            textAlign: 'center',
            border: activePathway === 'support' ? '2px solid var(--accent-primary)' : '1px solid var(--border-color)',
            background: activePathway === 'support' ? 'var(--accent-light)' : 'var(--bg-secondary)',
            transform: activePathway === 'support' ? 'translateY(-4px)' : 'none'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
            <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'var(--accent-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Users size={40} color="white" />
            </div>
          </div>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Support System</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>I am a caregiver, family member, or friend looking to support someone with Epilepsy.</p>
        </button>
      </div>

      {/* Dynamic Content Area */}
      {activePathway === 'self' && (
        <div className="animate-fade-in" style={{ animation: 'fadeIn 0.5s ease-in-out' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '2rem', borderBottom: '2px solid var(--accent-light)', paddingBottom: '1rem' }}>Your Self Care Journey</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            
            <div className="card">
              <BookOpen size={28} color="var(--accent-primary)" style={{ marginBottom: '1rem' }} />
              <h3>Educate Yourself</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                Knowledge is power. Learn about your specific seizure type, identify your personal triggers, and understand how your prescribed medications work. 
              </p>
              <Link to="/getting-started/educate-yourself" className="btn btn-outline" style={{ display: 'flex', width: '100%' }}>Read More</Link>
            </div>

            <div className="card">
              <FileText size={28} color="var(--accent-primary)" style={{ marginBottom: '1rem' }} />
              <h3>Seizure Action Plans</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                Create a customized, printable document that tells others exactly what to do (and who to call) if you have a seizure in public or at work.
              </p>
              <Link to="/getting-started/seizure-action-plans" className="btn btn-outline" style={{ display: 'flex', width: '100%' }}>Create Plan</Link>
            </div>

            <div className="card">
              <Activity size={28} color="var(--accent-primary)" style={{ marginBottom: '1rem' }} />
              <h3>Seizure Journals</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                Track your seizures, auras, and daily habits. Identifying patterns is one of the most effective ways to communicate with your neurologist.
              </p>
              <Link to="/getting-started/seizure-journals" className="btn btn-outline" style={{ display: 'flex', width: '100%' }}>Download Template</Link>
            </div>

            <div className="card">
              <Shield size={28} color="var(--accent-primary)" style={{ marginBottom: '1rem' }} />
              <h3>Challenge the Stigma</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                Navigate social situations, advocate for your rights in the workplace, and learn how to talk openly about your diagnosis with confidence.
              </p>
              <Link to="/getting-started/challenge-the-stigma" className="btn btn-outline" style={{ display: 'flex', width: '100%' }}>Read More</Link>
            </div>

          </div>
        </div>
      )}

      {activePathway === 'support' && (
        <div className="animate-fade-in" style={{ animation: 'fadeIn 0.5s ease-in-out' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '2rem', borderBottom: '2px solid var(--accent-light)', paddingBottom: '1rem' }}>Supporting Your Loved One</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            
            <div className="card">
              <Brain size={28} color="var(--accent-primary)" style={{ marginBottom: '1rem' }} />
              <h3>Understanding the Diagnosis</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                Epilepsy looks different for everyone. Learn about the mechanics of seizures, common side effects of medication, and the emotional toll of the diagnosis.
              </p>
              <Link to="/getting-started/understanding-diagnosis" className="btn btn-outline" style={{ display: 'flex', width: '100%' }}>Read More</Link>
            </div>

            <div className="card">
              <HeartHandshake size={28} color="var(--accent-primary)" style={{ marginBottom: '1rem' }} />
              <h3>How to Help Practically</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                Discover actionable ways to support them, such as offering rides, attending neurology appointments to take notes, or helping organize pill boxes.
              </p>
              <Link to="/getting-started/how-to-help" className="btn btn-outline" style={{ display: 'flex', width: '100%' }}>Read More</Link>
            </div>

            <div className="card">
              <Shield size={28} color="var(--danger)" style={{ marginBottom: '1rem' }} />
              <h3>Seizure First Aid</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                Learn the critical steps to keep them safe during a seizure. Know when to observe, when to intervene, and exactly when to call 911.
              </p>
              <Link to="/getting-started/support-first-aid" className="btn btn-outline" style={{ display: 'flex', width: '100%' }}>Learn First Aid</Link>
            </div>

            <div className="card">
              <Users size={28} color="var(--accent-primary)" style={{ marginBottom: '1rem' }} />
              <h3>Caregiver Support</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                You cannot pour from an empty cup. Find resources for caregiver burnout, support groups for families, and strategies for maintaining your own mental health.
              </p>
              <button className="btn btn-outline" style={{ width: '100%' }}>Find Support</button>
            </div>

          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.4s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default GettingStarted;
