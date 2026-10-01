import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../styles/animations.css";

const SELECTORS = [
  ".hero-content",
  ".section-copy",
  ".section-image-wrapper",
  ".section-heading",
  ".memory-card",
  ".social-card",
  ".whatsapp-cta",
  ".social-icons",
  ".legal-section",
  ".not-found-page .legal-container",
];

const ScrollReveal = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const elements = document.querySelectorAll(SELECTORS.join(","));

    elements.forEach((element, index) => {
      element.classList.add("reveal");
      element.style.setProperty("--reveal-delay", `${(index % 4) * 80}ms`);
    });

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("reveal-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("reveal-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [pathname]);

  return null;
};

export default ScrollReveal;
