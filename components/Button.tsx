"use client";

import clsx from "clsx";
import Image from "next/image";
import * as React from "react";

const Button = ({
  icon = "",
  children = "",
  href = "",
  containerClassName = "",
  onClick = () => {},
}) => {
  const Inner = () => (
    <>
      <span>
        <span>Marker</span>
        {icon && (
          <Image
            src={icon}
            alt="circle"
            width={35}
            height={35}
            className="size-10 mr-5 object-contain z-10"
          />
        )}
        <span>{children}</span>
      </span>
    </>
  );
  return href ? (
    <a
      className={clsx(
        "relative, p-0.5 g5 rounded-2xl shadow 500 group",
        containerClassName
      )}
    >
      <Inner />
    </a>
  ) : (
    <button
      className={clsx(
        "relative, p-0.5 g5 rounded-2xl shadow 500 group",
        containerClassName
      )}
      onClick={onClick}
    >
      <Inner />
    </button>
  );
};

export default Button;
