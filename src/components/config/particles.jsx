const particlesConfig = {
    
    fpsLimit: 20,    
    particles: {
      color: {
        value: "#ffffff",
      },
      move: {
        enable: true,
        random: true,
        speed: { min: .5, max: 1 },
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 1000,
        },
        value: 15,
      },
      opacity: {
        value: 0.3,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 0.8, max: 2.3 },
      },
    },
    detectRetina: true,
  };

export default particlesConfig;
