import { motion } from 'framer-motion';
import HeroScene from './HeroScene';

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <HeroScene />
      <div className="relative z-10 container mx-auto px-4 py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl"
        >
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="text-primary font-heading text-sm font-semibold tracking-widest uppercase mb-4"
          >
            Premium Printing Solutions
          </motion.p>
          <h1 className="font-heading text-5xl md:text-7xl font-bold leading-tight mb-6">
            <span className="text-gradient-primary">Naz-Ar</span>
            <br />
            <span className="text-foreground">PRINTS &amp; SERVICES</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-lg mb-8 leading-relaxed">
            From flex banners to custom merchandise — your one-stop destination for all printing needs in Kishanganj.
          </p>
          <div className="flex flex-wrap gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-primary text-primary-foreground font-heading font-semibold px-8 py-3 rounded-lg shadow-glow"
            >
              Explore Services
            </motion.button>
            <motion.a
              href="tel:8962930650"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-primary/30 text-primary font-heading font-semibold px-8 py-3 rounded-lg hover:bg-primary/10 transition-colors"
            >
              Call Now
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
}
