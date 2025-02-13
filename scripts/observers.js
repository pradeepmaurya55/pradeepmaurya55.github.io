// Scroll reveal Animation
const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1,
};

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("reveal");
    } else {
      entry.target.classList.remove("reveal");
    }
  });
}, observerOptions);

document.querySelectorAll("section").forEach((section) => {
  sectionObserver.observe(section);
});

// Timeline Animation
const navbarHeight = document.querySelector(".navbar")?.offsetHeight || 80;

const timelineObserverOptions = {
  root: null,
  rootMargin: `-${navbarHeight + 120}px 0px -10% 0px`,
  threshold: [0, 0.15, 0.4],
};

const timelineObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0.3) {
      entry.target.classList.add("fade-in");
      entry.target.classList.remove("fade-out");
    } else {
      entry.target.classList.remove("fade-in");
      entry.target.classList.add("fade-out");
    }
  });
}, timelineObserverOptions);

const observeTimelineItems = () => {
  document.querySelectorAll(".timeline-item").forEach((item) => {
    if (!item.dataset.observed) {
      timelineObserver.observe(item);
      item.dataset.observed = true;
    }
  });
};

observeTimelineItems();

const timelineMutationObserver = new MutationObserver(() => {
  observeTimelineItems();
});

const timelineContainer = document.querySelector(".timeline");
if (timelineContainer) {
  timelineMutationObserver.observe(timelineContainer, {
    childList: true,
    subtree: true,
  });
}
