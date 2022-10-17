import { useState, useEffect } from 'react';
import styles from './joke.module.css';

const Joke = () => {
    const url = "https://sv443.net/jokeapi/v2/joke/Programming?type=single";
    const [isLoading, setIsLoading] = useState(true);
    const [joking, setJoking] = useState({});

    async function getJoke(){
        setIsLoading(true);
        const response = await fetch(url);
        const data = await response.json();
        setJoking(data);
        setIsLoading(false);
    }

    useEffect(() => {
        setTimeout(() => {
            getJoke();
        }, 2000);
    }, []);

  return (
    <div className={styles.container}>
        <div className={styles.joke}>
            <h2 style={{color: 'white'}}>Random Joke Generator</h2>
            {isLoading ? (
                <h2 style={{color: 'white'}}>Loading...</h2>
            ) : (
                <p style={{margin: '10px', color: 'white', fontSize: 14}}>{joking.joke}</p>
            )}
            <button onClick={getJoke} className={styles.button}>Generate New Joke</button>
        </div>
    </div>
  )
}

export default Joke