import React from "react";
import App from "layouts/App";
import clsx from "clsx";
import SvgRightArrow from "icons/SvgRightArrow";
import SvgCalendar from "icons/SvgCalendar";
import ReuqestForm from "components/RequestForm";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Link from "next/link";

const style = {
  inActiveMenu: `text-xs opacity-80 md:text-sm`,
  activeMenu: `text-xs md:text-sm`,
  activeFilterCategoryMenu: `text-[11px] md:text-xs text-[#FB421A] duration-100`,
  inActiveFilterCategoryMenu: `text-[11px] md:text-xs text-[#16171E] hover:text-[#FB421A] opacity-60 cursor-pointer duration-100`,
};

function News(props) {
  const { pathname } = useRouter();

  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, [pathname]);

  return (
    <App>
      <App.Header dark={true} />
      <section className="bg-[#000000] py-5 md:py-10 relative overflow-hidden">
        <div className="flex items-center text-white | px-5 container mx-auto">
          <div className="relative z-10">
            <a href="#" className={style.inActiveMenu}>
              Home
            </a>

            <span className="text-xs md:text-sm px-2">/</span>

            <a href="#" className={style.activeMenu}>
              News
            </a>

            <h2 className="text-2xl font-bold pt-3">News</h2>
          </div>

          <div className="bounce w-[30rem] h-[30rem] opacity-[70%] absolute right-0 | blur-3xl duration-150 rounded-[50%] bg-[#FB7A1A]"></div>
        </div>
      </section>

      <section className="news container mx-auto | py-20">
        <div className="news | flex flex-col md:flex-row">
          {[
            {
              title: `Elon Musk buys Twitter: How will he change it?`,
              img: `/emusk.png`,
            },
            {
              title: `Open-source encyclopedia puts 10,000 years of Indian...`,
              img: `/service1.png`,
              body: `A 20-year veteran of Russia's diplomatic service announced his resignation Monday in protest of his country's war on Ukraine, multiple media outlets reported.`,
            },
            {
              title: `Australia will host the next Quad summit in 2023, Prime... `,
              img: `/service2.png`,
            },
          ].map((news, index) => (
            <>
              <Link href={`/news/12`}>
                <div
                  className={clsx({
                    "flex w-full md:w-1/3 | py-7 px-3 group cursor-pointer border-b": true,
                    "border-x": index === 1,
                  })}
                  key={index}
                >
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <h4 className="h-16 w-2/3 font-bold font-inter text-[#353437] group-hover:text-orange-primary duration-200">
                        {news.title}
                      </h4>

                      <SvgRightArrow className="h-5 group-hover:translate-x-1 duration-200" />
                    </div>
                    <p className="h-28 text-sm py-2 font-inter text-[#353437] font-[400]">
                      {news.body ||
                        ` A 20-year veteran of Russia's diplomatic service announced
his resignation Monday in protest of his country's war on
Ukraine, multiple media outlets reported. A 20-year veteran
of Russia's diplomatic service announced his resignation...`}
                    </p>

                    <div className="fcb  pt-1 pb-2">
                      <div className="fcc">
                        <SvgCalendar className="h-5" />

                        <p className="text-xs text-[#9A999B] pl-2">
                          18.04.2022
                        </p>
                      </div>
                    </div>

                    <div className="img flex | h-[200px] w-full flex-shrink-0 | overflow-hidden">
                      <img
                        src={news.img}
                        alt="new_image"
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </>
          ))}
        </div>

        <div className="news | flex flex-col md:flex-row">
          {[
            {
              title: `Veteran Russian diplomat resigns in protest of...`,
              img: `/business_center.png`,
            },
            {
              title: `Open-source encyclopedia puts 10,000 years of Indian...`,
              img: `/service1.png`,
            },
            {
              title: `Biden says US and India will "continue consulting closely"...`,
              img: `/indi.png`,
            },
          ].map((news, index) => (
            <>
              <Link href={`/news/12`}>
                <div
                  className={clsx({
                    "flex w-full md:w-1/3 | py-7 px-3 group cursor-pointer border-b": true,
                    "border-x": index === 1,
                  })}
                  key={index}
                >
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <h4 className="h-16 w-2/3 font-bold font-inter text-[#353437] group-hover:text-orange-primary duration-200">
                        {news.title}
                      </h4>

                      <SvgRightArrow className="h-5 group-hover:translate-x-1 duration-200" />
                    </div>
                    <p className="h-28 text-sm py-2 font-inter text-[#353437] font-[400]">
                      {news.body ||
                        ` A 20-year veteran of Russia's diplomatic service announced
his resignation Monday in protest of his country's war on
Ukraine, multiple media outlets reported. A 20-year veteran
of Russia's diplomatic service announced his resignation...`}
                    </p>

                    <div className="fcb  pt-1 pb-2">
                      <div className="fcc">
                        <SvgCalendar className="h-5" />

                        <p className="text-xs text-[#9A999B] pl-2">
                          18.04.2022
                        </p>
                      </div>
                    </div>

                    <div className="img flex | h-[200px] w-full flex-shrink-0 | overflow-hidden">
                      <img
                        src={news.img}
                        alt="new_image"
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </>
          ))}
        </div>
        <div className="fcc | pt-5 md:pt-10">
          <button className="text-white bg-[#FB7A1A] px-12 py-3 text-sm md:text-lg md:px-16 md:py-3 font-bold font-poppins click:scale">
            Load More
          </button>
        </div>
      </section>

      <ReuqestForm />

      <App.Footer />
    </App>
  );
}

export default News;
