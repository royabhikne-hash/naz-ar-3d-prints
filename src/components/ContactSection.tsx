import { motion } from 'framer-motion';
import { Phone, MapPin, Clock } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-heading text-sm tracking-widest uppercase mb-3">Get In Touch</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
            <span className="text-gradient-primary">Contact</span> Us
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            {
              icon: <MapPin className="w-6 h-6" />,
              title: 'Visit Us',
              lines: ['Pikhana Road, Churipartti', 'Kishanganj'],
            },
            {
              icon: <Phone className="w-6 h-6" />,
              title: 'Call Us',
              lines: ['8962930650', '9508089565'],
              isPhone: true,
            },
            {
              icon: <Clock className="w-6 h-6" />,
              title: 'Working Hours',
              lines: ['Mon – Sat: 9 AM – 8 PM', 'Sun: By Appointment'],
            },
          ].map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-gradient-card rounded-xl p-8 border border-border glow-border shadow-card text-center"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                {card.icon}
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-3">{card.title}</h3>
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
