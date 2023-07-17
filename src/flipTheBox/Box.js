import React from "react";

function Box(props) {
  const styles = {
    backgroundColor: props.on ? "#3AA6B9" : "#FF9EAA",
  };

  return <div style={styles} className="box" onClick={props.toggle} ></div>;
}

export default Box;
