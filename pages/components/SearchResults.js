import { useState, useEffect } from 'react';
import styles from '../../styles/searchResults.module.css';

const SearchResults = ({ fullName, selectedCountry, socialInput }) => {
  const [thumbnail, setThumbnail] = useState('');
  const [firstDisplayedLink, setFirstDisplayedLink] = useState('');
  const [firstSnippet, setFirstSnippet] = useState('');

  useEffect(() => {
    let isMounted = true; // Flag to check if the component is mounted

    const apiKey = process.env.API_KEY;
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

        if (isMounted && organicResults.length > 0) {
          const firstResult = organicResults[0];
          setFirstDisplayedLink(firstResult.displayed_link);
          setFirstSnippet(firstResult.snippet);

          const firstThumbnail = firstResult.thumbnail;
          setThumbnail(firstThumbnail);
        }
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    };

    fetchData();

    return () => {
      isMounted = false; // Mark the component as unmounted on cleanup
    };
  }, [fullName, selectedCountry, socialInput]);

  return (
    <div className={styles.inputBox}>
      <div className={styles.searchResults}>
        <div className={styles.thumbnailContainer}>
          <img src={thumbnail} alt="Thumbnail" />
          <div className={styles.followerDiv}>{firstDisplayedLink}</div>
        </div>
        <div className={styles.snippetDiv}>{firstSnippet}</div>
      </div>
    </div>
  );
};

export default SearchResults;
