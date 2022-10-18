import Faq from './components/accordionapp/Faq';
import Counter from './components/counterapp/Counter';
import Joke from './components/jokeapp/Joke';
import Login from './components/login/Login';
import Modal from './components/Modal';
import Profile from './components/Profileapp/Profile';
import {useState} from 'react'
import Tab from './components/tab/Tab';
import Timer from './components/timer/Timer';

function App() {
  const [showModal, setShowModal] = useState(false)

  const handleShowModal = () => {
    setShowModal(true);
  }
  const handleCloseModal = (e) => {
    if(e.target.classList.contains("cm")){
      setShowModal(false);
    }
  }

  return (
    <div className="App">
      <button type="submit" onClick={handleShowModal}>Open Modal</button>
      <Timer />
      <Tab />
      <Login />
      <Joke />
      <Counter />
      <Faq />
      <Profile />
      {showModal && <Modal onCloseModal={handleCloseModal}/>}                                                  
    </div>
  );
}

export default App;
