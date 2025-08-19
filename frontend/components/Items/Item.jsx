import Image from "next/image";
import "./Item.scss";
import Link from "next/link";

const Item = (props) => {
  return (
    <div className="item">
      <Link href={`/product/${props.id}`}>
        <Image className="item__image" src={props.image} alt="image" />
        <div className="item__info">
          <h3 className="item__name">{props.name}</h3>
          <div className="item__prices">
            <div className="item__price-new">${props.new_price}</div>
            <div className="item__price-old">${props.old_price}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Item;
