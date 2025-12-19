import { motion } from 'framer-motion';

export const Footer = () => {
  return (
    <footer className="py-16 md:py-24 border-t border-border/30">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3 className="font-display text-2xl md:text-3xl text-foreground mb-4">
            The History of Visual Storytelling
          </h3>
          <p className="text-foreground/50 text-sm mb-8">
            An immersive journey through millennia of human creativity
          </p>
          
          <div className="flex items-center justify-center gap-6 text-foreground/40 text-xs tracking-widest uppercase">
            <span>Built with React</span>
            <span className="w-1 h-1 rounded-full bg-foreground/30" />
            <span>Framer Motion</span>
            <span className="w-1 h-1 rounded-full bg-foreground/30" />
            <span>Tailwind CSS</span>
          </div>

          <p className="mt-12 text-foreground/30 text-xs">
            © {new Date().getFullYear()} Visual Storytelling History. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
