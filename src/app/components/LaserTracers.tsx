'use client';

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

interface Laser {
    id: number;
    type: 'horizontal' | 'vertical';
    position: number;
    color: string;
}

const LaserTracers = () => {
    const { scrollYProgress } = useScroll();
    const [randomLasers, setRandomLasers] = useState<Laser[]>([]);

    const laserPos = useTransform(scrollYProgress, [0, 1], ["-10%", "110%"]);
    const laserColor = useTransform(
        scrollYProgress,
        [0, 0.5, 1],
        ["#10b981", "#8b5cf6", "#f43f5e"]
    );

    useEffect(() => {
        const interval = setInterval(() => {
            const newLaser: Laser = {
                id: Math.random(),
                type: Math.random() > 0.5 ? 'horizontal' : 'vertical',
                position: Math.random() * 100,
                color: ['#10b981', '#8b5cf6', '#f43f5e'][Math.floor(Math.random() * 3)]
            };
            setRandomLasers(prev => [...prev.slice(-10), newLaser]);
        }, 1200);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-[70] overflow-hidden">
            <motion.div
                className="absolute right-0 w-[2px] h-40 blur-[1px]"
                style={{ top: laserPos, backgroundColor: laserColor, boxShadow: `0 0 25px 3px ${laserColor.get()}` }}
            />
            <motion.div
                className="absolute left-0 w-[2px] h-40 blur-[1px]"
                style={{ bottom: laserPos, backgroundColor: laserColor, boxShadow: `0 0 25px 3px ${laserColor.get()}` }}
            />

            <AnimatePresence>
                {randomLasers.map((laser) => (
                    <motion.div
                        key={laser.id}
                        initial={laser.type === 'horizontal' ? { left: '-20%', opacity: 0 } : { top: '-20%', opacity: 0 }}
                        animate={laser.type === 'horizontal' ? { left: '120%', opacity: [0, 1, 1, 0] } : { top: '120%', opacity: [0, 1, 1, 0] }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: "circIn" }}
                        className={`absolute blur-[1px] ${laser.type === 'horizontal' ? 'h-[1px] w-60' : 'w-[1px] h-60'}`}
                        style={{
                            top: laser.type === 'horizontal' ? `${laser.position}%` : 0,
                            left: laser.type === 'vertical' ? `${laser.position}%` : 0,
                            backgroundColor: laser.color,
                            boxShadow: `0 0 20px ${laser.color}`
                        }}
                    />
                ))}
            </AnimatePresence>
        </div>
    );
};

export default LaserTracers;
