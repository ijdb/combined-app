import React, { useEffect, useState } from "react";

function Tracker() {
  const [windowwidth, setwindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function watchWidth() {
      setwindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", watchWidth);

    return function () {
      window.removeEventListener("resize", watchWidth);
    };
  }, []);

  return <div className="window-title">Window width: {windowwidth}</div>;
}

export default Tracker;
