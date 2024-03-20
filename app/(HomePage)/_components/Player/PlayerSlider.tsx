import { Slider } from "@/components/ui/slider";

export const PlayerSlider = () => {
  return (
    <Slider defaultValue={[1]} max={100} step={1} className="max-w-[500px]" />
  );
};
