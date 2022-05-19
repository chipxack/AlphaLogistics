import App from "components/layouts/App";
import SvgSearch from "icons/SvgSearch";

const style = {
  inActiveMenu: `opacity-80 text-sm`,
  activeMenu: `text-sm`,
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
            <div className="w-1/4"></div>
            <div className="w-3/4 | space-y-2">
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
