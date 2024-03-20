"use client";

import { PlayerButtonsControll } from "./PlayerButtonsControll";
import { PlayerSlider } from "./PlayerSlider";
import { PlayerSound } from "./PlayerSound";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export const BottomPlayer = () => {
  const PlayerRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      PlayerRef.current,
      { opacity: 0, yPercent: 100 },
      { opacity: 1, yPercent: 0, delay: 2 }
    );
  }, []);
  return (
    <div
      ref={PlayerRef}
      className="fixed w-full overflow-x-hidden bottom-0 h-max shadow-2xl bg-[rgb(27,26,26)]"
      style={{ opacity: 0 }}
    >
      <div className="flex w-full justify-start flex-row p-6">
        <PlayerSound />
        <PlayerButtonsControll />
        <PlayerSlider />
      </div>
    </div>
  );
};
