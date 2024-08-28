import React from "react";
import { BackgroundIcon1 } from "../assets/svg";

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year

  return (
    <div className="relative">
      <BackgroundIcon1 position="top-[10%] right-[5%]" />
      <div className="flex flex-col items-center mt-12 p-4 md:p-20 bg-black text-white">
        <div className="flex flex-col md:flex-row md:justify-center gap-12 items-center">
          <a href="/">
            <li className="list-none text-[24px] cursor-pointer">Startseite</li>
          </a>
          <a href="/about">
            <li className="list-none text-[24px] cursor-pointer">Über uns</li>
          </a>
          <a href="services">
            <li className="list-none text-[24px] cursor-pointer">
              Unsere Dienstleistungen
            </li>
          </a>
          <a href="contact">
            <li className="list-none text-[24px] cursor-pointer">
              Kontaktiere uns
            </li>
          </a>
        </div>
        <p className="mt-12">Copyright &copy;{currentYear}</p>
      </div>
    </div>
  );
};

export default Footer;
