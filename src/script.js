import Swiper from "https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs";

// Initialize Swiper
const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  slidesPerView: "auto",
  initialSlide: 2,
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: false,
  effect:'coverflow',
  coverflowEffect: {
    rotate: 0,
    stretch: 80,
    depth: 350,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: -100,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: -100,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: -100,
    },
  },
});



window.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const contactID = params.get('contact');

  if (contactID) {
    const element = document.getElementById(contactID);
    if (element) {
      element.classList.add('find-me');
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setTimeout(() => {
        element.classList.remove('find-me');
      }, 1000);
    }
  }
});


// Fetch the JSON data
fetch('./src/projects.json')
  .then(response => response.json())
  .then(data => {
    const projectsContainer = document?.querySelector('.swiper-wrapper');
    const cardContainer = document?.querySelector('.cardHolder');
    data.projects.forEach(project => {
      const projectElement = document.createElement('div');
      projectElement.className = 'swiper-slide justify-center';
      projectElement.id = project.id;
      projectElement.innerHTML = `
        <img src="${project.image}" alt="${project.name}">
        <div class="container-card">
            <div class="flex justify-center items-center">
                <h2>${project.name}</h2>
            </div>
            <div class="grid justify-center items-center">
                <p>${project.description}</p>
                <a href="./projects.html?highlight=Card${project.id}">
                    <p class="btn text-center justify-self-center">View More </p>
                </a>
            </div>
        </div>

      `;
      projectsContainer?.appendChild(projectElement);
      

      cardContainer?.insertAdjacentHTML('beforeend', `
        <!-- Card ${project.id} -->
        <button id="Card${project.id}" type="button" class="prjcts bg-[#32364d] rounded-lg p-4" data-twe-toggle="modal" data-twe-target="#modal${project.id}" data-twe-ripple-init data-twe-ripple-color="light">
          <img src="${project.image}" class="rounded-lg">
          <div class="grid items-center justify-center p-2">
            <p class="font-bold">${project.name}</p>
            <p>${project.description}</p>
          </div>
        </button>
        <!-- Modal ${project.id} -->
        <div data-twe-modal-init class="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none" id="modal${project.id}" tabindex="-1" aria-labelledby="modal${project.id}" aria-modal="true" role="dialog">
          <div data-twe-modal-dialog-ref class="pointer-events-none relative flex min-h-[calc(100%-1rem)] w-auto translate-y-[-50px] items-center opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:min-h-[calc(100%-3.5rem)] min-[576px]:max-w-[500px]">
            <div class="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-[#263b43]">
              <div class="relative p-4">
                <p>${project.longBoiDesc}</p>
                <br>
                <a class="block prjct-info text-center m-2" href="${project.path}" target="_blank">View it here!</a>
              </div>
              <div class="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 p-4 border-white/10">
                <button type="button" class="inline-block rounded bg-black px-6 pb-2 pt-2.5 text-white" data-twe-modal-dismiss data-twe-ripple-init data-twe-ripple-color="light">Close</button>
              </div>
            </div>
          </div>
        </div>
      `);
    });
    
  })
  .catch(error => console.error('Error fetching projects:', error));

window.addEventListener('DOMContentLoaded', () => {
  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
  delay(500).then(() => {
    const params = new URLSearchParams(window.location.search);
    const highlightId = params.get('highlight');

    if (highlightId) {
      const element = document.getElementById(highlightId);
      if (element && element.classList.contains('prjcts')) {
        element.classList.add('prjcts-hovered');
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });

        setTimeout(() => {
          element.classList.remove('prjcts-hovered');
        }, 1000);
      }
    }
  });
});