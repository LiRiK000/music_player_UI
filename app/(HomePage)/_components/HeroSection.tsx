"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
export const HeroSection = () => {
  const HeroRef = useRef(null);
  useGSAP(() => {
    gsap.fromTo(
      HeroRef.current,
      { opacity: 0, yPercent: -100 },
      { opacity: 1, yPercent: 0, delay: 1, duration: 2 }
    );
  }, []);
  return (
    <section ref={HeroRef} style={{ opacity: 0 }}>
      <div className="w-[95vw] h-full bg-[url('/action-3195378.png')] bg-no-repeat bg-cover">
        <div className="w-full flex justify-end z-10">
          <div className="mr-20 mt-20">
            <h1 className="text-white text-6xl font-bold text-right">
              WHAT’S NEW?
            </h1>
            <div className="max-w-4xl">
              <p className="text-white text-right">
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                sed pellentesque odio, nec iaculis turpis. Praesent convallis
                est vitae auctor consequat. Aliquam pretium suscipit facilisis.
                Cras ornare ligula nulla, non fringilla lacus tincidunt in.
                Aenean mattis id dui sed semper. Donec tincidunt blandit nibh,
                ac fringilla mi pellentesque eget. Nulla sed purus vitae mi
                consectetur dapibus. Nam est lacus, convallis vitae egestas a,
                condimentum ac sapien.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-[65vh] flex justify-center items-end">
          <div className="mb-12">
            <Button
              className="rounded-[50px] bg-[rgba(68,63,63,0.6)] px-12 hover:bg-[rgba(68,63,63,0.9)]"
              size="lg"
            >
              <span className="text-2xl">Start</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
