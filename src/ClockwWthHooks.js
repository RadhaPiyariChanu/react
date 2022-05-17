import React, { useState, useEffect } from "react";
const ClockWithHooks = () => {
    const [date, setdate] = useState(new Date());
    const tick = () => {
        setdate(new Date());
    };
    useEffect(() => {
        const timerID = setInterval(() => tick(), 1000);
        return () => clearInterval(timerID);
    });
    return (<div><h2>It is {date.toTimeString()}.</h2></div>)
}
export default ClockWithHooks;