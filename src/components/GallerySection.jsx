const memories = [
  {
    title: "2023",
    location: "Hyères",
    image: "",
  },
  {
    title: "2017",
    location: "Clapiers",
    image: "",
  },
  {
    title: "2018",
    location: "",
    image: "",
  },
  {
    title: "2015",
    location: "",
    image: "",
  },
  {
    title: "2019",
    location: "Lunel",
    image: "",
  },
  {
    title: "2018",
    location: "Juvignac",
    image: "",
  },
  {
    title: "2016",
    location: "",
    image: "",
  },
  {
    title: "Partition",
    location: "",
    image: "",
  },
  {
    title: "2021",
    location: "Marseille",
    image: "",
  },
  {
    title: "2022",
    location: "Hambourg",
    image: "",
  },
  {
    title: "2008",
    location: "Glasgow",
    image: "",
  },
  {
    title: "Summer of Love",
    location: "",
    image: "",
  },
];

const GallerySection = () => {
  return (
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
                <div className="memory-image-wrapper">
                  {memory.image ? (
                    <img
                      src={memory.image}
                      alt={`${memory.title} ${memory.location}`.trim()}
                      className="memory-image"
                    />
                  ) : (
                    <div className="memory-placeholder">
                      <i className="fa-regular fa-image"></i>
                      <span>Photo à venir</span>
                    </div>
                  )}

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
  );
};

export default GallerySection;
