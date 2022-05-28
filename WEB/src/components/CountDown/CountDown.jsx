import { useRef, useState, useEffect } from "react";

import './CountDown.css'



function CountDown() {

    const [timerDays, setTimerDays] = useState('00')
    const [timerHours, setTimerHours] = useState('00')
    const [timerMinutes, setTimerMinutes] = useState('00')
    const [timerSeconds, setTimerSeconds] = useState('00')


    let interval = useRef()

    const startTimer = () => {
        const countdownDate = new Date('June 23, 2022  17:00:00').getTime()

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
    }, [startTimer])

    return (
        <>
        <h1 className="text-center">Comenzamos la cuenta atrás </h1>
            <div className='count-down text-center'>
                <section className='count-down-section'>
                    <h5>DIAS</h5>
                    <p>{timerDays}</p>
                </section>
                <section className='count-down-section'>
                    <h5>HORAS</h5>
                    <p>{timerHours}</p>
                </section>
                <section className='count-down-section'>
                    <h5>MINUTOS</h5>
                    <p>{timerMinutes}</p>
                </section>
                <section className='count-down-section'>
                    <h5>SEGUNDOS</h5>
                    <p>{timerSeconds}</p>
                </section>
            </div>
        </>
    )
}

export default CountDown