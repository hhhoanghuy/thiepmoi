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

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      const playPromise = audio.play();

      // handle trường hợp bị browser chặn
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch((err) => {
            console.log("Play bị chặn:", err);
          });
      }
    }
  };

  return (
    <Button
      className={`
                w-full max-w-md h-16 p-0 overflow-hidden 
                bg-white/20 backdrop-blur-md hover:bg-white/30 
                group relative
                ${isPlaying ? "animate-border" : ""}
            `}
      onTouchStart={togglePlay}
    >
      <audio ref={audioRef} src={flacSrc} preload="auto" />

      <div className="flex items-center w-full px-3 gap-3">
        {/* Album Art */}
        <div className="relative w-10 h-10 rounded-md overflow-hidden flex-shrink-0">
          <Image src={albumArt} alt={songTitle} fill className="object-cover" />
        </div>

        {/* Text */}
        <div className="flex flex-col items-start flex-grow min-w-0">
          <span className="text-white text-sm font-medium truncate w-full">
            {songTitle}
          </span>
          <span className="text-white/70 text-xs truncate w-full">
            {artist}
          </span>
        </div>

        {/* Icon */}
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
