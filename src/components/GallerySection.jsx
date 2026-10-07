import { useState } from "react";
import GalleryLightbox from "./GalleryLightbox";

const memories = [
  {
    title: "2026",
    location: "Iki Iki",
    image: "/gallery/2026 iki iki.webp",
  },
  {
    title: "2025",
    location: "Hambourg",
    image: "/gallery/2025 Hamburg.webp",
  },
  {
    title: "2024",
    location: "Clapiers",
    image: "/gallery/2024 Clapiers.webp",
  },
  {
    title: "2023",
    location: "Lycée Nevers",
    image: "/gallery/2023 Lycée Nevers.webp",
  },
  {
    title: "2022",
    location: "TaikoDance",
    image: "/gallery/2022 TaikoDance.webp",
  },
  {
    title: "2021",
    location: "Summer of Love",
    image: "/gallery/2021 Summer of Love.webp",
  },
  {
    title: "2020",
    location: "Montpellier",
    image: "/gallery/2020 Montpellier.webp",
  },
  {
    title: "2019",
    location: "Japan Tsuki",
    image: "/gallery/2019 Japan Tsuki.webp",
  },
  {
    title: "2018",
    location: "Japan Matsuri",
    image: "/gallery/2018 Japan Matsuri.webp",
  },
  {
    title: "2017",
    location: "Hyères",
    image: "/gallery/2017 Hyères.webp",
  },
  {
    title: "2016",
    location: "Premier Groupe",
    image: "/gallery/2016 Premier Groupe.webp",
  },
  {
    title: "2015",
    location: "Juvignac",
    image: "/gallery/2015 Juvignac.webp",
  },
];

const GallerySection = () => {
  const [currentIndex, setCurrentIndex] = useState(null);

  const openGallery = (index) => {
    setCurrentIndex(index);
  };

  const closeGallery = () => {
    setCurrentIndex(null);
  };

  const showPrevious = () => {
    setCurrentIndex((current) =>
      current === 0 ? memories.length - 1 : current - 1,
    );
  };

  const showNext = () => {
    setCurrentIndex((current) =>
      current === memories.length - 1 ? 0 : current + 1,
    );
  };

  return (
    <>
      <section id="souvenirs" className="gallery-section">
        <div className="container">
          <div className="section-heading text-center">
            <span className="section-kicker">En images</span>

            <h2>Quelques souvenirs</h2>

            <div className="title-line mx-auto"></div>
          </div>

          <div className="row g-4">
            {memories.map((memory, index) => (
              <div
                className="col-12 col-sm-6 col-lg-3"
                key={`${memory.title}-${memory.location}-${index}`}
              >
                <article className="memory-card">
                  <div
                    className="memory-image-wrapper"
                    onClick={() => openGallery(index)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        openGallery(index);
                      }
                    }}
                    aria-label={`Ouvrir la photo ${memory.title} ${memory.location}`}
                  >
                    <img
                      src={memory.image}
                      alt={`${memory.title} ${memory.location}`.trim()}
                      className="memory-image"
                    />

                    <span className="memory-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="memory-content">
                    <h3>{memory.title}</h3>

                    {memory.location && (
                      <p>
                        <i className="fa-solid fa-location-dot"></i>

                        {memory.location}
                      </p>
                    )}
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      {currentIndex !== null && (
        <GalleryLightbox
          images={memories}
          currentIndex={currentIndex}
          onClose={closeGallery}
          onPrevious={showPrevious}
          onNext={showNext}
        />
      )}
    </>
  );
};

export default GallerySection;
