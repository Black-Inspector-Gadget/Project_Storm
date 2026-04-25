import { Brain, Activity, HelpCircle, AlertCircle } from 'lucide-react';

const Classification = () => {
  return (
    <div className="container" style={{ padding: '4rem 0', maxWidth: '1000px' }}>
      <section style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: '800px', margin: '0 auto 4rem auto' }}>
        <h1 className="section-title">Seizure <span>Classification</span></h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
          Understanding the different types of seizures is critical for accurate diagnosis and treatment. 
          Seizures are generally classified into three main categories based on where they begin in the brain.
        </p>
      </section>

      <div style={{ display: 'grid', gap: '2rem' }}>
        
        {/* Focal Onset */}
        <div className="card" style={{ borderLeft: '6px solid var(--accent-primary)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '-10px', right: '-10px', opacity: 0.05, transform: 'rotate(15deg)' }}>
            <Activity size={150} />
          </div>
          
          <div style={{ position: 'relative', zIndex: 10 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <div style={{ padding: '0.75rem', background: 'var(--accent-light)', borderRadius: '12px' }}>
                <Activity size={32} color="var(--accent-primary)" />
              </div>
              <h2 style={{ margin: 0, fontSize: '2rem' }}>Focal Onset</h2>
            </div>
            
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '2rem' }}>
              Focal seizures can start in one area or group of cells in one side of the brain.
            </p>

            <div>
              <h3 style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <AlertCircle size={18} /> Included Types & Terminology
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                {['Aware', 'Impaired Awareness', 'Focal to Bilateral Tonic-Clonic', 'Jacksonian Seizures', 'Complex Partial Seizure*', 'Simple Partial Seizure*'].map((type, i) => (
                  <span key={i} style={{ 
                    background: 'var(--bg-secondary)', 
                    color: 'var(--accent-primary)', 
                    border: '1px solid var(--border-color)',
                    padding: '0.5rem 1rem', 
                    borderRadius: '50px', 
                    fontSize: '0.95rem',
                    fontWeight: 500
                  }}>
                    {type}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Generalized Onset */}
        <div className="card" style={{ borderLeft: '6px solid #a855f7', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '-10px', right: '-10px', opacity: 0.05, transform: 'rotate(15deg)' }}>
            <Brain size={150} />
          </div>
          
          <div style={{ position: 'relative', zIndex: 10 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <div style={{ padding: '0.75rem', background: '#f3e8ff', borderRadius: '12px' }}>
                <Brain size={32} color="#a855f7" />
              </div>
              <h2 style={{ margin: 0, fontSize: '2rem' }}>Generalized Onset</h2>
            </div>
            
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '2rem' }}>
              These seizures affect both sides of the brain or groups of cells on both sides of the brain at the same time.
            </p>

            <div>
              <h3 style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <AlertCircle size={18} /> Included Types & Terminology
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                {['Tonic-Clonic', 'Absence', 'Atonic', 'Impaired Awareness', 'Grand Mal*', 'Atypical Absence Seizures'].map((type, i) => (
                  <span key={i} style={{ 
                    background: 'var(--bg-secondary)', 
                    color: '#a855f7', 
                    border: '1px solid var(--border-color)',
                    padding: '0.5rem 1rem', 
                    borderRadius: '50px', 
                    fontSize: '0.95rem',
                    fontWeight: 500
                  }}>
                    {type}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Unknown Onset */}
        <div className="card" style={{ borderLeft: '6px solid #64748b', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '-10px', right: '-10px', opacity: 0.05, transform: 'rotate(15deg)' }}>
            <HelpCircle size={150} />
          </div>
          
          <div style={{ position: 'relative', zIndex: 10 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <div style={{ padding: '0.75rem', background: '#f1f5f9', borderRadius: '12px' }}>
                <HelpCircle size={32} color="#64748b" />
              </div>
              <h2 style={{ margin: 0, fontSize: '2rem' }}>Unknown Onset</h2>
            </div>
            
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '2rem' }}>
              When the beginning of a seizure is not known, it's called an unknown onset seizure. A seizure could also be called an unknown onset if it's not witnessed or seen by anyone, for example when seizures happen at night or in a person who lives alone. As more information is learned, an unknown onset seizure may later be diagnosed as a focal or generalized seizure.
            </p>

            <div>
              <h3 style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <AlertCircle size={18} /> Included Types & Terminology
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                {['Tonic-Clonic', 'Absence', 'Impaired Awareness'].map((type, i) => (
                  <span key={i} style={{ 
                    background: 'var(--bg-secondary)', 
                    color: '#64748b', 
                    border: '1px solid var(--border-color)',
                    padding: '0.5rem 1rem', 
                    borderRadius: '50px', 
                    fontSize: '0.95rem',
                    fontWeight: 500
                  }}>
                    {type}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
      
      <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginTop: '3rem', fontSize: '0.9rem', fontStyle: 'italic' }}>
        * Note: Terms with an asterisk (*) represent older or alternative terminology that is still sometimes used by patients or clinicians.
      </p>
    </div>
  );
};

export default Classification;
