import React, { useState, useEffect } from 'react';
import './index.scss';
  
export default () => {
    let timer = null
    let [time, setTime] = useState('')
    useEffect(() => {
        console.log(timer)
        setTime(Date())
        timer = setInterval(() => setTime(Date()), 1000)
        return () => {
            clearInterval(timer)
        }
      })
    return <div className="PageRender">{ time }</div>
};