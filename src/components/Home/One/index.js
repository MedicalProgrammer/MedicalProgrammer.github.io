import React from "react";
import "../index.css";
import { Link } from "react-router-dom";

const One = () => {
  return (
    <>
      <section class=" bg-white dark:bg-gray-900">
        <div class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <img
            class="w-full dark:hidden rounded-xl"
            src={require("../../../data/hmimg.jpeg")}
            alt="dashboard image"
          />
          <img
            class="w-full hidden rounded-xl dark:block"
            src={require("../../../data/hmimg.jpeg")}
            alt="dashboard image"
          />
          <div class="mt-4 md:mt-0">
            <h2 class=" mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              دکتر حنانه عظیمی
            </h2>
            <h2 class="mb-4 text-2xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              عضو انجمن علمی جراحان ایران
            </h2>
            <h3 class="mb-4 text-2xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              متخصص در امور زیبایی پوست مو
            </h3>

            <ul class="list-disc m-3 mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400 justified-text">
              <li>تزریق فیلر(خط خنده، حجیم سازی لب، فیلر بینی)</li>
              <li>تزریق بوتاکس با بهترین مواد</li>
              <li>میکرونیدلینگ(جوش، استریا، اسکار، آبرسانی و …)</li>
              <li>کربوکسی تراپی( رفع جوش، جوشگاه، لک و …)</li>
              <li>مزوتراپی(تقویت مو، لیفت و …)</li>
            </ul>
            <Link to="/services" className="">
              <button
                type="button"
                class="text-purple-700 hover:text-white border flex items-center justify-center border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-lg rounded-xl text-xl px-3 py-1.5 text-center mr-2  dark:border-purple-500 dark:text-purple-500 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-800"
              >
                مشاوره رایگان
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default One;
