import React from "react";
import { Container } from "react-bootstrap";
import growLogo from "../assets/img/webp/grow-logo.webp";
import writing from "../assets/img/svg/startwriting.svg";
const Footer = () => {
  return (
    <>
      <section className="bg_footer py-4">
        <Container className="text-center">
          <a href="#">
            <img src={growLogo} alt="grow logo" width={89} height={75} />
          </a>
          <ul className="my-4 py-2 px-0 d-flex justify-content-center gap-1">
            <li className="fs_xsm fw-normal clr_white">
              <span className="fs_sm clr_white opacity-50">© </span>2023 Lior
              krengle
            </li>
            <li>
              <a href="#" className="fs_xsm fw-normal clr_white text-decoration-underline">
                . Privacy
              </a>
            </li>
            <li>
               <a href="#" className="fs_xsm fw-normal clr_white text-decoration-underline">
                . Terms
              </a>
            </li>
            <li>
              <a href="#" className="fs_xsm fw-normal clr_white text-decoration-underline">
                . Collection Notice
              </a>
            </li>
          </ul>
          <button className="fs_md fw-semibold clr_black btn_start bg_white rounded-pill">
            <img src={writing} alt="writing" /> Start Writing
          </button>
          <button className="fs_md fw-semibold clr_black btn_getapp bg_white rounded-pill ms-4">
            Get the app
          </button>
          <div className="line_color my-4"></div>
          <p className="fs_xsm clr_white opacity-50 mb-0">
            <span className="text-decoration-underline">Substack</span> is the
            home for great writing
          </p>
        </Container>
      </section>
    </>
  );
};

export default Footer;
