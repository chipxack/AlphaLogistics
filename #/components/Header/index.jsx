import clsx from "clsx";
import Logo from "components/Logo";
import SvgAddUser from "icons/SvgAddUser";
import SvgSearch from "icons/SvgSearch";
import Link from "next/link";

const style = {
  menu: `text-white text-sm font-medium cursor-pointer duration-200 hover:text-orange-primary`,
  menuActive: `text-orange-primary text-sm font-medium`,
  registerBtn: `fcc | font-semibold text-sm space-x-3 | text-white | py-3 px-5 border-[0.25px] border-orange-primary register__btn | rounded | click:scale`,
};

function Header(props) {
  return (
    <header
      className={clsx({
        "bg-[#020105]": props.dark,
      })}
    >
      <div className="py-4 | fcb z-[10000] container mx-auto">
        <div className="fc space-x-32">
          <Link href={`/`}>
            <div>
              <Logo className="w-40 cursor-pointer" />
            </div>
          </Link>

          <ul className="fcb space-x-12">
            <Link href={`/about`}>
              <li className={style.menuActive}>About us</li>
            </Link>

            <Link href={`/products`}>
              <li className={style.menu}>Products</li>
            </Link>

            <Link href={`/tracking`}>
              <li className={style.menu}>Tracking</li>
            </Link>
            <Link href={`/products`}>
              <li className={style.menu}>Support</li>
            </Link>
          </ul>
        </div>

        <div className="fcc space-x-7">
          <SvgSearch className="h-5" />

          <button className={style.registerBtn}>
            <p>Login to Account</p>
            <SvgAddUser className="h-5" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
