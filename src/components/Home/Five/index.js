import React from "react";

const Five = () => {
  return (
    <>
      <section dir="ltr" className="dark:bg-gray-800 dark:text-gray-100 ">
        <div className="container px-6 py-12 mx-auto">
          <div className="grid items-center gap-4 xl:grid-cols-5">
            <div className="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
              <h2 className="text-4xl font-bold">نظرات مراجعه کنندگان</h2>
            </div>
            <div className="p-6 xl:col-span-3">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="grid content-center gap-4">
                  <div className="p-6 rounded shadow-md dark:bg-gray-900">
                    <p>
                      سلام، من بعد از کلی تحقیق که تقریبا دو سال طول کشید،
                      کلینیک دکتر عظیمی رو انتخاب کردم و از عمل زیبایی که انجام
                      دادم فوق‌العاده راضی هستم، پایدار باشید.
                    </p>
                    <div className="flex items-center mt-4 space-x-4">
                      <img
                        src="https://mahziarclinic.com/wp-content/uploads/2020/11/3c555bbc-1989-46b9-9fab-f96075ec71d6.jpeg"
                        alt=""
                        className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500"
                      />
                      <div>
                        <p className="text-lg font-semibold">سارا نظری </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 rounded shadow-md dark:bg-gray-900">
                    <p>
                      {" "}
                      سلام به همگی، من یگانه هستم و تو مجموعه زیبایی از خدمات
                      فیلر بینی استفاده کردم، از نحوه ارائه و انجام خدمات بسیار
                      راضی هستم . خیلی خوشحالم که برای انجام خدمات زیبایی به شما
                      مراجعه کردم، ممنون از دکتر عظیمی و پرسنل خوب‌تون{" "}
                    </p>
                    <div className="flex items-center mt-4 space-x-4">
                      <img
                        src="https://mahziarclinic.com/wp-content/uploads/2020/11/19a8eddd-2178-4679-b2fd-45c37ec02eed.jpeg"
                        alt=""
                        className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500"
                      />
                      <div>
                        <p className="text-lg font-semibold">یگانه فضلی</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid content-center gap-4">
                  <div className="p-6 rounded shadow-md dark:bg-gray-900">
                    <p>
                      سلام دوستان عزیز، مجموعه زیبایی دکتر عظیمی شماره یک
                      دنیاست، چه برسه به ایران! نتیجه تزریق فیلرهاشون فوق‌العاده
                      طبیعی و عالیه، من از تزریق فیلری که برای رفع هیپ‌دیپ بود
                      که در کلینیک دکتر عظیمی انجام دادم، بی‌نهایت راضی هستم
                      دوره نقاهتم حدودا يك هفته طول کشید که نیاز من برای مصرف
                      مسکن فقط سه روز طول کشید. امیدوارم هميشه موفق و پيروز
                      باشين.{" "}
                    </p>
                    <div className="flex items-center mt-4 space-x-4">
                      <img
                        src="https://source.unsplash.com/50x50/?portrait?3"
                        alt=""
                        className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500"
                      />
                      <div>
                        <p className="text-lg font-semibold">مهتاب حشمت زاده</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Five;
