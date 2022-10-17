import React from 'react';
import {MdOutlineLibraryBooks} from 'react-icons/md';
import styles from './style.module.css';
import Questions from './Questions';
import {questions} from './Data';

const Faq = () => {
  return (
    <div className={styles.faqsec}>
        <div className={styles.faq}>
            <div className={styles.contain}>
            <MdOutlineLibraryBooks size= {30} color= "orange" />
            <p className={styles.words1}>FAQs</p>
            <p className={styles.words2}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque fugit iusto ipsa, harum dolorem aut dolorum. Lorem dolor sit amet consectetur adipisicing elit. Doloremque fugit iusto ipsa, harum psum dolor sit amet consectetur adipisicing elit. Doloremque fugit iusto ipsa, harum dolorem aut dolorum. Lorem dolor sit amet consectetur adipis</p>
            </div>
        </div>
        <div className={styles.questions}>
          {questions.map((question) => (
            <Questions key={question.id} title={question.title} answer={question.answer}  />
          ))}
        </div>
    </div>
  )
}

export default Faq