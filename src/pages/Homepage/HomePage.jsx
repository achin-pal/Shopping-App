import React from "react";
import Main_carousel from "../../customer/components/home-carousel/Main_carousel";
import HomeSectionCaurosal from "../../customer/components/HomeSectionCarousal/HomeSectionCaurosal";
import { mens_kurta } from "../../Data/mens_kurta";

const HomePage = () => {
  return (
    <div>
      <Main_carousel></Main_carousel>

      <div className="space-y-10 py-20 flex-col justify-center px-5 lg:px-10">
        <HomeSectionCaurosal
          data={mens_kurta}
          sectionName={"Men's Kurta"}
        ></HomeSectionCaurosal>
        <HomeSectionCaurosal
          data={mens_kurta}
          sectionName={"Men's Shoes"}
        ></HomeSectionCaurosal>
        <HomeSectionCaurosal
          data={mens_kurta}
          sectionName={"Men's Shirt"}
        ></HomeSectionCaurosal>
        <HomeSectionCaurosal
          data={mens_kurta}
          sectionName={"Women's Sarree"}
        ></HomeSectionCaurosal>
      </div>
      
    </div>
  );
};

export default HomePage;
