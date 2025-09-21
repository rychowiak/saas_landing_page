"use client";
import * as React from "react";
import { useState } from "react";
import { clsx } from "clsx";

const Pricing = () => {
  const [monthly, setMonthly] = useState(false);
  return (
    <section>
      <div className="element">
        <div className="container">
          <div className="max-w-960 border-2 border-amber-400">
            <h3 className="h3 max-lg:h4 max-md:h5 z-3 relative mx-auto mb-14 max-w-lg text-center text-p4 max-md:mb-11 mac-sm:mac-w-sm">
              Flexible pricing for teams of all sizes
            </h3>
            <div className="relative z-4 mx-auto flex w-[375px] rounded-3xl border-[3px] border-s4/25 bg-s1/50 p-2 backdrop-blur-[6px] mac-md:w-[310px]">
              <button
                onClick={() => setMonthly(true)}
                className={clsx("pricing-head_btn", monthly && "text-p4")}
              >
                Monthly
              </button>
              <button
                onClick={() => setMonthly(false)}
                className={clsx("pricing-head_btn", !monthly && 'text-p4')}
              >
                Annual
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
