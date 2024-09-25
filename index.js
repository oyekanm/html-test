

const Projects = [
  {
    id: 1,
    image: "https://i.ibb.co/G9cnmDD/Screenshot-19.png",
    name: "navbar js",
    language: ["html", "css", "javascript"],
    category: "javascript",
    url: "https://oyekanm.github.io/Navigation-js/",
    Github: "https://github.com/oyekanm/Navigation-js",
  },
  {
    id: 2,
    image: "https://i.ibb.co/1vNy5Sg/Screenshot-8.png",
    name: "clone",
    language: ["html", "css", "bootstrap"],
    category: "html/css",
    url: "https://clonedcss.netlify.app/",
    Github: "https://github.com/oyekanm/Clone",
  },

  {
    id: 5,
    image: "https://i.ibb.co/5GVD76B/Screenshot-11.png",
    name: "natours",
    language: ["html", "css", "sass"],
    category: "sass",
    url: "https://oyekanm.github.io/NATOURS/",
    Github: "https://github.com/oyekanm/NATOURS",
  },
  {
    id: 6,
    image: "https://i.ibb.co/30QNFyP/Screenshot-13.png",
    name: "trillo",
    language: ["html", "css", "sass"],
    category: "sass",
    url: "https://oyekanm.github.io/TRILLO/",
    Github: "https://github.com/oyekanm/TRILLO",
  },
  {
    id: 7,
    image: "https://i.ibb.co/YfQPvjr/Screenshot-12.png",
    name: "nexter",
    language: ["html", "css", "sass"],
    category: "sass",
    url: "https://nextergrid.netlify.app/",
    Github: "https://github.com/oyekanm/NEXTER",
  },
  {
    id: 8,
    image: "https://i.ibb.co/YN7MtN3/Screenshot-4.png",
    name: "black jack",
    language: ["html", "css", "javascript"],
    category: "javascript",
    url: "https://oyekanm.github.io/Black-Jack/",
    Github: "https://github.com/oyekanm/Black-Jack",
  },
  {
    id: 12,
    image: "https://i.ibb.co/KhnTB2D/Screenshot-35.png",
    name: "eko360 copy",
    language: ["html", "css", "bootstrap"],
    category: "html/css",
    url: "https://eko360.netlify.app/",
    Github: "https://github.com/oyekanm/Eko-360",
  },
  {
    id: 13,
    image: "https://i.ibb.co/CVKRSzj/Screenshot-39.png",
    name: "crappo landing page",
    language: ["html", "sass", "aos", "gsap"],
    category: "sass",
    url: "http://crypto-home-page-zeta.vercel.app/",
    Github: "https://github.com/oyekanm/Crypto-Landing-Page",
  },
  ,
];


const track = document.querySelector(".carousel__track");
const portfolio = document.querySelector(".Portfolio_container");
const navigation = document.getElementById("nav");
const navBtn = document.querySelector("Nav__button");
const nav = document.querySelector("Nav");

const slides = Array.from(track.children);
const nextButton = document.querySelector(".carousel__button--right");
const prevButton = document.querySelector(".carousel__button--left");
const slideWidth = slides[0]?.getBoundingClientRect()?.width;

for (let i = 0; i < slides.length; i++) {
  slides[i].style.left = slideWidth * i + "px";
}

navigation.addEventListener("click", (e) => {
  // console.log(e);
  nav.classList.toggle("active");
  navigation.classList.toggle("show");
});

const portfolioContent = () => {
  return Projects.map((pr) => {
    return (portfolio.innerHTML += `
    <div class="Portfolio_div">
          <p class="Portfolio_title">${pr.name}</p>
          <span class="Portfolio_span">
            <span>Html</span><span>Css</span><span>Bootstrap</span>
            ${pr.language.map((l) => {
              return `<span>${l}</span>`;
            })}
          </span>
          <p class="Portfolio_desc">
          ${pr.category}
          </p>
          <div class="Portfolio_button">
            <a href="${pr.url}" target="blank"
              ><i class="bi bi-laptop"></i> Live Site</a
            >
            <a href="${pr.Github}" target="blank"
              ><i class="bi bi-github"></i> Github</a
            >
          </div>
    </div>
    `);
  });
};

document.addEventListener("DOMContentLoaded", () => {
  portfolioContent();
});

const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = "translateX(-" + targetSlide.style.left + ")";
  currentSlide.classList.remove("current-slide");
  targetSlide.classList.add("current-slide");
};

const hideShowArrow = (myIndex, slides, prevButton, nextButton) => {
  if (myIndex === 0) {
    prevButton.classList.add("hide-arrow");
    nextButton.classList.remove("hide-arrow");
  } else if (myIndex === slides.length - 1) {
    prevButton.classList.remove("hide-arrow");
    nextButton.classList.add("hide-arrow");
  } else {
    prevButton.classList.remove("hide-arrow");
    nextButton.classList.remove("hide-arrow");
  }
};

// when I click  left, move slides left
prevButton.addEventListener("click", () => {
  const currentSlide = track.querySelector(".current-slide");
  const previousSlide = currentSlide.previousElementSibling;
  const prevIndex = slides.findIndex((slide) => slide === previousSlide);
  console.log(currentSlide);

  moveToSlide(track, currentSlide, previousSlide);
  // updateDots(currentDot, prevDot);
  hideShowArrow(prevIndex, slides, prevButton, nextButton);
});

// when I click  right, move slides right
nextButton.addEventListener("click", () => {
  const currentSlide = track.querySelector(".current-slide");
  const nextSlide = currentSlide.nextElementSibling;
  const nextIndex = slides.findIndex((slide) => slide === nextSlide);

  moveToSlide(track, currentSlide, nextSlide);
  // updateDots(currentDot, nextDot);
  hideShowArrow(nextIndex, slides, prevButton, nextButton);
  console.log(nextIndex);
});




// console.log(slideWidth,slides.length,track);
