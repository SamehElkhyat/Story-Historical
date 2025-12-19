import { motion } from 'framer-motion';

const references = [
  {
    id: 1,
    text: 'Griffith University archaeologist Adam Brumm on the Sulawesi cave painting discovery.',
  },
  {
    id: 2,
    text: 'Maxime Aubert, Griffith University professor, on dating cave art.',
  },
  {
    id: 3,
    text: 'Discoveries about Babylonian astronomers using cuneiform, 2016.',
  },
  {
    id: 4,
    text: 'History of Egyptian Hieroglyphics and their extinction with Christianity.',
  },
  {
    id: 5,
    text: 'Greek art philosophy: Plato and Aristotle on art and representation.',
  },
  {
    id: 6,
    text: 'Greek depiction of gods in human form and recording human achievements.',
  },
  {
    id: 7,
    text: 'Mo-tzu on the camera obscura principle, ~400 BCE.',
  },
  {
    id: 8,
    text: 'Ibn al-Haytham on using camera obscura for light experiments and eclipse observation.',
  },
  {
    id: 9,
    text: 'Byzantine art as continuation of Roman traditions with Eastern influences.',
  },
  {
    id: 10,
    text: 'The Renaissance: form, balance, realism, and perspective in art.',
  },
];

export const ReferencesSection = () => {
  return (
    <section id="references" className="py-24 md:py-32 bg-card/30">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="section-header text-3xl md:text-4xl text-foreground mb-12 text-center">
            References
          </h2>

          <ul className="space-y-4">
            {references.map((ref, index) => (
              <motion.li
                key={ref.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex gap-4 text-foreground/60"
              >
                <span className="text-accent/70 text-sm">[{ref.id}]</span>
                <span className="text-sm leading-relaxed">{ref.text}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};
