(async () => {
  await loadFull(tsParticles);

  await tsParticles.load({
    id: "tsparticles",
    options: {
      particles: {
        number: {
          value: 250,
          density: {
            enable: true,
            area: 800,
          },
        },
        color: {
          value: "#ffffff",
        },
        shape: {
          type: "circle",
        },
        opacity: {
          value: 0.7,
          random: true,
        },
        size: {
          value: 3,
          random: true,
        },
        move: {
          enable: true,
          speed: 1,
          direction: "none",
          outModes: {
            default: "out",
          },
        },
        links: {
          enable: true,
          distance: 150,
          color: "#ffffff",
          opacity: 0.4,
          width: 1,
        },
      },
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "grab",
          },
          onClick: {
            enable: false,
            mode: "push",
          },
        },
        modes: {
          grab: {
            distance: 200,
            links: {
              opacity: 0.7,
            },
          },
          push: {
            quantity: 4,
          },
        },
      },
    },
  });
})();