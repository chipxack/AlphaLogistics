import Logo from "components/Logo";
import SvgArrow from "icons/SvgArrow";
const style = {
  menu: `text-white text-xs cursor-pointer duration-200 hover:text-orange-primary opacity-80 hover:opacity-100 font-inter`,
  title: `text-white text-lg font-medium duration-200 font-exo font-bold`,
};

function Footer(props) {
  return (
    <footer className="bg-[#16171E]">
      <div className="container mx-auto | flex | py-7">
        <div className="w-2/5">
          <Logo className="h-10" />

          <div className="socials pt-5">
            <p className="text-sm text-white font-inter | py-3">
              We are in social networks
            </p>

            <div className="links">
              <ul className="text-white | flex items-center | space-x-5">
                <li>Special info</li>
                <li>FF</li>
                <li>FF</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="w-3/5 | grid grid-cols-3  | border-b border-white/50 pb-7">
          <ul className="space-y-3">
            <li className={style.title}>Special Info.</li>
            <li className={style.menu}>International Holiday Schedule</li>
            <li className={style.menu}>Conditions of Carriage</li>
            <li className={style.menu}>Binding Corporate Rules</li>
          </ul>

          <ul className="space-y-3">
            <li className={style.title}>AL&T</li>
            <li className={style.menu}>Fuel Surcharge</li>
            <li className={style.menu}>Download center</li>
            <li className={style.menu}>Alpha Mobile App</li>
          </ul>

          <ul className="space-y-3">
            <li className={style.title}>New Customer</li>
            <li className={style.menu}>Open an Account</li>
            <li className={style.menu}>Create a Login</li>
            <li className={style.menu}>Privacy Policy</li>
            <li className={style.menu}>Terms of use</li>
            <li className={style.menu}>Partners</li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto | py-5 text-sm text-white font-inter | fcb">
        <div className="fc">
          <p className="text-xs opacity-40">
            Alpha Corporation is a British company that provides postal,
            courirer and other logistics services wordlwide.
          </p>

          <p className="text-xs opacity-100 pl-3">© Alpha 2016-2022</p>
        </div>

        <div className="fcc | space-x-2 | cursor-pointer">
          <h4 className="text-xs">English</h4>
          <SvgArrow className="h-4" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
