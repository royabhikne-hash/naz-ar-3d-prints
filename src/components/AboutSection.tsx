import { motion } from 'framer-motion';

const stats = [
  { num: '15+', label: 'Services' },
  { num: '1000+', label: 'Happy Clients' },
  { num: '24hr', label: 'Quick Delivery' },
  { num: '100%', label: 'Quality Assured' },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="h-[2px] w-12 bg-primary mb-6" />
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              About Us
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Located at <span className="text-foreground font-medium">Pikhana Road, Churipartti, Kishanganj</span>, 
              Naz-Ar PRINTS & SERVICES is your go-to destination for all printing needs.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We combine quality craftsmanship with cutting-edge technology to deliver 
              exceptional results — from large-format banners to personalized merchandise.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <div className="grid grid-cols-2 gap-px bg-border">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-background p-8 text-center">
                  <p className="font-heading text-3xl md:text-4xl font-black text-primary">{stat.num}</p>
                  <p className="text-xs text-muted-foreground mt-2 uppercase tracking-widest">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
