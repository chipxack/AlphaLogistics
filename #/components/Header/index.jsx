import { useState, useRef } from "react";
import clsx from "clsx";
import Logo from "components/Logo";
import SvgAddUser from "icons/SvgAddUser";
import SvgSearch from "icons/SvgSearch";
import Link from "next/link";
import { useRouter } from "next/router";
import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import useWindowSize from "hooks/useWindowSize";
import { Cross as Hamburger } from "hamburger-react";

const style = {
  menu: `text-white text-sm font-medium cursor-pointer duration-200 hover:text-orange-primary`,
  menuActive: `text-orange-primary text-sm font-medium`,
  registerBtn: `fcc | font-semibold text-xs py-1.5 px-3 md:text-sm space-x-3 | text-white | md:py-3 md:px-5 border-[0.25px] border-orange-primary register__btn | rounded | click:scale`,
};

function Header(props) {
  const router = useRouter();
  const windowSize = useWindowSize();
  const [isOpen, setOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [loginOrRegister, setLoginOrRegister] = useState(``);
  const loginOrRegisterRef = useRef(``);

  const closeLoginOrRegister = (e) => {
    if (
      !loginOrRegisterRef.current ||
      !loginOrRegisterRef.current.contains(event.target)
    ) {
      setLoginOrRegister(``);
      return;
    }
  };

  return (
    <header
      className={clsx({
        "relative z-50 md:z-10 px-5 bg-[#020105]": props.dark,
      })}
    >
      <div className="py-2 md:py-4 | fcb z-[10000] container mx-auto">
        <div className="md:flex md:items-center md:space-x-32">
          <Link href={`/`}>
            <div>
              <Logo className="w-28 md:w-40 cursor-pointer" />
            </div>
          </Link>

          <ul className="md:flex md:items-center space-x-12 hidden">
            <Link href={`/`}>
              <li
                className={clsx({
                  [style.menuActive]: router.pathname === `/`,
                  [style.menu]: router.pathname !== `/`,
                })}
              >
                About us
              </li>
            </Link>

            <Link href={`/products`}>
              <li
                className={clsx({
                  [style.menuActive]: router.pathname === `/products`,
                  [style.menu]: router.pathname !== `/products`,
                })}
              >
                Products
              </li>
            </Link>

            <Link href={`/tracking`}>
              <li
                className={clsx({
                  [style.menuActive]: router.pathname === `/tracking`,
                  [style.menu]: router.pathname !== `/tracking`,
                })}
              >
                Tracking
              </li>
            </Link>
            <Link href={`/support`}>
              <li
                className={clsx({
                  [style.menuActive]: router.pathname === `/support`,
                  [style.menu]: router.pathname !== `/support`,
                })}
              >
                Support
              </li>
            </Link>
          </ul>
        </div>

        <div className="fcc space-x-5 md:space-x-10">
          <div className="h-[40px] w-[40px] fcc md:hidden">
            <Hamburger
              color={`#ffffff`}
              size={20}
              distance={`md`}
              hideOutline={true}
              rounded={true}
              toggled={isOpen}
              toggle={setOpen}
              style={{ height: `1px` }}
            />
          </div>
          <SvgSearch className="h-4 md:h-5 text-white cursor-pointer" />

          <Popover className="relative">
            {({ open }) => (
              <>
                <Popover.Button as="button" className={style.registerBtn}>
                  <p>{windowSize.width > 640 ? `Login to Account` : `Login`}</p>
                  <SvgAddUser className="h-4 md:h-5" />
                </Popover.Button>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="w-56 md:w-72 | absolute z-10 right-0  mt-0.5 sm:px-0">
                    {({ close }) => (
                      <div className="overflow-hidden shadow-lg">
                        <div className="bg-gray-50 p-4 md:p-5 space-y-3 md:space-y-5">
                          <h3 className="font-inter font-bold text-[#16171E] text-base md:text-lg">
                            Welcome to ALST
                          </h3>

                          <div className="fc | space-x-2 md:space-x-3">
                            <button
                              onClick={() => {
                                setLoginOrRegister(`register`);
                                close();
                              }}
                              className="text-white bg-[#FB7A1A] w-1/2 py-2 text-xs md:text-sm font-bold font-poppins click:scale"
                            >
                              Registration
                            </button>

                            <button
                              onClick={() => {
                                setLoginOrRegister(`login`);
                                close();
                              }}
                              className="bg-white border border-orange-primary text-[#FB7A1A] w-1/2 py-2 text-xs md:text-sm font-bold font-poppins click:scale"
                            >
                              Log In
                            </button>
                          </div>

                          <hr />
                          <h3 className="text-sm font-inter font-bold text-[#000000]">
                            My Orders
                          </h3>

                          <h3 className="text-sm font-inter font-bold text-[#000000]">
                            My Desires
                          </h3>
                          <h3 className="text-sm font-inter font-bold text-[#000000]">
                            Favorite Stores
                          </h3>
                        </div>
                      </div>
                    )}
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
        </div>
      </div>

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
          className="bg-[#16171e71] fixed inset-0 z-50  my-16 md:pt-28"
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
    </header>
  );
}

export default Header;
