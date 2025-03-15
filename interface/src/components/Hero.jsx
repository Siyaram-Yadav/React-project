const HeroSection = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>we bring the taste of nature.</h1>
        <p>
        Fresh from our farm to your table – pure, healthy, and locally produced dairy for you and your family!
        </p>

        <div className="hero-btn">
          <button>Shop Now </button>
          <button className="secondary-btn">Category</button>
        </div>

        <div className="shopping">
          <p>Also Available On</p>
          <h2>Our web Site Herry up !! for your best Health</h2>

          <div className="brand-icons">
            <img src="/images/amazon.png" alt="amazon-logo" />
            <img src="/images/flipkart.png" alt="flipkart-logo" />
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src="/images/dairy.png" alt="hero-image" />
      </div>
    </main>
  );
};

export default HeroSection;
