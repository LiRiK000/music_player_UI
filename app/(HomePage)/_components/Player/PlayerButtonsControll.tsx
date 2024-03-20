"use client";

import { Pause, Play, StepBack, StepForward } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PlayerSlider } from "./PlayerSlider";
import { useState } from "react";

export const PlayerButtonsControll = () => {
  const [play, setPlay] = useState<boolean>(true);
  const [PlayNextSound, setPlayNextSound] = useState<boolean>(false);
  const [PlayPrevSound, setPlayPrevSound] = useState<boolean>(false);
  const handleClick = () => {
    setPlay((prev) => !prev);
  };
  const PlayNext = () => {
    setPlayNextSound((prev) => !prev);
  };
  const PlayPrev = () => {
    setPlayPrevSound((prev) => !prev);
  };
  return (
    <div className="flex flex-row items-center justify-center overflow-hidden ml-12 mr-2">
      <Button
        className="hover:bg-transparent"
        variant="ghost"
        onClick={PlayPrev}
      >
        <StepBack className="text-white h-12 w-12" />
      </Button>
      <Button
        className="hover:bg-transparent"
        variant="ghost"
        onClick={handleClick}
      >
        {play ? (
          <Pause className="text-white h-12 w-12" />
        ) : (
          <Play className="text-white h-12 w-12" />
        )}
      </Button>
      <Button
        className="hover:bg-transparent"
        variant="ghost"
        onClick={PlayNext}
      >
        <StepForward className="text-white h-12 w-12" />
      </Button>
    </div>
  );
};
