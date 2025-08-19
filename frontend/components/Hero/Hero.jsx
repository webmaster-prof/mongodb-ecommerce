import Image from "next/image";
import "./Hero.scss";
import hand_icon from "./../../assets/hand_icon.png";
import arrow_icon from "./../../assets/arrow.png";
import hero_image from "./../../assets/hero_image.png";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__inner">
          <div className="hero__content">
            <h3 className="hero__content-sub">new arrivals only</h3>
            <div className="hero__title-block">
              <h1 className="hero__content-title">new</h1>
              <Image
                className="hero__content-hand"
                src={hand_icon}
                alt="hend-image"
              />
            </div>
            <h1 className="hero__content-title">collections for everyone</h1>

            <button className="hero__content-button">
              <span>latest collection</span>
              <Image src={arrow_icon} alt="icon" />
            </button>
          </div>
          <div className="hero__images">
            <Image src={hero_image} alt="hero-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
