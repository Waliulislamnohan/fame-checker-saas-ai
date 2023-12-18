import { useState, useEffect } from 'react';

import styles from '../../styles/speedmeterStyle.module.css';
import SearchResults from './SearchResults';
import Confetti from 'react-confetti';




export default function SpeedometerPage() {
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(false);
  const [fullName, setFullName] = useState('');
  const [webInput, setWebInput] = useState('');
  const [socialInput, setSocialInput] = useState('');
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [showConfetti, setShowConfetti] = useState(false);
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((error) => console.error('Error fetching countries:', error));
  }, []);

  const checkScore = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('http://localhost:3000/api/calculateFame', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName,
          location: selectedCountry,
          socialInput,
          webInput,
          birthDate,
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      const { fameScore } = data;
      setScore(fameScore);

      if (fameScore > 70) {
        setShowConfetti(true);
        setTimeout(() => {
          setShowConfetti(false); // Hide confetti after 5 seconds (adjust as needed)
        }, 5000); // Show confetti if score is above 70
      }

    } catch (error) {
      console.error('There was an error:', error);
      setScore(0);
    } finally {
      setLoading(false);
    }
  };
  let status = '';
  if (score < 30) {
    status = 'Poor';
  } else if (score >= 30 && score < 50) {
    status = 'Average';
  } else if (score >= 50 && score < 70) {
    status = 'Good';
  } else if (score >= 70) {
    status = 'Excellent';
  }

  useEffect(() => {
    if (showConfetti) {
      const timer = setTimeout(() => {
        setShowConfetti(false); // Hide confetti after 5 seconds (adjust as needed)
      }, 5000);

      return () => clearTimeout(timer); // Clear the timer on component unmount
    }
  }, [showConfetti]);
  
  const handleBirthDateChange = (event) => {
    setBirthDate(event.target.value);
  };
  
  const handleInputChange = (event) => {
    setFullName(event.target.value);
  };

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const handleSocialInputChange = (event) => {
    setSocialInput(event.target.value);
  };

  const handleWebInputChange = (event) => {
    setWebInput(event.target.value);
  };

  return (
    <div className={styles.container}>

      <div className={styles.header}>
        <h1>Fame checker</h1>
      </div>

      <div>
        <form className={styles.inputBox} onSubmit={checkScore}>
          <select
            id="countrySelect"
            className={styles.locDropdown}
            value={selectedCountry}
            onChange={handleCountryChange}
          >
            <option value="">Location</option>
            {countries.map((country) => (
              <option key={country.name.common} value={country.name.common}>
                {country.name.common}
              </option>
            ))}
          </select>

          <input
            type="text"
            id="fullNameInput"
            placeholder="Enter your full name"
            className={styles.searchInput}
            value={fullName}
            onChange={handleInputChange}
          />
<input
  type="date"
  id="birthDateInput"
  className={styles.searchInput}
  value={birthDate}
  onChange={handleBirthDateChange}
/>
          <input
            type="text"
            id="socialInput"
            placeholder="Enter your social-media url"
            className={styles.searchInput}
            value={socialInput}
            onChange={handleSocialInputChange}
          />

          <input
            type="text"
            id="webInput"
            placeholder="Website link"
            className={styles.searchInput}
            value={webInput}
            onChange={handleWebInputChange}
          />
          <button type="submit" className={styles.button}>
            Check ➤
          </button>
        </form>
      </div>

      <div className={styles.inputBox}>
        {loading ? (
          <div className={styles.loadingWrapper}>
            {/* Skeleton loading effect */}
            <div className={styles.skeletonCircle}></div>
            <div className={styles.skeletonScore}></div>
          </div>
        ) : (

          <div className={styles.speedometer + (loading ? ` ${styles.loading}` : '')}>
        <div className={styles.speedometer1}>
          <div className={styles.score}>{score}</div>
          <div className={styles.needle}></div>
        </div>
      </div>
        )}
        <div className={styles.status}>{status}</div>
      </div>



      {loading === false && (
    <SearchResults
      fullName={fullName}
      selectedCountry={selectedCountry}
      birthDate={birthDate}
      socialInput={socialInput}
      webInput={webInput}
    />
  )}
  {showConfetti && <Confetti />} 
    </div>
  );
}
