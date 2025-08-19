import "./DescriptionBlock.scss";

const DescriptionBlock = () => {
  return (
    <div className="description">
      <div className="description__inner">
        <div className="description__buttons">
          <button className="description__button">
            <span>Description</span>
          </button>
          <button className="description__button">
            <span>Reviews</span>
            <span>(122)</span>
          </button>
        </div>
        <div className="description__texts">
          <p className="description__text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Perspiciatis accusantium dolor expedita autem exercitationem alias
            illo repudiandae ex nam hic accusamus minus quas, porro qui nisi!
            Necessitatibus sapiente dolores hic itaque deleniti laboriosam
            accusamus possimus officiis, facere obcaecati ut sit omnis
            cupiditate adipisci error atque maxime eveniet excepturi officia
            eum!
          </p>
          <p className="description__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla earum
            consectetur perferendis ut, praesentium ullam minus soluta! Modi,
            ipsam non.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DescriptionBlock;
