import React, { useState, useEffect } from "react";
import "./NotificationBanner.css";

import car from "../../assets/images/car.png";

const NotificationBanner = () => {
  const notifications = [
    {
      id: 1,
      message:
        "Empowering Women on the Move: Stay Tuned for Our Exclusive Cab Service Of Women, For Women, By Women - Where Every Driver is a Sister on the Road!",
    },
    {
      id: 2,
      message:
        "Empowering Women on the Move: Stay Tuned for Our Exclusive Cab Service Of Women, For Women, By Women - Where Every Driver is a Sister on the Road!",
    },
    {
      id: 3,
      message:
        "Empowering Women on the Move: Stay Tuned for Our Exclusive Cab Service Of Women, For Women, By Women - Where Every Driver is a Sister on the Road!",
    },
  ];

  const [currentNotification, setCurrentNotification] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentNotification((currentNotification + 1) % notifications.length);
    }, 8000); // Change notification every 5 seconds

    return () => {
      clearInterval(intervalId);
    };
  }, [currentNotification]);

  return (
    <div className="banner">
      <div className="linear-gradient animated-text">
        <img src={car} className="car" />
        <p className="car-text">{notifications[currentNotification].message}</p>
      </div>
    </div>
  );
};

export default NotificationBanner;
