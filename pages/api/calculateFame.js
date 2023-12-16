// pages/api/calculateFame.js

import axios from 'axios';

// Algorithm weights
const weights = {
  weight_crunchbase_com: 0.1,
  weight_imdb: 0.1,
  weight_google_points: 0.2,
  weight_wikipedia: 0.3,
  weight_wikinews: 0.3,
};

async function searchPersonOnPlatforms(fullName,selectedCountry,birthDate,apiKey) {
  const searchQueries = [
    `site:crunchbase.com ${fullName}`, // Search on Crunchbase
    `site:imdb.com ${fullName}`, // Search on IMDb
    `site:google.com knowledge panel ${fullName}`, // Search on Google Knowledge Panel
    `site:news.google.com ${fullName} location:${selectedCountry}`, // Search on Google News
    `site:wikipedia.org ${fullName} location:${selectedCountry} ${birthDate}`, // Search on Wikipedia
    `site:wikinews.org ${fullName} location:${selectedCountry}`, // Search on Wikinews
    // Add more sites/platforms to search here
  ];

  const results = {};

  for (const query of searchQueries) {
    try {
      const response = await axios.get('https://serpapi.com/search', {
        params: {
          api_key: apiKey,
          q: query,
        },
      });

      const searchResults = response.data.organic_results;
      const siteKey = query.split(' ')[0].split(':').pop(); // Extract the site name
      results[`weight_${siteKey}`] = searchResults.length > 0 ? 1 : 0;
    } catch (error) {
      const siteKey = query.split(' ')[0].split(':').pop(); // Extract the site name
      results[`weight_${siteKey}`] = 0; // Error indicator
    }
  }

  

  return results;
}

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { fullName,selectedCountry,socialInput,
		webInput,birthDate} = req.body;
    const apiKey = 'bd5ff3f938e1f1581f1379fc2b6181dd601278663263bba997b6f73e711d9ef0'; // Replace with your actual SERP API key

    try {
      const presenceIndicators = await searchPersonOnPlatforms(fullName,selectedCountry,birthDate, apiKey);
      const presenceValues = Object.values(presenceIndicators);

      // Calculate fame score based on presence indicators (1 for presence, 0 for absence)

      const weightsArray = Object.values(weights);

      const fameScore = (presenceValues.reduce(
        (acc, val, index) => acc + (weightsArray[index] || 0) * val,
        0
      ))*100;

      res.status(200).json({ fameScore, presenceIndicators,  });

    } catch (error) {
      console.error('Error processing request:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
