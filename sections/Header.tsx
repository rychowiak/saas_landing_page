"use client";

import clsx from "clsx";
import { useLenis } from "lenis/react";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { useState, useEffect } from "react";

const Header = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const lenis = useLenis();

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 32);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const NavLink = ({ title = "" }) => (
    <Link
      onClick={() => {
        lenis?.scrollTo(`#${title}`, { lerp: 0.1 })
        setIsOpen(false)
      }}
      href="/"
      scroll={false}
      className="base-bold text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-p1 max-lg:my-4 max-lg:h5"
    >
      {title}
    </Link>
  );

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 z-50 w-full py-10 transition-all duration-500 max-lg:py-4",
        hasScrolled && "py-2 bg-black-100 backdrop-blur-[8px]"
      )}
    >
      {/* mobile navbar */}
      <div className="container flex h-14 items-center max-lg:px-5">
        <a
          onClick={() => lenis?.scrollTo("#hero", { lerp: 0.1 })}
          className="lg:hidden flex-1 cursor-pointer z-2"
        >
          <Image
            priority
            alt="logo"
            src={"./images/xora.svg"}
            width={155}
            height={155}
          />
        </a>

        <div
          className={clsx(
            "w-full max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:bg-s2 max-lg:opacity-0",
            isOpen ? "max-lg:opacity-100" : "max-lg:pointer-events-none"
          )}
        >
          <div className="max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:p-6 max-lg:overflow-hidden sidebar-before max-md:px-4">
            <nav className="max-lg:relative max-lg:z-2 max-lg:my-auto">
              <ul className="flex max-lg:block max-lg:px-12">
                <li className="nav-li">
                  <NavLink title="features" />
                  <div className="dot" />
                  <NavLink title="pricing" />
                </li>

                <li className="nav-logo">
                  <Link
                    onClick={() => lenis?.scrollTo("#hero", { lerp: 0.1 })}
                    href=""
                    scroll={false}
                    className="max-lg:hidden transition-transform duration-500 cursor-pointer"
                  >
                    <Image
                      alt="logo"
                      src={"./images/xora.svg"}
                      width={160}
                      height={160}
                    />
                  </Link>
                </li>

                <li className="nav-li">
                  <NavLink title="faq" />
                  <div className="dot" />
                  <NavLink title="download" />
                </li>
              </ul>
            </nav>
            {/*  */}
            <div
              className="lg:hidden block absolute top-1/2 left-0 w-[960px] h-[380px]
            translate-x-[-290px] -translate-y-1/2 rotate-90"
            >
              <Image
                src={"/images/bg-outlines.svg"}
                alt="outline"
                width={960}
                height={380}
                className="relative z-2"
              />
              <Image
                src={"/images/bg-outlines-fill.png"}
                alt="outline"
                width={960}
                height={380}
                className="absolute inset-0 mix-blend-soft-light opacity-5"
              />
            </div>
          </div>
        </div>
        {/* toggle menu button */}
        <button
          className="relative lg:hidden z-2 size-10 border-2 border-s4/25 rounded-full flex justify-center items-center"
          onClick={() => setIsOpen((prevState) => !prevState)}
        >
          <Image
            className="size-1/2 object-contain"
            alt="toggle"
            src={`/images/${isOpen ? "close" : "magic"}.svg`}
            width={20}
            height={20}
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
