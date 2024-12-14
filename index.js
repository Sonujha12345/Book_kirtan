const express = require('express');
const app = express();
const port = 3000;

// Sample Kirtan List (replace with actual data from database or external API)
const kirtanList = [
  { id: 1, name: 'Morning Kirtan', description: 'Early morning chanting session.' },
  { id: 2, name: 'Evening Kirtan', description: 'Evening devotional song and chant.' },
  { id: 3, name: 'Weekly Kirtan', description: 'Weekly group chanting sessions.' },
];

// Sample Panchang data (replace with actual Panchang data or API)
const panchangData = {
  date: '2024-12-14',
  day: 'Saturday',
  tithi: 'Shukla Paksha',
  nakshatra: 'Ashwini',
  yoga: 'Vyatipata',
  karana: 'Vishkumbha',
  rahuKaal: '12:30 PM - 01:30 PM',
  sunset: '05:45 PM',
  sunrise: '06:30 AM'
};

// API endpoint to get the list of Kirtans
app.get('/getKirtanList', (req, res) => {
  res.json(kirtanList);
});

// API endpoint to get Panchang details for today
app.get('/getPanchang', (req, res) => {
  res.json(panchangData);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
