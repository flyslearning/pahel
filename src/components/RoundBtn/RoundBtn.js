import React from "react";

import "./RoundBtn.css";

const RoundBtn = ({ name, clickFunc }) => {
  return (
    <div>
      <button onClick={clickFunc} className="round-btn">
        {name}
      </button>
    </div>
  );
};

export default RoundBtn;
