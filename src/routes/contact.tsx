import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — RANDRIANASOLO Mialy" },
      {
        name: "description",
        content:
          "Contactez RANDRIANASOLO Mialy, développeuse web spécialisée en React et Tailwind CSS.",
      },
      { property: "og:title", content: "Contact — RANDRIANASOLO Mialy" },
      {
        property: "og:description",
        content:
          "Contactez RANDRIANASOLO Mialy, développeuse web spécialisée en React et Tailwind CSS.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background px-6 pt-14">
      <div className="max-w-xl text-center">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Contact
        </h1>
        <p className="mt-4 text-muted-foreground">
          Vous avez un projet en tête ? Discutons-en.
        </p>
        <div className="mt-8 space-y-3 text-sm text-foreground">
          <p>
            <span className="text-muted-foreground">Email :</span>{" "}
            <a
              href="mailto:contact@example.com"
              className="underline underline-offset-4 transition-colors hover:text-primary"
            >
              contact@example.com
            </a>
          </p>
          <p>
            <span className="text-muted-foreground">Téléphone :</span>{" "}
            <a
              href="tel:+261000000000"
              className="underline underline-offset-4 transition-colors hover:text-primary"
            >
              +261 00 00 000 00
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
