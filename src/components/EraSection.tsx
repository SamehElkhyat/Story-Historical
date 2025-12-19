import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface EraSectionProps {
  id: string;
  title: string;
  subtitle: string;
  dateRange: string;
  backgroundImage: string;
  children: React.ReactNode;
}

export const EraSection = ({
  id,
  title,
  subtitle,
  dateRange,
  backgroundImage,
  children,
}: EraSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section id={id} ref={ref} className="relative">
      {/* Era header with parallax background */}
      <div className="relative min-h-[70vh] md:min-h-[80vh] w-full overflow-hidden flex items-center justify-center">
        <motion.div style={{ y }} className="absolute inset-0 w-full h-[120%] -top-[10%]">
          <img
            src={backgroundImage}
            alt={title}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Overlay gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/40 to-background" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

        {/* Era title */}
        <motion.div
          style={{ opacity }}
          className="relative z-10 text-center px-6"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-subheader text-foreground/50 mb-4"
          >
            {dateRange}
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="section-header text-foreground"
          >
            {title.split(' ').map((word, i, arr) => (
              <span key={i}>
                {i === Math.floor(arr.length / 2) ? (
                  <>
                    <br className="hidden md:block" />
                    <span className="text-accent/80">{word}</span>
                  </>
                ) : (
                  word
                )}{' '}
              </span>
            ))}
          </motion.h2>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 text-lg text-foreground/60 max-w-xl mx-auto"
            >
              {subtitle}
            </motion.p>
          )}
        </motion.div>
      </div>

      {/* Timeline entries */}
      <div className="relative py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          {children}
        </div>
      </div>

      {/* Era divider */}
      <div className="era-divider my-8" />
    </section>
  );
};
