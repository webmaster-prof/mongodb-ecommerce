import "./NewsLetter.scss";

const NewsLetter = () => {
  return (
    <section className="newsletter">
      <div className="container">
        <div className="newsletter__inner">
          <h2 className="newsletter__title">
            get exclusive offers on your email
          </h2>
          <h4 className="newsletter__title-sub">
            Subscribe to our newletter and stay updated
          </h4>
          <form className="newsletter__form" action="">
            <input
              className="newsletter__form-input"
              type="email"
              placeholder="Your Email ID"
            />
            <button className="newsletter__form-button">Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
