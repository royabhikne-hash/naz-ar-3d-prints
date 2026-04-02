import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const stats = [
  { num: '15+', label: 'Services' },
  { num: '1000+', label: 'Happy Clients' },
  { num: '24hr', label: 'Quick Delivery' },
  { num: '100%', label: 'Quality Assured' },
];

export default function AboutSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const x = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <section id="about" ref={ref} className="py-24 md:py-32 border-t border-border relative overflow-hidden">
      {/* Floating accent */}
      <motion.div
        style={{ x }}
        className="absolute -right-20 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-primary/[0.03] blur-3xl"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="h-[2px] bg-primary mb-6"
            />
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              About Us
            </h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground leading-relaxed mb-6"
            >
              Located at <span className="text-foreground font-medium">Pikhana Road, Churipartti, Kishanganj</span>, 
              Naz-Ar PRINTS & SERVICES is your go-to destination for all printing needs.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
              className="text-muted-foreground leading-relaxed"
            >
              We combine quality craftsmanship with cutting-edge technology to deliver 
              exceptional results — from large-format banners to personalized merchandise.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="grid grid-cols-2 gap-px bg-border">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="bg-background p-8 text-center group hover:bg-card transition-colors duration-300"
                >
                  <p className="font-heading text-3xl md:text-4xl font-black text-primary">{stat.num}</p>
                  <p className="text-xs text-muted-foreground mt-2 uppercase tracking-widest group-hover:text-foreground transition-colors">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
