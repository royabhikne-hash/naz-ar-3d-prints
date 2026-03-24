import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const highlights = [
  'Professional Quality Printing',
  'Fast Turnaround Times',
  'Affordable Pricing',
  'Custom Design Support',
  'Wide Range of Materials',
  'Trusted Local Business',
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary font-heading text-sm tracking-widest uppercase mb-3">About Us</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Your Trusted <span className="text-gradient-accent">Printing Partner</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Located at <strong className="text-foreground">Pikhana Road, Churipartti, Kishanganj</strong>, 
              Naz-Ar PRINTS & SERVICES is your go-to destination for all printing needs. 
              From large-format banners to personalized merchandise, we combine quality craftsmanship 
              with cutting-edge technology to deliver exceptional results every time.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {highlights.map((h, i) => (
                <motion.div
                  key={h}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-2 text-sm text-foreground"
                >
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  {h}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-gradient-card rounded-2xl p-8 border border-border glow-border shadow-card">
              <div className="grid grid-cols-2 gap-6 text-center">
                {[
                  { num: '15+', label: 'Services' },
                  { num: '1000+', label: 'Happy Clients' },
                  { num: '24hr', label: 'Quick Delivery' },
                  { num: '100%', label: 'Quality Assured' },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="font-heading text-3xl font-bold text-gradient-primary">{stat.num}</p>
                    <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
