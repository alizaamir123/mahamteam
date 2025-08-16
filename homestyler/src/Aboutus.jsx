import Nav from "./Nav";
import Footer from "./Footer";
import "./Aboutus.css";

function Aboutus() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <section className="about hero-section text-center text-white d-flex flex-column justify-content-center">
        <div className="about container animate-heading">
          <h1 className="about fw-bold display-4">About Us</h1>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="our-story-section d-flex align-items-center justify-content-center">
        <div className="container">
          <div className="row align-items-center">
            
            {/* Text Side */}
            <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
              <div className="story-text">
                <h2>Our Story</h2>
                <p>
                  At <strong>Home Styler</strong>, we believe your space should tell
                  <em> your story</em>. It’s more than just walls and furniture —
                  it’s the backdrop to your life’s most meaningful moments.
                </p>
                <p>
                  What started as a small design studio with a big dream has grown
                  into a passionate team of creators. We blend <strong>style</strong>,
                  <strong> comfort</strong>, and <strong>function</strong> to shape
                  spaces that inspire and welcome you every day.
                </p>
                <p>
                  From cozy reading corners to open, airy living rooms, we craft
                  designs that reflect who you are — and who you want to be.
                </p>
                <p className="highlight-text">
                  Because your home isn’t just where you live.
                  <br />It’s where life happens.
                </p>
              </div>
            </div>

            {/* Image Side */}
            <div className="col-lg-6 col-md-12 text-center">
              <img
                src="https://i.pinimg.com/736x/8f/c4/38/8fc438f40f95818a7461687316e79bbe.jpg"
                alt="Our Story"
                className="img-fluid floating-image tall-image"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Mission & Values Section */}
<section className="mission-section py-5">
  <div className="container">
    <div className="row align-items-center">
      
      {/* Image Side */}
      <div className="col-lg-6 col-md-12 text-center mb-4 mb-lg-0">
        <img
          src="/images/mi.jpg"
          alt="Mission and Values"
          className="img-fluid rounded shadow mission-image"
        />
      </div>

      {/* Text Side */}
      <div className="col-lg-6 col-md-12">
        <div className="mission-text">
          <h2>Our Mission & Values</h2>
          <p>
            At <strong>Home Styler</strong>, our mission is to transform houses into homes
            that radiate warmth, style, and individuality. 
          </p>
          <ul>
            <li><strong>Creativity:</strong> Every design is a fresh story.</li>
            <li><strong>Quality:</strong> We choose the best materials & craftsmanship.</li>
            <li><strong>Customer Care:</strong> You are at the heart of everything we do.</li>
            <li><strong>Sustainability:</strong> We aim for eco-friendly solutions whenever possible.</li>
          </ul>
          <p>
            We don’t just decorate spaces — we bring them to life.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
{/* Ending Section */}
<section className="ending-section text-center">
  <div className="container">
    <h2>Join Our Journey</h2>
    <p>
      At <strong>Home Styler</strong>, we believe every home has a story to tell —
      and we’d love to help you write yours.
    </p>
    <p>
      From the first design sketch to the final touch, we are committed to making your
      dream space a reality.
    </p>
    <a href="/contactus" className="btn btn-warning btn-lg mt-3">
      Let’s Get Started
    </a>
  </div>
</section>

      <Footer />
    </>
  );
}

export default Aboutus;
