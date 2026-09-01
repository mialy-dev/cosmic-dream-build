import { Link } from "@tanstack/react-router";
import photoAsset from "@/assets/photo-profil.png.asset.json";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-6">
        <Link
          to="/"
          className="text-sm font-semibold tracking-tight text-foreground transition-colors hover:text-primary"
        >
          Mialy R.
        </Link>
        <ul className="flex items-center gap-6 text-sm">
          <li>
            <Link
              to="/"
              activeProps={{ className: "font-semibold text-foreground" }}
              inactiveProps={{ className: "text-muted-foreground hover:text-foreground" }}
              activeOptions={{ exact: true }}
              className="transition-colors"
            >
              Accueil
            </Link>
          </li>
          <li>
            <Link
              to="/a-propos"
              activeProps={{ className: "font-semibold text-foreground" }}
              inactiveProps={{ className: "text-muted-foreground hover:text-foreground" }}
              className="transition-colors"
            >
              À propos
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              activeProps={{ className: "font-semibold text-foreground" }}
              inactiveProps={{ className: "text-muted-foreground hover:text-foreground" }}
              className="transition-colors"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
