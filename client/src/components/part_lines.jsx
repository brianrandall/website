import React, { useEffect } from "react";
import ParticleCloud from "@codegewerk/particle-cloud";

export default function ParticleCloudCanvas() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const instance = new ParticleCloud({
      speed: 0.2,
      maxParticles: 350,
      selector: ".particles-lines",
      color: ["#ffffff"],
      connectParticles: true,
      minDistance: 90,
      responsive: [
        {
            breakpoint: 1224,
            options: {
                maxParticles: 250,
            },
        },
        {
            breakpoint: 1024,
            options: {
                maxParticles: 100,
            },
        },
        {
            breakpoint: 768,
            options: {
                maxParticles: 150,
            },
            },
            {
            breakpoint: 425,
            options: {
                maxParticles: 100,
            },
        },
        ],
    });

    instance.start();

    return () => instance.destroy();
  }, []);

  return <canvas className="particles-lines"></canvas>;
}