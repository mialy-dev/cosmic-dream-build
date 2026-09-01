import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/a-propos")({
  head: () => ({
    meta: [
      { title: "À propos — RANDRIANASOLO Mialy" },
      {
        name: "description",
        content:
          "Découvrez le parcours de RANDRIANASOLO Mialy, développeuse web passionnée par React et le design moderne.",
      },
      { property: "og:title", content: "À propos — RANDRIANASOLO Mialy" },
      {
        property: "og:description",
        content:
          "Découvrez le parcours de RANDRIANASOLO Mialy, développeuse web passionnée par React et le design moderne.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background px-6 pt-14">
      <div className="max-w-2xl text-center">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          À propos
        </h1>
        <p className="mt-6 text-muted-foreground leading-relaxed">
          Je suis <strong className="text-foreground">RANDRIANASOLO Mialy</strong>,
          développeuse web. Je conçois des interfaces modernes, performantes et
          accessibles avec React, TypeScript et Tailwind CSS. Mon approche allie
          rigueur technique et sens du détail pour donner vie à des expériences
          utilisateur mémorables.
        </p>
      </div>
    </main>
  );
}
