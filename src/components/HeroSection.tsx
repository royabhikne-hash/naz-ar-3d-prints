import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const textY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="hero" ref={ref} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.03 }}
        transition={{ duration: 2 }}
        className="absolute inset-0"
        style={{
          backgroundImage: 'linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}
      />

      {/* Animated red accent shapes */}
      <motion.div
        className="absolute top-20 right-[10%] w-72 h-72 rounded-full bg-primary/5 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-32 left-[5%] w-48 h-48 rounded-full bg-primary/5 blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Red accent line */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: '100%' }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-0 top-0 w-[2px] bg-primary"
      />

      {/* Horizontal moving line */}
      <motion.div
        className="absolute top-1/3 left-0 h-px bg-gradient-to-r from-primary/60 via-primary/20 to-transparent"
        initial={{ width: 0 }}
        animate={{ width: '60%' }}
        transition={{ duration: 1.5, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
      />

      <motion.div style={{ y: textY, opacity }} className="relative z-10 container mx-auto px-4 py-32">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 48 }}
            transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="h-[2px] bg-primary mb-8"
          />

          <div className="overflow-hidden mb-2">
            <motion.p
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ delay: 0.4, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-primary font-heading text-sm font-semibold tracking-[0.2em] uppercase"
            >
              Premium Printing Solutions
            </motion.p>
          </div>

          <h1 className="font-heading text-6xl md:text-8xl font-black leading-[0.9] mb-8 tracking-tight">
            <div className="overflow-hidden">
              <motion.span
                className="text-foreground block"
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ delay: 0.5, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                NAZ-AR
              </motion.span>
            </div>
            <div className="overflow-hidden">
              <motion.span
                className="text-primary block"
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ delay: 0.65, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                PRINTS
              </motion.span>
            </div>
            <div className="overflow-hidden">
              <motion.span
                className="text-muted-foreground text-4xl md:text-5xl font-medium block"
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ delay: 0.8, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                &amp; SERVICES
              </motion.span>
            </div>
          </h1>

          <motion.p
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-muted-foreground text-lg max-w-lg mb-10 leading-relaxed"
          >
            From flex banners to custom merchandise — your one-stop destination for all printing needs in Kishanganj.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px hsl(0 85% 50% / 0.3)' }}
              whileTap={{ scale: 0.97 }}
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary text-primary-foreground font-heading font-semibold px-8 py-3.5 rounded-sm text-sm tracking-wide uppercase transition-shadow"
            >
              Explore Services
            </motion.button>
            <motion.a
              href="tel:8962930650"
              whileHover={{ scale: 1.05, borderColor: 'hsl(0 85% 50%)' }}
              whileTap={{ scale: 0.97 }}
              className="border border-foreground/20 text-foreground font-heading font-semibold px-8 py-3.5 rounded-sm hover:text-primary transition-colors text-sm tracking-wide uppercase"
            >
              Call Now
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <span className="text-[10px] text-muted-foreground uppercase tracking-[0.3em]">Scroll</span>
        <motion.div
          className="w-px h-8 bg-primary/50"
          animate={{ scaleY: [0, 1, 0], originY: 0 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
}
