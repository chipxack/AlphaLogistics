import clsx from "clsx";
import App from "layouts/App";
import SvgDropdown from "icons/SvgDropdown";
import SvgSearch from "icons/SvgSearch";
import Link from "next/link";
import RangeInputTest from "pages/products/RangeInputTest";

const style = {
  inActiveMenu: `opacity-80 text-sm`,
  activeMenu: `text-sm`,
  activeFilterCategoryMenu: `text-xs text-[#FB421A] duration-100`,
  inActiveFilterCategoryMenu: `text-xs text-[#16171E] hover:text-[#FB421A] opacity-60 cursor-pointer duration-100`,
};

function Product() {
  return (
    <App>
      <App.Header dark={true} />
      <section className="bg-[#16171E] py-3 relative overflow-hidden">
        <div className="flex items-center text-white | container mx-auto">
          <div className="relative">
            <a href="#" className={style.inActiveMenu}>
              Home
            </a>

            <span className="px-2">/</span>

            <a href="#" className={style.activeMenu}>
              Products
            </a>

            <h2 className="text-2xl font-bold pt-3">Products</h2>
          </div>

          <div className="bounce w-[25rem] h-[25rem] opacity-[40%] absolute right-0 | blur-3xl duration-150 rounded-[50%] bg-[#40BFF4]"></div>
          <div className="bounce w-[25rem] h-[25rem] opacity-[40%] absolute right-[20rem] | blur-3xl duration-150 rounded-[50%] bg-[#FF0000]"></div>
        </div>
      </section>

      <section>
        <div className="container mx-auto | py-10">
          <div className="flex">
            {/* FILTER */}
            <div className="w-1/4">
              <div className="bg-[#F6FBFC] px-4 py-4">
                <h3 className="text-xl font-gm font-bold">Filter</h3>

                <div className="filter">
                  {/* --- FILTER CATEGORIES --- */}
                  <div className="filter__categories | py-5">
                    {/* --- FILTER CATEGORIES BTN  --- */}
                    <div className="filter__categories__btn | fcb cursor-pointer">
                      <p className="font-bold text-base text-black">Cars</p>
                      <SvgDropdown className="h-2 text-[#FB421A]" />
                    </div>

                    {/* FILTER CATEGORIES BODY */}
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
                              [style.activeFilterCategoryMenu]: category.active,
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
                  </div>

                  {/* --- FILTER BRANDS --- */}
                  <div className="filter__brands | py-5">
                    {/* --- FILTER BRANDS BTN  --- */}
                    <div className="filter__brands__btn | fcb">
                      <p className="font-bold">Brands</p>
                      <SvgDropdown className="h-2 text-[#FB421A]" />
                    </div>
                    {/* FILTER BRANDS BODY */}
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
                                [style.activeFilterCategoryMenu]: brand.active,
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
            <div className="w-3/4 | space-y-2 pl-4">
              <div className="fcb">
                <div>
                  <div className="relative">
                    <a href="#" className={style.inActiveMenu}>
                      Home
                    </a>

                    <span className="px-2">/</span>

                    <a href="#" className={style.activeMenu}>
                      Products
                    </a>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-3xl font-bold font-gm">
                      Laundry Washer
                    </h3>

                    <p className="text-sm">15 products</p>
                  </div>
                </div>

                <div className="w-1/3 | relative">
                  <input
                    type="text"
                    name="search"
                    placeholder="Search.."
                    className="w-full | py-2 px-4 | text-sm | placeholder:text-[#5D5D5F] border border-[#E0E0E0] rounded-full"
                  />

                  <SvgSearch className="absolute right-2 top-[20%] h-5 | text-orange-primary" />
                </div>
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
                  <Link href={`/products/inshaAllah`} key={index}>
                    <div className="product | rounded-md overflow-hidden | border border-gray-100 shadow-p | cursor-pointer">
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
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black | py-14 | relative | overflow-hidden">
        <div className="relative | container mx-auto z-50 | space-y-7">
          <h3 className="relative | h1 text-white font-gm | text-center">
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
      <App.Footer />
    </App>
  );
}

export default Product;
