import { motion } from 'framer-motion';
import { Phone, MapPin, Clock } from 'lucide-react';

const cards = [
  {
    icon: <MapPin className="w-5 h-5" />,
    title: 'Visit Us',
    lines: ['Pikhana Road, Churipartti', 'Kishanganj'],
  },
  {
    icon: <Phone className="w-5 h-5" />,
    title: 'Call Us',
    lines: ['8962930650', '9508089565'],
    isPhone: true,
  },
  {
    icon: <Clock className="w-5 h-5" />,
    title: 'Working Hours',
    lines: ['Mon – Sat: 9 AM – 8 PM', 'Sun: By Appointment'],
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 md:py-32 border-t border-border">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-[2px] bg-primary mb-6"
          />
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
            Contact Us
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-px bg-border max-w-4xl">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ backgroundColor: 'hsl(0 0% 8%)' }}
              className="bg-background p-8 relative overflow-hidden group"
            >
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
                style={{ originX: 0 }}
              />
              <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                {card.icon}
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-3 text-sm uppercase tracking-wide">{card.title}</h3>
              {card.lines.map((line) => (
                <p key={line} className="text-muted-foreground text-sm">
                  {card.isPhone ? (
                    <a href={`tel:${line}`} className="hover:text-primary transition-colors">{line}</a>
                  ) : (
                    line
                  )}
                </p>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
