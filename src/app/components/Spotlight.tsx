'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Spotlight = () => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <motion.div
            className="fixed inset-0 pointer-events-none z-0"
            animate={{
                background: `radial-gradient(1000px at ${mousePos.x}px ${mousePos.y}px, rgba(255, 255, 255, 0.015), transparent 80%)`
            }}
        />
    );
};

export default Spotlight;
