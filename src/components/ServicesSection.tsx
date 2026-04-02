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

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-[2px] bg-primary mb-6"
          />
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
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={cardVariants}
              whileHover={{ backgroundColor: 'hsl(0 0% 8%)', transition: { duration: 0.2 } }}
              className="bg-background p-6 group cursor-pointer relative overflow-hidden"
            >
              {/* Hover red line accent */}
              <motion.div
                className="absolute left-0 top-0 w-[2px] bg-primary"
                initial={{ height: 0 }}
                whileHover={{ height: '100%' }}
                transition={{ duration: 0.3 }}
              />
              <div className="text-muted-foreground group-hover:text-primary transition-colors duration-300 mb-4">
                {s.icon}
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2 text-sm group-hover:translate-x-1 transition-transform duration-300">{s.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{s.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-muted-foreground mt-8 text-sm"
        >
          …and many more. <a href="tel:8962930650" className="text-primary hover:underline">Contact us</a> for custom requirements.
        </motion.p>
      </div>
    </section>
  );
}
