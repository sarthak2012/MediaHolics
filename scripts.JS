// Portfolio filter functionality
document.addEventListener("DOMContentLoaded", function () {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const portfolioItems = document.querySelectorAll(".portfolio-item");

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      // Remove active class from all buttons
      filterBtns.forEach(function (b) {
        b.classList.remove("active");
        b.style.backgroundColor = "#333"; // Default background color for unselected buttons
      });

      // Add active class to clicked button
      this.classList.add("active");
      this.style.backgroundColor = "#184eef"; // Change background color for the selected button
    });
  });
});

// Portfolio filter functionality
const filterBtns = document.querySelectorAll(".filter-btn");
const portfolioItems = document.querySelectorAll(".portfolio-item");

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Remove active class from all buttons
    filterBtns.forEach((b) => b.classList.remove("active"));
    // Add active class to clicked button
    btn.classList.add("active");

    // Filter portfolio items based on button clicked
    const filterText = btn.innerText.toLowerCase();
    portfolioItems.forEach((item) => {
      const category = item.querySelector("p").innerText.toLowerCase();
      if (filterText === "all" || category.includes(filterText)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});

// Add fade-in effect to elements when they are in view
document.addEventListener("DOMContentLoaded", function () {
  const fadeInElements = document.querySelectorAll(".fade-in, .fade-in-up");

  function checkVisibility() {
    fadeInElements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        element.classList.add("fade-in"); // Trigger the fade-in class when element is in view
      }
    });
  }

  // Call the checkVisibility function on scroll
  window.addEventListener("scroll", checkVisibility);

  // Initial check to apply fade-in effects on page load
  checkVisibility();
});
document.addEventListener("DOMContentLoaded", function () {
  let currentIndex = 0;
  const testimonialItems = document.querySelectorAll(".testimonial-item");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  // Show the current testimonial
  function showTestimonial(index) {
    testimonialItems.forEach((item, idx) => {
      if (idx === index) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  }

  // Initialize the first testimonial
  showTestimonial(currentIndex);

  // Handle previous button click
  prevBtn.addEventListener("click", function () {
    currentIndex =
      currentIndex === 0 ? testimonialItems.length - 1 : currentIndex - 1;
    showTestimonial(currentIndex);
  });

  // Handle next button click
  nextBtn.addEventListener("click", function () {
    currentIndex =
      currentIndex === testimonialItems.length - 1 ? 0 : currentIndex + 1;
    showTestimonial(currentIndex);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter");
  const speed = 200;

  const startCounting = (element) => {
    const target = parseInt(element.dataset.target);
    const count = parseInt(element.innerText);
    const increment = target / speed;

    if (count < target) {
      element.innerText = Math.ceil(count + increment);
      setTimeout(() => startCounting(element), 1);
    } else {
      element.innerText = target;
    }
  };

  // Intersection Observer for triggering counter animation
  const observerOptions = {
    threshold: 0.5,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        counters.forEach((counter) => startCounting(counter));
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe the stats section
  const statsSection = document.getElementById("stats");
  observer.observe(statsSection);
});

document.addEventListener("DOMContentLoaded", function () {
  const counters = document.querySelectorAll(".counter");
  const speed = 5; // Adjust speed for smoother animation

  counters.forEach((counter) => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText;

      // Calculate the increment step
      const increment = Math.ceil(target / 100);

      if (count < target) {
        counter.innerText = count + increment;
        setTimeout(updateCount, speed);
      } else {
        counter.innerText = target; // Ensure it reaches the exact target
      }
    };

    counter.innerText = "0"; // Start from 0
    updateCount();
  });
});

document
  .querySelector(".contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Grab values from the form
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const subject = document.querySelector("#subject").value;
    const message = document.querySelector("#message").value;

    // Basic validation (You can expand it)
    if (name && email && message) {
      console.log("Form submitted successfully:", {
        name,
        email,
        subject,
        message,
      });
      // Here you can send the data to a server or perform any action

      // Optionally, reset the form after submission
      this.reset();
      alert("Your message has been sent!");
    } else {
      alert("Please fill in all required fields.");
    }
  });
