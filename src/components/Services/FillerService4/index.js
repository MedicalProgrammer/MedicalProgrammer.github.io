import React from 'react'

const FillerService4 = () => {
  return (
    <>
      <section
        className="bg-purple-100  dark:bg-gray-900 text-start dark:text-white"
        dir="rtl"
      >
        <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
          <div></div>
          <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="mt-12 space-y-12">
                <div className="flex ">
                  <div className="flex-shrink-0 m-3">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-purple-400 text-purple-900">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-7 h-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leadi dark:text-gray-50">
                      جای جوش و زخم
                    </h4>
                    <p className="mt-2 text-gray-600">
                      اگر جای جوش بر روی صورتتان وجود دارد، تزریق ژل می‌تواند به
                      پر کردن تورفتگی‌ها و صاف کردن بافت پوست کمک کند. جای زخم
                      ناشی از جراحی که فرورفته است نیز به همین طریق قابل درمان
                      است.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0 m-3">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-purple-400 text-purple-900">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-7 h-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leadi dark:text-gray-50">
                      بالای سینه
                    </h4>
                    <p className="mt-2 text-gray-400">
                      پوست بطور ناگزیر قابلیت ارتجاعی و سفتی خود را در طول زمان
                      ار دست می‌دهد. آسیب ناشی از نور خورشید می‌تواند در ایجاد
                      این ظاهر پیر در ناحیه‌ی سینه نقش داشته باشد، و نازک شدن
                      پوست می‌تواند باعث چروک ناحیه گردن و پیر نشان داده شدن
                      ظاهر فرد شود.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div aria-hidden="true" className="mt-10 lg:mt-0">
              <img
                src={require("../../../data/_SL13032.JPG")}
                alt=""
                className="mx-auto rounded-lg shadow-lg bg-gray-500 h-full"
              />
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold tracki text-center sm:text-5xl dark:text-gray-50 ">
              مراقبت‌های لازم پس از تزریق فیلر
            </h2>
            <p className="max-w-3xl mx-auto mt-4 text-xl text-center text-gray-600">
              از لمس ناحیه درمان تا 6 ساعت بعد، خودداری کنید. پس از آن می‌توانید
              محل را به آرامی با آب و صابون، شستشو دهید. تا زمانی‌که تورم و
              قرمزی اولیه برطرف نشده است، ناحیه تحت درمان را در معرض گرمای شدید
              ( مانند نور آفتاب ) یا سرمای شدید، قرار ندهید.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default FillerService4