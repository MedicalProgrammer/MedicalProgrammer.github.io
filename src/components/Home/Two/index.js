import React from "react";
import "../index.css";

const index = () => {
  return (
    <>
      <div class="bg-purple-100  dark:bg-gray-900">
        <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 class="sr-only">Products</h2>

          <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 xl:gap-x-8">
            <a href="/services" class="group">
              <div class="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg h-full w-full object-cover object-center group-hover:opacity-75 bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <div class="bg-[url(https://hystudio.de/wp-content/uploads/start-fett_ret.jpg)] h-[600px] w-[600px] object-center relative">
                  <div class="absolute bottom-0 px-4 py-3 bg-gray-500/50 w-full">
                    <h1 class="text-white font-semibold text-4xl">
                      {" "}
                      فیلر بینی{" "}
                    </h1>
                    <p class="text-gray-200">دیدن نمونه کارها و قیمت </p>
                  </div>
                </div>{" "}
              </div>
            </a>

            <a href="/services" class="group">
              <div class="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg h-full w-full   group-hover:opacity-75 bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <div class="bg-[url(https://hystudio.de/wp-content/uploads/start-eigenblut.jpg)] h-[600px] w-[600px] object-center relative">
                  <div class="absolute bottom-0 px-4 py-3 bg-gray-500/50 w-full">
                    <h1 class="text-white font-semibold text-4xl">
                      {" "}
                      فیلر زیر چشم{" "}
                    </h1>
                    <p class="text-gray-200"> دیدن نمونه کارها و قیمت</p>
                  </div>
                </div>{" "}
              </div>
            </a>

            <a href="/services" class="group">
              <div class="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg h-full w-full object-cover object-center group-hover:opacity-75 bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <div class="bg-[url(https://hystudio.de/wp-content/uploads/start-botulinum.jpeg)] h-[600px] w-[600px] relative">
                  <div class="absolute bottom-0 px-4 py-3 bg-gray-500/50 w-full">
                    <h1 class="text-white font-semibold text-4xl">
                      {" "}
                      مزوژل جوانسازی{" "}
                    </h1>
                    <p class="text-gray-200">دیدن نمونه کارها و قیمت </p>
                  </div>
                </div>{" "}
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;



