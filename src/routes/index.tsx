import { createFileRoute } from "@tanstack/react-router";
import { Component } from "@/components/ui/celestial-orrery";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RANDRIANASOLO Mialy — Développeuse Web" },
      {
        name: "description",
        content:
          "Portfolio de RANDRIANASOLO Mialy, développeuse web : une orrery céleste animée en React et Tailwind CSS.",
      },
      { property: "og:title", content: "RANDRIANASOLO Mialy — Développeuse Web" },
      {
        property: "og:description",
        content: "Orrery céleste animée signée RANDRIANASOLO Mialy, développeuse web.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return <Component />;
}
