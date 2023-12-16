import { useState, useEffect } from 'react';

import styles from '../../styles/searchResults.module.css';

const SearchResults = ({ fullName, selectedCountry, birthDate,
  socialInput, webInput}) => {

  const [thumbnails, setThumbnails] = useState('');
  const [newsCount, setNewsCount] = useState(0);
  const [firstDisplayedLink, setFirstDisplayedLink] = useState('');
  const [firstSnippet, setFirstSnippet] = useState('');
  useEffect(() => {

  
    const apiKey = 'bd5ff3f938e1f1581f1379fc2b6181dd601278663263bba997b6f73e711d9ef0'; // Replace with your actual SERP API key
    const fetchData = async () => {
      try {
        const corsAnywhereUrl = 'https://cors-anywhere.herokuapp.com/';
        const apiUrl = `https://serpapi.com/search?q=${fullName}+${selectedCountry}+${socialInput}&api_key=${apiKey}`;
        const response = await fetch(corsAnywhereUrl + apiUrl);
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();

        const organicResults = data.organic_results;
    
        if (organicResults.length > 0) {
          const firstResult = organicResults[0]; // Extracting the first result
          setFirstDisplayedLink(firstResult.displayed_link);
          setFirstSnippet(firstResult.snippet);
        }

        if (data.inline_images && data.inline_images.length > 0) {
          const firstThumbnail = data.inline_images[0].thumbnail;
          setThumbnails(firstThumbnail);
          console.log(firstThumbnail);
        }
        const thumbnails = data.inline_images.map((image) => image.thumbnail);
        setThumbnails(thumbnails);

        const newsResults = organicResults.filter((result) => result.news_article);
        setNewsCount(newsResults.length);
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    };

    fetchData();
  }, [fullName, selectedCountry,socialInput]);


  return (
    <div>
    <div className={styles.inputBox}>

        <div className={styles.searchResults}>
          <h2>Search Results</h2>

            <div className={styles.searchResult}>
            <ul>
            <li>
<p>Follower {firstDisplayedLink}</p>
            </li>
            <li><p> {firstSnippet}</p></li>
            </ul>
            </div>

        </div>



        <div className={styles.thumbnailContainer}>
          <h2>Thumbnail</h2>
          <img src={thumbnails} alt="Thumbnail" />
        </div>




    </div>

    </div>
  );
};

export default SearchResults;
