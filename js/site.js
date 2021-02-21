//animations
gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger);
const words = ["My name is Franciszek Zawadzki<br> I will turn your ideas into a Website"];
let cursor = gsap.to('.cursor', { opacity: 0, ease: "power2.inOut", repeat: -1});
let boxTl = gsap.timeline();

boxTl.to('.box', {duration: 1, width:"17vw", delay: 0.5, ease: "power4.inOut"})
.from('.hi', {duration: 1, y:"3.5rem", ease: "power3.out", onComplete: () => masterTL.play()});

let masterTL = gsap.timeline().pause();
// masterTL.to('.text', {duration: 1, text: "word"});
words.forEach(word => {
    let tl = gsap.timeline({repeat: 0, yoyo: false, repeatDelay: 0});
    tl.to('.text', {duration: 3.5, text: word, onComplete: () => {
        //dev animation
    }});
    masterTL.add(tl);
});

var tl = gsap.timeline();

        // tl.from('.stagger1',{
        //     opacity: 0,
        //     y: -50,
        //     stagger: .3,
        //     ease:Power4.easeOut,
        //     duration: 2
        // });

        gsap.from('.transition2', {
            scrollTrigger: {
                trigger: '.transition2',
                start: "top bottom"

            },
            y: 50,
            opacity: 0,
            duration: 1.2,
            stagger: .3
        })
        gsap.from('.transition3', {
            scrollTrigger: {
                trigger: '.transition3',
                start: "top center"

            },
            y: 50,
            opacity: 0,
            duration: 1.2,
            stagger: .3
        })


//smooth scroll
var scroll = new SmoothScroll('a[href*="#"]');

//nav
const nav = document.querySelector('#main');
const topOfNav = nav.offsetTop;

 function fixNav(){
     //window.scrollY is how far we scrolll from the top
     if(window.scrollY >= topOfNav){
        document.body.style.paddingTop = nav.offsetHeight + 'px';
        document.body.classList.add('fixed-nav');
    }else{
        document.body.style.paddingTop = 0;
        document.body.classList.remove('fixed-nav');
    }
}
window.addEventListener('scroll', fixNav);

// tsparticles easter egg
document.addEventListener( 'DOMContentLoaded', function () {
    document.getElementById('heart').addEventListener('click', loadParticles);
}
);


// get repos 
async function getRepos(){
    let url = 'https://api.github.com/users/franekfranek/repos';

    const response = await fetch(url);
    const repos = await response.json();
    return repos;
}

function reposToHtml(repos){
    const gitCards = document.querySelectorAll('.git-card');
    gitCards.forEach(card => {
        card.innerHTML = repos.map((repo, i) => {
            ``
            if(card.dataset.proj == repo.name){
                return `
                <div class="buttons">
                    <div>
                        <img class="github-svg" src="/assets/github.svg">
                        <a class="proj-link github" href="${repo.html_url}" target="_blank" alt="source code">Source code</a>
                    </div>
                    <div class="${repo.description.charAt(0) == 'h' ? 'show' : 'hid'}">
                        <img class="github-svg" src="/assets/arrow.svg">
                        <a class="proj-link live" href="${repo.description.substring(0, repo.description.indexOf(' '))}" target="_blank" alt="source code">Live site</a>
                    </div>
                    
                </div>
              
              <div class="git-icons">
                <img class="fas" src="/assets/fork.svg">
                <span class="forks">${repo.forks_count}</span>  
                <img class="fas" src="/assets/star.svg">
                <span class="stars">${repo.stargazers_count}</span>  
              </div>    
            `
            };
          }).join('');

        
    }) 
}

getRepos().then(repos =>{
    reposToHtml(repos.filter(repo => repo.name == "GalileuszSchool" ||
    repo.name == "Bio-shop" || repo.name == "ask-mate-python" || repo.name == "Portfolio1"));

})
.catch(error => {
    console.error(error)
});



//formspree
    var form = document.getElementById("my-form");
    // var button = document.getElementById("my-form-button");
    var status = document.getElementById("status");

    function success() {
      form.reset();
      status.classList.add('success');  
      status.innerHTML = "Thanks!";
    }

    function error() {
      status.classList.add('error');  
      status.innerHTML = "Oops! There was a problem.";

    }

    form.addEventListener("submit", function(ev) {
      ev.preventDefault();
      var data = new FormData(form);
      ajax(form.method, form.action, data, success, error);
    });
    
  function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
  }

function loadParticles(){
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
