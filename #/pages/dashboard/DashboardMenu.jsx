import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'

const style = {
  menu: `w-full pl-7 py-3.5 | text-[#5D5D5F] font-inter rounded-md active:scale-95 duration-150 | flex items-center space-x-5`,
  activeMenu: `w-full pl-7 py-3 | text-white bg-orange-primary bg-gradient-to-r from-orange-primary to-[#FAA307] | rounded-lg font-poppins active:scale-95 duration-150 | flex items-center space-x-5`,
  svgActiveMenu: `text-white h-5`,
  svgMenu: `text-[#5D5D5F] h-5`,
}

function DashboardMenu(props) {
  const router = useRouter()
  const menu = [
    {
      title: `Profile`,
      href: `/dashboard/profile`,
      active: router.pathname === `/dashboard/profile`,
      icon: (
        <>
          <svg
            viewBox='0 0 18 22'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className={clsx({
              [style.svgActiveMenu]: router.pathname === `/dashboard/profile`,
              [style.svgMenu]: router.pathname !== `/dashboard/profile`,
            })}
          >
            <path
              d='M1.22266 20.1478V14.8897C1.22266 13.6005 2.26682 12.5563 3.55599 12.5563H14.4445C15.7337 12.5563 16.7778 13.6005 16.7778 14.8897V20.1478M12.4581 5.31017C12.4581 7.21932 10.9104 8.767 9.00126 8.767C7.0921 8.767 5.54443 7.21932 5.54443 5.31017C5.54443 3.40101 7.0921 1.85333 9.00126 1.85333C10.9104 1.85333 12.4581 3.40101 12.4581 5.31017Z'
              stroke='currentColor'
              strokeWidth='1.8'
              strokeMiterlimit='10'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </>
      ),
    },

    {
      title: `Orders`,
      href: `/dashboard/orders`,
      active:
        router.pathname === `/dashboard/orders` ||
        router.pathname === `/dashboard/orders/[slug]`,
      icon: (
        <>
          <svg
            viewBox='0 0 22 22'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className={clsx({
              [style.svgActiveMenu]:
                router.pathname === `/dashboard/orders` ||
                router.pathname === `/dashboard/orders/[slug]`,
              [style.svgMenu]:
                router.pathname !== `/dashboard/orders` &&
                router.pathname !== `/dashboard/orders/[slug]`,
            })}
          >
            <path
              d='M1.61523 2.94999L4.67773 2.39933L6.92823 14.9072M10.2299 17.202L19.6787 15.5022M10.2742 17.706C10.2742 19.2762 9.0013 20.5492 7.43107 20.5492C5.86083 20.5492 4.5879 19.2762 4.5879 17.706C4.5879 16.1358 5.86083 14.8628 7.43107 14.8628C9.0013 14.8628 10.2742 16.1358 10.2742 17.706ZM9.54593 3.10262L18.7318 1.45062L20.3838 10.6365L11.1979 12.2885L9.54593 3.10262Z'
              stroke='currentColor'
              strokeWidth='1.8'
              strokeMiterlimit='10'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </>
      ),
    },

    {
      title: `Client Support`,
      href: `/dashboard/support`,
      active: router.pathname === `/dashboard/support`,
      icon: (
        <>
          <svg
            viewBox='0 0 21 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className={clsx({
              [style.svgActiveMenu]: router.pathname === `/dashboard/support`,
              [style.svgMenu]: router.pathname !== `/dashboard/support`,
            })}
          >
            <path
              d='M16.3917 18.0694C15.801 17.8109 15.1306 17.5187 14.3681 17.1695L14.3336 17.1539L14.3066 17.1802C14.0514 17.428 13.7688 17.6624 13.4658 17.8773L13.3881 17.9321L13.4743 17.9724C14.4321 18.4176 15.2617 18.7824 15.9635 19.0894C18.5675 20.2257 18.8964 20.4476 18.8964 21.0668C18.8964 21.4919 18.4771 22.006 17.9572 22.006H2.04558C1.52559 22.006 1.10634 21.492 1.10634 21.0668C1.10634 20.4475 1.43558 20.2257 4.03921 19.0894C4.74105 18.7824 5.57101 18.4176 6.52839 17.9724L6.61467 17.9321L6.5369 17.8773C6.23431 17.6625 5.95138 17.4277 5.69618 17.1802L5.66914 17.1539L5.63468 17.1695C4.87173 17.5183 4.20175 17.8109 3.61106 18.0694C0.984511 19.216 0.00195312 19.6453 0.00195312 21.0671C0.00195312 22.1367 0.976004 23.1107 2.04558 23.1107H17.9575C19.0271 23.1107 20.0012 22.1367 20.0012 21.0671C20.0012 19.6453 19.0186 19.216 16.3917 18.0694Z'
              fill='currentColor'
            />
            <path
              d='M17.7793 7.55569H16.6682C16.6682 3.87398 13.6835 0.889282 10.0018 0.889282C6.32011 0.889282 3.33542 3.87398 3.33542 7.55569H2.22435C1.61066 7.55569 1.11328 8.05307 1.11328 8.66676V12C1.11328 12.6137 1.61066 13.111 2.22435 13.111H3.33542C3.66353 13.111 3.95058 12.9625 4.15426 12.7366C4.18799 12.7844 4.21798 12.8329 4.25795 12.8792C5.02719 15.9239 7.31083 18.1383 10.0018 18.1383C12.758 18.1383 15.082 15.8132 15.7942 12.6544C15.9968 12.9248 16.3045 13.1111 16.6682 13.1111H17.7793C18.393 13.1111 18.8904 12.6137 18.8904 12V8.6668C18.8904 8.05307 18.393 7.55569 17.7793 7.55569ZM3.33542 12H2.22435V8.66676H3.33542V12ZM10.0018 17.0338C8.2045 17.0338 6.63342 15.7661 5.77569 13.8847C7.0923 14.4576 8.81815 14.7776 10.0018 14.7776C10.3088 14.7776 10.5574 14.5291 10.5574 14.2221C10.5574 13.9151 10.3088 13.6666 10.0018 13.6666C8.04856 13.6666 5.9657 12.8859 5.26646 12.3289C5.15127 11.7852 5.08461 11.2156 5.08461 10.6248C5.08461 7.09091 7.29082 4.21585 10.0018 4.21585C12.7128 4.21585 14.919 7.09091 14.919 10.6248C14.919 14.1588 12.7128 17.0338 10.0018 17.0338ZM15.5438 7.68828C14.6253 5.00062 12.4873 3.11142 10.0018 3.11142C7.51637 3.11142 5.37831 5.00062 4.45981 7.68828C4.45868 7.6431 4.44648 7.60087 4.44648 7.55569C4.44648 4.49248 6.93862 2.00035 10.0018 2.00035C13.065 2.00035 15.5572 4.49248 15.5572 7.55569C15.5572 7.60087 15.5449 7.6431 15.5438 7.68828ZM17.7793 12H16.6682V8.66676H17.7793V12Z'
              fill='currentColor'
            />
          </svg>
        </>
      ),
    },

    {
      title: `Exit`,
      active: false,
      icon: (
        <>
          <svg
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className={clsx({
              [style.svgActiveMenu]: false,
              [style.svgMenu]: true,
            })}
          >
            <path
              d='M8.89077 23.7872C9.38783 23.7872 9.79077 23.3842 9.79077 22.8872C9.79077 22.3901 9.38783 21.9872 8.89077 21.9872L8.89077 23.7872ZM5.33594 22.8872L5.33594 23.7872H5.33594L5.33594 22.8872ZM1.83594 19.3872L0.935938 19.3872L1.83594 19.3872ZM1.83594 4.61017L2.73594 4.61017L1.83594 4.61017ZM5.33594 1.11017L5.33594 2.01017L5.33594 1.11017ZM8.89077 2.01017C9.38783 2.01017 9.79077 1.60722 9.79077 1.11017C9.79077 0.613112 9.38783 0.210169 8.89077 0.210169L8.89077 2.01017ZM16.8503 4.73794C16.4989 4.38647 15.929 4.38647 15.5775 4.73794C15.2261 5.08941 15.2261 5.65926 15.5775 6.01073L16.8503 4.73794ZM22.8791 12.0395L23.5155 12.6759C23.6843 12.5071 23.7791 12.2782 23.7791 12.0395C23.7791 11.8008 23.6843 11.5719 23.5155 11.4031L22.8791 12.0395ZM15.5775 18.0683C15.2261 18.4197 15.2261 18.9896 15.5775 19.3411C15.929 19.6925 16.4989 19.6925 16.8503 19.3411L15.5775 18.0683ZM7.34727 11.1395C6.85022 11.1395 6.44727 11.5424 6.44727 12.0395C6.44727 12.5366 6.85022 12.9395 7.34727 12.9395L7.34727 11.1395ZM22.8604 12.9395C23.3575 12.9395 23.7604 12.5366 23.7604 12.0395C23.7604 11.5424 23.3575 11.1395 22.8604 11.1395L22.8604 12.9395ZM8.89077 21.9872L5.33594 21.9872L5.33594 23.7872L8.89077 23.7872L8.89077 21.9872ZM5.33594 21.9872C3.89983 21.9872 2.73594 20.8233 2.73594 19.3872L0.935938 19.3872C0.935937 21.8174 2.90571 23.7872 5.33594 23.7872L5.33594 21.9872ZM2.73594 19.3872L2.73594 4.61017L0.935938 4.61017L0.935938 19.3872L2.73594 19.3872ZM2.73594 4.61017C2.73594 3.17406 3.89983 2.01017 5.33594 2.01017L5.33594 0.210168C2.90572 0.210168 0.935938 2.17994 0.935938 4.61017L2.73594 4.61017ZM5.33594 2.01017L8.89077 2.01017L8.89077 0.210169L5.33594 0.210168L5.33594 2.01017ZM15.5775 6.01073L22.2427 12.6759L23.5155 11.4031L16.8503 4.73794L15.5775 6.01073ZM22.2427 11.4031L15.5775 18.0683L16.8503 19.3411L23.5155 12.6759L22.2427 11.4031ZM7.34727 12.9395L22.8604 12.9395L22.8604 11.1395L7.34727 11.1395L7.34727 12.9395Z'
              fill='currentColor'
            />
          </svg>
        </>
      ),
    },
  ]
  return (
    <div className='py-12 pr-10 space-y-7 mobile-hidden'>
      <div className='sidebar__user__info | flex-col fcc | space-y-3'>
        <div className='user__info__img | h-32 w-32 overflow-hidden'>
          <img
            src={`${process.env.NEXT_PUBLIC_URL}/${props.profile?.image}` || '/mans.png'}
            alt='profile__img'
            className='h-full object-cover'
          />
        </div>

        <h4 className='font-exo text-[#353437]'>{props.profile?.name}</h4>
        <p className='text-[#020105] font-inter'>{props.profile?.phone}</p>
      </div>

      <div className='sidebar__menu | font-inter | space-y-3'>
        {menu.map((m, index) => (
          <Link href={m.href || ''} key={index}>
            <button
              className={clsx({
                [style.activeMenu]: m.active,
                [style.menu]: !m.active,
              })}
            >
              {m.icon}

              <p>{m.title}</p>
            </button>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default DashboardMenu
