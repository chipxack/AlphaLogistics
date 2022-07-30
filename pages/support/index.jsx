import useWindowSize from 'hooks/useWindowSize'
import App from 'layouts/App'

const style = {
  inActiveMenu: `opacity-80 text-sm`,
  activeMenu: `text-sm`,
  activeFilterCategoryMenu: `text-xs text-[#FB421A] duration-100`,
  inActiveFilterCategoryMenu: `text-xs text-[#16171E] hover:text-[#FB421A] opacity-60 cursor-pointer duration-100`,
}

function Support(props) {
  const { width: windowH } = useWindowSize()
  return (
    <App>
      <App.Header dark={true} />
      <section className='bg-[#16171E] py-5 md:py-10 relative overflow-hidden'>
        <div className='flex items-center text-white | container mx-auto px-5'>
          <div className='relative z-10'>
            <a href='#' className={style.inActiveMenu}>
              Home
            </a>

            <span className='text-xs md:text-sm px-2'>/</span>

            <a href='#' className={style.activeMenu}>
              Suport
            </a>

            <h2 className='text-lg md:text-2xl font-bold pt-1 md:pt-3'>
              Suport
            </h2>
          </div>

          <div className='bounce w-[30rem] h-[30rem] opacity-[70%] absolute right-0 | blur-3xl duration-150 rounded-[50%] bg-orange-primary'></div>
        </div>
      </section>

      <section className='py-5 md:pt-20'>
        <div className='px-5 container mx-auto | flex flex-col md:flex-row md:space-x-5'>
          <div className='order-2 md:order-1 w-full md:w-1/2 relative'>
            <h3 className='text-3xl font-exo font-bold md:pb-10'>
              Get in Touch
            </h3>

            <div className='md:mr-20 my-7 md:my-0 p-3 md:p-5 | bg-[#020105] | relative md:absolute | overflow-hidden'>
              <div className='relative p-4 md:py-16 md:px-14 border border-gray-100/20 | z-[7] | space-y-7'>
                <h3 className='relative | text-2xl md:text-3xl text-white font-gm | '>
                  Leave us to recieve a callback
                </h3>

                <div className='flex flex-col space-y-5'>
                  <input
                    type='text'
                    name='name'
                    id='name'
                    placeholder='Name:'
                    className='bg-[#020105] text-sm md:text-base text-white py-2 md:py-3 px-3 placeholder:text-white placeholder:opacity-80'
                  />
                  <input
                    type='text'
                    name='name'
                    id='name'
                    placeholder='+998 __'
                    className='bg-[#020105] text-sm md:text-base text-white py-2 md:py-3 px-3 placeholder:text-white placeholder:opacity-80'
                  />

                  <button className='bg-white text-black py-1 md:py-3 px-3 text-base md:text-lg font-bold font-poppins click:scale'>
                    Order now
                  </button>
                </div>
              </div>

              <div className='w-full h-full opacity-[72%] absolute -bottom-20 -left-32 | blur-[100px] duration-150 rounded-[50%] bg-orange-primary'></div>
            </div>
          </div>

          <div className='order-1 md:order-2 w-full md:w-1/2 | flex flex-wrap gap-5 md:gap-10 pb-12'>
            <div className='md:space-y-5 space-y-3'>
              <h3 className='font-bold font-inter text-lg'>Email</h3>

              <a className='text-[#020105] opacity-70 cursor-pointer block'>
                alphalogistics@gmail.com
              </a>
            </div>

            <div className='md:space-y-5 space-y-3'>
              <h3 className='font-bold font-inter text-lg'>Phone Number</h3>

              <div>
                <a className='text-[#020105] opacity-70 cursor-pointer block'>
                  +44 20 7423 0000
                </a>

                <a className='text-[#020105] opacity-70 cursor-pointer block'>
                  +44 99 3505 6740
                </a>
              </div>
            </div>

            <div className='md:space-y-5 space-y-3'>
              <h3 className='font-bold font-inter text-lg'>Address</h3>

              <a className='w-2/3 text-[#020105] opacity-70 cursor-pointer block'>
                166-220 Holloway Rd, London N7 8DB, United Kingdom
              </a>
            </div>
          </div>
        </div>

        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.518981858102!2d69.29635861494789!3d41.319326808175376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b7d761732dd%3A0x7b7e5180fa504771!2sIT%20Unity%20Academy!5e0!3m2!1sru!2s!4v1653645193294!5m2!1sru!2s'
          width='100%'
          height={windowH < 640 ? `300` : `600`}
          loading='lazy'
          allowFullScreen={true}
          referrerPolicy='no-referrer-when-downgrade'
        ></iframe>
      </section>
      <App.Footer />
    </App>
  )
}

export default Support
