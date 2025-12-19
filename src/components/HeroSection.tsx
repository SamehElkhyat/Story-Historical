import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import heroImage from '@/assets/hero-collage.jpg';

export const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen w-full overflow-hidden flex items-center justify-center"
    >
      {/* Background image with parallax */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src={heroImage}
          alt="Visual storytelling through history collage"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-background/50" />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 container mx-auto px-6 md:px-12 lg:px-24 py-20"
      >
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="section-subheader text-foreground/60 mb-6"
          >
            The Craft
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="hero-title text-foreground mb-8"
          >
            Long story short:
            <br />
            <span className="hero-title-italic text-accent/90">The Craft's</span>{' '}
            history of
            <br />
            visual storytelling
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="max-w-2xl"
          >
            <p className="timeline-body text-foreground/70 leading-relaxed">
              Visual storytelling is part of the human experience. It connects us
              with our past, and helps us understand each other's worlds. This
              trip through time will move at a blistering pace. We can't sum up
              millennia of visual storytelling in one article, but we can stop
              off at a few important moments along the way.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-3"
        >
          <span className="text-xs tracking-widest uppercase text-foreground/50">
            Scroll to explore
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-foreground/50 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
};
