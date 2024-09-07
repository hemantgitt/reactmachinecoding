import React, { useState, useEffect } from "react";

const OnlineOfflineStatus = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleonline = () => {
      setIsOnline(true);
    };
    const handleoffline = () => {
      setIsOnline(false);
    };

    window.addEventListener("online", handleonline);
    window.addEventListener("offline", handleoffline);

    return () => {
      window.removeEventListener("online" , handleonline)
      window.removeEventListener("offline" , handleoffline)
    }
  }, []);

  return <p>{isOnline ? 'Online' : 'Offline'}</p>;
};

export default OnlineOfflineStatus; 
