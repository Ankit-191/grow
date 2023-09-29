import React from "react";

const Preloder = () => {
  setTimeout(() => {
    document.getElementById("none").classList.add("d-none");
    document.body.style.overflow = "unset";
  }, 3000);
  return (
    <>
      <div
        id="none"
        className="bg-black vh-100 w-100 position-fixed z_50 top-0 start-0 d-flex align-items-center justify-content-center h-100"
      >
        <div className="loader">
          <div className="loader-inner">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Preloder;
