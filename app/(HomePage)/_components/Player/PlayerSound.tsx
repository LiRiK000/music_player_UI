import Image from "next/image";

export const PlayerSound = () => {
  return (
    <div className="flex gap-x-2 max-lg:hidden mr-4 xl:mr-80 items-center">
      <div className="">
        <Image
          src="/dgo.png"
          alt="Sound"
          width={128}
          height={128}
          className="rounded-full h-14 w-14"
        />
      </div>
      <div className="text-white text-[20px]">
        <h1>Death Grips is Online</h1>
        <span className="font-bold">Death Grips</span>
      </div>
    </div>
  );
};
