import styles from './counter.module.css';
import {useState} from 'react';
import React from 'react'

const Counter = () => {
  const [count, setCount] = useState(0);
  const handleSub = () =>{
    setCount(count - 1);
  }
  const handleReset = () =>{
    setCount(0);
  }
  const handleAdd = () =>{
    setCount(count + 1);
  }

  let color = "#fff";
  if(count >= 1){
    color = "green";
  } else if(count < 0){
    color = "red";
  } else{
    color = "white";
  }
  return (
    <section className={styles.sec}>
        <div className={styles.cont}>
          <h1 className={styles.head}>React Counter App</h1>
          <p className={styles.num} style={{color: color}}>{count}</p>
          <div className="buttons1">
            <button style={{background: "red", color: "white"}} className={styles.button1} onClick={handleSub}>- Substract</button>
            <button className={styles.button1} onClick={handleReset}>! Reset</button>
            <button style={{background: "green", color: "white"}} className={styles.button1} onClick={handleAdd}>+ Add</button>
          </div>
        </div>
      </section>
  )
}

export default Counter