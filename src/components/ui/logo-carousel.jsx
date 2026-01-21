"use client";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react"

// Utility function to randomly shuffle an array
// This is used to mix up the order of logos for a more dynamic display
const shuffleArray = array => {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
      ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

// Utility function to distribute logos across multiple columns
// This ensures each column has a balanced number of logos
const distributeLogos = (allLogos, columnCount) => {
  const shuffled = shuffleArray(allLogos)
  const columns = Array.from({ length: columnCount }, () => [])

  // Distribute logos evenly across columns
  shuffled.forEach((logo, index) => {
    columns[index % columnCount].push(logo)
  })

  // Ensure all columns have the same number of logos by filling shorter columns
  const maxLength = Math.max(...columns.map((col) => col.length))
  columns.forEach((col) => {
    while (col.length < maxLength) {
      col.push(shuffled[Math.floor(Math.random() * shuffled.length)])
    }
  })

  return columns
}

// LogoColumn component: Displays a single column of animated logos
const LogoColumn = React.memo(({ logos, index, currentTime }) => {
  const cycleInterval = 2000 // Time each logo is displayed (in milliseconds)
  const columnDelay = index * 200 // Stagger the start of each column's animation
  // Calculate which logo should be displayed based on the current time
  const adjustedTime =
    (currentTime + columnDelay) % (cycleInterval * logos.length)
  const currentIndex = Math.floor(adjustedTime / cycleInterval)

  // Memoize the current logo to prevent unnecessary re-renders
  const CurrentLogo = useMemo(() => logos[currentIndex], [logos, currentIndex])

  return (
    // Framer Motion component for the column container
    <motion.div
      className="w-[250px] h-24 overflow-hidden relative"
      // Start invisible and below final position
      initial={{ opacity: 0, y: 50 }}
      // Animate to full opacity and final position
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: index * 0.1, // Stagger the animation of each column
        duration: 0.5,
        ease: "easeOut",
      }}>
      {/* AnimatePresence enables animation of components that are removed from the DOM */}
      <AnimatePresence mode="wait">
        {/* Framer Motion component for each logo */}
        <motion.div
          key={`${CurrentLogo.src}-${currentIndex}`}
          className="absolute inset-0 flex items-center justify-center"
          // Animation for when the logo enters
          initial={{ y: "10%", opacity: 0, filter: "blur(8px)" }}
          // Animation for when the logo is displayed
          animate={{
            y: "0%",
            opacity: 1,
            filter: "blur(0px)",
            transition: {
              type: "spring",
              stiffness: 300,
              damping: 20,
              mass: 1,
              bounce: 0.2,
              duration: 0.5,
            },
          }}
          // Animation for when the logo exits
          exit={{
            y: "-20%",
            opacity: 0,
            filter: "blur(6px)",
            transition: {
              type: "tween",
              ease: "easeIn",
              duration: 0.3,
            },
          }}>
          <Image
            src={CurrentLogo.src}
            alt={CurrentLogo.alt}
            width={300}
            height={128}
            className="w-fit h-20 object-contain" />
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
})

// Main LogoCarousel component
function LogoCarousel({
  logos = [],
  columnCount = 2
}) {
  const [logoSets, setLogoSets] = useState([])
  const [currentTime, setCurrentTime] = useState(0)

  // Distribute logos across columns when the component mounts or logos change
  useEffect(() => {
    if (logos.length > 0) {
      const distributedLogos = distributeLogos(logos, columnCount)
      setLogoSets(distributedLogos)
    }
  }, [logos, columnCount])

  // Function to update the current time (used for logo cycling)
  const updateTime = useCallback(() => {
    setCurrentTime((prevTime) => prevTime + 100)
  }, [])

  // Set up an interval to update the time every 100ms
  useEffect(() => {
    const intervalId = setInterval(updateTime, 100)
    return () => clearInterval(intervalId);
  }, [updateTime])

  // Render the logo columns
  return (
    <div className="flex gap-24">
      {logoSets.map((logoSet, index) => (
        <LogoColumn key={index} logos={logoSet} index={index} currentTime={currentTime} />
      ))}
    </div>
  );
}

export { LogoCarousel }
export default LogoCarousel
