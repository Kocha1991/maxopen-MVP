import React from "react";
import Link from 'next/link';

const InfoBlock = ({
  icon,
  title,
  descr,
  bgWight
}) => {
  return (
    <div className="col-lg-4 col-md-6 mb-20">
      <div className={`card-preparing-2 maxOpen-card-preparing ${bgWight ? 'card-preparing--wide' : ''}`}>
        <Link className="card-image" href="#">
          {icon}
        </Link>
        <div className="card-info">
          <Link href="#">
            <h5 className="text-22-bold">{title}</h5>
          </Link>
            <p className="text-md">
              {descr}
            </p>
        </div>
      </div>
    </div>
  );
};

export default InfoBlock;
