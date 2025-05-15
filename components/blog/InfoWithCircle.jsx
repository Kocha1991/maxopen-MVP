import React from "react";

const InfoWithCircle = ({items}) => {
  return (
    <div className='our-culture__grid'>
      <div className='our-culture__circle'>
        <h3 className='maxOpen-services__title'>
          {items["circle-title"]}
        </h3>
        <h4 className='maxOpen-services__descr'>
          {items["circle-descr"]}
        </h4>
      </div>
      <div className='our-culture__bloc bloc-1'>
        <h3 className='maxOpen__subtitle'>
          {items["left-top-title"]}
        </h3>
        <h4 className='maxOpen-services__descr'>
          {items["left-top-descr"]}
        </h4>
      </div>
      <div className='our-culture__bloc bloc-2'>
        <h3 className='maxOpen__subtitle'>
          {items["right-top-title"]}
        </h3>
        <h4 className='maxOpen-services__descr'>
          {items["right-top-descr"]}
        </h4>
      </div>
      <div className='our-culture__bloc bloc-3'>
        <h3 className='maxOpen__subtitle'>
          {items["left-bot-title"]}
        </h3>
        <h4 className='maxOpen-services__descr'>
          {items["left-bot-descr"]}
        </h4>
      </div>
      <div className='our-culture__bloc bloc-4'>
        <h3 className='maxOpen__subtitle'>
          {items["right-bot-title"]}
        </h3>
        <h4 className='maxOpen-services__descr'>
          {items["right-bot-descr"]}
        </h4>
      </div>
    </div>
  )
};

export default InfoWithCircle;
