import React, { useState } from "react";

const DevelopmentDelivers = () => {
  const [activeCategory, setActiveCategory] = useState("OneTap");

  const categories = [
    { id: "OneTap", title: "One tap", img: "/assets/imgs/template/OneTap.jpg" },
    { id: "PriceRadar", title: "PriceRadar", img: "/assets/imgs/template/PriceRadar.jpg" },
    { id: "UGSUp", title: "UGS-Up", img: "/assets/imgs/template/UGS App.jpg" },
  ];

  const content = {
    OneTap: {
      subtitle: "Empowering Growth and Success",
      description:
        "We help businesses unlock their potential with tailored, high-quality solutions. By addressing challenges and providing effective strategies, we enable companies to thrive, grow sustainably, and build a strong foundation for long-term success.",
      results: [
        "85% of businesses see significant growth within the first year",
        "70% report a stronger competitive edge after implementing our solutions",
      ],
    },
    PriceRadar: {
      subtitle: "Streamlining Pricing Strategies",
      description:
        "PriceRadar provides innovative tools for businesses to optimize pricing strategies and stay competitive in their markets.",
      results: [
        "Increased pricing efficiency by 60%",
        "Improved market share through competitive analysis",
      ],
    },
    UGSUp: {
      subtitle: "Driving Success with Advanced Solutions",
      description:
        "UGS-Up delivers cutting-edge technology to enhance productivity and streamline operations for businesses worldwide.",
      results: [
        "50% improvement in operational efficiency",
        "Enhanced collaboration through advanced tools",
      ],
    },
  };

  return (
    <div className="development-delivers__wrapper">
      <div className="development-delivers__btns">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`blog-change-option__categories-btn ${
              activeCategory === category.id ? "blog-change-option-active" : ""
            }`}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.title}
          </button>
        ))}
      </div>

      <div className="development-delivers__block">
        <div className="development-delivers__img">
          <img
            src={categories.find((cat) => cat.id === activeCategory)?.img}
            alt={activeCategory}
          />
        </div>
        <h2 className="development-delivers__title">
          {categories.find((cat) => cat.id === activeCategory)?.title}
        </h2>
        <div className="blog-change-option__text">
          <h2 className="maxOpen__subtitle">
            {content[activeCategory].subtitle}
          </h2>
          <h3 className="maxOpen-services__descr">
            {content[activeCategory].description}
          </h3>
          <h2 className="text-18-bold">Key Results:</h2>
          <ul>
            {content[activeCategory].results.map((result, index) => (
              <li key={index} className="maxOpen-services__descr">
                {result}
              </li>
            ))}
          </ul>
        </div>
        <button className="btn btn-brand-4-medium hover-up">Go to website</button>
      </div>
    </div>
  );
};

export default DevelopmentDelivers;
