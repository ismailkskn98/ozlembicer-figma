'use client';

import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

export default function ClinicVideo() {
   const videoRef = useRef(null);

   const [hasPlayed, setHasPlayed] = useState(false);
   const [showImage, setShowImage] = useState(false);
   const [isPlaying, setIsPlaying] = useState(false);

   useEffect(() => {
      const video = videoRef.current;
      if (!video) return;

      const observer = new IntersectionObserver(
         (entries) => {
            entries.forEach((entry) => {
               if (entry.isIntersecting && !hasPlayed) {
                  video.play();
                  setHasPlayed(true);
                  setIsPlaying(true);
               }
            });
         },
         { threshold: 0.6 },
      );

      observer.observe(video);

      return () => observer.disconnect();
   }, [hasPlayed]);

   const handleEnded = () => {
      setShowImage(true);
      setIsPlaying(false);
   };

   const handleReplay = () => {
      const video = videoRef.current;
      if (!video) return;

      video.currentTime = 0;
      video.play();

      setShowImage(false);
      setIsPlaying(true);
   };

   return (
      <div className="relative w-full h-full">
         <video
            ref={videoRef}
            muted
            playsInline
            onEnded={handleEnded}
            className={`w-full h-full object-cover rounded-[5px] transition-opacity duration-700 ${showImage ? 'opacity-0' : 'opacity-100'}`}
         >
            <source src="/videos/clinic-video.mp4" type="video/mp4" />
         </video>

         {showImage && <Image src="/images/about/clinic-gallery-right.png" alt="Clinic" fill className="object-cover rounded-[5px] transition-opacity duration-700 opacity-100" />}

         {showImage && (
            <button onClick={handleReplay} className="absolute inset-0 flex items-center justify-center group cursor-pointer">
               <div className="w-14 h-14 flex items-center justify-center rounded-full bg-black/50 backdrop-blur-sm group-hover:scale-110 transition">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" className="w-8 h-8">
                     <path d="M8 5v14l11-7z" />
                  </svg>
               </div>
            </button>
         )}
      </div>
   );
}
