import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface TimelineEntryProps {
  title: string;
  date: string;
  description: string;
  image?: string;
  imageCaption?: string;
  imagePosition?: 'left' | 'right';
}

export const TimelineEntry = ({
  title,
  date,
  description,
  image,
  imageCaption,
  imagePosition = 'right',
}: TimelineEntryProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [60, 0]);
  const imageY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  const content = (
    <motion.div
      style={{ opacity, y }}
      className="space-y-4"
    >
      <p className="timeline-date text-foreground/50">{date}</p>
      <h3 className="timeline-title text-foreground">{title}</h3>
      <p className="timeline-body text-foreground/70">{description}</p>
    </motion.div>
  );

  const imageContent = image && (
    <motion.div style={{ y: imageY }} className="relative">
      <div className="overflow-hidden rounded-sm">
        <motion.img
          src={image}
          alt={title}
          className="story-image"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6 }}
        />
      </div>
      {imageCaption && (
        <p className="mt-3 text-sm text-foreground/40 italic">{imageCaption}</p>
      )}
    </motion.div>
  );

  return (
    <div ref={ref} className="py-12 md:py-20">
      {image ? (
        <div className={`grid md:grid-cols-2 gap-8 md:gap-16 items-center ${
          imagePosition === 'left' ? 'md:grid-flow-dense' : ''
        }`}>
          <div className={imagePosition === 'left' ? 'md:col-start-2' : ''}>
            {content}
          </div>
          <div className={imagePosition === 'left' ? 'md:col-start-1' : ''}>
            {imageContent}
          </div>
        </div>
      ) : (
        <div className="max-w-2xl mx-auto text-center">
          {content}
        </div>
      )}
    </div>
  );
};
