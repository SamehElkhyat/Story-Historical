import { motion } from 'framer-motion';

export const IntroSection = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-lg md:text-xl text-foreground/70 leading-relaxed">
            The oldest discovered evidence of visual storytelling is in caves in
            Indonesia. But there's no reason to assume that early humans weren't
            using images to tell stories far earlier, in the sand, on wood, on
            their skin.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
