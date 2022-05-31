import { useRef, useEffect, useState } from "react";
import Logo from "components/Logo";
import useWindowSize from "hooks/useWindowSize";
import SvgCalendar from "icons/SvgCalendar";
import SvgArrow from "pages/home/SvgArrow";
import SvgHowWeWork from "pages/home/SvgHowWeWork";
import SvgMap from "pages/home/SvgMap";
import SvgPointer from "icons/SvgPointer";
import App from "layouts/App";
import VerticalLine from "pages/home/VerticalLine";
import HorizontalLine from "pages/home/HorizontalLine";
import CollapseCustom from "components/Collapse";
import SvgRightArrow from "icons/SvgRightArrow";
import clsx from "clsx";
import { useRouter } from "next/router";
import { Transition } from "@headlessui/react";
import { Fragment } from "react";

function Index() {
  const windowSize = useWindowSize();
  const container = useRef(false);
  const [containerWidth, setContainerWidth] = useState(0);
  const [step, setStep] = useState(1);
  const [loginOrRegister, setLoginOrRegister] = useState(``);
  const router = useRouter();
  const loginOrRegisterRef = useRef(``);

  useEffect(() => {
    setContainerWidth(container.current.clientWidth);
  }, [container, windowSize]);

  const closeLoginOrRegister = (e) => {
    if (
      loginOrRegisterRef.current &&
      !loginOrRegisterRef.current.contains(event.target)
    ) {
      setLoginOrRegister(``);
    }

    console.log(loginOrRegisterRef.current, "loginOrRegisterRef");
  };
  return (
    <App>
      <Transition
        as={Fragment}
        show={loginOrRegister === `login` || false}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-200"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <section
          className="bg-[#16171e71] fixed inset-0 z-50 w-full h-full my-16 md:pt-28"
          onClick={(e) => closeLoginOrRegister(e)}
        >
          <div
            ref={loginOrRegisterRef}
            className="flex flex-col md:flex-row | w-4/5 md:w-2/3 max-w-4xl mx-auto md:h-[28rem]"
          >
            <div className="md:w-1/2 | md:pl-5 md:py-5 bg-white relative overflow-hidden">
              <div className="h-full px-7 py-5 md:py-10 md:px-5 border-r-0 fb_vertically border border-black border-opacity-20 | space-y-7 | | relative overflow-hidden">
                <div className="fb_vertically h-full | relative">
                  <h3 className="text-xl md:text-3xl font-gm pb-7 md:pb-0">
                    Login or create a personal account
                  </h3>

                  <div className="form fb_vertically space-y-5 md:space-y-5">
                    <input
                      type="text"
                      name="email"
                      placeholder="Email:"
                      className="placeholder:opacity-30 placeholder:text-black | px-2 py-2 md:px-3 md:py-4 | border border-indigo-500 border-opacity-0 focus:border-opacity-100 duration-200 bg-[#F5F5F7]"
                    />

                    <input
                      type="text"
                      name="email"
                      placeholder="Email:"
                      className="placeholder:opacity-30 placeholder:text-black | px-2 py-2 md:px-3 md:py-4 | border border-indigo-500 border-opacity-0 focus:border-opacity-100 duration-200 bg-[#F5F5F7]"
                    />

                    <button
                      onClick={() => router.push(`/dashboard/profile`)}
                      className="border text-sm border-orange-primary bg-white text-black px-10 py-2 md:px-10 md:py-2.5 md:text-lg font-bold font-poppins active:scale-95 duration-200"
                    >
                      Login
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden md:block md:w-1/2 | pr-5 py-5 bg-[#000000] relative overflow-hidden">
              <div className="absolute -bottom-20 -left-20 opacity-50 w-3/4 h-full blur-2xl duration-500 rounded-[50%] bg-[#FB7A1A]"></div>
              <div className="absolute -top-20 -right-16 opacity-50 w-3/4 h-full blur-2xl duration-500 rounded-[50%] bg-[#FB7A1A]"></div>
              <div className="h-full  fb_vertically py-10 px-5 border-l-0 border border-white border-opacity-20 | relative overflow-hidden">
                {[
                  {
                    title: `No need to go to the shop anymore. We have favorable prices and home delivery`,
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 30 28"
                        className="h-5"
                      >
                        <path
                          fill="#000"
                          d="M18.235 14.207a.656.656 0 00.927.927 1.84 1.84 0 012.599 0 .654.654 0 00.927 0 .656.656 0 000-.927 3.152 3.152 0 00-4.453 0z"
                        ></path>
                        <path
                          fill="#000"
                          d="M29.39 22.386l-2.928-2.928a.656.656 0 00-.927 0l-.56.56-.357-.357a5.27 5.27 0 00-.434-6.95 5.228 5.228 0 00-3.722-1.541 5.228 5.228 0 00-3.721 1.541 5.228 5.228 0 00-1.542 3.722c0 1.406.548 2.728 1.542 3.722a5.229 5.229 0 003.721 1.541c1.185 0 2.31-.39 3.229-1.107l.356.356-.56.56a.656.656 0 000 .927l2.928 2.928c.394.395.92.612 1.477.612.558 0 1.083-.217 1.477-.611l.02-.021a2.091 2.091 0 000-2.954zm-11.722-3.159a3.926 3.926 0 01-1.158-2.794c0-1.056.412-2.048 1.158-2.794a3.926 3.926 0 012.794-1.158c1.056 0 2.048.411 2.795 1.158a3.956 3.956 0 010 5.588 3.926 3.926 0 01-2.795 1.158 3.926 3.926 0 01-2.794-1.158zm10.795 5.185l-.021.021a.773.773 0 01-.55.228.773.773 0 01-.55-.228l-2.464-2.464 1.12-1.12 2.464 2.464a.778.778 0 010 1.1z"
                        ></path>
                        <path
                          fill="#000"
                          d="M21.993 22.84a.656.656 0 00-.656.656v2.825h-5.99v-2.825a.656.656 0 00-.656-.656H7.957a.656.656 0 000 1.311h6.079v2.17H1.31V5.757h5.99v2.825c0 .362.294.656.656.656h6.734a.656.656 0 00.656-.656V5.757h5.99v3.665a.656.656 0 001.312 0v-4.32a.656.656 0 00-.018-.15l-.005-.017a.628.628 0 00-.021-.068l-.005-.012a.652.652 0 00-.036-.075l-.008-.013a.639.639 0 00-.04-.059l-.006-.01L19.33.62a.655.655 0 00-.517-.252H8.62a.656.656 0 000 1.311h9.874l2.157 2.767H1.998l2.354-3.02A.656.656 0 103.318.62L.138 4.7l-.006.01a.647.647 0 00-.04.058l-.007.013a.644.644 0 00-.037.075l-.004.012a.647.647 0 00-.022.068l-.004.018A.657.657 0 000 5.102v21.874c0 .363.294.656.656.656h21.337a.656.656 0 00.656-.656v-3.48a.656.656 0 00-.656-.656zM14.036 5.758v2.169H8.613v-2.17h5.423z"
                        ></path>
                      </svg>
                    ),
                  },
                  {
                    title: (
                      <>
                        Fast delivery. <br />
                        Our service will surprise you
                      </>
                    ),
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 30 22"
                        className="h-5"
                      >
                        <path
                          fill="#000"
                          d="M24.527 15.728a2.77 2.77 0 00-1.954.807 2.729 2.729 0 00-.82 1.942c0 .733.288 1.417.82 1.943a2.78 2.78 0 001.954.806c1.503 0 2.725-1.234 2.725-2.749 0-1.515-1.222-2.749-2.725-2.749zm0 4.276c-.843 0-1.551-.696-1.551-1.527 0-.83.708-1.527 1.551-1.527.831 0 1.503.684 1.503 1.527 0 .843-.672 1.527-1.503 1.527zM25.236 6.571a.593.593 0 00-.41-.159h-3.133a.613.613 0 00-.611.611v5.01c0 .335.275.61.61.61h4.973c.336 0 .611-.275.611-.61V8.678a.611.611 0 00-.201-.452L25.236 6.57zm.819 4.85h-3.751V7.628h2.284l1.466 1.32v2.473zM9.61 15.728a2.77 2.77 0 00-1.955.807 2.729 2.729 0 00-.82 1.942c0 .733.288 1.417.82 1.943.531.519 1.221.806 1.954.806 1.503 0 2.725-1.234 2.725-2.749 0-1.515-1.222-2.749-2.725-2.749zm0 4.276c-.844 0-1.552-.696-1.552-1.527 0-.83.708-1.527 1.551-1.527.831 0 1.503.684 1.503 1.527 0 .843-.672 1.527-1.503 1.527zM5.534 16.48H4.306v-1.625a.613.613 0 00-.611-.611.613.613 0 00-.611.61v2.236c0 .336.275.611.61.611h1.84c.336 0 .61-.275.61-.61a.613.613 0 00-.61-.611zM8.632 13.15a.613.613 0 00-.611-.61H.61a.613.613 0 00-.611.61c0 .336.275.611.61.611h7.41c.337 0 .612-.269.612-.61zM1.851 10.945l7.41.043c.336 0 .61-.269.617-.605a.605.605 0 00-.605-.617l-7.41-.043h-.006a.607.607 0 00-.61.605.605.605 0 00.604.617zM3.097 8.172h7.41c.336 0 .611-.275.611-.611a.613.613 0 00-.61-.611h-7.41a.613.613 0 00-.612.61c0 .337.275.612.611.612z"
                        ></path>
                        <path
                          fill="#000"
                          d="M29.773 7.347L25.4 3.725a.602.602 0 00-.39-.141h-5.144v-2.2a.613.613 0 00-.611-.61H3.694a.613.613 0 00-.61.61v4.472c0 .336.275.611.61.611.337 0 .612-.275.612-.61V1.995h14.343V16.48h-5.01a.613.613 0 00-.61.61c0 .336.275.611.61.611h7.46c.336 0 .61-.275.61-.61a.613.613 0 00-.61-.611H19.87V4.806h4.923l3.983 3.298-.042 8.363h-.636a.613.613 0 00-.61.611c0 .336.274.611.61.611h1.24c.336 0 .611-.269.611-.605l.05-9.26a.646.646 0 00-.227-.477z"
                        ></path>
                      </svg>
                    ),
                  },
                  {
                    title: (
                      <>
                        Facilities for you. <br /> Quick registration and a
                        guarantee
                      </>
                    ),
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 26 25"
                        className="h-5"
                      >
                        <path
                          fill="#000"
                          d="M1.875 2.188a.312.312 0 01.313-.313h16.875a.313.313 0 01.312.313v12.5a.938.938 0 001.875 0v-12.5A2.188 2.188 0 0019.062 0H2.188A2.188 2.188 0 000 2.188v20.625C0 24.02.98 25 2.188 25h8.75a.938.938 0 000-1.875h-8.75a.312.312 0 01-.313-.313V2.188z"
                        ></path>
                        <path
                          fill="#000"
                          d="M5.313 6.25a.937.937 0 100 1.875h10.625a.937.937 0 000-1.875H5.312zm-.938 5.938a.937.937 0 01.938-.938h5.625a.938.938 0 010 1.875H5.311a.938.938 0 01-.937-.938zm20.35 5.662a.937.937 0 10-1.325-1.325l-6.212 6.213-2.463-2.463A.937.937 0 1013.4 21.6l3.125 3.125a.937.937 0 001.325 0l6.875-6.875z"
                        ></path>
                      </svg>
                    ),
                  },
                  {
                    title: (
                      <>
                        Credit. <br /> Without prepayment for 12 or 18 months
                      </>
                    ),
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 30 22"
                        className="h-5"
                      >
                        <path
                          fill="#000"
                          d="M27.326 0H2.787C1.283 0 .001 1.186.001 2.688v16.37c0 1.501 1.282 2.76 2.787 2.76h24.54c1.505 0 2.673-1.259 2.673-2.76V2.687C30 1.186 28.832 0 27.326 0zm1.583 19.057c0 .901-.678 1.67-1.582 1.67H2.787c-.904 0-1.696-.77-1.696-1.67V2.687c0-.9.792-1.596 1.696-1.596h24.54c.903 0 1.582.696 1.582 1.597v16.37z"
                        ></path>
                        <path
                          fill="#000"
                          d="M25.147 3.818h-3.272c-.903 0-1.693.698-1.693 1.6V8.69c0 .902.79 1.673 1.693 1.673h3.272c.903 0 1.58-.77 1.58-1.673V5.418c0-.902-.677-1.6-1.58-1.6zm.49 4.91a.545.545 0 01-.546.545h-3.273a.545.545 0 01-.546-.545V5.454c0-.3.245-.545.546-.545h3.273c.301 0 .545.244.545.545v3.274zM14.238 13.637H3.875a.545.545 0 100 1.09h10.363a.545.545 0 100-1.09zM14.238 16.363H3.875a.545.545 0 100 1.091h10.363a.545.545 0 100-1.09z"
                        ></path>
                      </svg>
                    ),
                  },
                ].map((list, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-5 | relative"
                  >
                    <div className="icon__wrapper shrink-0 | bg-white h-12 w-12 rounded-full | fcc">
                      {list.icon}
                    </div>

                    <p className="text-[#FFFFFF] font-exo text-sm">
                      {list.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </Transition>

      <Transition
        as={Fragment}
        show={loginOrRegister === `register` || false}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-200"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <section
          onClick={(e) => closeLoginOrRegister(e)}
          className="bg-[#16171e71] fixed inset-0 z-50 w-full h-full my-16 md:pt-28"
        >
          <div
            ref={loginOrRegisterRef}
            className="flex flex-col md:flex-row | w-4/5 md:w-2/3 max-w-4xl mx-auto md:h-[28rem]"
          >
            <div className="md:w-1/2 | md:pl-5 md:py-5 bg-white relative overflow-hidden">
              <div className="h-full py-10 px-5 border-r-0 fb_vertically border border-black border-opacity-20 | space-y-7 | | relative overflow-hidden">
                {step === 1 && (
                  <div className="flex flex-col space-y-5 md:space-y-10 h-full | relative">
                    <h3 className="text-xl md:text-3xl font-gm pb-3 md:pb-0">
                      Login or create a personal account
                    </h3>

                    <div className="form fb_vertically space-y-5">
                      <input
                        type="text"
                        name="email"
                        placeholder="Email:"
                        className="placeholder:opacity-30 placeholder:text-black | px-2 py-2 md:px-3 md:py-4 | border border-indigo-500 border-opacity-0 focus:border-opacity-100 duration-200 bg-[#F5F5F7]"
                      />

                      <button
                        onClick={() => setStep(2)}
                        className="border text-sm border-orange-primary bg-white text-black px-10 py-2 md:px-10 md:py-2.5 md:text-lg font-bold font-poppins active:scale-95 duration-200"
                      >
                        Get Activation Code
                      </button>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="flex flex-col space-y-5 md:space-y-10 h-full | relative">
                    <h3 className="text-xl md:text-3xl font-gm pb-3 md:pb-0">
                      Enter activation code
                    </h3>

                    <div className="form fb_vertically space-y-5">
                      <input
                        type="text"
                        name="verification__code"
                        placeholder="___ ___"
                        className="placeholder:opacity-30 placeholder:text-black | px-2 py-2 md:px-3 md:py-4 | border border-indigo-500 border-opacity-0 focus:border-opacity-100 duration-200 bg-[#F5F5F7]"
                      />

                      <button
                        onClick={() => router.push(`/dashboard/profile`)}
                        className="border text-sm border-orange-primary bg-white text-black px-10 py-2 md:px-10 md:py-2.5 md:text-lg font-bold font-poppins active:scale-95 duration-200"
                      >
                        Enter
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="hidden md:block w-1/2 | pr-5 py-5 bg-[#000000] relative overflow-hidden">
              <div className="absolute -bottom-20 -left-20 opacity-50 w-3/4 h-full blur-2xl duration-500 rounded-[50%] bg-[#FB7A1A]"></div>
              <div className="absolute -top-20 -right-16 opacity-50 w-3/4 h-full blur-2xl duration-500 rounded-[50%] bg-[#FB7A1A]"></div>
              <div className="h-full  fb_vertically py-10 px-5 border-l-0 border border-white border-opacity-20 | relative overflow-hidden">
                {[
                  {
                    title: `No need to go to the shop anymore. We have favorable prices and home delivery`,
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 30 28"
                        className="h-5"
                      >
                        <path
                          fill="#000"
                          d="M18.235 14.207a.656.656 0 00.927.927 1.84 1.84 0 012.599 0 .654.654 0 00.927 0 .656.656 0 000-.927 3.152 3.152 0 00-4.453 0z"
                        ></path>
                        <path
                          fill="#000"
                          d="M29.39 22.386l-2.928-2.928a.656.656 0 00-.927 0l-.56.56-.357-.357a5.27 5.27 0 00-.434-6.95 5.228 5.228 0 00-3.722-1.541 5.228 5.228 0 00-3.721 1.541 5.228 5.228 0 00-1.542 3.722c0 1.406.548 2.728 1.542 3.722a5.229 5.229 0 003.721 1.541c1.185 0 2.31-.39 3.229-1.107l.356.356-.56.56a.656.656 0 000 .927l2.928 2.928c.394.395.92.612 1.477.612.558 0 1.083-.217 1.477-.611l.02-.021a2.091 2.091 0 000-2.954zm-11.722-3.159a3.926 3.926 0 01-1.158-2.794c0-1.056.412-2.048 1.158-2.794a3.926 3.926 0 012.794-1.158c1.056 0 2.048.411 2.795 1.158a3.956 3.956 0 010 5.588 3.926 3.926 0 01-2.795 1.158 3.926 3.926 0 01-2.794-1.158zm10.795 5.185l-.021.021a.773.773 0 01-.55.228.773.773 0 01-.55-.228l-2.464-2.464 1.12-1.12 2.464 2.464a.778.778 0 010 1.1z"
                        ></path>
                        <path
                          fill="#000"
                          d="M21.993 22.84a.656.656 0 00-.656.656v2.825h-5.99v-2.825a.656.656 0 00-.656-.656H7.957a.656.656 0 000 1.311h6.079v2.17H1.31V5.757h5.99v2.825c0 .362.294.656.656.656h6.734a.656.656 0 00.656-.656V5.757h5.99v3.665a.656.656 0 001.312 0v-4.32a.656.656 0 00-.018-.15l-.005-.017a.628.628 0 00-.021-.068l-.005-.012a.652.652 0 00-.036-.075l-.008-.013a.639.639 0 00-.04-.059l-.006-.01L19.33.62a.655.655 0 00-.517-.252H8.62a.656.656 0 000 1.311h9.874l2.157 2.767H1.998l2.354-3.02A.656.656 0 103.318.62L.138 4.7l-.006.01a.647.647 0 00-.04.058l-.007.013a.644.644 0 00-.037.075l-.004.012a.647.647 0 00-.022.068l-.004.018A.657.657 0 000 5.102v21.874c0 .363.294.656.656.656h21.337a.656.656 0 00.656-.656v-3.48a.656.656 0 00-.656-.656zM14.036 5.758v2.169H8.613v-2.17h5.423z"
                        ></path>
                      </svg>
                    ),
                  },
                  {
                    title: (
                      <>
                        Fast delivery. <br />
                        Our service will surprise you
                      </>
                    ),
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 30 22"
                        className="h-5"
                      >
                        <path
                          fill="#000"
                          d="M24.527 15.728a2.77 2.77 0 00-1.954.807 2.729 2.729 0 00-.82 1.942c0 .733.288 1.417.82 1.943a2.78 2.78 0 001.954.806c1.503 0 2.725-1.234 2.725-2.749 0-1.515-1.222-2.749-2.725-2.749zm0 4.276c-.843 0-1.551-.696-1.551-1.527 0-.83.708-1.527 1.551-1.527.831 0 1.503.684 1.503 1.527 0 .843-.672 1.527-1.503 1.527zM25.236 6.571a.593.593 0 00-.41-.159h-3.133a.613.613 0 00-.611.611v5.01c0 .335.275.61.61.61h4.973c.336 0 .611-.275.611-.61V8.678a.611.611 0 00-.201-.452L25.236 6.57zm.819 4.85h-3.751V7.628h2.284l1.466 1.32v2.473zM9.61 15.728a2.77 2.77 0 00-1.955.807 2.729 2.729 0 00-.82 1.942c0 .733.288 1.417.82 1.943.531.519 1.221.806 1.954.806 1.503 0 2.725-1.234 2.725-2.749 0-1.515-1.222-2.749-2.725-2.749zm0 4.276c-.844 0-1.552-.696-1.552-1.527 0-.83.708-1.527 1.551-1.527.831 0 1.503.684 1.503 1.527 0 .843-.672 1.527-1.503 1.527zM5.534 16.48H4.306v-1.625a.613.613 0 00-.611-.611.613.613 0 00-.611.61v2.236c0 .336.275.611.61.611h1.84c.336 0 .61-.275.61-.61a.613.613 0 00-.61-.611zM8.632 13.15a.613.613 0 00-.611-.61H.61a.613.613 0 00-.611.61c0 .336.275.611.61.611h7.41c.337 0 .612-.269.612-.61zM1.851 10.945l7.41.043c.336 0 .61-.269.617-.605a.605.605 0 00-.605-.617l-7.41-.043h-.006a.607.607 0 00-.61.605.605.605 0 00.604.617zM3.097 8.172h7.41c.336 0 .611-.275.611-.611a.613.613 0 00-.61-.611h-7.41a.613.613 0 00-.612.61c0 .337.275.612.611.612z"
                        ></path>
                        <path
                          fill="#000"
                          d="M29.773 7.347L25.4 3.725a.602.602 0 00-.39-.141h-5.144v-2.2a.613.613 0 00-.611-.61H3.694a.613.613 0 00-.61.61v4.472c0 .336.275.611.61.611.337 0 .612-.275.612-.61V1.995h14.343V16.48h-5.01a.613.613 0 00-.61.61c0 .336.275.611.61.611h7.46c.336 0 .61-.275.61-.61a.613.613 0 00-.61-.611H19.87V4.806h4.923l3.983 3.298-.042 8.363h-.636a.613.613 0 00-.61.611c0 .336.274.611.61.611h1.24c.336 0 .611-.269.611-.605l.05-9.26a.646.646 0 00-.227-.477z"
                        ></path>
                      </svg>
                    ),
                  },
                  {
                    title: (
                      <>
                        Facilities for you. <br /> Quick registration and a
                        guarantee
                      </>
                    ),
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 26 25"
                        className="h-5"
                      >
                        <path
                          fill="#000"
                          d="M1.875 2.188a.312.312 0 01.313-.313h16.875a.313.313 0 01.312.313v12.5a.938.938 0 001.875 0v-12.5A2.188 2.188 0 0019.062 0H2.188A2.188 2.188 0 000 2.188v20.625C0 24.02.98 25 2.188 25h8.75a.938.938 0 000-1.875h-8.75a.312.312 0 01-.313-.313V2.188z"
                        ></path>
                        <path
                          fill="#000"
                          d="M5.313 6.25a.937.937 0 100 1.875h10.625a.937.937 0 000-1.875H5.312zm-.938 5.938a.937.937 0 01.938-.938h5.625a.938.938 0 010 1.875H5.311a.938.938 0 01-.937-.938zm20.35 5.662a.937.937 0 10-1.325-1.325l-6.212 6.213-2.463-2.463A.937.937 0 1013.4 21.6l3.125 3.125a.937.937 0 001.325 0l6.875-6.875z"
                        ></path>
                      </svg>
                    ),
                  },
                  {
                    title: (
                      <>
                        Credit. <br /> Without prepayment for 12 or 18 months
                      </>
                    ),
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 30 22"
                        className="h-5"
                      >
                        <path
                          fill="#000"
                          d="M27.326 0H2.787C1.283 0 .001 1.186.001 2.688v16.37c0 1.501 1.282 2.76 2.787 2.76h24.54c1.505 0 2.673-1.259 2.673-2.76V2.687C30 1.186 28.832 0 27.326 0zm1.583 19.057c0 .901-.678 1.67-1.582 1.67H2.787c-.904 0-1.696-.77-1.696-1.67V2.687c0-.9.792-1.596 1.696-1.596h24.54c.903 0 1.582.696 1.582 1.597v16.37z"
                        ></path>
                        <path
                          fill="#000"
                          d="M25.147 3.818h-3.272c-.903 0-1.693.698-1.693 1.6V8.69c0 .902.79 1.673 1.693 1.673h3.272c.903 0 1.58-.77 1.58-1.673V5.418c0-.902-.677-1.6-1.58-1.6zm.49 4.91a.545.545 0 01-.546.545h-3.273a.545.545 0 01-.546-.545V5.454c0-.3.245-.545.546-.545h3.273c.301 0 .545.244.545.545v3.274zM14.238 13.637H3.875a.545.545 0 100 1.09h10.363a.545.545 0 100-1.09zM14.238 16.363H3.875a.545.545 0 100 1.091h10.363a.545.545 0 100-1.09z"
                        ></path>
                      </svg>
                    ),
                  },
                ].map((list, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-5 | relative"
                  >
                    <div className="icon__wrapper shrink-0 | bg-white h-12 w-12 rounded-full | fcc">
                      {list.icon}
                    </div>

                    <p className="text-[#FFFFFF] font-exo text-sm">
                      {list.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </Transition>

      <section className="2xl:h-auto overflow-x-hidden bg-[#000000] | relative">
        <App.Header
          dark={true}
          onRegiserClick={() => setLoginOrRegister(`register`)}
          onLoginClick={() => setLoginOrRegister(`login`)}
        />

        <VerticalLine opacity={windowSize.width < 640 ? 30 : 60} />

        <div
          ref={container}
          className="px-5 | bg-[#000000] relative container mx-auto w-full | overflow-hidden overflow-y-hidden"
        >
          <div className="w-full | py-5 md:py-10 flex flex-col | space-y-3 md:space-y-5">
            <h1 className="font-gm font-bold text-white text-xl md:text-4xl uppercase">
              Need <span className="text-orange-primary">to ship</span> a
              package?
            </h1>

            <h1 className="font-gm font-bold text-xl md:text-4xl text-white uppercase">
              Alpha Logistics has a solution for you
            </h1>
          </div>
        </div>

        <div className="fcc box-border md:px-5 md:pr-10">
          <div className="w-full lg:max-w-[1600px] mx-auto fcc h-44 md:h-[500px] overflow-hidden relative">
            <img src="/traffic.png" alt="alpha__logistics" className="w-full" />
            <div className="w-2/5 | absolute left-5 bottom-5 md:left-32 md:bottom-16">
              <a className="z-50 block text-[8px] md:text-base w-16 h-16 md:w-32 md:h-32 fcc rounded-full font-exo font-semibold | bg-[#FB7A1A] text-white | click:scale">
                Order now
              </a>
            </div>
          </div>
        </div>

        <div className="bg-[#020105] overflow-y-hidden">
          <div className="container mx-auto">
            <ul className="flex items-center flex-wrap | menu__list relative group px-5 md:px-0">
              <li
                id="menu__link__1"
                className="md:flex-1 py-5 w-1/2 md:w-1/4 fcc h-14 md:h-24 z-10 | cursor-pointer | relative |"
              >
                <div className="md:inline-flex flex items-center justify-between md:justify-center px-2 md:space-x-4 absolute inset-0">
                  <p className="font-bold font-exo text-white text-xs md:text-base">
                    Order Product
                  </p>

                  <SvgPointer className="h-5  md:h-6 text-white duration-150" />
                </div>
              </li>
              <li
                id="menu__link__2"
                className="md:flex-1 py-5 w-1/2 md:w-1/4 fcc h-14 md:h-24 z-10 | cursor-pointer | relative | group"
              >
                <div className="md:inline-flex flex items-center justify-between md:justify-center px-2 md:space-x-4 absolute inset-0">
                  <p className="font-bold font-exo text-white text-xs md:text-base">
                    Show order location
                  </p>

                  <SvgPointer className="h-5  md:h-6 text-white duration-150" />
                </div>
              </li>{" "}
              <li
                id="menu__link__3"
                className="menu__link md:flex-1 py-5 w-1/2 md:w-1/4 fcc h-14 md:h-24 z-10 | cursor-pointer | relative | group"
              >
                <div className="md:inline-flex flex items-center justify-between md:justify-center px-2 md:space-x-4 absolute inset-0">
                  <p className="font-bold font-exo text-white text-xs md:text-base">
                    How we work
                  </p>

                  <SvgPointer className="h-5  md:h-6 text-white duration-150" />
                </div>
              </li>
              <li
                id="menu__link__4"
                className="menu__link md:flex-1 py-5 w-1/2 md:w-1/4 fcc h-14 md:h-24 z-10 | cursor-pointer | relative | group"
              >
                <div className="md:inline-flex flex items-center justify-between md:justify-center px-2 md:space-x-4 absolute inset-0">
                  <p className="font-bold font-exo text-white text-xs md:text-base">
                    Login to Account
                  </p>

                  <SvgPointer className="h-5  md:h-6 text-white duration-150" />
                </div>
              </li>
              <div
                id="bgbg"
                className="absolute left-0 opacity-0 group-hover:opacity-70 w-1/4 h-[10rem] blur-2xl duration-500 rounded-[50%] bg-[#FB7A1A]"
              ></div>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#000000] text-white | overflow-x-hidden | relative">
        <HorizontalLine opacity={windowSize.width < 640 ? 30 : 60} />
        <VerticalLine opacity={windowSize.width < 640 ? 30 : 60} />

        <div className="container mx-auto | px-5 py-10 md:py-12 | fc flex-col md:flex-row  | font-exo">
          <div className="w-full md:w-1/5 | md:space-y-3  md:flex-col flex justify-between items-">
            <div className="space-y-3">
              <p className="opacity-50 text-base">About company</p>

              <Logo className="h-8" />
            </div>

            <button className="inline-flex items-center | space-x-4 group">
              <p className="text-[#FF9A00] md:text-base text-sm">Read more</p>

              <SvgPointer className="h-6 group-hover:translate-x-1 text-orange-primary duration-150" />
            </button>
          </div>

          <div className="w-full md:w-4/5 text-white text-opacity-70 | space-y-7">
            <p className="font-inter text-xs md:text-base pt-8">
              Phoenix Global Trading is an international operating global
              company. After having almost a decade of experience in sales,
              import and export spheres, our company proudly becomes a part of
              Phoenix Group. This gave us a great deal of opportunities and
              prospective development plan.
            </p>

            <ul className="flex justify-between md:space-x-44">
              <li>
                <div className="flex items-center justify-between flex-col md:flex-row md:space-x-5 space-y-2 md:space-y-0">
                  <svg
                    className="h-4 md:h-7"
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
                <div className="flex items-center justify-between flex-col md:flex-row md:space-x-5 space-y-2 md:space-y-0">
                  <svg
                    className="h-4 md:h-7"
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
                <div className="flex items-center justify-between flex-col md:flex-row md:space-x-5 space-y-2 md:space-y-0">
                  <svg
                    className="h-4 md:h-7"
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

      <section className="bg-[#000000] | px-5 md:py-20 | relative | overflow-y-hidden">
        <VerticalLine opacity={windowSize.width < 640 ? 30 : 60} />

        <div className="relative | container mx-auto z-50">
          <h3 className="relative | text-white font-gm text-2xl font-extrabold | pb-7">
            Our services
          </h3>
          <div className="flex flex-col md:flex-row">
            <div className="service__img__wrapper | w-full md:w-1/2 h-40 md:h-80">
              <img
                src="/service1.png"
                alt="service__img"
                className="service__img w-full h-full object-cover"
              />
            </div>

            <ul className="relative | w-full md:w-1/2">
              <CollapseCustom>
                <li className="flex-col | py-7 ml-1 md:ml-7 | text-white | border-y border-gray-400/25">
                  <CollapseCustom.Button>
                    <div className="font-exo md:text-lg | flex items-center | w-full space-x-3">
                      <span className="text-[#C2C2C3]">01</span>

                      <h4 className="font-bold">Easy researching</h4>
                    </div>
                  </CollapseCustom.Button>

                  <CollapseCustom.Content>
                    <p className="w-full | font-inter opacity-60 text-sm leading-6 pt-5">
                      Finding the exact product or a very similar one on the
                      market from our partner manufacturers
                    </p>
                  </CollapseCustom.Content>
                </li>
              </CollapseCustom>

              <CollapseCustom>
                <li className="flex-col | py-7 ml-1 md:ml-7 | text-white | border-y border-gray-400/25">
                  <CollapseCustom.Button>
                    <div className="font-exo md:text-lg | flex items-center | w-full space-x-3">
                      <span className="text-[#C2C2C3]">02</span>

                      <h4 className="font-bold">More other products</h4>
                    </div>
                  </CollapseCustom.Button>

                  <CollapseCustom.Content>
                    <p className="w-full | font-inter opacity-60 text-sm leading-6 pt-5">
                      Finding the exact product or a very similar one on the
                      market from our partner manufacturers
                    </p>
                  </CollapseCustom.Content>
                </li>
              </CollapseCustom>

              <CollapseCustom>
                <li className="flex-col | py-7 ml-1 md:ml-7 | text-white | border-y border-gray-400/25">
                  <CollapseCustom.Button>
                    <div className="font-exo md:text-lg | flex items-center | w-full space-x-3">
                      <span className="text-[#C2C2C3]">03</span>

                      <h4 className="font-bold">Deliver on 24 countries</h4>
                    </div>
                  </CollapseCustom.Button>

                  <CollapseCustom.Content>
                    <p className="w-full | font-inter opacity-60 text-sm leading-6 pt-5">
                      Finding the exact product or a very similar one on the
                      market from our partner manufacturers
                    </p>
                  </CollapseCustom.Content>
                </li>
              </CollapseCustom>
            </ul>
          </div>
        </div>

        <div className="bounce md:w-[35rem] md:h-[30rem] w-[25rem] h-[25rem] opacity-50 md:opacity-[72%] absolute -bottom-48 -left-56 | blur-2xl duration-150 rounded-[50%] bg-[#FB7A1A]"></div>
      </section>

      <section className="relative | overflow-y-hidden py-5 md:pt-20">
        <VerticalLine opacity={10} />
        <div className="relative | container mx-auto z-50">
          <h3 className="relative | text-[#020105] px-5 md:px-0 font-gm text-2xl font-extrabold pb-7">
            How we work
          </h3>

          <div className="grid grid-cols-1 px-5 md:px-0 md:grid-cols-2 gap-3">
            <p className="text-[#353437] font-inter text-xs">
              We know how difficult it can be to organize cargo transportation
              on your own and invest in time. Therefore, our specialists take on
              these responsibilities and all responsibility for the entire
              process.
            </p>

            <p className="text-[#353437] font-inter text-xs">
              Over the current year, we have already completed 834 flights and
              transported 15,846 tons of cargo. All cargoes of our clients are
              insured, in case the customer's cargo costs more, we will insure
              it up to the required amount.
            </p>

            <p className="text-[#353437] font-inter text-xs">
              We will develop the optimal route, select the necessary transport,
              insure the cargo and provide services for careful loading and
              unloading.
            </p>
          </div>

          <SvgHowWeWork className="w-full px-5 md:px-0 pt-10 md:pt-20" />
        </div>

        <div
          className="relative w-full overflow-hidden h-[150px] md:h-[500px] mt-10 md:mt-16 rounded-l-md"
          style={{
            paddingLeft:
              (+windowSize.width - +containerWidth) / 2 +
              (windowSize.width < 640 ? 20 : 80),
          }}
        >
          <div className="absolute h-full w-full overflow-hidden">
            <img
              src="/trucks.png"
              alt="trucks"
              className="w-full overflow-hidden"
            />
          </div>
        </div>
      </section>

      {/* <section className="bg-black | py-20 | relative | overflow-hidden">
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
			</section> */}

      <section className="py-5 md:py-20 | relative | overflow-y-hidden">
        <VerticalLine opacity={10} />

        <div className="relative | container mx-auto z-50">
          <h3 className="relative| px-5 md:pb-7 md:px-0 | text-[#020105] font-gm text-2xl font-extrabold">
            Landmark of branches
          </h3>

          <SvgMap className="w-full pt-8 md:pt-20" />
        </div>
      </section>

      <section className="md:py-20 | relative | overflow-y-hidden">
        <VerticalLine opacity={10} />

        <div className="relative | px-5 md:pb-7 container mx-auto z-50">
          <h3 className="relative | text-[#020105] font-gm text-2xl font-extrabold pb-7">
            What you take from Us:
          </h3>

          <div className="grid grod-cols-1 md:grid-cols-4 space-y-3 md:space-y-0">
            <div className="md:col-span-1 | fb_vertically | p-4 space-y-5 | border border-gray-100 | cursor-pointer | group hover:bg-[#FB7A1A] duration-200">
              <div>
                <h3 className="text-[#353437] group-hover:text-white duration-200 text-lg font-bold | font-gm">
                  Monitor the location
                </h3>

                <p className="py-5 md:py-0 text-sm md:text-base text-[#020105] group-hover:text-white duration-200 opacity-80 font-inter">
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
                    className="object-cover h-full w-full"
                  />
                </div>
              </div>
            </div>

            <div className="md:col-span-2 | flex md:flex-row flex-col | p-4 | border border-gray-100 | cursor-pointer | group hover:bg-[#FB7A1A] duration-200">
              <div className="md:w-1/2 | md:px-3">
                <h3 className="text-[#353437] group-hover:text-white duration-200 text-lg font-bold | font-gm">
                  Monitor the location
                </h3>

                <p className="py-5 | text-sm md:text-base text-[#020105] group-hover:text-white duration-200 opacity-80 font-inter">
                  Finding the exact product or a very similar one on the market
                  from our partner manufacturers Finding the exact product or a
                  very similar one on the market from our partner
                  manufacturersFinding the exact product or a very similar one
                  on the market from our partner manufacturers Finding the exact
                  product or a very similar one on the market from our partner
                  manufacturersFinding the exact product or a very similar one
                  on the market from our partner manufacturers
                </p>

                <div className="py-3 md:pt-7">
                  <SvgArrow className="h-6 group-hover:text-white duration-200" />
                </div>
              </div>

              <div className="w-full aspect-square object-center md:w-1/2 md:h-[35rem] | rounded-md overflow-hidden">
                <img
                  src="/man.png"
                  alt="man_image"
                  className="object-cover h-full w-full"
                />
              </div>
            </div>

            <div className="md:col-span-1 | fb_vertically | p-4 space-y-5 | border border-gray-100 | cursor-pointer | group hover:bg-[#FB7A1A] duration-200">
              <div>
                <h3 className="text-[#353437] group-hover:text-white duration-200 text-lg font-bold | font-gm">
                  Use catalog to order
                </h3>

                <p className="py-5 md:py-0 text-[#020105] group-hover:text-white duration-200 opacity-80 font-inter">
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
                    className="object-cover h-full w-full "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-5 md:py-0 md:pb-20 | overflow-y-hidden">
        <div className="relative | px-5 container mx-auto z-50">
          <h3 className="relative | text-[#020105] font-gm text-2xl font-extrabold pb-5 md:pb-7">
            Products
          </h3>

          <div className="flex md:items-center md:justify-between flex-col md:flex-row">
            <p className="text-[#020105] font-inter md:w-1/3 pb-5 md:pb-0">
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

          <div className="grid md:grid-cols-3 gap-5 | pt-10 | relative">
            {[
              {
                id: `#forcars`,
                img: `/p1.png`,
                title: `Трубка системы рециркуляции (EGR) Hyundai-Kia 28417-2A690`,
              },
              {
                id: `#fortracks`,
                img: `/p2.png`,
                title: `Трубка системы рециркуляции (EGR) Hyundai-Kia 28417-2A690`,
              },

              {
                id: `#forcars`,
                img: `/p3.png`,
                title: `Трубка системы рециркуляции (EGR) Hyundai-Kia 28417-2A690`,
              },
              {
                id: `#forcars`,
                img: `/p4.png`,
                title: `Трубка системы рециркуляции (EGR) Hyundai-Kia 28417-2A690`,
              },
              {
                id: `#forcars`,
                img: `/p5.png`,
                title: `Трубка системы рециркуляции (EGR) Hyundai-Kia 28417-2A690`,
              },
              {
                id: `#fortracks`,
                img: `/p6.png`,
                title: `Трубка системы рециркуляции (EGR) Hyundai-Kia 28417-2A690`,
              },
            ].map((product, index) => (
              <div
                className="relative product | rounded-md overflow-hidden | shadow-p | cursor-pointer"
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

                <div className="product__info | py-5 px-5 space-y-3">
                  <h4 className="font-inter text-[#020105]/90 font-[600]">
                    {product.title}
                  </h4>

                  <p className="text-[#5D5D5F] text-sm">
                    По запросу покажем состояние запчасти по видео 284172a690
                  </p>

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

        <VerticalLine opacity={10} />
      </section>

      <section className="py-5 md:py-20 | relative | overflow-y-hidden bg-[#000000]">
        <VerticalLine opacity={60} />

        <div className="relative | px-5 container mx-auto z-50">
          <div className="fcb pb-12">
            <h3 className="relative | text-white font-gm text-2xl font-extrabold">
              News:
            </h3>

            <button className="inline-flex items-center | space-x-4 group">
              <p className="text-[#FF9A00]">Show all news</p>

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

          <div className="news | flex flex-col md:flex-row">
            {[
              {
                title: `Elon Musk buys Twitter: How will he change it?`,
                img: `/emusk.png`,
              },
              {
                title: `Open-source encyclopedia puts 10,000 years of Indian...`,
                img: `/service1.png`,
              },
              {
                title: `Australia will host the next Quad summit in 2023, Prime... `,
                img: `/service2.png`,
              },
            ].map((news, index) => (
              <div
                className={clsx({
                  "flex w-full md:w-1/3 | border-t border-[#353437] py-7 px-3 group cursor-pointer": true,
                  "border-x": index === 1,
                })}
                key={index}
              >
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <h4 className="w-2/3 font-bold font-inter text-white group-hover:text-orange-primary duration-200">
                      {news.title}
                    </h4>

                    <SvgRightArrow className="h-5 group-hover:translate-x-1 duration-200" />
                  </div>
                  <p className="text-sm py-2 font-inter text-white font-[400]">
                    A 20-year veteran of Russia's diplomatic service announced
                    his resignation Monday in protest of his country's war on
                    Ukraine, multiple media outlets reported. A 20-year veteran
                    of Russia's diplomatic service announced his resignation...
                  </p>

                  <div className="fcb  pt-1 pb-2">
                    <div className="fcc">
                      <SvgCalendar className="h-5" />

                      <p className="text-xs text-[#9A999B] pl-2">18.04.2022</p>
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
            ))}
          </div>
        </div>

        <div className="title | py-7 md:pt-20 | relative group">
          <div className="absolute inset-0 fcc cursor-pointer">
            <button className="bg-[#F37D26] group-hover:-rotate-[30deg] group-hover:bg-white duration-500 group-hover:scale-110 w-20 h-20 md:w-32 md:h-32 fcc rounded-full mb-10">
              <svg
                viewBox="0 0 96 75"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 md:h-12 text-white group-hover:text-[#F37D26] duration-500"
              >
                <path
                  d="M60.2422 0.366068C59.8575 -0.0302643 59.2244 -0.0397514 58.8281 0.344877C58.4318 0.729506 58.4223 1.3626 58.8069 1.75893L60.2422 0.366068ZM94.401 37.0002L95.1261 37.6889C95.4955 37.2999 95.4923 36.6887 95.1187 36.3037L94.401 37.0002ZM58.7995 73.0301C58.4191 73.4305 58.4354 74.0635 58.8359 74.4438C59.2363 74.8242 59.8693 74.8079 60.2496 74.4074L58.7995 73.0301ZM1.95312 36.0002C1.40084 36.0002 0.953125 36.4479 0.953125 37.0002C0.953125 37.5525 1.40084 38.0002 1.95312 38.0002V36.0002ZM94.38 38.0002C94.9323 38.0002 95.38 37.5525 95.38 37.0002C95.38 36.4479 94.9323 36.0002 94.38 36.0002V38.0002ZM58.8069 1.75893L93.6834 37.6966L95.1187 36.3037L60.2422 0.366068L58.8069 1.75893ZM93.676 36.3115L58.7995 73.0301L60.2496 74.4074L95.1261 37.6889L93.676 36.3115ZM1.95312 38.0002H94.38V36.0002H1.95312V38.0002Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 1920 201"
            className="w-full text-white group-hover:text-orange-primary duration-500"
          >
            <path
              fill="currentColor"
              d="M47.719 201c-21.614 0-37.269-4.747-46.965-14.241-9.696-9.494-14.544-24.846-14.544-46.056V85.254c0-21.816 5.353-37.673 16.059-47.571 10.706-10.1 25.856-15.15 45.45-15.15h101.202c13.938 0 24.543.808 31.815 2.424 7.474 1.414 11.211 2.929 11.211 4.545l-9.393 37.875c-5.05-.606-14.948-1.212-29.694-1.818-14.544-.808-32.926-1.212-55.146-1.212H69.535c-9.494 0-15.958 1.818-19.392 5.454-3.232 3.434-4.848 8.787-4.848 16.059v51.813c0 6.868 1.414 12.221 4.242 16.059 3.03 3.636 9.696 5.454 19.998 5.454h49.692c7.474-.202 14.039-.404 19.695-.606v-23.028l-12.12.303-39.693 3.03V97.071h109.686v91.203l3.03 6.363c0 1.616-4.242 3.131-12.726 4.545-8.484 1.212-22.826 1.818-43.026 1.818H47.719zm234.813 0c-13.332 0-23.634-1.919-30.906-5.757-7.07-3.838-11.918-9.09-14.544-15.756-2.626-6.868-3.939-14.746-3.939-23.634V110.1c0-8.08 1.313-15.453 3.939-22.119 2.828-6.868 7.777-12.322 14.847-16.362 7.07-4.242 17.271-6.363 30.603-6.363h62.721c15.756 0 27.775 1.919 36.057 5.757 8.484 3.636 14.241 8.888 17.271 15.756 3.232 6.666 4.848 14.443 4.848 23.331v38.784h-53.025c-18.18 0-32.017-.404-41.511-1.212-9.292-.808-15.857-1.313-19.695-1.515v4.545c-.202 8.08 4.646 12.12 14.544 12.12h9.393c16.16 0 31.108-.303 44.844-.909 13.736-.808 23.937-1.515 30.603-2.121l18.18 28.785c0 2.02-1.717 3.939-5.151 5.757-3.434 1.818-9.494 3.434-18.18 4.848-8.484 1.212-20.604 1.818-36.36 1.818h-64.539zm6.666-81.204h58.176v-4.242c0-4.04-.404-6.868-1.212-8.484-.606-1.616-2.727-2.626-6.363-3.03-3.636-.404-9.797-.606-18.483-.606h-17.574c-9.696 0-14.544 4.04-14.544 12.12v4.242zM489.81 201c-15.352 0-25.856-3.232-31.512-9.696-5.656-6.464-8.484-16.16-8.484-29.088v-58.782h-24.846V65.256h12.726c3.434 0 6.161-.606 8.181-1.818 2.222-1.414 3.636-3.838 4.242-7.272l5.757-32.421h49.692v41.511h50.601v38.178h-50.601v46.965c0 5.05 1.212 8.383 3.636 9.999 2.424 1.616 6.06 2.424 10.908 2.424h30.3l6.06 35.148c-4.242.606-10.706 1.313-19.392 2.121-8.686.606-18.18.909-28.482.909H489.81zM677.779 52.227c-20.402 0-30.603-8.686-30.603-26.058 0-9.696 2.525-16.362 7.575-19.998 5.252-3.838 12.928-5.757 23.028-5.757 10.706 0 18.483 1.919 23.331 5.757 5.05 3.636 7.575 10.302 7.575 19.998 0 17.372-10.302 26.058-30.906 26.058zM649.903 201V65.256h55.146V201h-55.146zm95.215 0V65.256h43.935l12.12 6.06c8.484-1.616 18.685-3.03 30.603-4.242 12.12-1.212 23.432-1.818 33.936-1.818h15.15c10.1 0 17.877 1.414 23.331 4.242 5.454 2.828 9.292 6.363 11.514 10.605 2.424 4.242 3.838 8.585 4.242 13.029.606 4.242.909 7.878.909 10.908V201h-55.449v-85.446c0-8.08-4.848-12.12-14.544-12.12h-40.602c-3.838 0-6.363.404-7.575 1.212-1.01.606-1.515 2.424-1.515 5.454V201h-56.055zm329.982 0c-15.35 0-25.86-3.232-31.51-9.696-5.66-6.464-8.49-16.16-8.49-29.088v-58.782h-24.84V65.256h12.72c3.44 0 6.16-.606 8.18-1.818 2.22-1.414 3.64-3.838 4.24-7.272l5.76-32.421h49.69v41.511h50.6v38.178h-50.6v46.965c0 5.05 1.22 8.383 3.64 9.999 2.42 1.616 6.06 2.424 10.91 2.424h30.3l6.06 35.148c-4.24.606-10.71 1.313-19.39 2.121-8.69.606-18.18.909-28.49.909h-18.78zm134.12 0c-13.34 0-23.34-1.919-30-5.757-6.67-3.838-11.11-9.09-13.33-15.756-2.02-6.868-3.03-14.746-3.03-23.634V110.1c0-8.484 1.11-16.059 3.33-22.725 2.22-6.868 6.56-12.221 13.03-16.059 6.66-4.04 16.66-6.06 30-6.06h84.23c13.33 0 23.23 2.02 29.69 6.06 6.67 3.838 11.01 9.191 13.03 16.059 2.22 6.666 3.34 14.241 3.34 22.725v45.753c0 8.888-1.12 16.766-3.34 23.634-2.02 6.666-6.36 11.918-13.03 15.756-6.46 3.838-16.36 5.757-29.69 5.757h-84.23zm24.24-38.178h36.05c9.7 0 14.45-4.04 14.24-12.12v-35.148c0-4.04-1.11-7.07-3.33-9.09-2.02-2.02-5.66-3.03-10.91-3.03h-35.75c-5.25 0-8.99 1.01-11.21 3.03-2.22 2.02-3.34 5.05-3.34 9.09v35.148c-.2 8.08 4.55 12.12 14.25 12.12zM1417.26 201c-13.33 0-23.33-1.919-30-5.757-6.46-4.04-10.8-9.494-13.03-16.362-2.02-6.868-3.03-14.443-3.03-22.725v-90.9h55.76v85.446c0 8.08 4.84 12.12 14.54 12.12h34.54c4.45 0 7.07-.404 7.88-1.212.81-.808 1.21-3.434 1.21-7.878V65.256h56.06V201h-43.94l-11.51-6.06c-8.08 1.616-17.37 3.03-27.88 4.242a277.272 277.272 0 01-31.81 1.818h-8.79zm206.58 0c-13.33 0-23.63-1.919-30.91-5.757-7.07-3.838-11.91-9.09-14.54-15.756-2.63-6.868-3.94-14.746-3.94-23.634V110.1c0-8.08 1.31-15.453 3.94-22.119 2.83-6.868 7.78-12.322 14.85-16.362 7.07-4.242 17.27-6.363 30.6-6.363h38.78c23.23 0 40.3 1.01 51.21 3.03 10.91 2.02 17.07 4.04 18.48 6.06l-9.09 32.118c-4.24-.404-11.91-1.01-23.02-1.818s-23.34-1.212-36.67-1.212h-18.48c-5.25 0-8.99 1.01-11.21 3.03-2.22 2.02-3.33 5.05-3.33 9.09v35.148c0 4.04 1.01 7.07 3.03 9.09 2.02 2.02 5.85 3.03 11.51 3.03h15.45c14.95 0 27.78-.303 38.48-.909 10.91-.808 18.89-1.515 23.94-2.121l18.18 28.785c0 2.828-5.05 5.656-15.15 8.484-9.9 2.626-24.74 3.939-44.54 3.939h-57.57zm138.58 0V4.656h56.05v66.66c8.69-1.616 18.99-3.03 30.91-4.242 11.92-1.212 23.13-1.818 33.63-1.818h15.15c10.1 0 17.88 1.414 23.33 4.242 5.46 2.828 9.29 6.363 11.52 10.605 2.42 4.242 3.83 8.585 4.24 13.029.6 4.242.91 7.878.91 10.908V201h-55.45v-85.446c0-8.08-4.85-12.12-14.55-12.12h-40.6c-3.84 0-6.36.404-7.57 1.212-1.01.606-1.52 2.424-1.52 5.454V201h-56.05z"
            ></path>
          </svg>
        </div>
      </section>
      {/* 
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
			</section> */}

      <section className="py-5 md:py-20 | relative | overflow-y-hidden">
        <VerticalLine opacity={10} />
        <div className="relative | px-5 container mx-auto z-50">
          <h3 className="relative | text-[#020105] font-gm text-2xl font-extrabold pb-7">
            Partners
          </h3>

          <div className="grid grid-cols-3 md:grid-cols-4 gap-0 md:gap-7">
            {[0, 1, 2, 3].map((index) => (
              <div key={index}>
                <div className="partner shadow-p | fcc | p-3 md:p-12 aspect-square duration-300">
                  <img
                    src={`/partner${index}.png`}
                    alt="partner"
                    className="h-full object-contain"
                  />
                </div>

                {windowSize.width > 640 && (
                  <div className="partner shadow-p | fcc | p-3 md:p-12 aspect-square duration-300">
                    <img
                      src={`/partner${index}.png`}
                      alt="partner"
                      className="h-full object-contain"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="fcc | pt-5 md:pt-10">
            <button className="text-white bg-[#FB7A1A] px-12 py-3 text-sm md:text-lg md:px-16 md:py-3 font-bold font-poppins click:scale">
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
