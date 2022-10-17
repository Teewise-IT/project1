import {useState} from 'react';
import './tab.css';

const Tab = () => {
    const [tab, setTab] = useState(1);

    const handleChange = (index) => {
        setTab(index)
    }
  return (
    <div className="container">
        <div className="box">
            <div className="header">
                <h2 style={{color: 'orangered'}}>More About Us</h2>
                <p style={{fontSize: '10px', color: 'purple'}}>Click the tab buttons to learn more</p>
            </div>
            <div className="cont-content">
                <div className="buttons">
                    <button className={tab === 1 ? 'button active-button' : 'button'} onClick={() => handleChange(1)}>Who We Are</button>
                    <button className={tab === 2 ? 'button active-button' : 'button'} onClick={() => handleChange(2)}>What We Do</button>
                    <button className={tab === 3 ? 'button active-button' : 'button'} onClick={() => handleChange(3)}>Get In Touch</button>
                </div>
                <div className="tab-contents">
                    <article className={tab === 1 ? 'contents active-content' : 'contents'}>
                        <h4>Who We Are...</h4>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium distinctio ea rerum tempore quaerat nemo accusamus laborum recusandae quis exercitationem?</p>
                    </article>
                    <article className={tab === 2 ? 'contents active-content' : 'contents'}>
                        <h4>What We Do...</h4>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium distinctio ea rerum tempore quaerat nemo accusamus laborum recusandae quis exercitationem?</p>
                    </article>
                    <article className={tab === 3 ? 'contents active-content' : 'contents'}>
                        <h4>Get In Touch...</h4>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium distinctio ea rerum tempore quaerat nemo accusamus laborum recusandae quis exercitationem?</p>
                    </article>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Tab;