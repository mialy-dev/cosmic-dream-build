import React from "react";
import photoAsset from "@/assets/photo-profil.png.asset.json";
import ordinateurAsset from "@/assets/photo-ordinateur.jpg.asset.json";

const ORBITS = [
  { size: 220, duration: "18s", planet: "h-3 w-3 bg-primary" },
  { size: 360, duration: "32s", planet: "h-4 w-4 bg-accent-foreground" },
  { size: 520, duration: "54s", planet: "h-2.5 w-2.5 bg-muted-foreground" },
];

const STARS = Array.from({ length: 60 }, (_, i) => ({
  top: `${(i * 37) % 100}%`,
  left: `${(i * 61) % 100}%`,
  delay: `${(i % 12) * 0.45}s`,
  size: i % 5 === 0 ? 2.5 : 1.5,
}));

export const Component = () => {
  return (
    <section className="relative flex flex-1 w-full items-center justify-center overflow-hidden bg-background pt-14">
      {/* Profile image top-left */}
      <div className="absolute left-4 top-20 z-20 sm:left-8 sm:top-24">
        <img
          src={photoAsset.url}
          alt="RANDRIANASOLO Mialy"
          className="h-28 w-28 rounded-full object-cover ring-4 ring-primary/30 shadow-xl shadow-primary/20 sm:h-40 sm:w-40"
        />
      </div>

      {/* Computer image bottom-right */}
      <div className="absolute bottom-6 right-4 z-20 sm:bottom-10 sm:right-8">
        <img
          src={ordinateurAsset.url}
          alt="Ordinateur"
          className="h-24 w-36 rounded-2xl object-cover shadow-2xl shadow-primary/20 brightness-[0.75] sm:h-32 sm:w-48"
        />
      </div>
      {/* Starfield */}
      <div className="pointer-events-none absolute inset-0">
        {STARS.map((star, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-foreground animate-[twinkle_4s_ease-in-out_infinite]"
            style={{
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
              animationDelay: star.delay,
            }}
          />
        ))}
      </div>

      {/* Orbits */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        {ORBITS.map((orbit) => (
          <div
            key={orbit.size}
            className="absolute rounded-full border border-border animate-[orbit-rotate_linear_infinite]"
            style={{
              width: orbit.size,
              height: orbit.size,
              animationDuration: orbit.duration,
            }}
          >
            <span
              className={`absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full ${orbit.planet}`}
            />
          </div>
        ))}
        <div className="absolute h-24 w-24 rounded-full bg-primary/15 blur-2xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 text-center">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
          RANDRIANASOLO Mialy
        </h1>
        <p className="mt-3 text-sm uppercase tracking-[0.35em] text-muted-foreground sm:text-base">
          Développeuse Web
        </p>
      </div>
    </section>
  );
};
