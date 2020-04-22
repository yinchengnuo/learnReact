import React, { useState, useEffect } from 'react';
import './index.scss';

export default () => {
    let [time, setTime] = useState('')
    useEffect(() => {
        setTime(Date())
        const timer = setInterval(() => setTime(Date()), 1000)
        return () => clearInterval(timer)
    }, [])
    return <div className="PageRender">{time}</div>
};