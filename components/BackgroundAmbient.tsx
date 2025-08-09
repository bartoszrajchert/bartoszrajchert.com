'use client';

import { SparklesCore } from './ui/sparkles';
import { motion } from 'motion/react';

export default function BackgroundAmbient() {
  return (
    <motion.div
      className="absolute inset-0 -z-10 pointer-events-none"
      initial={{ opacity: 0, }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <img
        className="absolute left-0 right-0 top-0 -z-10 h-auto w-full"
        src="/assets/background-ambient.svg"
      />
      <div className="absolute inset-0 h-[25vh] w-[65vw] opacity-20 mx-auto -z-10">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={75}
          className="h-full w-full"
          particleColor="#FFFFFF"
        />
      </div>
    </motion.div>
    
  );
}
