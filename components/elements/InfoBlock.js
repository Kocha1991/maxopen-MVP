import React from "react";
import Link from 'next/link';

const InfoBlock = ({
  icon,
  title,
  descr,
  bgWight
}) => {
  const renderIcon = () => {
    if (typeof icon === 'string') {
      if (icon.trim().startsWith('<svg')) {
        // якщо це SVG як HTML-рядок
        return <span dangerouslySetInnerHTML={{ __html: icon }} />;
      } else {
        // якщо це посилання на зображення
        return <img src={icon} alt={title} />;
      }
    }

    // якщо це вже JSX (напр. <SomeIcon />)
    return icon || null;
  };

  return (
    <div className="col-lg-4 col-md-6 mb-20">
      <div className={`card-preparing-2 maxOpen-card-preparing ${bgWight ? 'card-preparing--wide' : ''}`}>
        <Link className="card-image" href="#">
          {renderIcon()}
        </Link>
        <div className="card-info">
          <Link href="#">
            <h5 className="text-22-bold">{title}</h5>
          </Link>
          <p className="text-md">{descr}</p>
        </div>
      </div>
    </div>
  );
};

export default InfoBlock;
