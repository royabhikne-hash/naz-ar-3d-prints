export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>
          © {new Date().getFullYear()}{' '}
          <span className="text-gradient-primary font-heading font-semibold">Naz-Ar PRINTS & SERVICES</span>. All rights reserved.
        </p>
        <p>Pikhana Road, Churipartti, Kishanganj</p>
      </div>
    </footer>
  );
}
