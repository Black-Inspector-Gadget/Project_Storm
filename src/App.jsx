import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';

import GettingStarted from './pages/GettingStarted';
import EducateYourself from './pages/EducateYourself';
import SeizureActionPlans from './pages/SeizureActionPlans';
import SeizureJournals from './pages/SeizureJournals';
import ChallengeStigma from './pages/ChallengeStigma';
import UnderstandingDiagnosis from './pages/UnderstandingDiagnosis';
import HowToHelp from './pages/HowToHelp';

const Placeholder = ({ title }) => (
  <div className="container" style={{ padding: '4rem 0' }}>
    <h1 className="section-title">{title}</h1>
    <div className="card" style={{ textAlign: 'center' }}>
      <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }}>Content coming soon. This section is currently being migrated.</p>
    </div>
  </div>
);

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="getting-started" element={<GettingStarted />} />
          <Route path="getting-started/educate-yourself" element={<EducateYourself />} />
          <Route path="getting-started/seizure-action-plans" element={<SeizureActionPlans />} />
          <Route path="getting-started/seizure-journals" element={<SeizureJournals />} />
          <Route path="getting-started/challenge-the-stigma" element={<ChallengeStigma />} />
          <Route path="getting-started/understanding-diagnosis" element={<UnderstandingDiagnosis />} />
          <Route path="getting-started/how-to-help" element={<HowToHelp />} />
          <Route path="support" element={<Placeholder title="Support" />} />
          <Route path="classification" element={<Placeholder title="Classification" />} />
          <Route path="resources" element={<Placeholder title="Resources" />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
