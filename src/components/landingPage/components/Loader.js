import React from "react";
import '../../../App.css'

function Loader() {
  return (
    <div className="ring-container">
    <div className="ring">Loading
        <span className="loader-span"></span>
    </div>
    </div>
  );
}

export default Loader;
