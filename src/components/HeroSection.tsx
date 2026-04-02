import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      {/* Red accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary" />

      <div className="relative z-10 container mx-auto px-4 py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 48 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="h-[2px] bg-primary mb-8"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-primary font-heading text-sm font-semibold tracking-[0.2em] uppercase mb-6"
          >
            Premium Printing Solutions
          </motion.p>

          <h1 className="font-heading text-6xl md:text-8xl font-black leading-[0.9] mb-8 tracking-tight">
            <span className="text-foreground">NAZ-AR</span>
            <br />
            <span className="text-primary">PRINTS</span>
            <br />
            <span className="text-muted-foreground text-4xl md:text-5xl font-medium">&amp; SERVICES</span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-muted-foreground text-lg max-w-lg mb-10 leading-relaxed"
          >
            From flex banners to custom merchandise — your one-stop destination for all printing needs in Kishanganj.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary text-primary-foreground font-heading font-semibold px-8 py-3.5 rounded-sm text-sm tracking-wide uppercase"
            >
              Explore Services
            </motion.button>
            <motion.a
              href="tel:8962930650"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="border border-foreground/20 text-foreground font-heading font-semibold px-8 py-3.5 rounded-sm hover:border-primary hover:text-primary transition-colors text-sm tracking-wide uppercase"
            >
              Call Now
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
}
