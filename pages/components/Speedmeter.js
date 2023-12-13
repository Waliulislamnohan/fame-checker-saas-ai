import { useState } from 'react';
import styles from '../../styles/speedmeterStyle.module.css';

export default function SpeedometerPage() {
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(false);
  const [fullName, setFullName] = useState('');

  const checkScore = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('http://localhost:3000/api/calculateFame', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fullName }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      const { fameScore } = data;
      setScore(fameScore);
    } catch (error) {
      console.error('There was an error:', error);
      setScore(0);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (event) => {
    setFullName(event.target.value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Fame checker</h1>
      </div>
      <form onSubmit={checkScore}>
        <input
          type="text"
          id="fullNameInput"
          placeholder="Enter your full name"
          className={styles.searchInput}
          value={fullName}
          onChange={handleInputChange}
        />
        <button type="submit" className={styles.button}>
          Check
        </button>
      </form>

      <div className={styles.speedometer + (loading ? ` ${styles.loading}` : '')}>
        <div className={styles.speedometer1}>
          <div className={styles.score}>{score}</div>
          <div className={styles.needle}></div>
        </div>
      </div>
    </div>
  );
}
