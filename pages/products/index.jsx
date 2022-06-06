import clsx from "clsx";
import App from "layouts/App";
import SvgDropdown from "icons/SvgDropdown";
import SvgSearch from "icons/SvgSearch";
import Link from "next/link";
import RangeInputTest from "pages/products/RangeInputTest";
import CollapseCustom from "components/Collapse";

import { useState } from "react";
import { useRouter } from "next/router";
import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import useWindowSize from "hooks/useWindowSize";
import RequestForm from "components/RequestForm";

const style = {
  inActiveMenu: `text-xs opacity-80 md:text-sm`,
  activeMenu: `text-xs md:text-sm`,
  activeFilterCategoryMenu: `text-[11px] md:text-xs text-[#FB421A] duration-100`,
  inActiveFilterCategoryMenu: `text-[11px] md:text-xs text-[#16171E] hover:text-[#FB421A] opacity-60 cursor-pointer duration-100`,
};

function Product() {
  const router = useRouter();
  const windowSize = useWindowSize();
  const [isOpen, setOpen] = useState(false);

  return (
    <App>
      <App.Header dark={true} />
      <section className="bg-[#16171E] py-2 md:py-3 relative overflow-hidden">
        <div className="flex items-center text-white | px-5 container mx-auto">
          <div className="relative z-10">
            <a href="#" className={style.inActiveMenu}>
              Home
            </a>

            <span className="text-xs md:text-sm px-2">/</span>

            <a href="#" className={style.activeMenu}>
              Products
            </a>

            <h2 className="text-lg md:text-2xl font-bold pt-1 md:pt-3">
              Products
            </h2>
          </div>

          <div className="bounce w-[25rem] h-[25rem] md:w-[25rem] md:h-[25rem] opacity-[40%] absolute right-0 | blur-3xl duration-150 rounded-[50%] bg-[#40BFF4]"></div>
          <div className="bounce w-[25rem] h-[25rem] opacity-[40%] absolute right-[20rem] | blur-3xl duration-150 rounded-[50%] bg-[#FF0000]"></div>
        </div>
      </section>

      <section>
        <div className="px-5 py-5 md:py-10 | container mx-auto">
          <div className="flex">
            {/* FILTER */}
            <div className="hidden md:block w-full md:w-1/4">
              <div className="bg-[#F6FBFC] px-4 py-4">
                <h3 className="text-xl font-gm font-bold">Filter</h3>

                <div className="filter">
                  {/* --- FILTER CATEGORIES --- */}
                  <CollapseCustom openByDefault={true}>
                    <div className="filter__categories | py-5">
                      {/* --- FILTER CATEGORIES BTN  --- */}
                      <CollapseCustom.Button>
                        {({ isActive, toggle }) => (
                          <div
                            className="filter__categories__btn | fcb cursor-pointer"
                            onClick={() => toggle()}
                          >
                            <p className="font-bold text-base text-black">
                              Cars
                            </p>
                            <SvgDropdown
                              className={clsx({
                                "h-2 text-[#FB421A] duration-200": true,
                                "-rotate-90": !isActive,
                                "-rotate-0": isActive,
                              })}
                            />
                          </div>
                        )}
                      </CollapseCustom.Button>

                      {/* FILTER CATEGORIES BODY */}
                      <CollapseCustom.Content>
                        <div className="filter__categories__content | pt-5">
                          <ul className="space-y-4">
                            {[
                              {
                                title: `Washing machines`,
                                active: true,
                              },
                              {
                                title: `Vacuum cleaners`,
                                active: false,
                              },
                              {
                                title: `Irons`,
                                active: false,
                              },
                              {
                                title: `Steam cleaners and steamers`,
                                active: false,
                              },
                              {
                                title: `Filters and softeners for water`,
                                active: false,
                              },
                              {
                                title: `High pressure washers`,
                                active: false,
                              },
                              {
                                title: `Ironing boards`,
                                active: false,
                              },
                              {
                                title: `Smart Home Systems`,
                                active: false,
                              },
                              {
                                title: `Electric brooms`,
                                active: false,
                              },
                              {
                                title: `Sewing machines`,
                                active: false,
                              },
                              {
                                title: `Robot vacuum cleaners`,
                                active: false,
                              },
                            ].map((category, index) => (
                              <li
                                className={clsx({
                                  [style.activeFilterCategoryMenu]:
                                    category.active,
                                  [style.inActiveFilterCategoryMenu]:
                                    !category.active,
                                })}
                                key={index}
                              >
                                {category.title}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CollapseCustom.Content>
                    </div>
                  </CollapseCustom>

                  {/* --- FILTER BRANDS --- */}
                  <div className="filter__brands | py-5 pb-12">
                    <CollapseCustom openByDefault={true}>
                      {/* --- FILTER BRANDS BTN  --- */}
                      <CollapseCustom.Button>
                        {({ isActive, toggle }) => (
                          <div
                            className="filter__categories__btn | fcb cursor-pointer"
                            onClick={() => toggle()}
                          >
                            <p className="font-bold text-base text-black">
                              Brans
                            </p>
                            <SvgDropdown
                              className={clsx({
                                "h-2 text-[#FB421A] duration-200": true,
                                "-rotate-90": !isActive,
                                "-rotate-0": isActive,
                              })}
                            />
                          </div>
                        )}
                      </CollapseCustom.Button>

                      {/* FILTER BRANDS BODY */}
                      <CollapseCustom.Content>
                        <div className="filter__brands__content | pt-5">
                          <ul className="space-y-5">
                            {[
                              {
                                title: `Sony`,
                                active: false,
                              },
                              {
                                title: `Samsung`,
                                active: true,
                              },
                              {
                                title: `Artel`,
                                active: false,
                              },

                              {
                                title: `LG`,
                                active: false,
                              },
                              {
                                title: `Shivaki`,
                                active: false,
                              },
                              {
                                title: `Premier`,
                                active: false,
                              },
                              {
                                title: `Moonx`,
                                active: false,
                              },
                            ].map((brand) => (
                              <label
                                htmlFor={brand.title}
                                className="flex items-center | space-x-2"
                                key={brand.title}
                              >
                                <input
                                  type="checkbox"
                                  name={brand.title}
                                  id={brand.title}
                                  className={`form-checkbox rounded text-orange-primary border-gray-200 p-2 | shadow-sm focus:border-orange-300 focus:ring focus:ring-offset-0 focus:ring-orange-200 focus:ring-opacity-50`}
                                  defaultChecked={brand.active}
                                />

                                <li
                                  className={clsx({
                                    [style.activeFilterCategoryMenu]:
                                      brand.active,
                                    [style.inActiveFilterCategoryMenu]:
                                      !brand.active,
                                  })}
                                >
                                  {brand.title}
                                </li>
                              </label>
                            ))}
                          </ul>
                        </div>
                      </CollapseCustom.Content>
                    </CollapseCustom>
                  </div>

                  {/* --- FILTER PRICE --- */}
                  <div className="filter__price">
                    <RangeInputTest
                      max={450000}
                      min={120000}
                      move={1000}
                      onChange={(e) => console.log(e)}
                    />
                  </div>

                  {/* --- FILTER APPLY --- */}
                  <div className="filter__apply">
                    <button className="w-full | text-white bg-[#FB7A1A] mt-3 py-2 text-lg font-bold font-poppins click:scale">
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* PRODUCTS */}
            <div className="w-full md:w-3/4 | md:pl-4 space-y-2">
              <div className="flex items-center justify-between md:flex-row flex-col">
                <div className="w-full">
                  <div className="relative">
                    <a href="#" className={style.inActiveMenu}>
                      Home
                    </a>

                    <span className="text-xs md:text-sm px-2">/</span>

                    <a href="#" className={style.activeMenu}>
                      Products
                    </a>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg md:text-3xl font-bold font-gm">
                      Laundry Washer
                    </h3>

                    <p className="text-xs md:text-sm">15 products</p>
                  </div>
                </div>

                <div className="mt-5 md:mt-0 | w-full md:w-1/2 | relative">
                  <div className="relative w-full">
                    <input
                      type="text"
                      name="search"
                      placeholder="Search.."
                      className="w-full | py-2 px-2 md:py-2 md:px-4 | text-xs md:text-sm | placeholder:text-[#5D5D5F] border border-[#E0E0E0] rounded-full"
                    />

                    <SvgSearch className="absolute right-2 top-[20%] h-4 md:h-5 | text-orange-primary" />
                  </div>

                  <div className="hidden md:flex justify-end">
                    <Popover className="relative w-1/2 text-end">
                      {({ open }) => (
                        <>
                          <Popover.Button
                            as="button"
                            className={`flex py-1.5 items-center justify-end w-full | font-semibold text-xs md:text-sm | text-[#000000] | md:py-3 md:px-5 | rounded |`}
                          >
                            {({ open }) => (
                              <>
                                Sort by
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className={clsx({
                                    "h-3.5 ml-4 duration-200": true,
                                    "rotate-0": !open,
                                    "rotate-180": open,
                                  })}
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M5 15l7-7 7 7"
                                  />
                                </svg>
                              </>
                            )}
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
                            <Popover.Panel className="md:w-40 | absolute z-10 right-0  mt-0.5 sm:px-0">
                              {({ close }) => (
                                <div className="overflow-hidden shadow-xl py-2">
                                  <div className="bg-gray-50 p-4 md:p-5 space-y-5">
                                    <h3 className="text-sm md:text-sm md:font-inter text-[#16171E]">
                                      Newest
                                    </h3>

                                    <h3 className="text-sm md:text-sm md:font-inter text-[#16171E]">
                                      Oldest
                                    </h3>
                                    <h3 className="text-sm md:text-sm md:font-inter text-[#16171E]">
                                      Famous
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

                <div className="flex justify-between w-full pt-5 md:pt-0 space-x-5 md:hidden">
                  <Popover className="relative w-1/2 md:hidden">
                    {({ open }) => (
                      <>
                        <Popover.Button
                          as="button"
                          className={`flex py-1.5 px-5 items-center w-full bg-gray-100 | font-semibold text-xs md:text-sm | text-[#000000] | md:py-3 md:px-5 | rounded | click:scale`}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3.5 pr-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                            />
                          </svg>
                          Filter
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
                          <Popover.Panel className="w-64 | absolute z-10 left-0  mt-0.5 sm:px-0">
                            {({ close }) => (
                              <div className="left-0 w-full md:w-1/4">
                                <div className="bg-[#F6FBFC] px-3 py-3 md:px-4 md:py-4">
                                  <h3 className="text-base md:text-xl font-gm font-bold">
                                    Filter
                                  </h3>

                                  <div className="filter">
                                    {/* --- FILTER CATEGORIES --- */}
                                    <CollapseCustom openByDefault={true}>
                                      <div className="filter__categories | py-3 md:py-5">
                                        {/* --- FILTER CATEGORIES BTN  --- */}
                                        <CollapseCustom.Button>
                                          {({ isActive, toggle }) => (
                                            <div
                                              className="filter__categories__btn | fcb cursor-pointer"
                                              onClick={() => toggle()}
                                            >
                                              <p className="font-bold text-sm md:text-base text-black">
                                                Cars
                                              </p>
                                              <SvgDropdown
                                                className={clsx({
                                                  "h-1.5 md:h-2 text-[#FB421A] duration-200": true,
                                                  "-rotate-90": !isActive,
                                                  "-rotate-0": isActive,
                                                })}
                                              />
                                            </div>
                                          )}
                                        </CollapseCustom.Button>

                                        {/* FILTER CATEGORIES BODY */}
                                        <CollapseCustom.Content>
                                          <div className="filter__categories__content | pt-5">
                                            <ul className="space-y-2 md:space-y-4">
                                              {[
                                                {
                                                  title: `Washing machines`,
                                                  active: true,
                                                },
                                                {
                                                  title: `Vacuum cleaners`,
                                                  active: false,
                                                },
                                                {
                                                  title: `Irons`,
                                                  active: false,
                                                },
                                                {
                                                  title: `Steam cleaners and steamers`,
                                                  active: false,
                                                },
                                                {
                                                  title: `Filters and softeners for water`,
                                                  active: false,
                                                },
                                                {
                                                  title: `High pressure washers`,
                                                  active: false,
                                                },
                                                {
                                                  title: `Ironing boards`,
                                                  active: false,
                                                },
                                                {
                                                  title: `Smart Home Systems`,
                                                  active: false,
                                                },
                                                {
                                                  title: `Electric brooms`,
                                                  active: false,
                                                },
                                                {
                                                  title: `Sewing machines`,
                                                  active: false,
                                                },
                                                {
                                                  title: `Robot vacuum cleaners`,
                                                  active: false,
                                                },
                                              ].map((category, index) => (
                                                <li
                                                  className={clsx({
                                                    [style.activeFilterCategoryMenu]:
                                                      category.active,
                                                    [style.inActiveFilterCategoryMenu]:
                                                      !category.active,
                                                  })}
                                                  key={index}
                                                >
                                                  {category.title}
                                                </li>
                                              ))}
                                            </ul>
                                          </div>
                                        </CollapseCustom.Content>
                                      </div>
                                    </CollapseCustom>

                                    {/* --- FILTER BRANDS --- */}
                                    <div className="filter__brands | py-5 pb-12">
                                      <CollapseCustom openByDefault={true}>
                                        {/* --- FILTER BRANDS BTN  --- */}
                                        <CollapseCustom.Button>
                                          {({ isActive, toggle }) => (
                                            <div
                                              className="filter__categories__btn | fcb cursor-pointer"
                                              onClick={() => toggle()}
                                            >
                                              <p className="font-bold text-sm md:text-base text-black">
                                                Brands
                                              </p>
                                              <SvgDropdown
                                                className={clsx({
                                                  "h-1.5 md:h-2 text-[#FB421A] duration-200": true,
                                                  "-rotate-90": !isActive,
                                                  "-rotate-0": isActive,
                                                })}
                                              />
                                            </div>
                                          )}
                                        </CollapseCustom.Button>

                                        {/* FILTER BRANDS BODY */}
                                        <CollapseCustom.Content>
                                          <div className="filter__brands__content | pt-5">
                                            <ul className="space-y-3 md:space-y-5">
                                              {[
                                                {
                                                  title: `Sony`,
                                                  active: false,
                                                },
                                                {
                                                  title: `Samsung`,
                                                  active: true,
                                                },
                                                {
                                                  title: `Artel`,
                                                  active: false,
                                                },

                                                {
                                                  title: `LG`,
                                                  active: false,
                                                },
                                                {
                                                  title: `Shivaki`,
                                                  active: false,
                                                },
                                                {
                                                  title: `Premier`,
                                                  active: false,
                                                },
                                                {
                                                  title: `Moonx`,
                                                  active: false,
                                                },
                                              ].map((brand) => (
                                                <label
                                                  htmlFor={brand.title}
                                                  className="flex items-center | space-x-2"
                                                  key={brand.title}
                                                >
                                                  <input
                                                    type="checkbox"
                                                    name={brand.title}
                                                    id={brand.title}
                                                    className={`form-checkbox rounded text-orange-primary border-gray-200 p-1 md:p-2 | shadow-sm focus:border-orange-300 focus:ring focus:ring-offset-0 focus:ring-orange-200 focus:ring-opacity-50`}
                                                    defaultChecked={
                                                      brand.active
                                                    }
                                                  />

                                                  <li
                                                    className={clsx({
                                                      [style.activeFilterCategoryMenu]:
                                                        brand.active,
                                                      [style.inActiveFilterCategoryMenu]:
                                                        !brand.active,
                                                    })}
                                                  >
                                                    {brand.title}
                                                  </li>
                                                </label>
                                              ))}
                                            </ul>
                                          </div>
                                        </CollapseCustom.Content>
                                      </CollapseCustom>
                                    </div>

                                    {/* --- FILTER PRICE --- */}
                                    <div className="filter__price">
                                      <RangeInputTest
                                        max={450000}
                                        min={120000}
                                        move={1000}
                                        onChange={(e) => console.log(e)}
                                      />
                                    </div>

                                    {/* --- FILTER APPLY --- */}
                                    <div className="filter__apply">
                                      <button className="w-full | text-white bg-[#FB7A1A] mt-3 py-1 md:py-2 text-base md:text-lg font-bold font-poppins click:scale">
                                        Apply
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>

                  <Popover className="relative w-1/2">
                    {({ open }) => (
                      <>
                        <Popover.Button
                          as="button"
                          className={`flex py-1.5 px-5 items-center w-full bg-gray-100 | font-semibold text-xs md:text-sm | text-[#000000] | md:py-3 md:px-5 | rounded | click:scale`}
                        >
                          {({ open }) => (
                            <>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className={clsx({
                                  "h-3.5 mr-4 duration-200": true,
                                  "rotate-0": !open,
                                  "rotate-180": open,
                                })}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M5 15l7-7 7 7"
                                />
                              </svg>
                              Sort by
                            </>
                          )}
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
                              <div className="overflow-hidden shadow-100 py-2">
                                <div className="bg-gray-50 p-4 md:p-5 space-y-5">
                                  <h3 className="text-sm md:text-sm md:font-inter md:font-bold text-[#000000]">
                                    My Orders
                                  </h3>

                                  <h3 className="text-sm md:text-sm md:font-inter md:font-bold text-[#000000]">
                                    My Desires
                                  </h3>
                                  <h3 className="text-sm md:text-sm md:font-inter md:font-bold text-[#000000]">
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

              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-5 | pt-5 md:pt-10">
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
                  <Link href={`/products/inshaAllah`} key={index} scroll={true}>
                    <div className="product | rounded-md overflow-hidden | border border-gray-100 shadow-p | cursor-pointer">
                      <div className="w-full h-32 md:h-64 overflow-hidden | relative">
                        <img
                          src={product.img}
                          alt="prodcut_1"
                          className="h-full w-full object-contain object-center"
                        />

                        <div className="p-1.5 md:p-3 top-0 left-0 ml-3 mt-3 | text-[8px] md:text-xs | absolute | bg-gray-200 | rounded-md">
                          {product.id}
                        </div>
                      </div>

                      <div className="product__info | px-2 py-2 md:py-5 md:px-5 space-y-3 | bg-[#F5F5F7]">
                        <h4 className="font-inter text-[#020105] font-semibold text-sm md:text-lg">
                          {product.title}
                        </h4>

                        <button className="inline-flex items-center | space-x-2 md:space-x-4 group">
                          <p className="text-[#FF9A00] text-xs md:text-base">
                            Details
                          </p>

                          <svg
                            viewBox="0 0 32 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="group-hover:translate-x-1 duration-200 h-4 md:h-7"
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
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <RequestForm />
      <App.Footer />
    </App>
  );
}

export default Product;
