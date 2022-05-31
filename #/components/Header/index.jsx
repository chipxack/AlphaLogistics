import { useState } from "react";
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
                                props.onRegiserClick();
                                close();
                              }}
                              className="text-white bg-[#FB7A1A] w-1/2 py-2 text-xs md:text-sm font-bold font-poppins click:scale"
                            >
                              Registration
                            </button>

                            <button
                              onClick={() => {
                                props.onLoginClick();
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
    </header>
  );
}

export default Header;
