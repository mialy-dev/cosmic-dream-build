import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

export const Route = createFileRoute("/cv")({
  head: () => ({
    meta: [
      { title: "CV — RANDRIANASOLO Mialy" },
      {
        name: "description",
        content:
          "Curriculum vitae de RANDRIANASOLO Mialy, développeuse web spécialisée en React et Tailwind CSS.",
      },
      { property: "og:title", content: "CV — RANDRIANASOLO Mialy" },
      {
        property: "og:description",
        content:
          "Curriculum vitae de RANDRIANASOLO Mialy, développeuse web spécialisée en React et Tailwind CSS.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CvPage,
});

function CvPage() {
  return (
    <main className="min-h-screen bg-background px-4 py-16 pt-24 sm:px-6">
      <article className="mx-auto max-w-3xl rounded-2xl border border-border bg-card p-8 shadow-sm">
        <header className="border-b border-border pb-6">
          <h1 className="text-3xl font-bold tracking-tight text-card-foreground">
            RANDRIANASOLO Mialy
          </h1>
          <p className="mt-1 text-lg text-muted-foreground">Développeuse Web</p>
          <ul className="mt-4 flex flex-wrap gap-4 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Antananarivo, Madagascar
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              mialyrandrianasolo3@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              +261 34 99 442 14
            </li>
          </ul>
          <ul className="mt-4 flex gap-4 text-sm">
            <li>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary transition-colors hover:underline"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary transition-colors hover:underline"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </li>
          </ul>
        </header>

        <section className="mt-6">
          <h2 className="text-lg font-semibold text-card-foreground">Profil</h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            Développeuse web passionnée, je conçois des applications modernes et
             performantes avec IA, Python et PHP Symfony. Rigoureuse et
            créative, j’aime transformer des idées en expériences utilisateur
            fluides et accessibles.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-lg font-semibold text-card-foreground">Compétences</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {[
               "Python",
               "Django",
               "PHP",
               "Symfony",
              "Git",
              "Figma",
              "TanStack Query",
              "Vite",
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-border bg-secondary px-3 py-1 text-sm text-secondary-foreground"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="mt-6">
          <h2 className="text-lg font-semibold text-card-foreground">Expérience</h2>
          <ul className="mt-3 space-y-4">
            <li>
              <h3 className="font-medium text-card-foreground">Développeuse Web Freelance</h3>
              <p className="text-sm text-muted-foreground">2024 — Présent</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Conception et développement de sites vitrines et d’applications web
                pour des clients variés.
              </p>
            </li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="text-lg font-semibold text-card-foreground">Formation</h2>
          <ul className="mt-3 space-y-2 text-muted-foreground">
             <li>
               Licence en Informatique —&nbsp;&nbsp;IS INFO Ampasamadinika
               <br />
               Master II en Informatique _ Université IS INFO Ampasamadinika
             </li>
          </ul>
        </section>
      </article>
    </main>
  );
}
