import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandsClapping } from "@fortawesome/free-solid-svg-icons";
import React from "react";

function Clap({ claps, blog_id = null, clapIncrement }) {
  const handleClap = async () => {
    clapIncrement();
  };

  return (
    <div className="outline-none">
      <FontAwesomeIcon
        onClick={handleClap}
        icon={faHandsClapping}
        className="icons text-secondary cursor-pointer"
        id="tooltip-clap"
      />
      {/* <Tooltip anchorSelect="#tooltip-clap" content={`${claps} claps`} /> */}
      <span className="text-xs ml-1">{claps}</span>
    </div>
  );
}

export default Clap;
