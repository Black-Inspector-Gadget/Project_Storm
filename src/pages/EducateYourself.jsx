import { Link } from 'react-router-dom';
import { ArrowLeft, Stethoscope, Users, FileText, Clock, AlertTriangle, Activity, ShieldAlert } from 'lucide-react';

const EducateYourself = () => {
  return (
    <div className="container" style={{ padding: '4rem 0', maxWidth: '900px' }}>
      <Link to="/getting-started" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', color: 'var(--text-secondary)' }}>
        <ArrowLeft size={20} /> Back to Getting Started
      </Link>

      <h1 className="section-title" style={{ textAlign: 'left', marginBottom: '1rem' }}>Educate <span>Yourself</span></h1>
      <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '3rem', lineHeight: 1.8 }}>
        Familiarize yourself with the basics of Epilepsy, different seizure types, and potential triggers. You are already headed in the right direction!
      </p>

      {/* 1. Speak To A Neurologist */}
      <section className="card" style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
          <div style={{ padding: '0.75rem', background: 'var(--accent-light)', borderRadius: '12px' }}>
            <Stethoscope size={28} color="var(--accent-primary)" />
          </div>
          <h2 style={{ margin: 0 }}>1. Speak To A Neurologist</h2>
        </div>
        <p style={{ color: 'var(--text-secondary)' }}>
          A neurologist is crucial for accurately diagnosing seizures and epilepsy, pinpointing their cause, and developing an effective treatment plan to improve your quality of life, and minimize potential complications. A neurologist, especially one specializing in epilepsy (an epileptologist), is the best choice for evaluating seizures.
        </p>
      </section>

      {/* 2. Asking For Support */}
      <section className="card" style={{ marginBottom: '3rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
          <div style={{ padding: '0.75rem', background: 'var(--accent-light)', borderRadius: '12px' }}>
            <Users size={28} color="var(--accent-primary)" />
          </div>
          <h2 style={{ margin: 0 }}>2. Asking For Support</h2>
        </div>
        <p style={{ color: 'var(--text-secondary)' }}>
          Building a support system for epilepsy involves connecting with others who understand the condition, including people with epilepsy and their caregivers. This network can be formed through online communities, support groups, and engaging with family and friends. It is also important to educate yourself and those around you about epilepsy and how to respond to seizures. Open communication, involving loved ones in your care, and sharing your Seizure Action Plan with trusted supporters can really make the difference!
        </p>
      </section>

      {/* 3. Document a Seizure */}
      <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: 'var(--accent-primary)' }}>3. Learn to Document a Seizure</h2>
      
      <div style={{ display: 'grid', gap: '1.5rem', marginBottom: '3rem' }}>
        
        <div style={{ padding: '1.5rem', background: 'var(--bg-secondary)', borderLeft: '4px solid var(--accent-primary)', borderRadius: '0 12px 12px 0', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
          <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}><Activity size={20} /> Behavior Before the Seizure (Pre-ictal)</h3>
          <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-secondary)' }}>
            <li><strong>Pre-seizure activity:</strong> What was the person doing just before the event began?</li>
            <li><strong>Behavioral shifts:</strong> Were there any changes in mood, behavior, or energy levels in the hours or days before the event?</li>
            <li><strong>First sign(s) / auras:</strong> Did the person experience any specific feeling(s) or sensation(s)—an aura or warning—seconds or minutes before the seizure started?</li>
          </ul>
        </div>

        <div style={{ padding: '1.5rem', background: 'var(--bg-secondary)', borderLeft: '4px solid var(--accent-primary)', borderRadius: '0 12px 12px 0', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
          <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}><Clock size={20} /> When the Seizure Occurred</h3>
          <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-secondary)' }}>
            <li><strong>Date and Time of Event:</strong> The exact date and time (including whether it was AM or PM) of the seizure.</li>
          </ul>
        </div>

        <div style={{ padding: '1.5rem', background: 'var(--bg-secondary)', borderLeft: '4px solid var(--accent-primary)', borderRadius: '0 12px 12px 0', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
          <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}><AlertTriangle size={20} /> Triggers & Influencing Factors</h3>
          <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-secondary)' }}>
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
          <h3 style={{ marginBottom: '0.5rem' }}>What Happened During Seizure (Ictal behavior)</h3>
          <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-secondary)' }}>
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
          <h3 style={{ marginBottom: '0.5rem' }}>Body Parts Involved</h3>
          <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-secondary)' }}>
            <li><strong>Origin:</strong> The exact location where the symptom began.</li>
            <li><strong>Path:</strong> How the symptom spread (or if it stayed localized).</li>
            <li><strong>Sides:</strong> Whether the event affected the right, left, or both sides of the body.</li>
          </ul>
        </div>

        <div style={{ padding: '1.5rem', background: 'var(--bg-secondary)', borderLeft: '4px solid var(--accent-primary)', borderRadius: '0 12px 12px 0', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
          <h3 style={{ marginBottom: '0.5rem' }}>What Happened After Seizure (Post-ictal behavior)</h3>
          <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-secondary)' }}>
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
          <h3 style={{ marginBottom: '0.5rem' }}>How Long Did the Seizure Last</h3>
          <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-secondary)' }}>
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

      {/* First Aid Section */}
      <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: 'var(--danger)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <ShieldAlert size={36} /> Seizure First Aid
      </h2>
      <div className="card" style={{ borderTop: '4px solid var(--danger)' }}>
        <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-secondary)', display: 'grid', gap: '1rem', fontSize: '1.1rem' }}>
          <li><strong>Stay calm.</strong></li>
          <li><strong>Catch them if they fall.</strong> Important: A seizure can cause someone to fall or drop things. Catch the seizing person if possible.</li>
          <li><strong>Cushion their head.</strong></li>
          <li><strong>Time the seizure.</strong></li>
          <li><strong>Note behavior:</strong>
            <ul style={{ marginTop: '0.5rem' }}>
              <li><em>Pre-ictal state:</em> The period immediately before a seizure.</li>
              <li><em>Ictal state:</em> The period during which a seizure occurs.</li>
              <li><em>Postictal state:</em> The period of time immediately following a seizure where a person experiences impaired consciousness, confusion, and other neurological or psychological symptoms until they return to their normal baseline.</li>
            </ul>
          </li>
          <li><strong>DO NOT restrain</strong> unless it's to protect from injury. Remove obstacles and other people from the area.</li>
          <li><strong>Protect the person from injury.</strong></li>
          <li><strong>Turn the person on their side</strong> (if they are not already).</li>
          <li><strong style={{ color: 'var(--danger)' }}>NEVER put anything in their mouth.</strong></li>
          <li><strong>Provide reassurance and support</strong> as they recover. Reassure them that they are safe.</li>
          <li><strong>Stay with the person</strong> until they are fully recovered and alert.</li>
        </ul>

        <div style={{ marginTop: '2rem', padding: '1.5rem', background: '#fee2e2', borderRadius: '12px' }}>
          <h3 style={{ color: 'var(--danger)', marginBottom: '1rem' }}>Understand when it is an emergency:</h3>
          <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-primary)', display: 'grid', gap: '0.5rem' }}>
            <li><strong>Status Epilepticus:</strong> A single seizure lasts longer than 5 minutes; Seizure clusters, two or more seizures without recovering consciousness or returning to a normal level of alertness between.</li>
            <li><strong>First time seizure:</strong> No known history of seizures or epilepsy.</li>
            <li><strong>Diabetic seizure:</strong> When a person with diabetes has a seizure.</li>
            <li><strong>Injuries:</strong> When a person is injured during the seizure.</li>
            <li><strong>Other criteria</strong> identified by a person's Seizure Action Plan (SAP).</li>
          </ul>
        </div>
      </div>

    </div>
  );
};

export default EducateYourself;
