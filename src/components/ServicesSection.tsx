import { motion } from 'framer-motion';
import {
  Printer, CreditCard, Shirt, Scissors, Camera, Copy, FileText, Flag, Coffee, Award, Layers, Image
} from 'lucide-react';
import { ReactNode } from 'react';

interface ServiceItem {
  icon: ReactNode;
  title: string;
  description: string;
  category: string;
}

const services: ServiceItem[] = [
  { icon: <Flag className="w-6 h-6" />, title: 'Flex Printing', description: 'Large format flex banners for events, shops & promotions.', category: 'Large Format' },
  { icon: <Printer className="w-6 h-6" />, title: 'Digital Printing', description: 'High-quality digital prints for brochures, flyers & more.', category: 'Standard' },
  { icon: <Layers className="w-6 h-6" />, title: 'Offset Printing', description: 'Cost-effective bulk printing with precise color reproduction.', category: 'Standard' },
  { icon: <Image className="w-6 h-6" />, title: 'Screen Printing', description: 'Durable prints on fabric, paper & specialty materials.', category: 'Standard' },
  { icon: <CreditCard className="w-6 h-6" />, title: 'Visiting Cards', description: 'Professional business cards with premium finishes.', category: 'Cards' },
  { icon: <CreditCard className="w-6 h-6" />, title: 'Marriage / Sadhi Cards', description: 'Beautiful wedding & invitation card printing.', category: 'Cards' },
  { icon: <Award className="w-6 h-6" />, title: 'ID Cards', description: 'Custom ID cards for organizations & institutions.', category: 'Cards' },
  { icon: <FileText className="w-6 h-6" />, title: 'Letterhead & Banners', description: 'Professional letterheads and promotional banners.', category: 'Standard' },
  { icon: <Shirt className="w-6 h-6" />, title: 'T-Shirt Printing', description: 'Custom tees with vibrant, long-lasting prints.', category: 'Merchandise' },
  { icon: <Coffee className="w-6 h-6" />, title: 'Mug & Lanyard Printing', description: 'Personalized mugs and branded lanyards.', category: 'Merchandise' },
  { icon: <Layers className="w-6 h-6" />, title: 'Sublimation & Vinyl', description: 'Advanced sublimation and vinyl printing techniques.', category: 'Specialty' },
  { icon: <Scissors className="w-6 h-6" />, title: 'Plotter Cutting', description: 'Precision die-cut stickers, decals & signage.', category: 'Specialty' },
  { icon: <Camera className="w-6 h-6" />, title: 'Passport Photos', description: 'Instant passport-size photos with proper specs.', category: 'Finishing' },
  { icon: <Copy className="w-6 h-6" />, title: 'Xerox & Lamination', description: 'Quick photocopying and protective lamination.', category: 'Finishing' },
];

const categoryColors: Record<string, string> = {
  'Large Format': 'from-primary/20 to-primary/5',
  'Standard': 'from-secondary to-secondary/50',
  'Cards': 'from-accent/15 to-accent/5',
  'Merchandise': 'from-primary/15 to-accent/10',
  'Specialty': 'from-accent/20 to-primary/10',
  'Finishing': 'from-secondary to-muted',
};

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-heading text-sm tracking-widest uppercase mb-3">What We Offer</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-gradient-primary">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A comprehensive range of printing and design services — all under one roof.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className={`bg-gradient-to-br ${categoryColors[s.category]} rounded-xl p-6 border border-border/50 glow-border shadow-card group cursor-pointer transition-all`}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary/20 transition-colors">
                {s.icon}
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
              <span className="inline-block mt-3 text-xs text-primary/70 font-medium tracking-wide uppercase">
                {s.category}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground mt-12"
        >
          …and many more printing & design services. <a href="tel:8962930650" className="text-primary hover:underline">Contact us</a> for custom requirements.
        </motion.p>
      </div>
    </section>
  );
}
