const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("active");
});
const portfolioItems = document.querySelectorAll(".portfolio-item");

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;

  portfolioItems.forEach(item => {
    const boxTop = item.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      item.classList.add("show");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll(); // Run on page load

const teamCards = document.querySelectorAll(".team-card");

const revealTeamsOnScroll = () => {
  const triggerPoint = window.innerHeight * 0.75;

  teamCards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;

    if (cardTop < triggerPoint) {
      card.classList.add("show");
    }
  });
};

window.addEventListener("scroll", revealTeamsOnScroll);
revealTeamsOnScroll();
const statNumbers = document.querySelectorAll(".stat-number");
let statsAnimated = false;

const animateStats = () => {
  if (statsAnimated) return;

  const statsSection = document.querySelector(".stats");
  const triggerPoint = window.innerHeight * 0.8;
  const sectionTop = statsSection.getBoundingClientRect().top;

  if (sectionTop < triggerPoint) {
    statNumbers.forEach(stat => {
      const target = +stat.dataset.target;
      let count = 0;
      const increment = Math.ceil(target / 100);

      const updateCount = () => {
        count += increment;
        if (count < target) {
          stat.innerText = count;
          requestAnimationFrame(updateCount);
        } else {
          stat.innerText = target;
        }
      };

      updateCount();
    });

    statsAnimated = true;
  }
};

window.addEventListener("scroll", animateStats);
animateStats();
