import { useState } from 'react';
import { Brain, Activity, HelpCircle, AlertCircle, Search, Book } from 'lucide-react';

const seizureTypes = [
  { name: 'Absence', description: 'An absence seizure causes a short period of "blanking out" or staring into space. Like other kinds of seizures, they are caused by brief abnormal electrical activity in a person’s brain.' },
  { name: 'Atypical Absence', description: 'A type of absence seizure that is atypical (a-TIP-i-kul). This means it’s different, unusual, or not typical compared to typical absence seizures, which were previously called petit mal seizures. They are a type of generalized onset seizure, which means they start in both sides of the brain.' },
  { name: 'Atonic', description: 'Muscle "tone" is the muscle\'s normal tension. "Atonic" (a-TON-ik) means "without tone." So in an atonic seizure, muscles suddenly become limp.' },
  { name: 'Clonic', description: '"Clonus" (KLOH-nus) means fast stiffening and relaxing of a muscle that happens repeatedly. In other words, it is repeated jerking. The movements cannot be stopped by restraining or repositioning the arms or legs. Clonic (KLON-ik) seizures are rare and most commonly occur in babies. Most often, clonic movements are seen as part of a tonic-clonic seizure. Jerking movements alone, as with a clonic seizure, may last a few seconds to a minute. Jerking or clonic movements that follow stiffening of muscles, as in a tonic-clonic seizure, can last seconds to 1-2 minutes. A clonic seizure may sometimes be hard to distinguish from a myoclonic seizure. The jerking is more regular and sustained during a clonic seizure.' },
  { name: 'Dacrystic', description: 'Dacrystic seizures are focal or partial seizures when a person makes a crying sound. They may also look like they are grimacing. The emotions (pain or crying) are often forced and the person can’t stop them from happening. Most people don’t feel sense of well-being during a seizure. Usually a person is aware of what’s going on around them during these seizures.' },
  { name: 'Diabetic seizure', description: 'Diabetic seizure is a term used for seizures related to blood sugar levels. When you have extremely low or high blood sugar levels, you may experience severe symptoms, such as confusion, shock, loss of consciousness, and seizure. Diabetic seizures can be fatal. However, emergency medical care can offer relief. Medical emergency.' },
  { name: 'Epileptic or Infantile Spasm', description: 'An epileptic spasm consists of brief (1-3 second) events of arm, leg and head flexion (arms and legs pull into the body) or extension. Spasms typically occur in clusters with events every 5-10 seconds over a 5-10 minute period. Spasms often are seen shortly after waking, and clusters typically are seen several times per day. Infants often become irritable and may cry during the cluster – sometimes this leads to a misdiagnosis of colic.' },
  { name: 'Febrile Seizures', description: 'The febrile seizure age range is children 3 months to 5 or 6 years old. They may have seizures when they have a high fever. These are called febrile seizures (pronounced FEB-rile) and occur in 2% to 5% of all children (2 to 5 out of 100 children). There is a slight tendency for them to run in families.' },
  { name: 'Febrile Seizures - Simple', description: 'Febrile seizures are considered “simple” if they meet all of the following criteria: Generalized, Last less than 15 minutes, No more than one in a 24-hour period' },
  { name: 'Febrile Seizures - Complex', description: 'Febrile seizures are considered “complex or complicated” if any of the following features are present: Start focally with one body part moving independently of others, Last more than 15 minutes, Occur more than once in a 24-hour period' },
  { name: 'Focal', description: 'A focal seizure begins in one side of the brain. They were previously called partial seizures. Focal onset seizures are the most common type of seizures experienced by people with epilepsy. For short, the term focal seizure can be used.' },
  { name: 'Focal Bilateral Tonic Clonic', description: 'Also known as Secondarily Generalized Seizures. These seizures are called focal to bilateral tonic-clonic, because they start in a limited area on one side of the brain and spread to involve both sides. This is different from a generalized onset seizure, which starts on both sides of the brain.' },
  { name: 'Focal Onset Aware', description: 'When the seizure begins in one side of the brain and the person has no confusion or loss of awareness of their surroundings during it, it is called a focal aware seizure. This type of seizure was previously called a simple partial seizure.' },
  { name: 'Focal Onset Impaired Awareness', description: 'When the seizure begins in one side of the brain and the person has confusion or a change in their level of awareness during some or all of it, it is called a focal impaired awareness seizure. This type of seizure was previously called a complex partial seizure.' },
  { name: 'Gelastic', description: 'Gelastic seizures is the term used to describe focal seizures with bouts of uncontrolled laughing or giggling. They are often called laughing seizures. The person may look like they are smiling or smirking. The emotion (laughing) is often forced and the person can’t stop it from happening. Most people don’t feel happy or a sense of well-being during a gelastic seizure. The opposite may happen - they may feel scared or a loss of control. Some people may feel anxious that they will laugh at a socially inappropriate time. Usually a person is aware of what’s going on around them during these seizures.' },
  { name: 'Generalized', description: 'These seizures affect both sides of the brain or groups of cells on both sides of the brain at the same time. This term was used before and still includes seizure types like generalized tonic-clonic, absence, or atonic to name a few.' },
  { name: 'Jacksonian', description: 'A type of focal seizure that originates in a localized area of the brain, specifically the motor cortex, and spreads to other areas. Jacksonian march, also called Jacksonian seizure, is one kind of a focal onset aware seizure. Meaning patients do not lose awareness. Abnormal neuron firing only occurs in part of the brain, and, accordingly, abnormal movement or sensation is limited to only part of the body. The characteristic features of Jacksonian march are (1) it only occurs on one side of the body; (2) it progresses in a predictable pattern from twitching or a tingling sensation or weakness in a finger, a big toe or the corner of the mouth, thenmarches over a few seconds to the entire hand, foot or facial muscles.' },
  { name: 'Motor', description: 'For focal onset seizures: May include jerking (clonic), muscles becoming limp or weak (atonic), tense or rigid muscles (tonic), brief muscle twitching (myoclonus), or epileptic spasms. There may also be automatisms or repeated automatic movements, like clapping or rubbing of hands, lip smacking or chewing, or running. For generalized onset seizures: May include sustained rhythmical jerking movements (clonic), muscles becoming weak or limp (atonic), muscles becoming tense or rigid (tonic), brief muscle twitching (myoclonus), or epileptic spasms (body flexes and extends repeatedly). For unknown onset seizures: Described as either tonic-clonic or epileptic spasms.' },
  { name: 'Myoclonic', description: 'Myoclonic (MY-o-KLON-ik) seizures are brief, shock-like jerks of a muscle or a group of muscles. "Myo" means muscle and "clonus" (KLOH-nus) means rapidly alternating contraction and relaxation—jerking or twitching—of a muscle. Usually, they don\'t last more than a second or two. There can be just one, but sometimes many will occur within a short time. Sometimes myoclonus can occur in people without epilepsy. An example would be a sudden jerk that may wake you up as you\'re just falling asleep.' },
  { name: 'Non-motor', description: 'For focal onset seizures: Examples of symptoms that don’t affect movement could be changes in sensation, emotions, thinking or cognition, autonomic functions (such as gastrointestinal sensations, waves of heat or cold, goosebumps, heart racing, etc.), or lack of movement (called behavior arrest). For generalized onset seizures: Usually called absence seizures. These can be typical or atypical absence seizures (staring spells). Absence seizures can also have brief twitches (myoclonus) that can affect a specific part of the body or just the eyelids. For unknown onset seizures: Usually include a behavior arrest. This means that movement stops – the person may just stare and not make any other movements.' },
  { name: 'Tonic', description: 'Muscle "tone" is the muscle\'s normal tension at rest. In a tonic seizure, the tone is greatly increased: the body, arms, or legs become suddenly stiff or tense. A person may be aware or have only a small change in awareness during a tonic seizure. They usually happen during sleep and usually involve all or most of the brain, affecting both sides of the body. They are short, usually less than 20 seconds. A person may fall if standing when a tonic seizure starts. If stiffening is followed by rhythmic jerking, these are characteristics of tonic-clonic seizures.' },
  { name: 'Tonic-Clonic', description: 'This type of seizure (also called a convulsion) is what most people think of when they hear the word "seizure." An older term for this type of seizure is "grand mal." As implied by the name, they combine the characteristics of tonic and clonic seizures. Tonic means stiffening, and clonic means rhythmical jerking.' },
  { name: 'Unknown', description: 'When a seizure is not witnessed, or the beginning of the seizure is not clear, or its origin is classified as Unknown' }
];

const Classification = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTypes = seizureTypes.filter(type => 
    type.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    type.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container" style={{ padding: '4rem 0', maxWidth: '1000px' }}>
      <section style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: '800px', margin: '0 auto 4rem auto' }}>
        <h1 className="section-title">Seizure <span>Classification</span></h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
          Understanding the different types of seizures is critical for accurate diagnosis and treatment. 
          Seizures are generally classified into three main categories based on where they begin in the brain.
        </p>
      </section>

      <div style={{ display: 'grid', gap: '2rem', marginBottom: '4rem' }}>
        
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
      
      <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '4rem', fontSize: '0.9rem', fontStyle: 'italic' }}>
        * Note: Terms with an asterisk (*) represent older or alternative terminology that is still sometimes used by patients or clinicians.
      </p>

      {/* Dictionary Section */}
      <section style={{ borderTop: '2px solid var(--border-color)', paddingTop: '4rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
            <Book size={36} color="var(--accent-primary)" /> Glossary of Seizure Types
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto' }}>
            Browse through detailed descriptions of specific seizure types. You can search for a specific term using the box below.
          </p>
        </div>

        {/* Search Input */}
        <div style={{ maxWidth: '600px', margin: '0 auto 3rem auto', position: 'relative' }}>
          <Search size={20} color="var(--text-secondary)" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
          <input 
            type="text" 
            placeholder="Search for a term (e.g. Atonic, Clonic, Febrile)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ 
              width: '100%', 
              padding: '1rem 1rem 1rem 3rem', 
              fontSize: '1.1rem', 
              borderRadius: '50px', 
              border: '2px solid var(--border-color)',
              outline: 'none',
              transition: 'border-color 0.2s',
              fontFamily: 'inherit'
            }}
            onFocus={(e) => e.target.style.borderColor = 'var(--accent-primary)'}
            onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}
          />
        </div>

        {/* List of Types */}
        <div style={{ display: 'grid', gap: '1.5rem' }}>
          {filteredTypes.length > 0 ? (
            filteredTypes.map((item, index) => (
              <div key={index} className="card" style={{ padding: '1.5rem 2rem' }}>
                <h3 style={{ fontSize: '1.4rem', color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>{item.name}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.6 }}>{item.description}</p>
              </div>
            ))
          ) : (
            <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-secondary)' }}>
              <p style={{ fontSize: '1.2rem' }}>No seizure types found matching "{searchTerm}"</p>
            </div>
          )}
        </div>
      </section>

    </div>
  );
};

export default Classification;
