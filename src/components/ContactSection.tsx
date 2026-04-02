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
          className="mb-16"
        >
          <div className="h-[2px] w-12 bg-primary mb-6" />
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
            Contact Us
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-px bg-border max-w-4xl">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-background p-8"
            >
              <div className="text-primary mb-4">
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
