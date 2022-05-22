import Footer from "components/Footer";
import Logo from "components/Logo";
import useWindowSize from "hooks/useWindowSize";
import SvgCalendar from "icons/SvgCalendar";
import SvgArrow from "pages/home/SvgArrow";
import SvgHowWeWork from "pages/home/SvgHowWeWork";
import SvgMap from "pages/home/SvgMap";
import Header from "components/Header";
import SvgPointer from "icons/SvgPointer";
import App from "layouts/App";

function Index() {
  const windowSize = useWindowSize();

  return (
    <App>
      <section className="lg:h-full 2xl:h-auto overflow-x-hidden main__section | fb_vertically">
        <App.Header />

        <div className="fcb container mx-auto w-full | overflow-hidden overflow-y-hidden">
          <div className="w-3/5 | flex flex-col | space-y-5">
            <h1 className="h2 uppercase | pb-5 font-inter">
              Need <span className="text-orange-primary">to ship</span> a
              package?
            </h1>

            <h1 className="h2 uppercase font-inter">
              Alpha Logistics has a <br />
              solution for you
            </h1>

            <p className="p text-sm font-exo">
              Finding the exact product or a very similar one <br /> on the
              market from our partner manufacturers.
            </p>

            <button className="inline-flex items-center | space-x-4 group">
              <p className="text-[#FF9A00]">Read more</p>

              <SvgPointer className="h-6 group-hover:translate-x-1 duration-150 text-orange-primary" />
            </button>
          </div>

          <div className="w-2/5 | relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 882 877"
              height={500}
            >
              <circle
                cx="521"
                cy="521"
                r="520.5"
                stroke="url(#paint0_linear_406_2552)"
              ></circle>
              <defs>
                <linearGradient
                  id="paint0_linear_406_2552"
                  x1="0"
                  x2="858.5"
                  y1="550"
                  y2="805.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#fff"></stop>
                  <stop
                    offset="0.424"
                    stopColor="#fff"
                    stopOpacity="0.19"
                  ></stop>
                  <stop offset="1" stopColor="#fff" stopOpacity="0.01"></stop>
                </linearGradient>
              </defs>
            </svg>

            <a
              href="#"
              className="absolute -left-16 bottom-20 z-50 block w-36 h-36 p-5 fcc rounded-full font-exo font-semibold | bg-[#FB7A1A] text-white | click:scale"
            >
              Order now
            </a>
          </div>
        </div>

        <div className="bg-[#020105] overflow-y-hidden">
          <div className="container mx-auto">
            <ul className="fcb | h-24">
              <li className="py-5 w-1/4 fcc | cursor-pointer | relative | group">
                <div className="w-[14rem] h-[10rem] blur-2xl opacity-0 duration-150 rounded-[50%] group-hover:opacity-75 bg-[#FB7A1A]"></div>

                <div className="inline-flex fcc space-x-4 absolute inset-0">
                  <p className="font-bold font-exo text-white">Order Product</p>

                  <SvgPointer className="h-6 group-hover:translate-x-1 text-white duration-150" />
                </div>
              </li>
              <li className="py-5 w-1/4 fcc | cursor-pointer | relative | group">
                <div className="w-[14rem] h-[10rem] blur-2xl opacity-0 duration-200 rounded-[50%] group-hover:opacity-75 bg-[#FB7A1A]"></div>

                <div className="inline-flex fcc space-x-4 absolute inset-0">
                  <p className="font-bold font-exo text-white">
                    Show order location
                  </p>

                  <SvgPointer className="h-6 group-hover:translate-x-1 text-white duration-150" />
                </div>
              </li>{" "}
              <li className="py-5 w-1/4 fcc | cursor-pointer | relative | group">
                <div className="w-[14rem] h-[10rem] blur-2xl opacity-0 duration-200 rounded-[50%] group-hover:opacity-95 bg-[#FB7A1A]"></div>

                <div className="inline-flex fcc space-x-4 absolute inset-0">
                  <p className="font-bold font-exo text-white">How we work</p>

                  <SvgPointer className="h-6 group-hover:translate-x-1 text-white duration-150" />
                </div>
              </li>
              <li className="py-5 w-1/4 fcc | cursor-pointer | relative | group">
                <div className="w-[14rem] h-[10rem] blur-2xl opacity-0 duration-200 rounded-[50%] group-hover:opacity-75 bg-[#FB7A1A]"></div>

                <div className="inline-flex fcc space-x-4 absolute inset-0">
                  <p className="font-bold font-exo text-white">
                    Login to Account
                  </p>

                  <SvgPointer className="h-6 group-hover:translate-x-1 text-white duration-150" />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-gray-to-white | overflow-x-hidden">
        <div className="container mx-auto | py-12 | fc | font-exo">
          <div className="w-1/5 | space-y-3">
            <p className="opacity-50 text-base">About company</p>

            <Logo className="h-8" dark={true} />

            <button className="inline-flex items-center | space-x-4 group">
              <p className="text-[#FF9A00]">Read more</p>

              <SvgPointer className="h-6 group-hover:translate-x-1 text-orange-primary duration-150" />
            </button>
          </div>

          <div className="w-4/5 text-[#020105] | space-y-7">
            <p className="font-inter">
              Phoenix Global Trading is an international operating global
              company. After having almost a decade of experience in sales,
              import and export spheres, our company proudly becomes a part of
              Phoenix Group. This gave us a great deal of opportunities and
              prospective development plan.
            </p>

            <ul className="flex space-x-44">
              <li>
                <div className="fcb space-x-5">
                  <svg
                    height="22"
                    viewBox="0 0 94 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.5276 0.0392152C16.0991 0.0392152 18.1998 0.183006 19.8296 0.470587C21.4594 0.75817 22.7271 1.18954 23.6325 1.76471C24.5742 2.33987 25.2261 3.08497 25.5883 4C25.9505 4.88889 26.1316 5.96078 26.1316 7.21569C26.1316 8.31373 25.9324 9.32026 25.534 10.2353C25.1718 11.1242 24.5923 11.8562 23.7955 12.4314C22.9987 12.9804 21.9484 13.3072 20.6445 13.4118V13.5686C22.3106 13.6732 23.5963 14.0523 24.5018 14.7059C25.4435 15.3333 26.0954 16.1699 26.4576 17.2157C26.8198 18.2614 27.0008 19.451 27.0008 20.7843C27.0008 22.4837 26.6206 23.8693 25.86 24.9412C25.1356 25.9869 23.7955 26.7582 21.8397 27.2549C19.9201 27.7255 17.1494 27.9608 13.5276 27.9608C9.94196 27.9608 7.17125 27.7255 5.21546 27.2549C3.25966 26.7582 1.90147 25.9869 1.14088 24.9412C0.380294 23.8693 0 22.4837 0 20.7843C0 19.451 0.181092 18.2614 0.543276 17.2157C0.905461 16.1699 1.55739 15.3333 2.49907 14.7059C3.44075 14.0523 4.72651 13.6732 6.35634 13.5686V13.4118C5.05247 13.3072 3.98403 12.9804 3.151 12.4314C2.3542 11.8562 1.7747 11.1242 1.41252 10.2353C1.05033 9.32026 0.869243 8.31373 0.869243 7.21569C0.869243 5.96078 1.05033 4.88889 1.41252 4C1.7747 3.08497 2.42664 2.33987 3.36831 1.76471C4.30999 1.18954 5.59575 0.75817 7.22558 0.470587C8.85541 0.183006 10.9561 0.0392152 13.5276 0.0392152ZM13.6362 15.2157C12.1513 15.2157 10.938 15.2941 9.99629 15.451C9.05461 15.5817 8.31213 15.817 7.76886 16.1569C7.2618 16.4706 6.89961 16.9281 6.6823 17.5294C6.46499 18.1307 6.35634 18.902 6.35634 19.8431C6.35634 20.915 6.55554 21.7778 6.95394 22.4314C7.35234 23.0588 8.07671 23.5033 9.12705 23.7647C10.1774 24 11.6623 24.1176 13.5819 24.1176C15.4653 24.1176 16.914 24 17.9281 23.7647C18.9422 23.5033 19.6304 23.0588 19.9926 22.4314C20.3548 21.7778 20.5359 20.915 20.5359 19.8431C20.5359 18.8758 20.4272 18.0915 20.2099 17.4902C20.0288 16.8889 19.6847 16.4314 19.1777 16.1176C18.6706 15.7778 17.9643 15.5425 17.0589 15.4118C16.1896 15.281 15.0488 15.2157 13.6362 15.2157ZM13.5819 3.60784C11.8072 3.60784 10.449 3.73856 9.50734 4C8.56566 4.23529 7.91373 4.65359 7.55155 5.2549C7.18936 5.85621 7.00827 6.69281 7.00827 7.76471C7.00827 8.8366 7.18936 9.6732 7.55155 10.2745C7.91373 10.8497 8.56566 11.2418 9.50734 11.451C10.4852 11.6601 11.8615 11.7647 13.6362 11.7647C15.4472 11.7647 16.8054 11.6601 17.7108 11.451C18.6163 11.2157 19.2139 10.8105 19.5036 10.2353C19.8296 9.66013 19.9926 8.8366 19.9926 7.76471C19.9926 6.69281 19.8296 5.85621 19.5036 5.2549C19.1777 4.65359 18.5438 4.23529 17.6022 4C16.6967 3.73856 15.3566 3.60784 13.5819 3.60784Z"
                      fill="#FB7A1A"
                    />
                    <path
                      d="M48.5804 0C49.4134 0 50.5905 0.0261435 52.1117 0.0784304C53.6329 0.130719 55.2265 0.326797 56.8925 0.666665L56.4579 3.92157C55.5887 3.86928 54.7737 3.84314 54.0132 3.84314C53.2888 3.81699 52.5101 3.80392 51.6771 3.80392C50.844 3.80392 49.8118 3.80392 48.5804 3.80392C46.8781 3.80392 45.4656 3.93464 44.3428 4.19608C43.2201 4.45752 42.3327 4.96732 41.6808 5.72549C41.0288 6.48366 40.5761 7.59477 40.3226 9.05882C40.0691 10.4967 39.9423 12.3922 39.9423 14.7451C39.9423 16.6275 39.9966 18.183 40.1053 19.4118C40.2501 20.6405 40.5399 21.6078 40.9745 22.3137C41.4091 22.9935 42.0792 23.4771 42.9846 23.7647C43.9263 24.0523 45.1759 24.1961 46.7332 24.1961C48.6166 24.1961 49.9929 23.9869 50.8622 23.5686C51.7314 23.1503 52.2928 22.5229 52.5463 21.6863C52.7998 20.8497 52.9266 19.817 52.9266 18.5882C52.9266 17.281 52.7636 16.2614 52.4376 15.5294C52.1117 14.7712 51.5141 14.2353 50.6448 13.9216C49.7756 13.5817 48.5261 13.4118 46.8962 13.4118C45.8097 13.4118 44.7956 13.5163 43.8539 13.7255C42.9484 13.9085 41.9886 14.2353 40.9745 14.7059C39.9966 15.1765 38.8014 15.8431 37.3889 16.7059L37.1716 14.6667C38.403 13.4118 39.562 12.4314 40.6485 11.7255C41.7351 11.0196 42.9122 10.5229 44.1798 10.2353C45.4837 9.94771 47.023 9.80392 48.7977 9.80392C51.5141 9.80392 53.6329 10.0915 55.154 10.6667C56.6752 11.2418 57.7437 12.1699 58.3594 13.451C59.0113 14.7059 59.3373 16.3922 59.3373 18.5098C59.3373 20.0261 59.1743 21.3726 58.8483 22.549C58.5224 23.7255 57.9066 24.719 57.0012 25.5294C56.0957 26.3399 54.81 26.9542 53.1439 27.3725C51.5141 27.7908 49.3591 28 46.6789 28C43.9988 28 41.7713 27.7908 39.9966 27.3725C38.2581 26.9542 36.8999 26.2353 35.922 25.2157C34.9804 24.1961 34.3103 22.8235 33.9119 21.098C33.5135 19.3464 33.3143 17.1634 33.3143 14.549C33.3143 11.3856 33.6222 8.84967 34.2379 6.94118C34.8898 5.00653 35.8315 3.54248 37.0629 2.54902C38.3306 1.55556 39.9242 0.888889 41.8438 0.54902C43.7633 0.183006 46.0089 0 48.5804 0Z"
                      fill="#FB7A1A"
                    />
                    <path
                      d="M80.5811 0.470587L70.9108 16.2353C70.6572 16.6797 70.6572 17.0327 70.9108 17.2941C71.2005 17.5294 71.617 17.6471 72.1603 17.6471H94V20.7451L89.2192 21.2157H67.5968C66.5826 21.2157 65.7134 21.0196 64.989 20.6275C64.3009 20.2092 63.8482 19.6863 63.6308 19.0588C63.4135 18.4052 63.5041 17.7516 63.9025 17.098L74.0618 0.470587H80.5811ZM89.2735 5.68627V27.5294H82.9715V10.0784L84.1124 5.68627H89.2735Z"
                      fill="#FB7A1A"
                    />
                  </svg>

                  <span>projects</span>
                </div>
              </li>

              <li>
                <div className="fcb space-x-5">
                  <svg
                    height="22"
                    viewBox="0 0 67 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.1266 0.453909L7.85488 14.4902C7.58558 14.8859 7.58558 15.2002 7.85488 15.433C8.16264 15.6425 8.60506 15.7472 9.18213 15.7472H32.3801V18.5056L27.302 18.9246H4.33478C3.25759 18.9246 2.33429 18.75 1.56487 18.4008C0.833916 18.0284 0.353028 17.5628 0.122202 17.0042C-0.108624 16.4223 -0.0124465 15.8403 0.410735 15.2584L11.2019 0.453909H18.1266ZM27.3597 5.09776V24.5461H20.6657V9.00838L21.8776 5.09776H27.3597Z"
                      fill="#FB7A1A"
                    />
                    <path
                      d="M52.2848 0C55.9396 0 58.8249 0.418994 60.9408 1.25698C63.0952 2.07169 64.634 3.39851 65.5573 5.23743C66.5191 7.07635 67 9.49721 67 12.5C67 15.5028 66.5191 17.9236 65.5573 19.7626C64.634 21.6015 63.0952 22.9399 60.9408 23.7779C58.8249 24.5926 55.9396 25 52.2848 25C48.6686 25 45.7832 24.5926 43.6289 23.7779C41.513 22.9399 39.9741 21.6015 39.0123 19.7626C38.089 17.9236 37.6274 15.5028 37.6274 12.5C37.6274 9.49721 38.089 7.07635 39.0123 5.23743C39.9741 3.39851 41.513 2.07169 43.6289 1.25698C45.7832 0.418994 48.6686 0 52.2848 0ZM52.2848 3.52653C50.8229 3.52653 49.6111 3.67784 48.6493 3.98045C47.6875 4.28305 46.9181 4.77188 46.3411 5.44693C45.764 6.12197 45.3601 7.04143 45.1292 8.20531C44.8984 9.3459 44.783 10.7775 44.783 12.5C44.783 14.1993 44.8984 15.6308 45.1292 16.7947C45.3601 17.9586 45.764 18.878 46.3411 19.5531C46.9181 20.2281 47.6875 20.7169 48.6493 21.0196C49.6111 21.3222 50.8229 21.4735 52.2848 21.4735C53.7083 21.4735 54.9201 21.3222 55.9203 21.0196C56.9206 20.7169 57.7093 20.2281 58.2863 19.5531C58.8634 18.878 59.2673 17.9586 59.4982 16.7947C59.729 15.6308 59.8444 14.1993 59.8444 12.5C59.8444 10.7775 59.729 9.3459 59.4982 8.20531C59.2673 7.04143 58.8634 6.12197 58.2863 5.44693C57.7093 4.77188 56.9206 4.28305 55.9203 3.98045C54.9201 3.67784 53.7083 3.52653 52.2848 3.52653Z"
                      fill="#FB7A1A"
                    />
                  </svg>
                  <span>awwards</span>
                </div>
              </li>

              <li>
                <div className="fcb space-x-5">
                  <svg
                    height="22"
                    viewBox="0 0 90 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.839 0C15.6435 0 17.92 0.198412 19.6682 0.595237C21.4165 0.992063 22.746 1.65733 23.6565 2.59104C24.5671 3.5014 25.1863 4.75023 25.5141 6.33753C25.8419 7.90149 26.0058 9.87395 26.0058 12.2549C26.0058 14.9627 25.7144 17.1569 25.1316 18.8375C24.5853 20.5182 23.7112 21.8137 22.5092 22.7241C21.3073 23.6111 19.7229 24.218 17.7561 24.5448C15.8257 24.8483 13.4764 25 10.7083 25C9.7977 25 8.54112 24.965 6.93852 24.895C5.33592 24.8483 3.58763 24.6849 1.69365 24.4048L2.13073 21.4636C3.11414 21.5103 3.98828 21.5453 4.75316 21.5686C5.51803 21.5686 6.35576 21.5686 7.26632 21.5686C8.17689 21.5686 9.3242 21.5686 10.7083 21.5686C12.4566 21.5686 13.8953 21.4402 15.0244 21.1835C16.1535 20.9034 17.0276 20.4248 17.6468 19.7479C18.3024 19.0476 18.7577 18.0789 19.0126 16.8417C19.304 15.5812 19.4497 13.9823 19.4497 12.0448C19.4497 10.3175 19.3951 8.89356 19.2858 7.77311C19.1765 6.65266 18.9034 5.77731 18.4663 5.14706C18.0656 4.49346 17.41 4.03828 16.4995 3.78151C15.6253 3.52474 14.3687 3.39636 12.7297 3.39636C10.945 3.39636 9.59737 3.5831 8.68681 3.95658C7.81266 4.33007 7.21169 4.89029 6.88389 5.63726C6.5925 6.38422 6.44681 7.3296 6.44681 8.47339C6.44681 9.50047 6.61072 10.3525 6.93852 11.0294C7.26632 11.7063 7.8673 12.2199 8.74144 12.57C9.61559 12.8968 10.8357 13.0602 12.4019 13.0602C13.4946 13.0602 14.4962 12.9669 15.4068 12.7801C16.3174 12.5934 17.2643 12.2899 18.2478 11.8697C19.2676 11.4262 20.4695 10.831 21.8536 10.084L22.0721 11.9048C20.9066 13.0252 19.7593 13.9006 18.6302 14.5308C17.5375 15.1611 16.3538 15.6046 15.079 15.8613C13.8042 16.1181 12.2744 16.2465 10.4897 16.2465C7.79445 16.2465 5.68194 15.9197 4.15218 15.2661C2.62243 14.5892 1.54796 13.6671 0.928778 12.5C0.309593 11.3329 0 10.0023 0 8.5084C0 6.57096 0.382438 4.98366 1.14731 3.7465C1.91219 2.48599 3.22341 1.55229 5.08096 0.945378C6.97494 0.315126 9.56095 0 12.839 0Z"
                      fill="#FB7A1A"
                    />
                    <path
                      d="M46.1128 0.0350136C48.6988 0.0350136 50.8113 0.163398 52.4504 0.420167C54.0894 0.676937 55.3642 1.06209 56.2747 1.57563C57.2217 2.08917 57.8773 2.75443 58.2416 3.57143C58.6058 4.36508 58.7879 5.32213 58.7879 6.44258C58.7879 7.42297 58.5876 8.32166 58.1869 9.13866C57.8227 9.93231 57.2399 10.5859 56.4386 11.0994C55.6373 11.5896 54.5811 11.8814 53.2699 11.9748V12.1148C54.9453 12.2082 56.2383 12.5467 57.1489 13.1303C58.0959 13.6905 58.7515 14.4374 59.1157 15.3711C59.4799 16.3049 59.662 17.3669 59.662 18.5574C59.662 20.0747 59.2796 21.3119 58.5147 22.2689C57.7863 23.2026 56.4386 23.8912 54.4718 24.3347C52.5414 24.7549 49.7551 24.965 46.1128 24.965C42.507 24.965 39.7206 24.7549 37.7538 24.3347C35.787 23.8912 34.4211 23.2026 33.6563 22.2689C32.8914 21.3119 32.5089 20.0747 32.5089 18.5574C32.5089 17.3669 32.6911 16.3049 33.0553 15.3711C33.4195 14.4374 34.0751 13.6905 35.0221 13.1303C35.9691 12.5467 37.2621 12.2082 38.9011 12.1148V11.9748C37.5899 11.8814 36.5154 11.5896 35.6777 11.0994C34.8764 10.5859 34.2937 9.93231 33.9294 9.13866C33.5652 8.32166 33.3831 7.42297 33.3831 6.44258C33.3831 5.32213 33.5652 4.36508 33.9294 3.57143C34.2937 2.75443 34.9493 2.08917 35.8963 1.57563C36.8432 1.06209 38.1362 0.676937 39.7753 0.420167C41.4143 0.163398 43.5268 0.0350136 46.1128 0.0350136ZM46.2221 13.5854C44.7288 13.5854 43.5086 13.6555 42.5616 13.7955C41.6146 13.9122 40.8679 14.1223 40.3216 14.4258C39.8117 14.7059 39.4475 15.1144 39.2289 15.6513C39.0104 16.1881 38.9011 16.8768 38.9011 17.7171C38.9011 18.6741 39.1014 19.4444 39.5021 20.028C39.9027 20.5882 40.6312 20.9851 41.6875 21.2185C42.7437 21.4286 44.237 21.5336 46.1674 21.5336C48.0614 21.5336 49.5183 21.4286 50.5382 21.2185C51.558 20.9851 52.25 20.5882 52.6143 20.028C52.9785 19.4444 53.1606 18.6741 53.1606 17.7171C53.1606 16.8534 53.0513 16.1531 52.8328 15.6162C52.6507 15.0794 52.3047 14.6709 51.7947 14.3908C51.2848 14.0873 50.5746 13.8772 49.664 13.7605C48.7899 13.6438 47.6426 13.5854 46.2221 13.5854ZM46.1674 3.22129C44.3827 3.22129 43.0169 3.338 42.0699 3.57143C41.1229 3.78151 40.4673 4.155 40.1031 4.69188C39.7388 5.22876 39.5567 5.97572 39.5567 6.93277C39.5567 7.88982 39.7388 8.63679 40.1031 9.17367C40.4673 9.68721 41.1229 10.0373 42.0699 10.2241C43.0533 10.4108 44.4374 10.5042 46.2221 10.5042C48.0432 10.5042 49.4091 10.4108 50.3196 10.2241C51.2302 10.014 51.8312 9.65219 52.1226 9.13866C52.4504 8.62512 52.6143 7.88982 52.6143 6.93277C52.6143 5.97572 52.4504 5.22876 52.1226 4.69188C51.7948 4.155 51.1574 3.78151 50.2104 3.57143C49.2998 3.338 47.9522 3.22129 46.1674 3.22129Z"
                      fill="#FB7A1A"
                    />
                    <path
                      d="M86.772 0.420167C87.6098 0.420167 88.3018 0.536881 88.8481 0.770309C89.3945 0.980393 89.7405 1.27218 89.8862 1.64566C90.0683 2.01914 90.0319 2.46265 89.7769 2.97619L78.1399 24.5798H71.4199L81.4725 6.09244C81.6547 5.7423 81.855 5.39216 82.0735 5.04202C82.292 4.69188 82.5652 4.35341 82.893 4.02661H64.9184L64.6453 0.420167H86.772Z"
                      fill="#FB7A1A"
                    />
                  </svg>

                  <span>client</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-black | py-20 | relative | overflow-y-hidden">
        <div className="relative | container mx-auto z-50">
          <h3 className="relative | text-white font-gm text-2xl font-extrabold | border-b border-gray-400/25 pb-7">
            Our services
          </h3>

          <ul className="relative | w-full">
            <li className="flex items-center | py-4 px-12 | text-white | border-b border-gray-400/25">
              <div className="flex items-center | w-1/2 | space-x-10">
                <span className="text-[#C2C2C3] font-gm">01</span>

                <h4 className="font-bold">Easy researching</h4>
              </div>

              <p className="w-1/2 | font-inter opacity-60 text-sm leading-6">
                Finding the exact product or a very similar one <br />
                on the market from our partner manufacturers
              </p>
            </li>

            <li className="flex items-center | py-4 px-12 | text-white | border-b  border-gray-400/25">
              <div className="flex items-center | w-1/2 | space-x-10">
                <span className="text-[#C2C2C3] font-gm">02</span>

                <h4 className="font-bold">More other products</h4>
              </div>

              <p className="w-1/2 | font-inter opacity-60 text-sm leading-6">
                Finding the exact product or a very similar one <br />
                on the market from our partner manufacturers
              </p>
            </li>

            <li className="flex items-center | py-4 px-12 | text-white | border-b border-gray-400/25">
              <div className="flex items-center | w-1/2 | space-x-10">
                <span className="text-[#C2C2C3] font-gm">03</span>

                <h4 className="font-bold">Deliver on 24 countries</h4>
              </div>

              <p className="w-1/2 | font-inter opacity-60 text-sm leading-6">
                Finding the exact product or a very similar one <br />
                on the market from our partner manufacturers
              </p>
            </li>
          </ul>
        </div>

        <div className="bounce w-[35rem] h-[30rem] opacity-[72%] absolute -bottom-48 -left-56 | blur-2xl duration-150 rounded-[50%] bg-[#FB7A1A]"></div>
      </section>

      <section className="py-20 | relative | overflow-y-hidden">
        <div className="relative | container mx-auto z-50">
          <h3 className="relative | text-[#020105] font-gm text-2xl font-extrabold pb-7">
            How we work
          </h3>

          <div className="grid grid-cols-2 gap-3">
            <p className="text-[#353437] font-inter text-sm">
              We know how difficult it can be to organize cargo transportation
              on your own and invest in time. Therefore, our specialists take on
              these responsibilities and all responsibility for the entire
              process.
            </p>

            <p className="text-[#353437] font-inter text-sm">
              Over the current year, we have already completed 834 flights and
              transported 15,846 tons of cargo. All cargoes of our clients are
              insured, in case the customer's cargo costs more, we will insure
              it up to the required amount.
            </p>

            <p className="text-[#353437] font-inter text-sm">
              We will develop the optimal route, select the necessary transport,
              insure the cargo and provide services for careful loading and
              unloading.
            </p>
          </div>

          <SvgHowWeWork className="w-full pt-20" />
        </div>
      </section>

      <section className="bg-black | py-20 | relative | overflow-hidden">
        <div className="relative | container mx-auto z-50 | space-y-7">
          <h3 className="relative | h2 text-white font-gm | text-center">
            Leave a request for a <span className="py-2 block"></span>{" "}
            consultation
          </h3>

          <p className="font-exo text-white opacity-60 text-sm text-center">
            Finding the exact product or a very similar one <br /> on the market
            from our partner manufacturers
          </p>

          <div className="fcc">
            <button className="bg-white text-orange-primary px-10 py-4 text-lg font-bold font-poppins click:scale">
              Order now
            </button>
          </div>
        </div>

        <div className="bounce w-[35rem] h-[30rem] opacity-[72%] absolute -top-48 -right-20 | blur-2xl duration-150 rounded-[50%] bg-[#FB7A1A]"></div>
      </section>

      <section className="py-20 | relative | overflow-y-hidden">
        <div className="relative | container mx-auto z-50">
          <h3 className="relative | text-[#020105] font-gm text-2xl font-extrabold pb-7">
            Landmark of branches
          </h3>

          <SvgMap className="w-full pt-20" />
        </div>
      </section>

      <section className="py-20 | relative | overflow-y-hidden">
        <div className="relative | container mx-auto z-50">
          <h3 className="relative | text-[#020105] font-gm text-2xl font-extrabold pb-7">
            What you take from Us:
          </h3>

          <div className="grid grid-cols-4">
            <div className="col-span-1 | fb_vertically | p-4 space-y-5 | border border-gray-100 | cursor-pointer | group hover:bg-[#FB7A1A] duration-200">
              <div>
                <h3 className="text-[#353437] group-hover:text-white duration-200 text-lg font-bold | font-gm">
                  Monitor the location
                </h3>

                <p className="text-[#020105] group-hover:text-white duration-200 opacity-80 font-inter">
                  Finding the exact product or a very similar one on the market
                  from our partner manufacturers Finding the exact product or a
                  very similar one on the market from our partner manufacturers
                </p>
              </div>

              <div>
                <div className="mb-5">
                  <SvgArrow className="h-6 group-hover:text-white duration-200" />
                </div>

                <div className="w-full | rounded-md overflow-hidden">
                  <img
                    src="/plane.png"
                    alt="plane_image"
                    className="object-cover h-full"
                  />
                </div>
              </div>
            </div>

            <div className="col-span-2 | flex | p-4 | border border-gray-100 | cursor-pointer | group hover:bg-[#FB7A1A] duration-200">
              <div className="w-1/2 | px-3">
                <h3 className="text-[#353437] group-hover:text-white duration-200 text-lg font-bold | font-gm">
                  Monitor the location
                </h3>

                <p className="py-5 | text-[#020105] group-hover:text-white duration-200 opacity-80 font-inter">
                  Finding the exact product or a very similar one on the market
                  from our partner manufacturers Finding the exact product or a
                  very similar one on the market from our partner
                  manufacturersFinding the exact product or a very similar one
                  on the market from our partner manufacturers Finding the exact
                  product or a very similar one on the market from our partner
                  manufacturersFinding the exact product or a very similar one
                  on the market from our partner manufacturers
                </p>

                <div className="pt-7">
                  <SvgArrow className="h-6 group-hover:text-white duration-200" />
                </div>
              </div>

              <div className="w-1/2 h-[35rem] | rounded-md overflow-hidden">
                <img
                  src="/man.png"
                  alt="man_image"
                  className="object-cover h-full w-full"
                />
              </div>
            </div>

            <div className="col-span-1 | fb_vertically | p-4 space-y-5 | border border-gray-100 | cursor-pointer | group hover:bg-[#FB7A1A] duration-200">
              <div>
                <h3 className="text-[#353437] group-hover:text-white duration-200 text-lg font-bold | font-gm">
                  Use catalog to order
                </h3>

                <p className="text-[#020105] group-hover:text-white duration-200 opacity-80 font-inter">
                  Finding the exact product or a very similar one on the market
                  from our partner manufacturers Finding the exact product or a
                  very similar one on the market from our partner manufacturers
                </p>
              </div>

              <div>
                <div className="mb-5">
                  <SvgArrow className="h-6 group-hover:text-white duration-200" />
                </div>

                <div className="w-full | rounded-md overflow-hidden">
                  <img
                    src="/computer.png"
                    alt="computer_image"
                    className="object-cover h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative | overflow-y-hidden">
        <div className="relative | container mx-auto z-50">
          <h3 className="relative | text-[#020105] font-gm text-2xl font-extrabold pb-7">
            What you take from Us:
          </h3>

          <div className="fcb">
            <p className="text-[#020105] font-inter w-1/3">
              Finding the exact product or a very similar one on the market from
              our partner manufacturers
            </p>

            <button className="inline-flex items-center | space-x-4 group">
              <p className="text-[#FF9A00]">Show Catalog</p>

              <svg
                height="25"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="group-hover:translate-x-1 duration-200"
              >
                <path
                  d="M16.8851 10.7373L22.1478 16L16.8851 21.2627M9.88376 16H22.1318M28.4451 16C28.4451 22.8741 22.8725 28.4467 15.9984 28.4467C9.12432 28.4467 3.55176 22.8741 3.55176 16C3.55176 9.12591 9.12432 3.55334 15.9984 3.55334C22.8725 3.55334 28.4451 9.12591 28.4451 16Z"
                  stroke="#FF9A00"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <div className="grid grid-cols-3 gap-5 | pt-10">
            {[
              {
                id: `#forcars`,
                img: `/p1.png`,
                title: `Valve cover 23397716`,
              },
              {
                id: `#fortracks`,
                img: `/p2.png`,
                title: `Valve cover 23397716`,
              },

              {
                id: `#forcars`,
                img: `/p3.png`,
                title: `Valve cover 23397716`,
              },
              {
                id: `#forcars`,
                img: `/p4.png`,
                title: `Valve cover 23397716`,
              },
              {
                id: `#forcars`,
                img: `/p5.png`,
                title: `Valve cover 23397716`,
              },
              {
                id: `#fortracks`,
                img: `/p6.png`,
                title: `Valve cover 23397716`,
              },
            ].map((product, index) => (
              <div
                className="product | rounded-md overflow-hidden | border border-gray-100 shadow-p | cursor-pointer"
                key={index}
              >
                <div className="h-64 overflow-hidden | relative">
                  <img
                    src={product.img}
                    alt="prodcut_1"
                    className="h-full w-full object-cover object-center"
                  />

                  <div className="p-3 top-0 left-0 ml-3 mt-3 | text-xs | absolute | bg-gray-200 | rounded-md">
                    {product.id}
                  </div>
                </div>

                <div className="product__info | py-5 px-5 space-y-3 | bg-[#F5F5F7]">
                  <h4 className="font-inter text-[#020105] font-semibold text-lg">
                    {product.title}
                  </h4>

                  <button className="inline-flex items-center | space-x-4 group">
                    <p className="text-[#FF9A00] text-base">Details</p>

                    <svg
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="group-hover:translate-x-1 duration-200 h-7"
                    >
                      <path
                        d="M16.8851 10.7373L22.1478 16L16.8851 21.2627M9.88376 16H22.1318M28.4451 16C28.4451 22.8741 22.8725 28.4467 15.9984 28.4467C9.12432 28.4467 3.55176 22.8741 3.55176 16C3.55176 9.12591 9.12432 3.55334 15.9984 3.55334C22.8725 3.55334 28.4451 9.12591 28.4451 16Z"
                        stroke="#FF9A00"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 | relative | overflow-y-hidden">
        <div className="relative | container mx-auto z-50">
          <h3 className="relative | text-[#020105] font-gm text-2xl font-extrabold pb-7">
            News:
          </h3>

          <div className="news | flex space-x-3">
            <div className="flex w-1/2 | space-x-3 | border-r border-gray-100 pr-4">
              <div className="img flex | h-32 w-56 flex-shrink-0 | rounded-md overflow-hidden">
                <img
                  src="/emusk.png"
                  alt="new_image"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <div className="fb_vertically">
                <div className="">
                  <h4 className="font-semibold font-inter">
                    Elon Musk buys Twitter: How will he change it?
                  </h4>
                  <p className="text-sm pt-3 font-inter text-[#353437]">
                    Questions have been raised over how the platform will change
                    after being bought by the Tesla boss.
                  </p>
                </div>

                <div className="fcb">
                  <div className="fcc">
                    <SvgCalendar className="h-5" />

                    <p className="text-xs text-[#9A999B] pl-2">18.04.2022</p>
                  </div>

                  <button className="inline-flex items-center | space-x-4 group">
                    <p className="text-[#FF9A00] text-sm">Read more</p>

                    <svg
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="group-hover:translate-x-1 duration-200 h-6"
                    >
                      <path
                        d="M16.8851 10.7373L22.1478 16L16.8851 21.2627M9.88376 16H22.1318M28.4451 16C28.4451 22.8741 22.8725 28.4467 15.9984 28.4467C9.12432 28.4467 3.55176 22.8741 3.55176 16C3.55176 9.12591 9.12432 3.55334 15.9984 3.55334C22.8725 3.55334 28.4451 9.12591 28.4451 16Z"
                        stroke="#FF9A00"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex w-1/2 | space-x-3 | border-r border-gray-100 pr-4">
              <div className="img flex | h-32 w-56 flex-shrink-0 | rounded-md overflow-hidden">
                <img
                  src="/emusk.png"
                  alt="new_image"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <div className="fb_vertically">
                <div className="">
                  <h4 className="font-semibold font-inter">
                    Elon Musk buys Twitter: How will he change it?
                  </h4>
                  <p className="text-sm pt-3 font-inter text-[#353437]">
                    Questions have been raised over how the platform will change
                    after being bought by the Tesla boss.
                  </p>
                </div>

                <div className="fcb">
                  <div className="fcc">
                    <SvgCalendar className="h-5" />

                    <p className="text-xs text-[#9A999B] pl-2">18.04.2022</p>
                  </div>

                  <button className="inline-flex items-center | space-x-4 group">
                    <p className="text-[#FF9A00] text-sm">Read more</p>

                    <svg
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="group-hover:translate-x-1 duration-200 h-6"
                    >
                      <path
                        d="M16.8851 10.7373L22.1478 16L16.8851 21.2627M9.88376 16H22.1318M28.4451 16C28.4451 22.8741 22.8725 28.4467 15.9984 28.4467C9.12432 28.4467 3.55176 22.8741 3.55176 16C3.55176 9.12591 9.12432 3.55334 15.9984 3.55334C22.8725 3.55334 28.4451 9.12591 28.4451 16Z"
                        stroke="#FF9A00"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black | py-20 | relative | overflow-hidden">
        <div className="relative | container mx-auto z-50 | space-y-7">
          <h3 className="relative | h2 text-white font-gm | text-center">
            Leave us a message <span className="py-2 block"></span> to recieve a
            callback
          </h3>

          <p className="font-exo text-white opacity-60 text-sm text-center">
            Leave a request <br />
            and we will contact you shortly
          </p>

          <div className="fcc space-x-5">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name:"
              className="w-1/5 | bg-black border border-white text-white py-3 px-3 placeholder:text-white placeholder:opacity-80"
            />
            <input
              type="text"
              name="name"
              id="name"
              placeholder="+998 __"
              className="w-1/5 | bg-black border border-white text-white py-3 px-3 placeholder:text-white placeholder:opacity-80"
            />

            <button className="w-1/5 | bg-white text-orange-primary px-10 py-3 text-lg font-bold font-poppins click:scale">
              Send
            </button>
          </div>
        </div>

        <div className="bounce w-[35rem] h-[30rem] opacity-[72%] absolute -top-48 -left-20 | blur-2xl duration-150 rounded-[50%] bg-[#FB7A1A]"></div>
      </section>

      <section className="py-20 | relative | overflow-y-hidden">
        <div className="relative | container mx-auto z-50">
          <h3 className="relative | text-[#020105] font-gm text-2xl font-extrabold pb-7">
            Partners
          </h3>

          <div className="grid grid-cols-5 gap-10">
            {[0, 1, 2, 3].map((index) => (
              <div key={index}>
                <div className="partner | fcc | border-2 border-gray-100 p-12 aspect-square">
                  <img
                    src={`/partner${index}.png`}
                    alt="partner"
                    className="h-full object-contain"
                  />
                </div>

                <div className="partner | fcc | border-2 border-gray-100 p-12 aspect-square">
                  <img
                    src={`/partner${index}.png`}
                    alt="partner"
                    className="h-full object-contain"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="fcc | pt-10">
            <button className="text-white bg-[#FB7A1A] px-16 py-3 text-lg font-bold font-poppins click:scale">
              See All
            </button>
          </div>
        </div>
      </section>

      <App.Footer />
    </App>
  );
}

export default Index;
