import React from "react";
import App from "layouts/App";
import clsx from "clsx";
import SvgRightArrow from "icons/SvgRightArrow";
import SvgCalendar from "icons/SvgCalendar";
import ReuqestForm from "components/RequestForm";

const style = {
  inActiveMenu: `text-xs opacity-80 md:text-sm`,
  activeMenu: `text-xs md:text-sm`,
  activeFilterCategoryMenu: `text-[11px] md:text-xs text-[#FB421A] duration-100`,
  inActiveFilterCategoryMenu: `text-[11px] md:text-xs text-[#16171E] hover:text-[#FB421A] opacity-60 cursor-pointer duration-100`,
};

function News(props) {
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
            <span className="text-xs md:text-sm px-2">/</span>
            <a href="#" className={style.activeMenu}>
              Veteran Russian diplomat resigns in protest of Moscow's
              "aggressive war" in Ukraine
            </a>
            <h2 className="text-2xl font-bold pt-3">News</h2>
          </div>

          <div className="bounce w-[30rem] h-[30rem] opacity-[70%] absolute right-0 | blur-3xl duration-150 rounded-[50%] bg-[#FB7A1A]"></div>
        </div>
      </section>

      <section className="news container mx-auto px-5 py-5 md:py-20">
        <>
          <div className="space-y-2">
            <div className="flex justify-between">
              <h4 className="w-full font-bold text-lg md:text-3xl font-inter text-[#353437] group-hover:text-orange-primary duration-200">
                Veteran Russian diplomat resigns in protest of Moscow's
                "aggressive war" in Ukraine
              </h4>
            </div>
            <div className="fcb pt-1 pb-2">
              <div className="fcc">
                <SvgCalendar className="h-5" />

                <p className="text-xs text-[#9A999B] pl-2">18.04.2022</p>
              </div>
            </div>

            <div className="img flex | h-56 md:h-[700px] w-full flex-shrink-0 | overflow-hidden">
              <img
                src={`/business_center.png`}
                alt="new_image"
                className="w-full h-full object-cover object-center"
              />
            </div>

            <p
              className="text-sm pt-10 font-inter text-[#353437] font-[400] prose"
              dangerouslySetInnerHTML={{
                __html: `
            A 20-year veteran of Russia's diplomatic service announced his resignation Monday in protest of his country's war on Ukraine, multiple media outlets reported.  
            <br/>
            <br/>
            In a rare public protest by a Russian official, Boris Bondarev, a diplomat posted to Russia's mission to the United Nations in Geneva, posted a statement on a LinkedIn account condemning Russia's invasion of Ukraine and criticizing the Russian Ministry of Foreign Affairs for complicity in what he described as an an "aggressive war" — language that is proscribed in Russia under wartime censorship laws. 
            <br/>
            <br/>
            A 20-year veteran of Russia's diplomatic service announced his resignation Monday in protest of his country's war on Ukraine, multiple media outlets reported.  
            <br/>
            <br/>
            In a rare public protest by a Russian official, Boris Bondarev, a diplomat posted to Russia's mission to the United Nations in Geneva, posted a statement on a LinkedIn account condemning Russia's invasion of Ukraine and criticizing the Russian Ministry of Foreign Affairs for complicity in what he described as an an "aggressive war" — language that is proscribed in Russia under wartime censorship laws. 
            <br/>
            <br/>
            The respected Russian business newspaper Kommersant reached out to Bondarev, who confirmed the authenticity of the post. The New York Times confirmed the receipt of a resignation sent by email to diplomats in Geneva.
            <br/>
            <br/>
            The Russian mission to the UN in Geneva declined to comment on the matter to CNN, and Bondarev did not respond to messages sent to the LinkedIn account. 
            `,
              }}
            ></p>
          </div>
        </>
      </section>

      <ReuqestForm />

      <App.Footer />
    </App>
  );
}

export default News;
