import React, { useState } from "react";
import { BackTop } from "./common/icons/Svg";

const BackToTop = () => {
  const [backTop, setBackTop] = useState(false);
  const moveToTop = () => {
    document.documentElement.scrollTop = 0;
  };
  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 100) {
      setBackTop(true);
    } else {
      setBackTop(false);
    }
  });
  return (
    <>
      <div>
        {backTop ? (
          <span
            onClick={moveToTop}
            className="position-fixed btn_top bottom-0 end-0 me-3 mb-4 cursor_pointer"
          >
            <BackTop />
          </span>
        ) : (
          ""
        )}
        <span></span>
      </div>
    </>
  );
};

export default BackToTop;
