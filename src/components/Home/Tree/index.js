import { Link } from "react-router-dom";

import React, { Component } from "react";
import BeforeAfterSlider from "react-before-after-slider";
import ReactCompareImage from "react-compare-image";
import { FaArrowsAltH } from "react-icons/fa";

class index extends Component {
  render() {
    const before =
      "https://upload.wikimedia.org/wikipedia/commons/f/f5/Poster-sized_portrait_of_Barack_Obama.jpg";
    const after =
      "https://hindalkindi1992.files.wordpress.com/2013/11/portrait_eyes_23.jpg";

    return (
      <>
        <section class=" bg-white dark:bg-gray-900 ">
          <div class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
            <div class="mt-10 md:mt-0 m-5">
              <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                قبل و بعد ازccccc عمل زیبایی{" "}
              </h2>
              <h2 class=" mb-4 text-1xl tracking-tight font-bold text-gray-900 dark:text-white">
                <p>
                  آیا می خواهید <strong>به طور طبیعی پیر شوید</strong>؟ ما در
                  این مورد به شما کمک خواهیم کرد. با{" "}
                  <strong>درمان های زیبایی کم تهاجمی</strong> ما، این فرصت را
                  دارید که <strong>چروک ها را کاهش دهید</strong> و با ظاهری تازه
                  احساس خوبی داشته باشید.
                </p>
              </h2>

              <Link to="/register" className="">
                <button
                  type="button"
                  class="text-purple-700 hover:text-white border flex items-center justify-center border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-lg rounded-xl text-xl px-3 py-1.5 text-center mr-2  dark:border-purple-500 dark:text-purple-500 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-800"
                >
                  نمونه های بیشتر{" "}
                </button>
              </Link>
            </div>
            <div className=" w-full rounded-xl">
              <div className="rounded-xl">
                <ReactCompareImage
                  handleSize={50}
                  handle={<FaArrowsAltH />}
                  sliderLineColor="#700E7F"
                  leftImage={before}
                  rightImage={after}
                />
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default index;
