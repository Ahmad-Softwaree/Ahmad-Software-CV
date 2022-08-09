//render all projects  with map and arrays

const projects = [
  {
    img: "/resources/images/java.JPG",
    topic: "Java Snake Game",
    category: "Java projects",
    url: "https://www.youtube.com/watch?v=HOCN3kQChbQ",
  },
  {
    img: "/resources/images/java.JPG",
    topic: "Java Tik Tac Toe Game",
    category: "Java projects",
    url: "https://www.youtube.com/watch?v=2Kz57MzJrCw",
  },
  {
    img: "/resources/images/java.JPG",
    topic: "Java Mobile Console",
    category: "Java Projects",
    url: "https://www.youtube.com/watch?v=QpCN33ibeSo",
  },
  {
    img: "/resources/images/unity.png",
    topic: "Tile Vania Project",
    category: "Unity Projects",
    url: "https://www.youtube.com/watch?v=ewPpOCVwITo",
  },
  {
    img: "/resources/images/active-states.jpg",
    topic: "HTML & CSS",
    category: "Web Projects",
    url: "https://ahmad-div.github.io/Card-Design-AS/",
  },
  {
    img: "/resources/images/desktop-design.jpg",
    topic: "HTML & CSS",
    category: "Web Projects",
    url: "https://ahmad-div.github.io/QR-code-card-Ahmad-Software/",
  },
  {
    img: "/resources/images/card-challenge.jpg",
    topic: "HTML & CSS",
    category: "Web Projects",
    url: "https://ahmad-div.github.io/card-design-Ahmad-Software/",
  },
  {
    img: "/resources/images/music-card.jpg",
    topic: "HTML & CSS",
    category: "Web Projects",
    url: "https://ahmad-div.github.io/music-card-Ahmad-Software/",
  },
  {
    img: "/resources/images/company-card.jpg",
    topic: "HTML & CSS",
    category: "Web Projects",
    url: "https://ahmad-div.github.io/Company-card-AhmadSoftware/",
  },
  {
    img: "/resources/images/car-card.jpg",
    topic: "HTML & CSS",
    category: "Web Projects",
    url: "https://ahmad-div.github.io/car-card-Ahmad-Software/",
  },
  {
    img: "/resources/images/personal-card.jpg",
    topic: "HTML & CSS",
    category: "Web Projects",
    url: "https://ahmad-div.github.io/personal-card-ahmad-Software/",
  },
  {
    img: "/resources/images/grid-cards.jpg",
    topic: "HTML & CSS",
    category: "Web Projects",
    url: "https://ahmad-div.github.io/Testimonials-grid-Ahmad-Software/",
  },
  {
    img: "/resources/images/Social-proof.jpg",
    topic: "HTML & CSS",
    category: "Web Projects",
    url: "https://ahmad-div.github.io/Social-proof-Ahmad-Software/",
  },
  {
    img: "/resources/images/fylo-data-web-design.jpg",
    topic: "HTML & CSS",
    category: "Web Projects",
    url: "https://ahmad-div.github.io/Fylo-data-storage-Ahmad-Software/",
  },
  {
    img: "/resources/images/four-card-design.jpg",
    topic: "HTML & CSS",
    category: "Web Projects",
    url: "https://ahmad-div.github.io/four-card-Ahmad-Software/",
  },
  {
    img: "/resources/images/single-price-desing.jpg",
    topic: "HTML & CSS",
    category: "Web Projects",
    url: "https://ahmad-div.github.io/Single-price-Ahmad-Software/",
  },
  {
    img: "/resources/images/full-web-page-1.jpg",
    topic: "HTML & CSS",
    category: "Web Projects",
    url: "https://ahmad-div.github.io/Clipboard-landing-Ahmad-Software/",
  },
  {
    img: "/resources/images/huddle-web-desing.jpg",
    topic: "HTML & CSS",
    category: "Web Projects",
    url: "https://ahmad-div.github.io/Huddle-landing-page-Ahmad-Software/",
  },
  {
    img: "/resources/images/huddle-single-page.jpg",
    topic: "HTML & CSS",
    category: "Web Projects",
    url: "https://ahmad-div.github.io/Huddle-single-page-Ahmad-Software/",
  },
  {
    img: "/resources/images/chat-app-design.jpg",
    topic: "HTML & CSS",
    category: "Web Projects",
    url: "https://ahmad-div.github.io/Chat-App-Ahmad-Software/",
  },
  {
    img: "/resources/images/feedback-card-js.jpg",
    topic: "HTML & CSS & JS",
    category: "Web Projects",
    url: "https://ahmad-div.github.io/Interactive-rating-component-Ahmad-Software/",
  },
  {
    img: "/resources/images/FAQ-JS.jpg",
    topic: "HTML & CSS & JS",
    category: "Web Projects",
    url: "https://ahmad-div.github.io/FAQ-JS-Ahmad-Software/",
  },
  {
    img: "/resources/images/post-article-JS.jpg",
    topic: "HTML & CSS & JS",
    category: "Web Projects",
    url: "https://ahmad-div.github.io/Article-post-Ahmad-Software/",
  },
  {
    img: "/resources/images/fylo-landing-page-JS.jpg",
    topic: "HTML & CSS & JS",
    category: "Web Projects",
    url: "https://ahmad-div.github.io/Fylo_landing-page-Ahmad-Software/#main-section",
  },
  {
    img: "/resources/images/coming-soon-JS.jpg",
    topic: "HTML & CSS & JS",
    category: "Web Projects",
    url: "https://ahmad-div.github.io/coming-soon-page-Ahmad-Software/",
  },
  {
    img: "/resources/images/sign-up-form-JS.jpg",
    topic: "HTML & CSS & JS",
    category: "Web Projects",
    url: "https://ahmad-div.github.io/sign-up-form-Ahmad-Software/",
  },
  {
    img: "/resources/images/coming-soon2-JS.jpg",
    topic: "HTML & CSS & JS",
    category: "Web Projects",
    url: "https://ahmad-div.github.io/single-column-coming-soon-Ahmad-Software/",
  },
  {
    img: "/resources/images/chart-money.jpg",
    topic: "HTML & CSS & JS",
    category: "Web Projects",
    url: "https://ahmad-div.github.io/Expenses-chart-Ahmad-Software/",
  },
  {
    img: "/resources/images/nav-bar-web-JS.jpg",
    topic: "HTML & CSS & JS",
    category: "Web Projects",
    url: "https://ahmad-div.github.io/dropdown-navigation-Ahmad-Software/",
  },
  {
    img: "/resources/images/game.png",
    topic: "HTML & CSS & JS",
    category: "Web Projects",
    url: "https://ahmad-div.github.io/Simon-Game-Ahmad-Software/",
  },
  {
    img: "/resources/images/rock-paper-JS.jpg",
    topic: "HTML & CSS & JS",
    category: "Web Projects",
    url: "https://ahmad-div.github.io/Rock-paper-game-Ahmad-Software/",
  },
];

let projectPage = document.querySelector(".projects .content");

projects
  .map((project) => {
    projectPage.innerHTML += `
                <div class="project-card">
                    <div class="project-card-content">
                        <div class="project-picture">
                            <img src="${project.img}" alt="">
                        </div>
                        <div class="project-info">
                            <p class="projct-category">${project.topic}</p>
                            <strong class="project-title">
                                <span>${project.category}</span>
                                <a title="click here for the project" href="${project.url}"
                                    class="more-details">More details</a>
                            </strong>
                        </div>
                    </div>
                </div>
        `;
  })
  .join("");
