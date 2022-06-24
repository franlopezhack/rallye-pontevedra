import { useRef, useState, useEffect } from "react";

import './CountDown.css'



function CountDown() {

    const [timerDays, setTimerDays] = useState('00')
    const [timerHours, setTimerHours] = useState('00')
    const [timerMinutes, setTimerMinutes] = useState('00')
    const [timerSeconds, setTimerSeconds] = useState('00')


    let interval = useRef()

    const startTimer = () => {
        const countdownDate = new Date('June 24, 2022  17:00:00').getTime()

        interval = setInterval(() => {


            const now = new Date().getTime();
            const distance = countdownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
                clearInterval(interval.current)
            } else {
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }

        }, 1000)
    }

    useEffect(() => {
        startTimer()
        return () => {
            clearInterval(interval.current)
        }
    }, [])

    return (
        <>
            <div className="container-count">
                <h1 className="text-center mt-2 mb-2" style={{ color: 'red', fontWeight: '600' }}>Comenzamos la cuenta atrás </h1>
                <div className='count-down text-center mt-5 mb-5'>
                    <section className='count-down-section me-2' style={{backgroundColor:'#ff00003a'}}>
                        <p>{timerDays}</p>
                        <h5>DIAS</h5>
                    </section>
                    <section className='count-down-section'>
                        <p>{timerHours}</p>
                        <h5>HORAS</h5>
                    </section>
                    <span>:</span>
                    <section className='count-down-section'>
                        <p>{timerMinutes}</p>
                        <h5>MINUTOS</h5>
                    </section>
                    <span>:</span>
                    <section className='count-down-section'>
                        <p>{timerSeconds}</p>
                        <h5>SEGUNDOS</h5>
                    </section>
                </div>
            </div>
        </>

    )
}

export default CountDown