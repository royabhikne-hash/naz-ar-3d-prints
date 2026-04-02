import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X } from 'lucide-react';

const navLinks = ['Services', 'About', 'Contact'];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border"
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <button onClick={() => scrollTo('hero')} className="font-heading text-lg font-bold tracking-tight">
          <span className="text-primary">Naz-Ar</span>{' '}
          <span className="text-foreground text-sm font-medium tracking-widest uppercase">Prints</span>
        </button>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide uppercase"
            >
              {l}
            </button>
          ))}
          <a href="tel:8962930650" className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors">
            <Phone className="w-4 h-4" /> 8962930650
          </a>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-background/95 border-b border-border"
          >
            <div className="flex flex-col gap-4 p-4">
              {navLinks.map((l) => (
                <button key={l} onClick={() => scrollTo(l)} className="text-muted-foreground hover:text-foreground text-left uppercase tracking-wide text-sm">
                  {l}
                </button>
              ))}
              <a href="tel:8962930650" className="flex items-center gap-2 text-primary">
                <Phone className="w-4 h-4" /> 8962930650
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
