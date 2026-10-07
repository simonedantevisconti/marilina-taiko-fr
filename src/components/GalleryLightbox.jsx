import { useEffect } from "react";
import "../styles/gallery-lightbox.css";

const GalleryLightbox = ({
  images,
  currentIndex,
  onClose,
  onPrevious,
  onNext,
}) => {
  const currentImage = images[currentIndex];

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "ArrowLeft") {
        onPrevious();
      }

      if (event.key === "ArrowRight") {
        onNext();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, onPrevious, onNext]);

  if (!currentImage) return null;

  return (
    <div
      className="gallery-lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="Galerie photos"
      onClick={onClose}
    >
      <button
        type="button"
        className="gallery-lightbox-close"
        onClick={onClose}
        aria-label="Fermer"
      >
        <i className="fa-solid fa-xmark"></i>
      </button>

      <button
        type="button"
        className="gallery-lightbox-nav gallery-lightbox-prev"
        onClick={(event) => {
          event.stopPropagation();
          onPrevious();
        }}
        aria-label="Photo précédente"
      >
        <i className="fa-solid fa-chevron-left"></i>
      </button>

      <div
        className="gallery-lightbox-content"
        onClick={(event) => event.stopPropagation()}
      >
        <img
          src={currentImage.image}
          alt={`${currentImage.title} ${currentImage.location}`.trim()}
          className="gallery-lightbox-image"
        />

        <div className="gallery-lightbox-caption">
          <h3>{currentImage.title}</h3>

          {currentImage.location && (
            <p>
              <i className="fa-solid fa-location-dot"></i>
              {currentImage.location}
            </p>
          )}

          <span>
            {currentIndex + 1} / {images.length}
          </span>
        </div>
      </div>

      <button
        type="button"
        className="gallery-lightbox-nav gallery-lightbox-next"
        onClick={(event) => {
          event.stopPropagation();
          onNext();
        }}
        aria-label="Photo suivante"
      >
        <i className="fa-solid fa-chevron-right"></i>
      </button>
    </div>
  );
};

export default GalleryLightbox;
