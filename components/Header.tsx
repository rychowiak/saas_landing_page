import Image from "next/image";
import Link from "next/link";
import * as React from "react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 z-50 w-full py-10">
      <div className="container flex h-14 items-center max-lg:px-5">
        <a className="lg:hidden flex-1 cursor-pointer z-2">
          <Image
            priority
            alt="logo"
            src={"./images/xora.svg"}
            width={155}
            height={55}
          />
        </a>

        <div className="w-full max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:bg-s2 max-lg:opacity-0">
          <div className="max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:p-6 max-lg:overflow-hidden sidebar-before max-md:px-4">
            <nav className="max-lg:relative max-lg:z-2 max-lg:my-auto">
              <ul className="flex max-lg:block max-lg:px-12">
                <li className="nav-li">
                  <Link
                    href="/"
                    className="base-bold text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-p1 max-lg:my-4 max-lg:h5"
                  >
                    features
                  </Link>
                  <div className="dot" />
                  <Link
                    href="/"
                    className="base-bold text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-p1 max-lg:my-4 max-lg:h5"
                  >
                    pricing
                  </Link>
                </li>

                <li className="nav-logo">
                  <Link href="/">
                    <Image
                      alt="logo"
                      src={"./images/xora.svg"}
                      width={160}
                      height={55}
                    />
                  </Link>
                </li>

                <li className="nav-li">
                  <Link
                    href="/"
                    className="base-bold text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-p1 max-lg:my-4 max-lg:h5"
                  >
                    faq
                  </Link>
                  <div className="dot" />
                  <Link
                    href="/"
                    className="base-bold text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-p1 max-lg:my-4 max-lg:h5"
                  >
                    download
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
