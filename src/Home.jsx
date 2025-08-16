import Nav from "./Nav";
import Footer from "./Footer";
import "./Home.css";

const galleryItems = [
  {
    title: "Luxury Living Room",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
  },
  {
    title: "Modern Bedroom",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  },
  {
    title: "Elegant Bathroom",
    image: "https://images.unsplash.com/photo-1615874959474-d609969a20ed",
  },
  {
    title: "Stylish Kitchen",
    image: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353",
  },
];

function Home() {
  return (
    <>
      <Nav />

      {/* Slider Section */}
      <div
        id="carouselExampleInterval"
        className="carousel slide home-carousel"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div
            className="carousel-item carousel-slide active"
            data-bs-interval="10000"
          >
            <img
              src="https://www.decorilla.com/online-decorating/wp-content/uploads/2024/05/Luxurious-dark-brown-sofa-living-room-by-Decorilla-scaled.jpg"
              className="d-block w-100 carousel-img"
              alt="Slide 1"
            />
            <div className="carousel-caption overlay-center">
              <h1 className="carousel-title">Welcome to Home Styler</h1>
              <p className="carousel-text">
                " Transform your living space with style and elegance."
              </p>
            </div>
          </div>

          <div
            className="carousel-item carousel-slide"
            data-bs-interval="2000"
          >
            <img
              src="https://cdn.mos.cms.futurecdn.net/Gr5VG89rawWPtfBqbfBaSe.jpg"
              className="d-block w-100 carousel-img"
              alt="Slide 2"
            />
            <div className="carousel-caption overlay-center">
              <h1 className="carousel-title">Experience Modern Living</h1>
              <p className="carousel-text">
                " Sleek designs and smart interiors tailored for you."
              </p>
            </div>
          </div>

          <div className="carousel-item carousel-slide">
            <img
              src="https://s3.us-west-2.amazonaws.com/modsy/rimg/tr_5c04a48b-57df-414a-94ba-f52527333c99_787199_3_elsie_userview_2.jpg"
              className="d-block w-100 carousel-img"
              alt="Slide 3"
            />
            <div className="carousel-caption overlay-center">
              <h1 className="carousel-title">Design Your Dream Space</h1>
              <p className="carousel-text">
                " Custom interiors that match your lifestyle."
              </p>
            </div>
          </div>
        </div>

        {/* Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Design Gallery Section */}
      <section className="design-gallery py-5">
        <div className="container">
          <h2 className="text-center mb-5 gallery-title">Design Gallery</h2>
          <div className="row g-4">
            {galleryItems.map((item, index) => (
              <div className="col-lg-3 col-md-6 col-sm-12" key={index}>
                <div className="card gallery-card h-100">
                  <img
                    src={item.image}
                    className="card-img-top"
                    alt={item.title}
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">{item.title}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

     {/* Updated Features Section */}
<section className="design-gallery py-5">
  <div className="container">
    <h2 className="text-center mb-5 gallery-title" style={{ color: "white" }}>
      Our Features
    </h2>
    <div className="row g-4">
      <div className="col-lg-4 col-md-6 col-sm-12">
        <div className="feature-box text-center p-4 h-100">
          <h4>Custom Designs</h4>
          <p>
            We create unique interior designs that reflect your personality and lifestyle.
            From modern minimalism to luxurious elegance, every detail is tailored just for you.
          </p>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-12">
        <div className="feature-box text-center p-4 h-100">
          <h4>High Quality Materials</h4>
          <p>
            Our designs use premium materials sourced from trusted suppliers to ensure durability,
            beauty, and timeless appeal in every space we transform.
          </p>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-12">
        <div className="feature-box text-center p-4 h-100">
          <h4>Expert Team</h4>
          <p>
            Our skilled team of designers and craftsmen bring years of expertise,
            turning your vision into reality with precision and creativity.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* About Us Section */}
<section
  className="about-us-section py-5"
  style={{
    background: "linear-gradient(180deg, #000000, #2c2c2c)",
    color: "white",
  }}
>
  <div className="container">
    <div className="row align-items-center">
      {/* Image Side */}
      <div
        className="col-lg-6 col-md-12 mb-4 mb-lg-0 about-image"
        style={{
          opacity: 0,
          transform: "translateX(-50px)",
          animation:
            "fadeSlideLeft 1s ease forwards, floatAnim 4s ease-in-out infinite",
          animationDelay: "0.3s, 1.3s",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1505691938895-1758d7feb511"
          alt="About Us"
          className="img-fluid rounded shadow"
        />
      </div>

      {/* Text Side */}
      <div
        className="col-lg-6 col-md-12 about-text"
        style={{
          opacity: 0,
          transform: "translateX(50px)",
          animation:
            "fadeSlideRight 1s ease forwards, floatAnim 4s ease-in-out infinite",
          animationDelay: "0.6s, 1.6s",
        }}
      >
        <h2 style={{ color: "orange" }}>About Us</h2>
        <p>
          At <strong>HomeStyler</strong>, we believe your home should tell your
          story. With a passion for creativity and a commitment to excellence,
          we design and transform spaces that inspire comfort, style, and
          functionality.
        </p>
        <p>
          Whether it’s a cozy bedroom, a modern kitchen, or a luxurious living
          room, our team of experts is here to make your dream space a reality.
          We focus on every detail, from concept to completion.
        </p>
        <button className="btn btn-outline-warning mt-3">Learn More</button>
      </div>
    </div>
  </div>

  {/* Animation Styles */}
  <style>
    {`
      @keyframes fadeSlideLeft {
        0% { opacity: 0; transform: translateX(-50px); }
        100% { opacity: 1; transform: translateX(0); }
      }

      @keyframes fadeSlideRight {
        0% { opacity: 0; transform: translateX(50px); }
        100% { opacity: 1; transform: translateX(0); }
      }

      @keyframes floatAnim {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
      }
    `}
  </style>
</section>
{/* Our Services Section */}
<section
  className="services-section py-5"
  style={{
    background: "linear-gradient(180deg, #000000, #2c2c2c)",
    color: "white",
  }}
>
  <div className="container">
    <h2
      className="text-center mb-5"
      style={{
        color: "white",
        opacity: 0,
        animation: "fadeSlideDown 1s ease forwards, floatAnim 4s ease-in-out infinite",
        animationDelay: "0.3s, 1.3s",
      }}
    >
      Our Services
    </h2>

    <div className="row g-4">
      {[
        {
          title: "Interior Design",
          desc: "We craft personalized interiors that reflect your style and personality.",
          img: "../public/images/herocei.jpg",
        },
        {
          title: "Space Planning",
          desc: "Maximizing functionality and flow for every space in your home.",
          img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d",
        },
        {
          title: "Custom Furniture",
          desc: "Unique furniture pieces designed to fit your space perfectly.",
          img: "https://i.pinimg.com/736x/8f/c4/38/8fc438f40f95818a7461687316e79bbe.jpg",
        },
      ].map((service, index) => (
        <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
          <div
            className="card h-100 text-center shadow service-card"
            style={{
              backgroundColor: "#1a1a1a",
              border: "2px solid transparent",
              opacity: 0,
              transform: "translateY(30px)",
              animation: `fadeSlideUp 1s ease forwards, floatAnim 4s ease-in-out infinite`,
              animationDelay: `${0.5 + index * 0.2}s, ${1.5 + index * 0.2}s`,
            }}
          >
            <img
              src={service.img}
              alt={service.title}
              className="card-img-top"
              style={{ height: "250px", objectFit: "cover" }}
            />
            <div className="card-body">
              <h5 className="card-title" style={{ color: "orange" }}>
                {service.title}
              </h5>
              <p className="card-text" style={{ color: "#cccccc" }}>
                {service.desc}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>

  <style>
    {`
      @keyframes fadeSlideDown {
        0% { opacity: 0; transform: translateY(-30px); }
        100% { opacity: 1; transform: translateY(0); }
      }

      @keyframes fadeSlideUp {
        0% { opacity: 0; transform: translateY(30px); }
        100% { opacity: 1; transform: translateY(0); }
      }

      @keyframes floatAnim {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
      }

      .service-card:hover {
        border-color: orange;
        transition: border-color 0.3s ease;
      }
    `}
  </style>
</section>
{/* Full Width Banner Section */}
<section
  className="banner-section position-relative"
  style={{
    width: "100%",
    height: "60vh",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1505691938895-1758d7feb511')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    textAlign: "center",
    padding: "0 20px",
  }}
>
  {/* Dark Overlay */}
  <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "rgba(0, 0, 0, 0.5)",
      zIndex: 1,
    }}
  ></div>

  {/* Banner Content */}
  <div style={{ position: "relative", zIndex: 2, maxWidth: "900px" }}>
    <h1
      style={{
        color: "white",
        fontSize: "3rem",
        fontWeight: "bold",
        lineHeight: "1.4",
        marginBottom: "15px",
        opacity: 0,
        animation: "fadeInZoom 1.5s ease forwards, floatAnim 4s ease-in-out infinite",
      }}
    >
      Transform Your Home into a <span style={{ color: "orange" }}>Masterpiece</span>
    </h1>
    <p
      style={{
        color: "rgba(255,255,255,0.85)",
        fontSize: "1.3rem",
        fontStyle: "italic",
        opacity: 0,
        animation: "fadeInUp 2s ease forwards",
        animationDelay: "0.8s",
      }}
    >
      "Your home should tell the story of who you are, and be a collection of what you love."
    </p>
  </div>

  <style>
    {`
      @keyframes fadeInZoom {
        0% { opacity: 0; transform: scale(0.9); }
        100% { opacity: 1; transform: scale(1); }
      }

      @keyframes fadeInUp {
        0% { opacity: 0; transform: translateY(20px); }
        100% { opacity: 1; transform: translateY(0); }
      }

      @keyframes floatAnim {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-8px); }
      }

      @media (max-width: 768px) {
        .banner-section h1 {
          font-size: 2rem !important;
        }
        .banner-section p {
          font-size: 1rem !important;
        }
      }
    `}
  </style>
</section>
{/* Home Designer Section */}
<section
  style={{
    padding: "80px 20px",
    background: "linear-gradient(180deg, #1a1a1a, #2c2c2c)",
    color: "white",
  }}
>
  <style>
    {`
      .designer-card {
        background: #222;
        border: 1px solid transparent;
        transition: all 0.4s ease-in-out;
        overflow: hidden;
      }
      .designer-card:hover {
        border: 2px solid orange;
        box-shadow: 0 0 20px rgba(255, 165, 0, 0.7);
        transform: translateY(-5px);
      }
      .designer-card img {
        transition: transform 0.4s ease-in-out;
      }
      .designer-card:hover img {
        transform: scale(1.08);
      }
      @keyframes floatUp {
        0% { transform: translateY(20px); opacity: 0; }
        100% { transform: translateY(0); opacity: 1; }
      }
    `}
  </style>

  <div className="container">
    <h2
      style={{
        textAlign: "center",
        fontSize: "2.5rem",
        fontWeight: "bold",
        color: "white",
        marginBottom: "50px",
        animation: "floatUp 1.5s ease-in-out forwards",
      }}
    >
      Our <span style={{ color: "orange" }}>Design Experts</span>
    </h2>

    <div className="row g-4">
      {/* Card 1 */}
      <div className="col-lg-4 col-md-6">
        <div className="card h-100 text-center designer-card">
          <img
            src="https://thumbs.dreamstime.com/b/portrait-smiling-attractive-latina-female-manager-working-using-laptop-young-s-corporate-staff-member-sitting-desk-online-392286024.jpg"
            className="card-img-top"
            alt="Designer 1"
            style={{ height: "250px", objectFit: "cover" }}
          />
          <div className="card-body">
            <h5 style={{ color: "orange" }}>Sarah Mitchell</h5>
            <p style={{ color: "rgba(255,255,255,0.85)" }}>
              Expert in modern minimalistic designs that bring elegance to your
              living space.
            </p>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="col-lg-4 col-md-6">
        <div className="card h-100 text-center designer-card">
          <img
            src="https://cdn.prod.website-files.com/6179a66d5f9cc70024c61878/6179a66e5f9cc70024c6cc66_what-is-a-business-portfolio-5-2-2.jpg"
            className="card-img-top"
            alt="Designer 2"
            style={{ height: "250px", objectFit: "cover" }}
          />
          <div className="card-body">
            <h5 style={{ color: "orange" }}>James Carter</h5>
            <p style={{ color: "rgba(255,255,255,0.85)" }}>
              Specializes in luxury interiors with unique custom furniture
              pieces.
            </p>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="col-lg-4 col-md-6">
        <div className="card h-100 text-center designer-card">
          <img
            src="https://static6.depositphotos.com/1003434/607/i/950/depositphotos_6071465-stock-photo-student.jpg"
            className="card-img-top"
            alt="Designer 3"
            style={{ height: "250px", objectFit: "cover" }}
          />
          <div className="card-body">
            <h5 style={{ color: "orange" }}>Olivia Brown</h5>
            <p style={{ color: "rgba(255,255,255,0.85)" }}>
              Known for vibrant color combinations and creative space planning.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



<section
  style={{
    padding: "100px 20px 140px", // extra bottom padding for space before footer
    background: "linear-gradient(180deg, #2c2c2c, #1a1a1a)", // gradient continues in space
    color: "white",
    position: "relative",
    textAlign: "center",
  }}
>
  <style>
    {`
      .cta-section {
        position: relative;
        z-index: 2;
        animation: fadeUp 1.5s ease-in-out forwards;
      }
      .cta-btn {
        background-color: orange;
        color: white;
        border: none;
        padding: 14px 35px;
        font-size: 1.2rem;
        border-radius: 50px;
        transition: all 0.3s ease-in-out;
        box-shadow: 0 0 15px rgba(255,165,0,0.5);
      }
      .cta-btn:hover {
        background-color: darkorange;
        box-shadow: 0 0 25px rgba(255,165,0,0.9);
        transform: scale(1.05);
      }
      @keyframes fadeUp {
        0% { transform: translateY(30px); opacity: 0; }
        100% { transform: translateY(0); opacity: 1; }
      }
    `}
  </style>

  {/* Background Overlay Image */}
  <div
    style={{
      backgroundImage:
        "url('https://images.unsplash.com/photo-1600585152220-90363fe7e115')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      opacity: 0.15,
      zIndex: 1,
    }}
  ></div>

  <div className="cta-section">
    <h2
      style={{
        fontSize: "2.8rem",
        fontWeight: "bold",
        marginBottom: "20px",
        color: "white",
      }}
    >
      Let’s <span style={{ color: "orange" }}>Create</span> Your Dream Space
    </h2>
    <p
      style={{
        fontSize: "1.2rem",
        maxWidth: "700px",
        margin: "0 auto 40px",
        color: "rgba(255,255,255,0.85)",
      }}
    >
      From concept to completion, our team is ready to transform your home into
      a masterpiece. Let’s make your vision a reality.
    </p>
    <button className="cta-btn">Get Started</button>
  </div>
</section>

      <Footer />
    </>
  );
}

export default Home;
