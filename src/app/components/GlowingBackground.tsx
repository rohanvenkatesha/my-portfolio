'use client'
import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'

const blobs = [
  { colorLight: 'bg-blue-200', colorDark: 'dark:bg-blue-900', size: 400 },
  { colorLight: 'bg-pink-200', colorDark: 'dark:bg-pink-900', size: 350 },
  { colorLight: 'bg-green-200', colorDark: 'dark:bg-green-900', size: 450 },
  { colorLight: 'bg-yellow-200', colorDark: 'dark:bg-yellow-900', size: 300 },
  { colorLight: 'bg-purple-200', colorDark: 'dark:bg-purple-900', size: 380 }
]

// Adjusted to ensure blobs stay within the screen based on their size
const getRandomPosition = (size: number) => ({
  x: Math.random() * (window.innerWidth - size),
  y: Math.random() * (window.innerHeight - size),
})

// Separate Blob component to safely use hooks
function Blob({ blob }: { blob: { colorLight: string; colorDark: string; size: number } }) {
  const controls = useAnimation()

  useEffect(() => {
    const animateBlob = () => {
      const pos = getRandomPosition(blob.size)
      controls.start({
        x: pos.x,
        y: pos.y,
        scale: [1, 1.1, 1],
        opacity: [0.25, 0.4, 0.25],
        transition: {
          duration: 10 + Math.random() * 10,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'reverse'
        }
      })
    }
    animateBlob()
  }, [controls, blob.size])

  return (
    <motion.div
      animate={controls}
      initial={{ x: 0, y: 0, opacity: 0.3, scale: 1 }}
      className={`
        pointer-events-none
        fixed
        blur-3xl
        rounded-full
        z-0
        ${blob.colorLight} ${blob.colorDark}
      `}
      style={{
        width: blob.size,
        height: blob.size,
        filter: 'blur(100px)',
      }}
    />
  )
}

export function GlowingBackground() {
  return (
    <>
      {blobs.map((blob, i) => (
        <Blob key={i} blob={blob} />
      ))}
    </>
  )
}