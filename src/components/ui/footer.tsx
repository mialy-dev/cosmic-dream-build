import { Github, FileText } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background py-6">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} RANDRIANASOLO Mialy. Tous droits réservés.
        </p>
        <ul className="flex items-center gap-6">
          <li>
            <a
              href="https://github.com/mialy-dev/PorteFolio-"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </li>
          <li>
            <a
              href="/cv"
              className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <FileText className="h-4 w-4" />
              CV
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
