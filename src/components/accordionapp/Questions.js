import React from 'react';
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai';
import {useState} from 'react';
import styles from './style.module.css';

const Questions = ({title, answer}) => {
    const handleClick = () =>{
        setShowAnswer(!showAnswer);
    }
    const [showAnswer, setShowAnswer] = useState(false);
  return (
    <div className={styles.contques}>
        <div className={styles.conthead}>
            <h4>{title}</h4>
            <button onClick={handleClick} className={styles.buttonicon}>
                {showAnswer ? (
                <AiOutlineMinus color="red" />
                ) : (
                    <AiOutlinePlus color="green" />
                )}
            </button>
        </div>
        <div className={styles.contansa}>
            {showAnswer && <p className={styles.textlast}>{answer}</p>}
        </div>
    </div>
  );
};

export default Questions;