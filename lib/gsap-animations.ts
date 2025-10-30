import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Graffiti Text Animation
export const animateGraffitiText = (element: HTMLElement) => {
  const letters = element.querySelectorAll("span");

  gsap.fromTo(
    letters,
    {
      opacity: 0,
      y: 50,
      rotation: () => Math.random() * 20 - 10,
    },
    {
      opacity: 1,
      y: 0,
      rotation: 0,
      duration: 0.8,
      stagger: 0.03,
      ease: "back.out(1.7)",
    }
  );
};

// Spray Paint Reveal
export const sprayPaintReveal = (path: SVGPathElement) => {
  const length = path.getTotalLength();

  gsap.set(path, {
    strokeDasharray: length,
    strokeDashoffset: length,
  });

  gsap.to(path, {
    strokeDashoffset: 0,
    duration: 2,
    ease: "power2.inOut",
  });
};

// Paint Drip Animation
export const paintDripAnimation = (element: HTMLElement) => {
  gsap.fromTo(
    element,
    {
      scaleY: 0,
      transformOrigin: "top center",
    },
    {
      scaleY: 1,
      duration: 1.5,
      ease: "elastic.out(1, 0.5)",
    }
  );
};

// Parallax Scroll
export const parallaxScroll = (element: HTMLElement, speed: number = 0.5) => {
  gsap.to(element, {
    yPercent: -50 * speed,
    ease: "none",
    scrollTrigger: {
      trigger: element,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });
};

// Sticker Peel Effect
export const stickerPeel = (element: HTMLElement) => {
  const tl = gsap.timeline({ paused: true });

  tl.to(element, {
    rotationY: 10,
    rotationX: -5,
    scale: 1.05,
    duration: 0.3,
    ease: "power2.out",
  });

  return tl;
};

// Polaroid Tilt on Hover
export const polaroidTilt = (element: HTMLElement) => {
  element.addEventListener("mouseenter", () => {
    gsap.to(element, {
      rotation: Math.random() * 6 - 3,
      scale: 1.05,
      duration: 0.3,
      ease: "power2.out",
    });
  });

  element.addEventListener("mouseleave", () => {
    gsap.to(element, {
      rotation: 0,
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  });
};

// Scroll-triggered Fade In
export const scrollFadeIn = (
  elements: HTMLElement | HTMLElement[],
  options = {}
) => {
  gsap.from(elements, {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
      trigger: elements,
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse",
      ...options,
    },
  });
};

// Glitch Effect
export const glitchEffect = (element: HTMLElement) => {
  const tl = gsap.timeline({ repeat: 2, repeatDelay: 0.1 });

  tl.to(element, {
    x: -2,
    duration: 0.05,
  })
    .to(element, {
      x: 2,
      duration: 0.05,
    })
    .to(element, {
      x: -2,
      duration: 0.05,
    })
    .to(element, {
      x: 0,
      duration: 0.05,
    });

  return tl;
};

// Continuous Ticker
export const continuousTicker = (element: HTMLElement, duration: number = 20) => {
  const width = element.scrollWidth;

  gsap.to(element, {
    x: -width / 2,
    duration,
    ease: "none",
    repeat: -1,
  });
};

// Brush Stroke Reveal
export const brushStrokeReveal = (element: HTMLElement) => {
  gsap.fromTo(
    element,
    {
      clipPath: "inset(0 100% 0 0)",
    },
    {
      clipPath: "inset(0 0% 0 0)",
      duration: 1.5,
      ease: "power2.inOut",
    }
  );
};

// Magnetic Button Effect
export const magneticButton = (button: HTMLElement, strength: number = 0.5) => {
  button.addEventListener("mousemove", (e) => {
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(button, {
      x: x * strength,
      y: y * strength,
      duration: 0.3,
      ease: "power2.out",
    });
  });

  button.addEventListener("mouseleave", () => {
    gsap.to(button, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: "elastic.out(1, 0.5)",
    });
  });
};

// Image Reveal on Scroll
export const imageReveal = (element: HTMLElement) => {
  gsap.fromTo(
    element,
    {
      clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
    },
    {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      duration: 1.5,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    }
  );
};

// Text Scramble Effect
export const textScramble = (element: HTMLElement, finalText: string) => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*";
  const length = finalText.length;
  let iteration = 0;

  const interval = setInterval(() => {
    element.textContent = finalText
      .split("")
      .map((char, index) => {
        if (index < iteration) {
          return finalText[index];
        }
        return chars[Math.floor(Math.random() * chars.length)];
      })
      .join("");

    if (iteration >= length) {
      clearInterval(interval);
    }

    iteration += 1 / 3;
  }, 30);
};

// Splatter Effect
export const splatterEffect = (container: HTMLElement, count: number = 10) => {
  for (let i = 0; i < count; i++) {
    const splatter = document.createElement("div");
    splatter.className = "splatter";
    splatter.style.cssText = `
      position: absolute;
      width: ${Math.random() * 30 + 10}px;
      height: ${Math.random() * 30 + 10}px;
      background: var(--color-neon-pink);
      border-radius: ${Math.random() * 50}%;
      top: ${Math.random() * 100}%;
      left: ${Math.random() * 100}%;
      opacity: 0;
    `;

    container.appendChild(splatter);

    gsap.to(splatter, {
      opacity: Math.random() * 0.8 + 0.2,
      scale: Math.random() * 2 + 0.5,
      duration: 0.5,
      delay: Math.random() * 0.3,
      ease: "power2.out",
    });
  }
};

// Gold Shimmer Animation
export const goldShimmer = (element: HTMLElement) => {
  gsap.to(element, {
    backgroundPosition: "200% center",
    duration: 3,
    repeat: -1,
    ease: "none",
  });
};

// Chaotic Grid Animation
export const chaoticGrid = (elements: HTMLElement[]) => {
  elements.forEach((element, index) => {
    gsap.fromTo(
      element,
      {
        opacity: 0,
        x: Math.random() * 200 - 100,
        y: Math.random() * 200 - 100,
        rotation: Math.random() * 360,
        scale: 0,
      },
      {
        opacity: 1,
        x: 0,
        y: 0,
        rotation: 0,
        scale: 1,
        duration: 1,
        delay: index * 0.05,
        ease: "back.out(1.7)",
      }
    );
  });
};

// Cleanup function
export const killScrollTriggers = () => {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
};
