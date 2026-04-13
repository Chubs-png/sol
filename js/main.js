import { HomeView } from "../views/home.js";
import { GalleryView } from "../views/gallery.js";
import { InteractiveView } from "../views/interactive.js";

document.addEventListener("DOMContentLoaded", () => {
  // Elements
  const entranceOverlay = document.getElementById("entrance-overlay");
  const enterBtn = document.getElementById("enter-btn");
  const bgMusic = document.getElementById("bg-music");
  const mainNav = document.getElementById("main-nav");
  const appContent = document.getElementById("app-content");
  const navButtons = document.querySelectorAll(".nav-btn");
  const audioToggle = document.getElementById("audio-toggle");
  const iconPause = document.getElementById("icon-pause");
  const iconPlay = document.getElementById("icon-play");

  // State
  let currentRoute = "home";
  let isMusicPlaying = false;

  // View Mapping
  const routes = {
    home: HomeView,
    gallery: GalleryView,
    interactive: InteractiveView,
  };

  // Initialize App View
  async function loadView(route) {
    if (!routes[route]) return;

    // Update active nav button styling
    navButtons.forEach((btn) => {
      if (btn.dataset.route === route) {
        btn.classList.add("text-blue-600", "bg-blue-100/50");
        btn.classList.remove("text-gray-500");
      } else {
        btn.classList.remove("text-blue-600", "bg-blue-100/50");
        btn.classList.add("text-gray-500");
      }
    });

    // Setup Fade Out
    appContent.classList.remove("opacity-100");
    appContent.classList.add("opacity-0");

    // Wait for fade out transition (500ms from CSS)
    setTimeout(() => {
      // Inject new view HTML
      appContent.innerHTML = routes[route]();

      // Execute any post-render logic needed for specific views
      if (route === "interactive" && window.initInteractiveEffects) {
        // Example: Re-attach tilt effect listeners if view requires JS
        window.initInteractiveEffects();
      }

      // Trigger Fade In
      requestAnimationFrame(() => {
        appContent.classList.remove("opacity-0");
        appContent.classList.add("opacity-100");
      });

      // Scroll to top automatically on route change
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 300); // Slightly less than transition duration for smoother feel
  }

  // Set up Navigation Event Setup
  navButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const route = e.currentTarget.dataset.route;
      if (route !== currentRoute) {
        currentRoute = route;
        loadView(route);
      }
    });
  });

  // Handle "Click to Enter" Experience
  enterBtn.addEventListener("click", () => {
    // Fade out overlay
    entranceOverlay.classList.remove("opacity-100");
    entranceOverlay.classList.add("opacity-0", "pointer-events-none");

    // Start background music seamlessly
    bgMusic.volume = 0.5; // Gentle volume
    bgMusic
      .play()
      .then(() => {
        isMusicPlaying = true;
      })
      .catch((err) => console.log("Autoplay blocked:", err));

    // Initial load the home view
    loadView("home");

    // Reveal the floating navigation Menu
    setTimeout(() => {
      entranceOverlay.style.display = "none";
      mainNav.classList.remove("opacity-0", "translate-y-10");
      mainNav.classList.add("opacity-100", "translate-y-0");
    }, 1000);
  });

  // Handle Global Audio Toggle
  audioToggle.addEventListener("click", () => {
    if (isMusicPlaying) {
      bgMusic.pause();
      iconPause.classList.add("hidden");
      iconPlay.classList.remove("hidden");
    } else {
      bgMusic.play();
      iconPlay.classList.add("hidden");
      iconPause.classList.remove("hidden");
    }
    isMusicPlaying = !isMusicPlaying;
  });

  // Handle Custom Music Dropdown
  const musicDropdownBtn = document.getElementById("music-dropdown-btn");
  const musicDropdownMenu = document.getElementById("music-dropdown-menu");
  const currentSongLabel = document.getElementById("current-song-label");
  const musicOptions = document.querySelectorAll(".music-option");

  // Toggle menu visibility
  musicDropdownBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    const isHidden = musicDropdownMenu.classList.contains("opacity-0");
    if (isHidden) {
      musicDropdownMenu.classList.remove("opacity-0", "pointer-events-none", "translate-y-4");
      musicDropdownMenu.classList.add("opacity-100", "pointer-events-auto", "translate-y-0");
    } else {
      musicDropdownMenu.classList.add("opacity-0", "pointer-events-none", "translate-y-4");
      musicDropdownMenu.classList.remove("opacity-100", "pointer-events-auto", "translate-y-0");
    }
  });

  // Close menu when clicking outside
  document.addEventListener("click", () => {
    musicDropdownMenu.classList.add("opacity-0", "pointer-events-none", "translate-y-4");
    musicDropdownMenu.classList.remove("opacity-100", "pointer-events-auto", "translate-y-0");
  });

  // Handle option selection
  musicOptions.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const src = btn.dataset.src;
      const label = btn.dataset.label;
      
      // Update label
      currentSongLabel.textContent = label;
      
      // Update checkmarks
      musicOptions.forEach(opt => {
        const icon = opt.querySelector("[data-icon]");
        if (opt === btn) {
          icon.classList.remove("opacity-0");
          icon.classList.add("opacity-100");
        } else {
          icon.classList.remove("opacity-100");
          icon.classList.add("opacity-0");
        }
      });
      
      // Update audio
      bgMusic.src = src;
      if (isMusicPlaying) {
        bgMusic.play().catch((err) => console.log("Autoplay blocked:", err));
      }
      
      // Close menu
      musicDropdownMenu.classList.add("opacity-0", "pointer-events-none", "translate-y-4");
      musicDropdownMenu.classList.remove("opacity-100", "pointer-events-auto", "translate-y-0");
    });
  });
});
