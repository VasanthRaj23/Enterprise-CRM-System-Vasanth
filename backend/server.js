const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json());

// Mock Database for CRM Leads
const leads = [
    { id: 1, name: "Acme Corp", status: "Negotiation", value: "$15,000" },
    { id: 2, name: "Global Tech", status: "Closed Won", value: "$45,000" },
    { id: 3, name: "Stark Industries", status: "Initial Contact", value: "$120,000" }
];

// REST API Endpoint to get leads
app.get('/api/leads', (req, res) => {
    res.status(200).json({ success: true, data: leads });
});

app.listen(PORT, () => {
    console.log(`CRM Backend Server running on port ${PORT}`);
});
