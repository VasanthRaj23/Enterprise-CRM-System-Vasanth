import React, { useState, useEffect } from 'react';

function App() {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    setLeads([
      { id: 1, name: "Acme Corp", status: "Negotiation", value: "$15,000" },
      { id: 2, name: "Global Tech", status: "Closed Won", value: "$45,000" },
      { id: 3, name: "Stark Industries", status: "Initial Contact", value: "$120,000" }
    ]);
  }, []);

  return (
    <div style={{ backgroundColor: '#121212', color: '#ffffff', minHeight: '100vh', padding: '40px', fontFamily: 'sans-serif' }}>
      <header style={{ borderBottom: '1px solid #333', paddingBottom: '20px', marginBottom: '40px' }}>
        <h1 style={{ margin: 0, fontSize: '2.5rem', letterSpacing: '2px' }}>ENTERPRISE CRM</h1>
        <p style={{ color: '#aaaaaa', marginTop: '10px' }}>Sales Pipeline Management</p>
      </header>
      
      <main style={{ display: 'grid', gap: '20px', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
        {leads.map(lead => (
          <div key={lead.id} style={{ backgroundColor: '#1e1e1e', padding: '30px', borderRadius: '8px', border: '1px solid #2a2a2a', transition: 'transform 0.3s' }}>
            <h3 style={{ marginTop: 0, fontSize: '1.5rem' }}>{lead.name}</h3>
            <p style={{ color: '#cccccc' }}><strong>Status:</strong> {lead.status}</p>
            <p style={{ color: '#4caf50', fontSize: '1.2rem', fontWeight: 'bold' }}>{lead.value}</p>
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;
