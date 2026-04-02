export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground uppercase tracking-widest">
        <p>
          © {new Date().getFullYear()}{' '}
          <span className="text-foreground font-heading font-semibold">Naz-Ar Prints & Services</span>
        </p>
        <p>Pikhana Road, Churipartti, Kishanganj</p>
      </div>
    </footer>
  );
}
