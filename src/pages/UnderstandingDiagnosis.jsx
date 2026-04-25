import { Link } from 'react-router-dom';
import { ArrowLeft, Brain, FileText, Activity, Clock, AlertTriangle, Eye } from 'lucide-react';

const UnderstandingDiagnosis = () => {
  return (
    <div className="container" style={{ padding: '4rem 0', maxWidth: '900px' }}>
      <Link to="/getting-started" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', color: 'var(--text-secondary)' }}>
        <ArrowLeft size={20} /> Back to Getting Started
      </Link>

      <h1 className="section-title" style={{ textAlign: 'left', marginBottom: '1rem' }}>Understanding the <span>Diagnosis</span></h1>
      <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '3rem', lineHeight: 1.8 }}>
        Epilepsy looks different for everyone. Learn about the mechanics of seizures, common side effects of medication, and the emotional toll of the diagnosis.
      </p>

      <div style={{ background: 'var(--accent-light)', padding: '2rem', borderRadius: '12px', marginBottom: '4rem', borderLeft: '4px solid var(--accent-primary)' }}>
        <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', color: 'var(--accent-primary)' }}>
          <Brain size={28} /> Educate yourself
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.6 }}>
          Familiarize yourself with the basics of Epilepsy, different seizure types, and potential triggers. You are already headed in the right direction! See below for a critical skill every support person should master.
        </p>
      </div>

      {/* Document a Seizure */}
      <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: 'var(--text-primary)' }}>Learn to Document a Seizure</h2>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.1rem' }}>
        As a support person, your observations are invaluable to the neurologist. You are often the only one who can accurately report what happened.
      </p>
      
      <div style={{ display: 'grid', gap: '1.5rem', marginBottom: '3rem' }}>
        
        <div style={{ padding: '1.5rem', background: 'var(--bg-secondary)', borderLeft: '4px solid var(--accent-primary)', borderRadius: '0 12px 12px 0', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
          <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <Activity size={20} color="var(--accent-primary)" /> 1. Behavior Before the Seizure (Pre-ictal)
          </h3>
          <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-secondary)', display: 'grid', gap: '0.5rem' }}>
            <li><strong>Pre-seizure activity:</strong> What was the person doing just before the event began?</li>
            <li><strong>Behavioral shifts:</strong> Were there any changes in mood, behavior, or energy levels in the hours or days before the event?</li>
            <li><strong>First sign(s) / auras:</strong> Did the person experience any specific feeling(s) or sensation(s)—an aura or warning—seconds or minutes before the seizure started?</li>
          </ul>
        </div>

        <div style={{ padding: '1.5rem', background: 'var(--bg-secondary)', borderLeft: '4px solid var(--accent-primary)', borderRadius: '0 12px 12px 0', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
          <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <Clock size={20} color="var(--accent-primary)" /> 2. When the Seizure Occurred
          </h3>
          <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-secondary)', display: 'grid', gap: '0.5rem' }}>
            <li><strong>Date and Time of Event:</strong> The exact date and time (including whether it was AM or PM) of the seizure.</li>
          </ul>
        </div>

        <div style={{ padding: '1.5rem', background: 'var(--bg-secondary)', borderLeft: '4px solid var(--accent-primary)', borderRadius: '0 12px 12px 0', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
          <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <AlertTriangle size={20} color="var(--accent-primary)" /> 3. Triggers & Influencing Factors
          </h3>
          <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-secondary)', display: 'grid', gap: '0.5rem' }}>
            <li><strong>Timing:</strong> Note the time of day or month.</li>
            <li><strong>Hormones:</strong> Any link to menstruation, pregnancy, changes in contraception, or other hormonal treatments.</li>
            <li><strong>Medication:</strong> If any medicines were missed, late, or changed.</li>
            <li><strong>Sleep:</strong> Recent irregular sleep patterns or a lack of sleep.</li>
            <li><strong>Diet:</strong> Irregular eating patterns or any specific foods consumed.</li>
            <li><strong>Physical Activity:</strong> Did the event occur during or immediately after exercise or fast breathing (hyperventilation)?</li>
            <li><strong>Substance Use:</strong> Recent alcohol or drug use.</li>
            <li><strong>Emotional State:</strong> Any recent stress, worry, or excitement.</li>
            <li><strong>Sensory Input:</strong> Exposure to specific sounds, flashing lights, or bright sunlight.</li>
            <li><strong>Health Status:</strong> The presence of other illnesses or infections.</li>
          </ul>
        </div>

        <div style={{ padding: '1.5rem', background: 'var(--bg-secondary)', borderLeft: '4px solid var(--accent-primary)', borderRadius: '0 12px 12px 0', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
          <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <Eye size={20} color="var(--accent-primary)" /> 4. What Happened During Seizure (Ictal)
          </h3>
          <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-secondary)', display: 'grid', gap: '0.5rem' }}>
            <li><strong>Awareness:</strong> Was the person awake, confused, or unresponsive? Could they talk or follow commands?</li>
            <li><strong>Involuntary Movements:</strong> Describe any jerking, twitching, turning, or paralysis. Did the muscles become stiff or completely limp?</li>
            <li><strong>Repetitive Behaviors (Automatisms):</strong> Note any repeated actions like chewing, swallowing, lip-smacking, fiddling with clothes, or rubbing.</li>
            <li><strong>Senses & Face:</strong> Document changes in vision, drooling, or unusual eye movements (blinking, rolling).</li>
            <li><strong>Emotional/Cognitive State:</strong> Describe any sudden shift in mood, memory loss, or perceptual changes.</li>
            <li><strong>Mobility:</strong> Did the person walk, wander, run, or fall?</li>
            <li><strong>Physical Signs:</strong> Was there a change in skin color (pale, flushed, blue) or sweating? Loss of urine or bowel control?</li>
          </ul>
        </div>

        <div style={{ padding: '1.5rem', background: 'var(--bg-secondary)', borderLeft: '4px solid var(--accent-primary)', borderRadius: '0 12px 12px 0', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
          <h3 style={{ marginBottom: '1rem' }}>5. Body Parts Involved</h3>
          <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-secondary)', display: 'grid', gap: '0.5rem' }}>
            <li><strong>Origin:</strong> The exact location where the symptom began.</li>
            <li><strong>Path:</strong> How the symptom spread (or if it stayed localized).</li>
            <li><strong>Sides:</strong> Whether the event affected the right, left, or both sides of the body.</li>
          </ul>
        </div>

        <div style={{ padding: '1.5rem', background: 'var(--bg-secondary)', borderLeft: '4px solid var(--accent-primary)', borderRadius: '0 12px 12px 0', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
          <h3 style={{ marginBottom: '1rem' }}>6. What Happened After Seizure (Post-ictal)</h3>
          <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-secondary)', display: 'grid', gap: '0.5rem' }}>
            <li><strong>Interaction:</strong> How quickly did the person become responsive to sound or touch?</li>
            <li><strong>Disorientation:</strong> How long did any confusion about their name, location, or time last?</li>
            <li><strong>Recall:</strong> Did they have memory of the event?</li>
            <li><strong>Speech:</strong> Any difficulty with talking or communicating?</li>
            <li><strong>Physical Symptoms:</strong> Note any weakness, numbness, or physical changes.</li>
            <li><strong>Mood/Action:</strong> Were there any immediate changes in how the person acted or felt?</li>
            <li><strong>Sleepiness:</strong> Did the person exhibit extreme tiredness or a need to sleep?</li>
          </ul>
        </div>

        <div style={{ padding: '1.5rem', background: 'var(--bg-secondary)', borderLeft: '4px solid var(--accent-primary)', borderRadius: '0 12px 12px 0', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
          <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <Clock size={20} color="var(--accent-primary)" /> 7. How Long Did the Seizure Last
          </h3>
          <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-secondary)', display: 'grid', gap: '0.5rem' }}>
            <li><strong>Warning (Aura) Length:</strong> How long did the warning/aura last?</li>
            <li><strong>Seizure Activity Duration:</strong> How long did the seizure activity itself last?</li>
            <li><strong>Postictal Recovery Time:</strong> How long did the confusion or after-effects (the postictal phase) last?</li>
            <li><strong>Total Seizure Time:</strong> What was the total time before the person was back to normal? Including warning / aura, seizure activity, postictal recovery.</li>
          </ul>
        </div>

      </div>

      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <a 
          href="https://www.epilepsy.com/sites/default/files/atoms/files/Seizure-Description-Form-English-Spanish_0.pdf" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn btn-primary"
          style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}
        >
          <FileText size={20} /> View Description Of Seizure Form
        </a>
      </div>

    </div>
  );
};

export default UnderstandingDiagnosis;
