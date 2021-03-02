import moment from "moment";
import React, { useState, useEffect } from "react";

const GetTime = () => {
  const [cTime, setCTime] = useState(new Date());
  const momentTime = moment(cTime);
  useEffect(() => {
    const interval = setInterval(() => {
      setCTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div>{momentTime.format("MMMM Do YYYY")}</div>
      <div>{momentTime.format("h:mm:ss a")}</div>
    </>
  );
};
export default GetTime;
