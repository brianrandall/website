import React, { useEffect } from "react";
import ParticleCloud from "@codegewerk/particle-cloud";

export default function ParticleCloudCanvas() {
  useEffect(() => {
    const instance = new ParticleCloud({
      speed: 0.2,
      maxParticles: 900,
      selector: ".particles",
      color: "#ffffff",
      connectParticles: true,
      minDistance: 90,
      responsive: [
        {
            breakpoint: 1224,
            options: {
                maxParticles: 700,
            },
        },
        {
            breakpoint: 1024,
            options: {
                maxParticles: 600,
            },
        },
        {
            breakpoint: 768,
            options: {
                maxParticles: 300,
            },
            },
            {
            breakpoint: 425,
            options: {
                maxParticles: 200,
            },
        },
        ],
    });

    instance.start();

    return () => instance.destroy();
  }, []);

  return <canvas className="particles"></canvas>;
}