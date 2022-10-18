import React, { useEffect, useState } from 'react';
import './timer.css';

const Timer = () => {
    const [days, setDays] = useState("00");
    const [hours, setHours] = useState("00");
    const [minutes, setMinutes] = useState("00");
    const [seconds, setSeconds] = useState("00");
    
    const [countdownEnded, setCountdownEnded] = useState(false);

    const [close, setClose] = useState(false);

    const startCountdown = () =>{
        let interval = setInterval(() => {
            const endDate = new Date("Oct 25, 2022")
            const startDate = new Date();
            const totalSeconds = (endDate - startDate) / 1000

            const daysCount = Math.floor(totalSeconds / 3600 / 24);
            const hoursCount = Math.floor(totalSeconds / 3600) % 24;
            const minutesCount = Math.floor(totalSeconds / 60) % 60;
            const secondsCount = Math.floor(totalSeconds) % 60;

            function format(t){
                return t < 10 ? `0${t}` : t
            }

            if (totalSeconds < 1) {
                setCountdownEnded(true);
                clearInterval(interval);
            } else {
                setDays(`${format(daysCount)}`);
                setHours(`${format(hoursCount)}`);
                setMinutes(`${format(minutesCount)}`);
                setSeconds(`${format(secondsCount)}`);
            }
        }, 1000);
    }

    useEffect(() => {
      startCountdown();
    }, [])

    const handleClose = () =>{
        setClose(true);
    }

  return (
    <div className={!close ? 'timer-container' : 'close-timer'}>
        <h1>{!countdownEnded ? "PROMO SALES!!!" : "PROMO ENDED!!!"}</h1>
        <div className="time">
            <div className="span">
            <span>
                <p className='para-time'>{days}</p>
                <small>Days</small>
            </span>
            <span>
                <p className='para-time'>{hours}</p>
                <small>Hours</small>
            </span>
            <span>
                <p className='para-time'>{minutes}</p>
                <small>Minutes</small>
            </span><span>
                <p className='para-time'>{seconds}</p>
                <small>Seconds</small>
            </span>
            </div>
        </div>
        <p className="close" onClick={handleClose}>X</p>
    </div>
  )
}

export default Timer;