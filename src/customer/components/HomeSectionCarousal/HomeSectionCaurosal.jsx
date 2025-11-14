import React, { useState, useRef } from "react";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import AliceCarousel from "react-alice-carousel";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import Button from "@mui/material/Button";


const HomeSectionCaurosal = ({data,sectionName}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5 }
  };

  const items = data.slice(0, 20).map((item) => (
    <HomeSectionCard product={item} />
  ));

  // compute max index
  // const maxIndex = items.length - responsive[1024].items;

  const slidePrev = () => {
    carouselRef.current.slidePrev();
    // console.log(activeIndex)
  };

  const slideNext = () => {
    carouselRef.current.slideNext();
    // console.log(activeIndex)
  };

  const syncActiveIndex = (event) => {
    // console.log('sync',event.slide)
    setActiveIndex(event.slide);
  };

  return (
    <div className="border">
    <h3 className="text-2xl font-extrabold text-gray-800 py-5">{sectionName}</h3>
      <div className="relative p-5">
        <AliceCarousel
          ref={carouselRef}
          items={items}
          activeIndex={activeIndex}
          onSlideChange={syncActiveIndex}
          responsive={responsive}
          disableButtonsControls
          disableDotsControls
        />

        {/* NEXT BUTTON */}
       
          <Button
            onClick={slideNext}
            sx={{
              position: "absolute",
              top: "8rem",
              right: "0rem",
              transform: "translateX(50%) rotate(90deg)",
              bgcolor: "white"
            }}
          >
            <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)" }} />
          </Button>
        

        {/* PREVIOUS BUTTON */}
        { (
          <Button
            onClick={slidePrev}
            sx={{
              position: "absolute",
              top: "8rem",
              left: "0rem",
              transform: "translateX(-50%) rotate(-90deg)",
              bgcolor: "white"
            }}
          >
            <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)", color: "black" }} />
          </Button>
        )}
      </div>
    </div>
  );
};

export default HomeSectionCaurosal;
