import Logo from "components/Logo";
import SvgArrow from "icons/SvgArrow";
const style = {
  menu: `text-white text-xs cursor-pointer duration-200 hover:text-orange-primary opacity-80 hover:opacity-100 font-inter`,
  title: `text-white text-lg font-medium duration-200 font-exo font-bold`,
};

function Footer(props) {
  return (
    <footer className="bg-[#000000]">
      <div className="container mx-auto px-5 | flex flex-col md:flex-row | py-7">
        <div className="md:w-2/5">
          <Logo className="w-36 md:w-40 cursor-pointer" />

          <div className="socials pt-5">
            <p className="text-sm text-white font-inter | py-3">
              We are in social networks
            </p>

            <div className="links">
              <ul className="text-white | flex items-center | space-x-4">
                <a
                  className="group bg-white hover:bg-[#F37D26] p-1.5 md:p-2 rounded-full"
                  href="https://www.instagram.com/codify.uz/"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="h-4 w-4 | md:h-5 md:w-5 text-[#000000] group-hover:text-white duration-200"
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M12 7a5 5 0 100 10 5 5 0 000-10zm-3 5a3 3 0 106 0 3 3 0 00-6 0z"
                      clipRule="evenodd"
                    ></path>
                    <path
                      fill="currentColor"
                      d="M18 5a1 1 0 100 2 1 1 0 000-2z"
                    ></path>
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M5 1a4 4 0 00-4 4v14a4 4 0 004 4h14a4 4 0 004-4V5a4 4 0 00-4-4H5zm14 2H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
                <a
                  className="group bg-white hover:bg-[#F37D26] p-1.5 rounded-full"
                  href="https://www.instagram.com/codify.uz/"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 12 21"
                    className="h-4 w-4 | md:h-5 md:w-5 text-[#000000] group-hover:text-white duration-200"
                  >
                    <path
                      fill="currentColor"
                      d="M7.412 21H4.026a1.023 1.023 0 01-1.025-1.019v-7.585H1.026A1.023 1.023 0 010 11.377v-3.25c0-.562.46-1.019 1.026-1.019H3V5.481c0-1.614.51-2.987 1.475-3.97C5.446.521 6.8 0 8.394 0l2.582.004A1.024 1.024 0 0112 1.023V4.04c0 .561-.46 1.018-1.025 1.018l-1.739.001c-.53 0-.665.106-.694.138-.047.054-.104.205-.104.624v1.286h2.406a1.021 1.021 0 011.035 1.019l-.001 3.25c0 .562-.46 1.019-1.026 1.019H8.438v7.585c0 .562-.46 1.019-1.026 1.019zM4.24 19.769h2.958v-7.924c0-.375.308-.68.685-.68h2.755l.002-2.826H7.883a.683.683 0 01-.685-.68V5.822c0-.48.05-1.028.415-1.439.442-.497 1.138-.554 1.623-.554h1.524V1.234l-2.367-.004c-2.561 0-4.153 1.629-4.153 4.25v2.178c0 .375-.307.68-.684.68H1.239v2.826h2.317c.377 0 .684.305.684.68v7.924zm6.734-18.534z"
                    ></path>
                  </svg>
                </a>
                <a
                  className="group bg-white hover:bg-[#F37D26] p-1.5 rounded-full duration-200"
                  href="https://www.instagram.com/codify.uz/"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                    className="h-4 w-4 | md:h-5 md:w-5 text-[#000000] group-hover:text-white duration-200"
                  >
                    <path
                      fill="currentColor"
                      d="M18.884.91C18.66.647 18.324.5 17.94.5c-.21 0-.432.043-.66.127L1.762 6.356c-.824.304-.935.76-.928 1.005.007.244.145.694.985.952l.015.005 3.22.89 1.74 4.815c.237.656.77 1.063 1.39 1.063.392 0 .777-.158 1.113-.458l1.992-1.773 2.887 2.25h.001l.028.021.008.006c.32.24.67.368 1.013.368.669 0 1.201-.479 1.357-1.22L19.125 2.14c.102-.488.017-.924-.24-1.228zM6.13 9.04l6.21-3.069-3.867 3.974a.514.514 0 00-.13.231l-.746 2.921L6.13 9.039zm2.44 4.824a1.025 1.025 0 01-.078.062l.692-2.71 1.258.98-1.872 1.668zm9.503-11.932L15.53 14.074c-.025.117-.103.387-.304.387-.1 0-.224-.052-.352-.147l-3.272-2.549H11.6l-1.947-1.517 5.592-5.746a.506.506 0 00.039-.668.549.549 0 00-.674-.15L5.412 8.226 2.15 7.324l15.514-5.727a.811.811 0 01.276-.058c.032 0 .091.004.113.03.028.033.065.148.02.363z"
                    ></path>
                  </svg>
                </a>
                <a
                  className="group bg-white hover:bg-[#F37D26] p-1.5 rounded-full"
                  href="https://www.instagram.com/codify.uz/"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 22 20"
                    className="h-4 w-4 | md:h-5 md:w-5 text-[#000000] group-hover:text-white duration-200"
                  >
                    <mask id="path-1-inside-1_572_4399" fill="#fff">
                      <path d="M21.045 4.795a2.625 2.625 0 00-1.847-1.846c-1.64-.449-8.197-.449-8.197-.449s-6.558 0-8.198.431A2.679 2.679 0 00.957 4.795c-.432 1.64-.432 5.04-.432 5.04s0 3.417.432 5.039c.241.897.949 1.605 1.846 1.846 1.657.45 8.198.45 8.198.45s6.558 0 8.197-.432a2.625 2.625 0 001.847-1.847c.431-1.64.431-5.04.431-5.04s.018-3.416-.431-5.056z"></path>
                    </mask>
                    <path
                      fill="currentColor"
                      d="M21.045 4.795l-1.931.52.002.008 1.929-.528zM19.198 2.95l-.528 1.929.008.002.52-1.931zM2.803 2.93L2.294.997 2.284 1l-.01.003.53 1.928zM.957 4.795l-1.931-.52-.003.011 1.934.51zm-.432 5.04h2-2zm.432 5.039l-1.933.514.002.006 1.93-.52zm1.846 1.846l.523-1.93h-.003l-.52 1.93zm8.198.45v2-2zm8.197-.432l.51 1.934.01-.003-.52-1.931zm1.847-1.847l1.931.52.003-.01-1.934-.51zm.431-5.04l-2-.01v.01h2zm1.5-5.576a4.625 4.625 0 00-3.258-3.258l-1.04 3.863c.21.056.38.226.436.435l3.862-1.04zm-3.25-3.255c-.621-.17-1.521-.263-2.351-.325a66.712 66.712 0 00-2.83-.138A129.715 129.715 0 0011.008.5h-.004H11v4h.069a83.628 83.628 0 01.96.007c.631.007 1.489.02 2.394.048.909.028 1.85.069 2.653.129.86.064 1.395.14 1.593.194l1.056-3.858zM11.001 2.5v-2h-.002-.004a29.254 29.254 0 00-.288 0 132.732 132.732 0 00-3.249.055c-.935.027-1.94.069-2.825.132-.83.06-1.724.149-2.339.31l1.018 3.869c.206-.054.747-.127 1.607-.19a65.398 65.398 0 012.656-.123 130.788 130.788 0 013.41-.053H11v-2zM2.274 1.003A4.679 4.679 0 00-.974 4.275l3.862 1.04a.681.681 0 01.445-.455L2.274 1.003zM-.977 4.286c-.275 1.043-.387 2.493-.441 3.542a45.452 45.452 0 00-.057 1.993V9.834h4s0 .001 0 0V9.83a9.625 9.625 0 01.001-.126c0-.09.003-.222.006-.386.006-.33.02-.784.045-1.285.054-1.061.157-2.131.314-2.728L-.977 4.286zM.525 9.835h-2v.014a11.541 11.541 0 00.001.153 45.67 45.67 0 00.056 1.846c.053 1.049.166 2.502.442 3.54L2.89 14.36c-.156-.585-.259-1.65-.313-2.716a41.642 41.642 0 01-.052-1.804v-.005h-2zm-1.5 5.559a4.625 4.625 0 003.258 3.258l1.04-3.863a.625.625 0 01-.435-.435l-3.862 1.04zm3.256 3.257c.622.168 1.521.261 2.353.323.888.067 1.894.11 2.829.138a129.865 129.865 0 003.46.057H11v-2-2h-.274c-.178-.002-.436-.003-.751-.007-.63-.007-1.486-.02-2.39-.048a62.891 62.891 0 01-2.653-.129c-.86-.064-1.4-.14-1.606-.195l-1.045 3.86zM11 17.169v2h.294c.186-.002.453-.003.777-.007.649-.007 1.533-.02 2.471-.048.936-.027 1.94-.069 2.826-.132.83-.06 1.724-.148 2.338-.31l-1.018-3.869c-.205.055-.746.127-1.606.19-.806.057-1.747.096-2.657.123a131.204 131.204 0 01-3.356.053h-.069v2zm8.717 1.5a4.625 4.625 0 003.258-3.258l-3.862-1.04a.625.625 0 01-.436.435l1.04 3.863zM22.98 15.4c.274-1.043.387-2.492.44-3.541a45.66 45.66 0 00.057-1.96v-.033-.01-.003l-2-.001h-2v.03a23.04 23.04 0 01-.006.488c-.006.329-.02.783-.045 1.285-.054 1.06-.157 2.13-.314 2.727l3.868 1.018zm-1.503-5.548l2 .01V9.86v-.003-.01-.033-.12a40.617 40.617 0 00-.05-1.853c-.051-1.053-.163-2.518-.452-3.574l-3.858 1.056c.16.584.263 1.647.315 2.713a39.06 39.06 0 01.045 1.776V9.842l2 .01z"
                      mask="url(#path-1-inside-1_572_4399)"
                    ></path>
                    <path
                      stroke="currentColor"
                      strokeWidth="1.4"
                      d="M9.2 7.03l4.539 2.554L9.2 12.137V7.031z"
                    ></path>
                  </svg>
                </a>
              </ul>
            </div>
          </div>
        </div>

        <div className="md:w-3/5 py-7 | grid grid-cols-2 gap-5 md:grid-cols-3  | border-b border-white/50 pb-7">
          <ul className="space-y-3 py-3">
            <li className={style.title}>Special Info.</li>
            <li className={style.menu}>International Holiday Schedule</li>
            <li className={style.menu}>Conditions of Carriage</li>
            <li className={style.menu}>Binding Corporate Rules</li>
          </ul>

          <ul className="space-y-3 py-3">
            <li className={style.title}>AL&T</li>
            <li className={style.menu}>Fuel Surcharge</li>
            <li className={style.menu}>Download center</li>
            <li className={style.menu}>Alpha Mobile App</li>
          </ul>

          <ul className="space-y-3 py-3">
            <li className={style.title}>New Customer</li>
            <li className={style.menu}>Open an Account</li>
            <li className={style.menu}>Create a Login</li>
            <li className={style.menu}>Privacy Policy</li>
            <li className={style.menu}>Terms of use</li>
            <li className={style.menu}>Partners</li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-5 | md:py-5 text-sm text-white font-inter | flex items-center md:justify-between flex-col md:flex-row">
        <div className="fc flex-col md:flex-row">
          <p className="text-xs opacity-40">
            Alpha Corporation is a British company that provides postal,
            courirer and other logistics services wordlwide.
          </p>

          <p className="text-xs opacity-100 pt-5 md:pt-0 md:pl-3">
            © Alpha 2016-2022
          </p>
        </div>

        <div className="py-5 md:py-0 w-full md:w-auto flex justify-start">
          <div className="flex items-center justify-center | space-x-2 | cursor-pointer">
            <h4 className="text-xs">English</h4>
            <SvgArrow className="h-4" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
