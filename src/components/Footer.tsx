export default function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <span className="font-[family-name:var(--font-heading)] text-xl font-bold tracking-tight text-foreground">
              MSNG
            </span>
            <span className="text-sm text-muted-foreground">
              Building Solutions
            </span>
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
            {["Services", "Projects", "About", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector(`#${item.toLowerCase()}`)
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item}
              </a>
            ))}
          </nav>

          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} MSNG Building Solutions. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
