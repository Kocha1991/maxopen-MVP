import React from "react";
import Link from 'next/link';

const InfoBlock = ({
  icon,
  title,
  descr
}) => {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="card-preparing-2 maxOpen-card-preparing">
        <Link className="card-image" href="#">
          {icon}
        </Link>
        <div className="card-info">
          <Link href="#">
            <h5 className="text-22-bold">{title}</h5>
          </Link>
            <p className="text-md neutral-700">
              {descr}
            </p>
        </div>
      </div>
    </div>
  );
};

export default InfoBlock;
