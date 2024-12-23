import React from "react";

const InfoBlock2 = ({
  number,
  title,
  descr
}) => {
  return (
    <div className="col-lg-4 mb-20">
      <div className="box-border-rounded">
        <div className="card-casestudy maxOpen-card-casestudy">
          <div className="card-title">
              <h6>
                <span className="number">{number}</span>
                {title}
              </h6>
          </div>
          <div className="card-desc">
              <p>
                {descr}
              </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoBlock2;
