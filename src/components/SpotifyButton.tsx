"use client";

import { Button } from "@nextui-org/react";
import Image from "next/image";
import { PauseIcon, PlayIcon } from "lucide-react";
import React, { useState, useRef } from "react";

interface SpotifyButtonProps {
  songTitle: string;
  artist: string;
  albumArt: string;
  flacSrc: string;
}

export default function SpotifyButton({
  songTitle,
  artist,
  albumArt,
  flacSrc,
}: SpotifyButtonProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = async () => {
    if (!audioRef.current) return;

    try {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        await audioRef.current.play(); // fix mobile async
        setIsPlaying(true);
      }
    } catch (err) {
      console.log("Play bị chặn:", err);
    }
  };

  return (
    <Button
      className={`
        w-full max-w-md h-16 p-0 overflow-hidden bg-white/20 backdrop-blur-md hover:bg-white/30 group
        relative
        ${isPlaying ? "animate-border" : ""}
      `}
      onClick={togglePlay} // ❗ bỏ onTouchStart
    >
      <audio ref={audioRef} src={flacSrc} />
      <div className="flex items-center w-full px-3 gap-3">
        <div className="relative w-10 h-10 rounded-md overflow-hidden flex-shrink-0">
          <Image src={albumArt} alt={songTitle} fill className="object-cover" />
        </div>

        <div className="flex flex-col items-start flex-grow min-w-0">
          <span className="text-white text-sm font-medium truncate w-full">
            {songTitle}
          </span>
          <span className="text-white/70 text-xs truncate w-full">
            {artist}
          </span>
        </div>

        <div className="flex-shrink-0 text-white">
          {isPlaying ? (
            <PauseIcon className="w-6 h-6" />
          ) : (
            <PlayIcon className="w-6 h-6" />
          )}
        </div>
      </div>
    </Button>
  );
}
