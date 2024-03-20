"use client";

import { Headphones, ListMusic, Mic, Music, Search, Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export const AsideMenu = () => {
  const AsideRef = useRef(null);
  useGSAP(() => {
    gsap.fromTo(
      AsideRef.current,
      { opacity: 0, xPercent: -100 },
      { opacity: 1, xPercent: 0, duration: 1, delay: 0.5 }
    );
  }, []);
  return (
    <aside
      className="fixed w-24 bg-[rgb(27,26,26)] h-screen"
      style={{ opacity: 0 }}
      ref={AsideRef}
    >
      <div className="flex gap-y-8 flex-col -ml-8 items-center mt-6 mb-12">
        <div className="w-10 h-10">
          <Button variant="link">
            <Link href="/search">
              <Search className="w-10 h-10 text-white" />
            </Link>
          </Button>
        </div>
        <div className="w-10 h-10">
          <Button variant="link">
            <Link href="/">
              <Music className="w-10 h-10 text-white" />
            </Link>
          </Button>
        </div>
        <div className="w-10 h-10">
          <Button variant="link">
            <Link href="/top">
              <Headphones className="w-10 h-10 text-white" />
            </Link>
          </Button>
        </div>
        <div className="w-10 h-10">
          <Button variant="link">
            <Link href="/podcast">
              <Mic className="w-10 h-10 text-white" />
            </Link>
          </Button>
        </div>
      </div>
      <Separator />
      <div className="flex gap-y-8 flex-col -ml-8 items-center mt-6 mb-12">
        <div className="w-10 h-10">
          <Button variant="link">
            <Link href="/favorite">
              <Star className="w-10 h-10 text-white" />
            </Link>
          </Button>
        </div>
        <div className="w-10 h-10">
          <Button variant="link">
            <Link href="/library">
              <ListMusic className="w-10 h-10 text-white" />
            </Link>
          </Button>
        </div>
      </div>
    </aside>
  );
};
