import { motion } from 'framer-motion';
import {
  Printer, CreditCard, Shirt, Scissors, Camera, Copy, FileText, Flag, Coffee, Award, Layers, Image
} from 'lucide-react';
import { ReactNode } from 'react';

interface ServiceItem {
  icon: ReactNode;
  title: string;
  description: string;
}

const services: ServiceItem[] = [
  { icon: <Flag className="w-5 h-5" />, title: 'Flex Printing', description: 'Large format flex banners for events, shops & promotions.' },
  { icon: <Printer className="w-5 h-5" />, title: 'Digital Printing', description: 'High-quality digital prints for brochures, flyers & more.' },
  { icon: <Layers className="w-5 h-5" />, title: 'Offset Printing', description: 'Cost-effective bulk printing with precise color reproduction.' },
  { icon: <Image className="w-5 h-5" />, title: 'Screen Printing', description: 'Durable prints on fabric, paper & specialty materials.' },
  { icon: <CreditCard className="w-5 h-5" />, title: 'Visiting Cards', description: 'Professional business cards with premium finishes.' },
  { icon: <CreditCard className="w-5 h-5" />, title: 'Marriage / Sadhi Cards', description: 'Beautiful wedding & invitation card printing.' },
  { icon: <Award className="w-5 h-5" />, title: 'ID Cards', description: 'Custom ID cards for organizations & institutions.' },
  { icon: <FileText className="w-5 h-5" />, title: 'Letterhead & Banners', description: 'Professional letterheads and promotional banners.' },
  { icon: <Shirt className="w-5 h-5" />, title: 'T-Shirt Printing', description: 'Custom tees with vibrant, long-lasting prints.' },
  { icon: <Coffee className="w-5 h-5" />, title: 'Mug & Lanyard Printing', description: 'Personalized mugs and branded lanyards.' },
  { icon: <Layers className="w-5 h-5" />, title: 'Sublimation & Vinyl', description: 'Advanced sublimation and vinyl printing techniques.' },
  { icon: <Scissors className="w-5 h-5" />, title: 'Plotter Cutting', description: 'Precision die-cut stickers, decals & signage.' },
  { icon: <Camera className="w-5 h-5" />, title: 'Passport Photos', description: 'Instant passport-size photos with proper specs.' },
  { icon: <Copy className="w-5 h-5" />, title: 'Xerox & Lamination', description: 'Quick photocopying and protective lamination.' },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="h-[2px] w-12 bg-primary mb-6" />
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground max-w-lg">
            A comprehensive range of printing and design services — all under one roof.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-border">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.03 }}
              className="bg-background p-6 group cursor-pointer hover:bg-card transition-colors"
            >
              <div className="text-muted-foreground group-hover:text-primary transition-colors mb-4">
                {s.icon}
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2 text-sm">{s.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{s.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-muted-foreground mt-8 text-sm"
        >
          …and many more. <a href="tel:8962930650" className="text-primary hover:underline">Contact us</a> for custom requirements.
        </motion.p>
      </div>
    </section>
  );
}
