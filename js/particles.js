export function loadParticles(){
    console.log("hekj");
    displayThanks();
    tsParticles.load("tsparticles", {
        fpsLimit: 60,
        backgroundMode: {
          enable: true,
          zIndex: -1
        },
        particles: {
          number: {
            value: 100,
            density: {
              enable: true,
              area: 800
            }
          },
          color: {
            value: [
                "#B8B3FD"
            //   "#3998D0",
            //   "#2EB6AF",
            //   "#A9BD33",
            //   "#FEC73B",
            //   "#F89930",
            //   "#F45623",
            //   "#D62E32",
            //   "#EB586E",
            //   "#9952CF"
            ]
          },
          destroy: {
            mode: "split",
            split: {
              count: 1,
              factor: {
                value: 9,
                random: {
                  enable: true,
                  minimumValue: 4
                }
              },
              rate: {
                value: 10,
                random: {
                  enable: true,
                  minimumValue: 5
                }
              },
              particles: {
                collisions: {
                  enable: false
                },
                destroy: {
                  mode: "none"
                },
                life: {
                  count: 1,
                  duration: {
                    value: 1
                  }
                }
              }
            }
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#000000"
            },
            polygon: {
              sides: 5
            },
            image: {
              src: "https://cdn.matteobruni.it/images/particles/github.svg",
              width: 50,
              height: 100
            }
          },
          opacity: {
            value: 1,
            random: false,
            animation: {
              enable: false,
              speed: 1,
              minimumValue: 0.1,
              sync: false
            }
          },
          size: {
            value: 15,
            random: {
              enable: true,
              minimumValue: 10
            },
            animation: {
              enable: false,
              speed: 40,
              minimumValue: 0.1,
              sync: false
            }
          },
          lineLinked: {
            enable: false,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1
          },
          collisions: {
            enable: true,
            mode: "destroy"
          },
          move: {
            enable: true,
            speed: 5,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200
            }
          }
        },
        interactivity: {
          detectsOn: "window",
          events: {
            onHover: {
              enable: false,
              mode: "repulse",
              parallax: {
                enable: false,
                force: 60,
                smooth: 10
              }
            },
            onClick: {
              enable: true,
              mode: "push"
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 1
              }
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 0.8
            },
            repulse: {
              distance: 200
            },
            push: {
              particles_nb: 1
            },
            remove: {
              particles_nb: 2
            }
          }
        },
        detectRetina: true
      });
}

function displayThanks(){
    let clickMe = document.getElementById('clickMe');
    clickMe.innerHTML = '';
    clickMe.classList.add('bigger');
    clickMe.innerHTML = "Thanks for visiting!";
}