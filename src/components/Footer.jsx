const Footer = () => {
  return (
    <footer style={{ background: 'var(--bg-primary)', borderTop: '1px solid var(--border-color)', padding: '4rem 0 2rem 0', marginTop: '4rem' }}>
      <div className="container">
        <div style={{ marginBottom: '3rem', maxWidth: '800px', margin: '0 auto 3rem auto', textAlign: 'center' }}>
          <h4 style={{ color: 'var(--danger)', marginBottom: '1rem' }}>Medical Disclaimer</h4>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.8 }}>
            The information provided by this tool is for informational and educational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of a qualified healthcare provider with any questions you may have regarding a medical condition. This tool is not intended to provide medical advice, and its use does not establish a doctor-patient relationship. Never disregard professional medical advice or delay in seeking it because of something you have read in this tool. For all medical concerns or questions, please consult with a physician or other qualified health provider.
          </p>
        </div>
        <div style={{ textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
          &copy; {new Date().getFullYear()} Project Storm. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
