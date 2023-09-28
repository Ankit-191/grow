import React, { useState } from "react";
import { Container } from "react-bootstrap";
import growLogo from "../assets/img/webp/grow-logo.webp";
import { RxCross1 } from "react-icons/rx";
import { BiMenu } from "react-icons/bi";
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
              <img
                src={growLogo}
                alt="grow logo"
                className="grow_logo"
                width={63}
                height={53}
              />
            </a>

            <ul
              className={`d-flex flex-column p-0 m-0 gap-3 flex-md-row align-items-center justify-content-center phone ${
                head ? "" : "right_0 text-center"
              }`}
            >
              <li>
                <a
                  href="#home"
                  className="fs_sm fw-normal clr_white position-relative nav_line"
                  onClick={() => sethead(true)}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#welcome"
                  className="fs_sm fw-normal clr_white position-relative nav_line"
                  onClick={() => sethead(true)}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#form"
                  className="fs_sm fw-normal clr_white position-relative nav_line"
                  onClick={() => sethead(true)}
                >
                  Article
                </a>
              </li>
              <li>
                <a
                  href="#view_section"
                  className="fs_sm fw-normal clr_white position-relative nav_line"
                  onClick={() => sethead(true)}
                >
                  Events
                </a>
              </li>
              <li className="fs_md fw-medium bg_white rounded-pill btn_subscribe d-md-none">
                + Subscribe
              </li>
            </ul>
            <button className="fs_md fw-medium bg_white rounded-pill btn_subscribe d-none d-md-flex">
              + Subscribe
            </button>
            <div onClick={showUl} className="z_30 d-md-none">
              <h3 className="clr_white fs_4xl cursor_pointer mb-0">
                {head ? <BiMenu /> : <RxCross1 />}
              </h3>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Header;
