import { Link } from 'react-router-dom';
import { ArrowLeft, Book, Activity, AlertCircle, Pill, FileText, Download, CheckCircle2 } from 'lucide-react';

const SeizureJournals = () => {
  return (
    <div className="container" style={{ padding: '4rem 0', maxWidth: '900px' }}>
      <Link to="/getting-started" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', color: 'var(--text-secondary)' }}>
        <ArrowLeft size={20} /> Back to Getting Started
      </Link>

      <h1 className="section-title" style={{ textAlign: 'left', marginBottom: '1rem' }}>Seizure <span>Journals</span></h1>
      
      <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: 1.8 }}>
        A seizure journal (also called a seizure diary or log) is a detailed, running record used by individuals with epilepsy or their caregivers to track every aspect of a person's seizures, treatment, and overall health. It is a critical self-management tool that helps patients and their doctors identify patterns, triggers, and the effectiveness of medication.
      </p>

      <div style={{ background: 'var(--accent-light)', padding: '2rem', borderRadius: '12px', marginBottom: '3rem', borderLeft: '4px solid var(--accent-primary)' }}>
        <h3 style={{ marginBottom: '1rem', color: 'var(--accent-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <CheckCircle2 size={24} /> Why Is a Seizure Journal Important?
        </h3>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
          A seizure journal is one of the most valuable pieces of information a patient can bring to a neurology appointment:
        </p>
        <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-secondary)', display: 'grid', gap: '0.5rem' }}>
          <li><strong>Diagnosis and Classification:</strong> It helps the neurologist accurately diagnose the type of seizure and epilepsy syndrome.</li>
          <li><strong>Treatment Adjustment:</strong> It provides objective data on the effectiveness of medication. If seizures increase, the log helps the doctor decide whether to change the dosage or switch the medication.</li>
          <li><strong>Risk Management:</strong> Identifying personal triggers allows the individual to make lifestyle adjustments that can reduce seizure frequency.</li>
          <li><strong>Communication:</strong> It ensures the patient provides accurate, detailed information, overcoming the challenge of recalling complex events during a stressful appointment.</li>
        </ul>
      </div>

      <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>What Information Does a Seizure Journal Track?</h2>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.1rem' }}>
        The journal is typically organized to track not just the seizure event itself, but all factors that might influence it, providing a holistic view of the person's condition.
      </p>

      <div style={{ display: 'grid', gap: '2rem', marginBottom: '4rem' }}>
        
        {/* 1. Seizure Details */}
        <div className="card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{ padding: '0.75rem', background: 'var(--accent-light)', borderRadius: '12px' }}>
              <FileText size={28} color="var(--accent-primary)" />
            </div>
            <h2 style={{ margin: 0 }}>1. Seizure Details</h2>
          </div>
          <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-secondary)', display: 'grid', gap: '0.75rem' }}>
            <li><strong>Date and Time:</strong> The precise start and end time of the event (crucial for distinguishing routine seizures from emergencies like Status Epilepticus).</li>
            <li><strong>Description:</strong> A detailed account of what the seizure looked like (movements, awareness, loss of consciousness, etc.).</li>
            <li><strong>Aura/Warning:</strong> Any feelings or sensations that occurred immediately before the seizure.</li>
            <li><strong>Aftermath (Postictal State):</strong> How the person felt and acted immediately after the seizure (e.g., confusion, fatigue, headache, duration of recovery).</li>
          </ul>
        </div>

        {/* 2. Triggers and Pre-Event Factors */}
        <div className="card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{ padding: '0.75rem', background: 'var(--accent-light)', borderRadius: '12px' }}>
              <AlertCircle size={28} color="var(--accent-primary)" />
            </div>
            <h2 style={{ margin: 0 }}>2. Triggers and Pre-Event Factors</h2>
          </div>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
            This section is vital for finding patterns that can help with seizure prevention. It often includes tracking:
          </p>
          <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-secondary)', display: 'grid', gap: '0.75rem' }}>
            <li><strong>Stress and Emotional State</strong></li>
            <li><strong>Sleep:</strong> Quality and total hours of sleep, including any sleep deprivation.</li>
            <li><strong>Illness:</strong> Colds, fevers, or other infections.</li>
            <li><strong>Hormonal Changes:</strong> Links to the menstrual cycle.</li>
            <li><strong>Diet:</strong> Irregular meals, specific foods, or caffeine/alcohol intake.</li>
          </ul>
        </div>

        {/* 3. Treatment and Health */}
        <div className="card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{ padding: '0.75rem', background: 'var(--accent-light)', borderRadius: '12px' }}>
              <Pill size={28} color="var(--accent-primary)" />
            </div>
            <h2 style={{ margin: 0 }}>3. Treatment and Health</h2>
          </div>
          <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-secondary)', display: 'grid', gap: '0.75rem' }}>
            <li><strong>Medication:</strong> A daily log of all anti-seizure medications (ASMs) taken, including the dose and time. This helps track medication adherence and identify if a missed dose may have triggered a seizure.</li>
            <li><strong>Side Effects:</strong> Any new or persistent side effects experienced from the ASMs.</li>
            <li><strong>Appointments:</strong> Notes from doctor visits and reminders for follow-ups.</li>
          </ul>
        </div>

      </div>

      <div style={{ background: 'var(--bg-primary)', padding: '2rem', borderRadius: '12px', border: '1px solid var(--border-color)', marginBottom: '3rem' }}>
        <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
          <Book size={24} color="var(--accent-primary)" /> Keeping A Seizure Journal
        </h3>
        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
          A seizure journal is an important tool for managing epilepsy and understanding the condition. It is used to document seizure types, which helps with their classification. The journal can be a paper diary or a digital app and should include essential information about each seizure, such as the date and time, type, description, and location. It should also track known and new potential triggers, medication history, and any side effects. Keeping a consistent and detailed journal can support effective seizure management and treatment planning.
        </p>
      </div>

      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <a 
          href="https://docs.google.com/presentation/d/1J0G6RIqrRYdF3iJPsMrNRMMvNhTOk5vQKWjO07VJcUo/edit?slide=id.gd5f4b554c_0_15#slide=id.gd5f4b554c_0_15" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn btn-primary"
          style={{ padding: '1rem 2rem', fontSize: '1.1rem', display: 'inline-flex', alignItems: 'center', gap: '0.75rem' }}
        >
          <Download size={20} /> Download Free Seizure Journals
        </a>
      </div>

    </div>
  );
};

export default SeizureJournals;
