import React from "react";
import { useState, useEffect } from "react";

function Timer() {
    
  let date = new Date();

  let hour = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  let [Hour, setHour] = useState(hour);
  let [Munites, setMinutes] = useState(minutes);
  let [Seconds, setSeconds] = useState(seconds);

  useEffect(() => {
    let update =
    setInterval(() => {
      setHour(hour);
      setMinutes(minutes);
      setSeconds(seconds);
    }, 1000);
    return () =>{
        clearInterval(update)
    }
  });

  return (
    <div className="w-full  h-screen ">
      <div className="container mx-auto  mt-[10rem] flex items-center justify-center w-[450px] h-[180px] bg-slate-200 shadow-xl">
        <div className="flex gap-6">
          <div className="w-[120px] flex flex-col gap-1 capitalize px-10 rounded-md items-center justify-center h-[80px] bg-white shadow-2xl">
            <h1 className="text-2xl">Hours</h1>
            <h1 className="text-3xl">{hour}</h1>
          </div>
          <div className="w-[120px] flex flex-col gap-1 capitalize px-10 rounded-md items-center justify-center h-[80px] bg-white shadow-2xl">
            <h1 className="text-2xl">minutes</h1>
            <h1 className="text-3xl">{minutes}</h1>
          </div>
          <div className="w-[120px] flex flex-col gap-1 capitalize px-10 rounded-md items-center justify-center h-[80px] bg-white shadow-2xl">
            <h1 className="text-2xl">seconds</h1>
            <h1 className="text-3xl">{seconds}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timer;
