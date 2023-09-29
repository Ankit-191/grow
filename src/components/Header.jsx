import React, { useState } from "react";
import { Container } from "react-bootstrap";
import growLogo from "../assets/img/webp/grow-logo.webp";
import { RxCross1 } from "react-icons/rx";
import { BiMenu } from "react-icons/bi";
import { NavData } from "./common/Helper";
import { Logo } from "./common/icons/Svg";
const Header = () => {
  const [head, sethead] = useState(true);
  function showUl() {
    sethead(!head);
  }
  if (!head) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
  return (
    <>
      <section className="pt-sm-3 pt-2">
        <Container>
          <div className="d-flex align-items-center justify-content-between rounded-pill bg_header">
            <a href="#">
              <Logo />
            </a>

            <ul
              className={`d-flex flex-column p-0 m-0 gap-3 flex-md-row align-items-center justify-content-center phone ${
                head ? "" : "right_0 text-center"
              }`}
            >
              {NavData.map((data, index) => {
                return (
                  <li key={index}>
                    <a
                      href={data.hrefLink}
                      className={`fs_sm fs_md_sm fw-normal clr_white position-relative ${
                        index === 0 ? "active_link" : "nav_line"
                      }`}
                      onClick={() => sethead(true)}
                    >
                      {data.navContent}
                    </a>
                  </li>
                );
              })}
              <li className="fs_md fs_md_sm fw-medium bg_white rounded-pill btn_subscribe d-md-none">
                + Subscribe
              </li>
            </ul>
            <button className="fs_md fw-medium bg_white rounded-pill btn_subscribe d-none d-md-flex">
              + Subscribe
            </button>
            <div onClick={showUl} className="z_30 d-md-none">
              <span className="clr_white fs_6xl cursor_pointer mb-0">
                {head ? <BiMenu /> : <RxCross1 />}
              </span>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Header;
