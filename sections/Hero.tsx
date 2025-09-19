import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";

const Hero = () => {
  return (
    <section className="relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 mx-md:pb-32">
      <div className="element">
        <div className="container">
          <div className="relative z-2 max-w-512 max-lg:max-w-388">
            <div className="caption small-2 uppercase text-p3">
              Video Editing
            </div>
            <h1 className="mb-6 h1 text-p4 uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12">
              Amazingly simple
            </h1>
            <p className="max-w-440 mb-14 body-1 max-md:mb-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum quasi velit aperiam quos ipsam.
            </p>
            <Link href={"/"}>
              <Button icon={"./images/zap.svg"}>Try it now</Button>
            </Link>
          </div>

          <div className="absolute -top-32 left-[calc(50%-340px)] w-[1230px] pointer-events-none hero-img_res">
            <Image
              src={"/images/hero.png"}
              alt="hero"
              width={1230}
              height={1230}
              className="max-lg:h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
