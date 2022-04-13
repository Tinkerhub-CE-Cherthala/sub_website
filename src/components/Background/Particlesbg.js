import React from 'react'
import Particles from 'react-tsparticles'
import './Particles.css'
function Particlesbg() {

  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <div className='particle'>
      <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        // background: {
        //   color: {
        //     value: "#000000",
        //   },
        // },
        fpsLimit: 60,
        interactivity: {
          modes: {
            bubble: {
              distance: 400,
              duration: 1,
              opacity: 0.8,
              size: 10,
            },
            push: {
              quantity: 6,
            },
            repulse: {
              distance: 700,
              duration: 0.3,
            },
          },
        },
        particles: {
          color: {
            value: "#39FF14",
          },
          links: {
            color: "#ffffff",
            distance: 90,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "out",
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 1000,
            },
            value: 180,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "square",
          },
          size: {
            random: true,
            value: 8,
          },
        },
        detectRetina: true,
      }}
    />
  );
    </div>
  )
}

export default Particlesbg