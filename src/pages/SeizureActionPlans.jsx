import { Link } from 'react-router-dom';
import { ArrowLeft, FileText, ClipboardList, Activity, AlertCircle, Download } from 'lucide-react';

const SeizureActionPlans = () => {
  return (
    <div className="container" style={{ padding: '4rem 0', maxWidth: '900px' }}>
      <Link to="/getting-started" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', color: 'var(--text-secondary)' }}>
        <ArrowLeft size={20} /> Back to Getting Started
      </Link>

      <h1 className="section-title" style={{ textAlign: 'left', marginBottom: '1rem' }}>Seizure Action <span>Plans</span></h1>
      <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: 1.8 }}>
        A Seizure Action Plan (SAP) is a personalized, written guide that provides essential, easy-to-read instructions on what to do when a person has a seizure. Developed collaboratively with your doctor (usually a neurologist), the SAP is a critical tool for anyone who might witness a seizure—from family and friends to teachers and coworkers.
      </p>

      <div style={{ background: 'var(--accent-light)', padding: '2rem', borderRadius: '12px', marginBottom: '3rem', borderLeft: '4px solid var(--accent-primary)' }}>
        <h3 style={{ marginBottom: '1rem', color: 'var(--accent-primary)' }}>Why is it important?</h3>
        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
          The primary goal is to increase safety, minimize the risk of injury, and ensure a fast, appropriate response during an emergency, which is vital for preventing serious complications like Status Epilepticus (prolonged seizures). Since seizures are highly individualized, every SAP is customized. It is recommended that everyone with epilepsy have an SAP and share copies with all relevant caregivers, school personnel, or those who interact with the person frequently. The plan should be reviewed and updated with a doctor at least annually.
        </p>
      </div>

      <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: 'var(--text-primary)' }}>Seizure Action Plan Checklist</h2>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>While the format may vary, a comprehensive plan typically includes the following information:</p>

      <div style={{ display: 'grid', gap: '2rem', marginBottom: '4rem' }}>
        
        {/* 1. Personal and Medical Details */}
        <div className="card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{ padding: '0.75rem', background: 'var(--accent-light)', borderRadius: '12px' }}>
              <ClipboardList size={28} color="var(--accent-primary)" />
            </div>
            <h2 style={{ margin: 0 }}>1. Personal and Medical Details</h2>
          </div>
          <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <li><strong>Identification:</strong> Patient name, age, height, and weight.</li>
            <li><strong>Emergency Contacts:</strong> Phone numbers for family, caregivers, and the treating physician.</li>
            <li><strong>Allergies:</strong> A clear list of any drug allergies.</li>
            <li><strong>Current Medications:</strong> A list of daily anti-seizure medications and their dosages.</li>
          </ul>
        </div>

        {/* 2. Seizure-Specific Information */}
        <div className="card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{ padding: '0.75rem', background: 'var(--accent-light)', borderRadius: '12px' }}>
              <Activity size={28} color="var(--accent-primary)" />
            </div>
            <h2 style={{ margin: 0 }}>2. Seizure-Specific Information</h2>
          </div>
          <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <li><strong>Seizure Pattern:</strong> A brief description of the person's usual seizure type(s), frequency, and what they look like.</li>
            <li><strong>Triggers:</strong> Known factors that may make a seizure more likely (e.g., lack of sleep, stress, illness).</li>
            <li><strong>First Aid Steps:</strong> Clear, tailored instructions on exactly what to do during the seizure (e.g., timing the seizure, protecting the head, turning the person onto their side).</li>
          </ul>
        </div>

        {/* 3. Emergency Protocol */}
        <div className="card" style={{ borderTop: '4px solid var(--danger)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{ padding: '0.75rem', background: '#fee2e2', borderRadius: '12px' }}>
              <AlertCircle size={28} color="var(--danger)" />
            </div>
            <h2 style={{ margin: 0, color: 'var(--danger)' }}>3. Emergency Protocol</h2>
          </div>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontStyle: 'italic' }}>
            This is the most crucial part, often highlighted as a separate Acute Seizure Action Plan (ASAP).
          </p>
          <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <li><strong>Rescue Medication:</strong> Specific instructions for administering emergency rescue medication (e.g., nasal spray, rectal gel), including the medication name, dose, and the exact time when it should be given (e.g., "If seizure lasts longer than 5 minutes").</li>
            <li><strong>When to Call 911:</strong> A checklist of specific situations that require an immediate call to emergency services (e.g., seizure lasting 5 minutes or longer, a cluster of seizures without consciousness regained, injury, or difficulty breathing).</li>
            <li><strong>Post-Seizure Care:</strong> Guidance on what kind of help is needed immediately after the seizure and when the person can return to normal activity.</li>
          </ul>
        </div>

      </div>

      {/* Free Seizure Action Plans */}
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h3 style={{ marginBottom: '1.5rem' }}>Ready to create your own?</h3>
        <a 
          href="https://docs.google.com/presentation/d/1IXtYDGEd2ocgas0Ih-W5AX7VKzbpUYwzkqBxr_yBhRQ/edit?slide=id.g377a0400106_0_29#slide=id.g377a0400106_0_29" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn btn-primary"
          style={{ padding: '1rem 2rem', fontSize: '1.1rem', display: 'inline-flex', alignItems: 'center', gap: '0.75rem' }}
        >
          <Download size={20} /> Download Free Seizure Action Plans
        </a>
      </div>

    </div>
  );
};

export default SeizureActionPlans;
