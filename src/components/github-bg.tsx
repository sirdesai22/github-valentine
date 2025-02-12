"use client"

import { Github } from "lucide-react";

export default function GitHubBackground() {
    return (
      <div className="w-screen flex items-center justify-center bg-black -z-10 absolute overflow-hidden top-0">
        <div className="flex flex-wrap gap-4 justify-center items-center">
            {Array.from({ length: Math.floor(window.innerWidth / 50) * Math.floor(window.innerHeight / 50) }).map((_, index) => (
            <Github key={index} className="text-red-900" />
            ))}
        </div>
      </div>
    );
  }
  