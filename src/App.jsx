import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';

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
          <Route path="getting-started" element={<Placeholder title="Getting Started" />} />
          <Route path="support" element={<Placeholder title="Support" />} />
          <Route path="classification" element={<Placeholder title="Classification" />} />
          <Route path="resources" element={<Placeholder title="Resources" />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
