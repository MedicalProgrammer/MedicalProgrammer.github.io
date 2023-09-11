import { Link } from "react-router-dom";
import React, { Component } from "react";
import BeforeAfterSlider from "react-before-after-slider";
import ReactCompareImage from "react-compare-image";
import { FaArrowsAltH } from "react-icons/fa";
import Slider from "react-slick"; // Import the Slider component
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
class index extends Component {
  render() {
    const before =
      "https://upload.wikimedia.org/wikipedia/commons/f/f5/Poster-sized_portrait_of_Barack_Obama.jpg";
    const after =
      "https://hindalkindi1992.files.wordpress.com/2013/11/portrait_eyes_23.jpg";

    const settings = {
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    };

    return (
      <>
        <section class="bg-white dark:bg-gray-900">
          <div class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
            {/* ... (your existing code) ... */}
            <div className="w-full rounded-xl">
              <Slider {...settings}>
                <div className="rounded-xl">
                  <ReactCompareImage
                    handleSize={50}
                    handle={<FaArrowsAltH />}
                    sliderLineColor="#700E7F"
                    leftImage={before}
                    rightImage={after}
                  />
                </div>
                <div className="rounded-xl">
                  <ReactCompareImage
                    handleSize={50}
                    handle={<FaArrowsAltH />}
                    sliderLineColor="#700E7F"
                    leftImage={before}
                    rightImage={after}
                  />
                </div>
                {/* Add more slides as needed */}
              </Slider>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default index;
