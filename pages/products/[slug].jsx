import ReuqestForm from "components/RequestForm";
import App from "layouts/App";
import Link from "next/link";
import { useState } from "react";
import { Transition } from "@headlessui/react";
import { Fragment, useRef } from "react";
import { useEffect } from "react";

const style = {
  inActiveMenu: `text-xs opacity-80 md:text-sm`,
  activeMenu: `text-xs md:text-sm`,
  activeFilterCategoryMenu: `text-[11px] md:text-xs text-[#FB421A] duration-100`,
  inActiveFilterCategoryMenu: `text-[11px] md:text-xs text-[#16171E] hover:text-[#FB421A] opacity-60 cursor-pointer duration-100`,
};

function Product(props) {
  const [order, setOrder] = useState(false);
  const loginOrRegisterRef = useRef();

  const closeLoginOrRegister = (e) => {
    console.log(loginOrRegisterRef.current);

    if (
      loginOrRegisterRef.current &&
      !loginOrRegisterRef.current.contains(e.target)
    ) {
      setOrder(false);
      return;
    }
  };

  return (
    <App>
      <App.Header dark={true} />

      <Transition
        as={Fragment}
        show={order}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-200"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <section
          className="bg-[#16171e71] fixed inset-0 z-[5000] w-full flex items-center justify-center"
          onClick={(e) => closeLoginOrRegister(e)}
        >
          <div className="container mx-auto w-5/6 md:w-2/3">
            <ProductOrder refs={loginOrRegisterRef} />
          </div>
        </section>
      </Transition>

      <section className="bg-[#16171E] py-5 md:py-10 relative overflow-hidden">
        <div className="flex items-center text-white | px-5 container mx-auto">
          <div className="relative z-10">
            <a href="#" className={style.inActiveMenu}>
              Home
            </a>

            <span className="text-xs md:text-sm px-2">/</span>

            <a href="#" className={style.activeMenu}>
              Products
            </a>

            <span className="text-xs md:text-sm px-2">/</span>

            <a href="#" className={style.activeMenu}>
              Valve cover 2321343
            </a>

            <h2 className="text-2xl font-bold pt-3">Valve cover 2321343</h2>
          </div>

          <div className="bounce w-[30rem] h-[30rem] opacity-[70%] absolute right-0 | blur-3xl duration-150 rounded-[50%] bg-[#FB7A1A]"></div>
        </div>
      </section>

      <section className="py-5 md:py-20">
        <div className="product | flex items-stretch flex-col md:flex-row | px-5 container mx-auto">
          <div className="flex-[1] bg-[#F5F5F7] | mr-3 fcc mb-5 md:mb-0">
            <div className="product__image__wrapper h-64 md:h-96 | fcc | overflow-hidden">
              <img
                src="/product.png"
                alt="product"
                className="product__image | h-full object-contain opacity-95"
              />
            </div>
          </div>

          <div className="product__details | mr-2 md:mx-3 | flex-[1] space-y-7">
            <div className="product__description | space-y-3">
              <h3 className="text-2xl font-bold">Valve cover 23397716</h3>
              <p className="opacity-70 text-[#16171E] font-inter">
                Unfortunately there is delivery time available for your country,
                please contact us for more information. there is delivery time
                available for your country, please contact us for more
                information.
              </p>
            </div>

            <div className="product__details | space-y-5 | pt-3">
              <h3 className="font-bold border-b border-black pb-3 mb-7">
                Details
              </h3>
              {[
                {
                  title: `Reference no.`,
                  value: `BP0743287_UP`,
                },
                {
                  title: `Brand`,
                  value: `Volvo`,
                },
                {
                  title: `Reference no.`,
                  value: `BP0743287_UP`,
                },
                {
                  title: `Brand`,
                  value: `Volvo`,
                },
              ].map((detail, index) => (
                <div className="flex justify-between items-center" key={index}>
                  <div className="title text-sm">{detail.title}</div>

                  <div className="border-b border-dashed border-gray-300 flex-grow text-white mx-3 -mt-4">
                    12
                  </div>

                  <div className="value text-orange-primary text-sm">
                    {detail.value}
                  </div>
                </div>
              ))}
            </div>

            <div className="product__order__btn">
              <button
                onClick={() => setOrder(true)}
                className="w-full | text-white bg-[#FB7A1A] py-2 text-lg font-bold font-poppins click:scale"
              >
                Order now
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-5 | py-5 md:pb-20">
        <h3 className="text-2xl md:text-3xl font-gm font-bold text-black">
          Similar Products
        </h3>
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
            <Link href={`/products/inshaAllah`} key={index}>
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
      </section>

      <ReuqestForm />
      <App.Footer />
    </App>
  );
}

function ProductOrder(props) {
  return (
    <div
      className="space-y-3 md:space-y-10 h-full overflow-auto"
      ref={props.refs}
    >
      <div className="user__info__forms">
        <div className="user__info | px-7 py-8 | rounded-xl | bg-white">
          <form className="space-y-5 md:space-y-10">
            <div className="grid md:grid-cols-2 gap-2 md:gap-7">
              <label htmlFor="full_name" className="flex flex-col | space-y-2">
                <p className="text-[#002856] text-xs font-inter pb-0.5">
                  Full Name <sup className="text-[#EB5757] text-xs">*</sup>
                </p>

                <input
                  type="text"
                  name="full_name"
                  id="full_name"
                  placeholder="Full Name"
                  className="px-4 py-2.5 text-sm placeholder:text-sm | font-inter | border focus:border-[#024B80] duration-100 rounded-md focus:shadow-100"
                />
              </label>

              <label htmlFor="phone" className="flex flex-col | space-y-2">
                <p className="text-[#002856] text-xs font-inter pb-0.5">
                  Phone Number <sup className="text-[#EB5757] text-xs">*</sup>
                </p>

                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="Phone Number"
                  className="px-4 py-2.5 text-sm placeholder:text-sm | font-inter | border focus:border-[#024B80] duration-100 rounded-md focus:shadow-100"
                />
              </label>

              <label htmlFor="email" className="flex flex-col | space-y-2">
                <p className="text-[#002856] text-xs font-inter pb-0.5">
                  Email Address <sup className="text-[#EB5757] text-xs">*</sup>
                </p>

                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Email Address"
                  className="px-4 py-2.5 text-sm placeholder:text-sm | font-inter | border focus:border-[#024B80] duration-100 rounded-md focus:shadow-100"
                />
              </label>

              <label htmlFor="country" className="flex flex-col | space-y-2">
                <p className="text-[#002856] text-xs font-inter pb-0.5">
                  Country <sup className="text-[#EB5757] text-xs">*</sup>
                </p>

                <select
                  name="country"
                  id="country"
                  className="form-select block w-full rounded-md border-gray-300 focus:shadow-100 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                >
                  <option>United Kingdom</option>
                  <option>Germany</option>
                  <option>Italy</option>
                  <option>Uzbekistan</option>
                </select>
              </label>
            </div>

            <label htmlFor="message" className="flex flex-col | space-y-2">
              <p className="text-[#002856] text-xs font-inter pb-0.5">
                Message <sup className="text-[#EB5757] text-xs">*</sup>
              </p>

              <textarea
                name="message"
                id="message"
                rows="5"
                placeholder="Type your message.."
                className="w-full px-4 py-2.5 text-sm placeholder:text-sm | font-inter | border focus:border-[#024B80] duration-100 rounded-md focus:shadow-100"
              ></textarea>
            </label>

            <div className="grid md:grid-cols-2 md:gap-7">
              <div></div>
              <div className="grid grid-cols-2 gap-2">
                <button className="form-button border border-orange-primary text-orange-primary font-semibold active:scale-95 duration-200 py-1 md:py-2.5">
                  Cancel
                </button>
                <button className="form-button font-bold active:scale-95 duration-200 bg-[#FB7A1A] text-white py-1 md:py-2.5">
                  Save Changes
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Product;
